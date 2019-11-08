import sys
import pandas as pd
from datetime import datetime, timedelta
import calendar
import datetime
from pymongo import MongoClient
from pandas import read_csv
from statsmodels.tsa.arima_model import ARIMA
import numpy

#############################################################
#This is a simple dummy program created to learn more about python based iteration and handling
#of data. Does not have any PII business data or business logic copied.
#############################################################
#Establisth MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client.Forecast

forecasts = db.salesforecasts

#Delete all existing Data in Forecast Collection
x = forecasts.delete_many({})
print(x.deleted_count, " documents deleted.")

#############################################################
#This function calculates all the week start dates of an year
#futureYearWeekStarts = ['06/Jan/2020', '13/Jan/2020', '20/Jan/2020', '27/Jan/2020', '03/Feb/2020', '10/Feb/2020', '17/Feb/2020', '24/Feb/2020', '02/Mar/2020', '09/Mar/2020', '16/Mar/2020', '23/Mar/2020', '30/Mar/2020', '06/Apr/2020', '13/Apr/2020', '20/Apr/2020', '27/Apr/2020', '04/May/2020', '11/May/2020', '18/May/2020', '25/May/2020', '01/Jun/2020', '08/Jun/2020', '15/Jun/2020', '22/Jun/2020', '29/Jun/2020', '06/Jul/2020', '13/Jul/2020', '20/Jul/2020', '27/Jul/2020', '03/Aug/2020', '10/Aug/2020', '17/Aug/2020', '24/Aug/2020', '31/Aug/2020', '07/Sep/2020', '14/Sep/2020', '21/Sep/2020', '28/Sep/2020', '05/Oct/2020', '12/Oct/2020', '19/Oct/2020', '26/Oct/2020', '02/Nov/2020', '09/Nov/2020', '16/Nov/2020', '23/Nov/2020', '30/Nov/2020', '07/Dec/2020', '14/Dec/2020', '21/Dec/2020', '28/Dec/2020']
# This function calculates all the week start dates of an year
futureYearWeekStarts = []
def get_start_and_end_date_from_calendar_week(year, calendar_week):       
    monday = datetime.datetime.strptime(f'{year}-{calendar_week}-1', "%Y-%W-%w").date()
    return monday.strftime('%d/%b/%Y')

for x in range(1, 53):
   futureYearWeekStarts.append(get_start_and_end_date_from_calendar_week(2020, x))
#############################################################
#This function creates individual docs to be inserted in the collection
def merge(list1, list2, prod, chn, attr): 
    merged_list = []  
    for i in range(0, len(list1)):
        doc_obj = {"channel": chn,
                 "saleDate": datetime.datetime.strptime(list1[i], '%d/%b/%Y'),
                 "producct": prod,
                 "attribute": attr,
                 "quantity": list2[i]}
        merged_list.append(doc_obj)  
    return merged_list 

#############################################################

# create a differenced series
def difference(dataset, interval=1):
    diff = list()
    for i in range(interval, len(dataset)):
        value = dataset[i] - dataset[i - interval]
        #print(dataset[i])
        diff.append(value)
    return numpy.array(diff)

# invert differenced value
def inverse_difference(history, yhat, interval=1):
    return yhat + history[-interval]

#series = read_csv('../uploads/sales_history.csv')
series = read_csv(sys.argv[1])
print(sys.argv[1], " File Read Successfully.")

df = pd.DataFrame(series)

#Find unique channels
uniquechannels = df['channel'].unique()

#Iterating over unique channels
for i in uniquechannels: 
    
    #Get data for every unique channels 
    on_channel = df[df['channel'] == i]
    
    #Find unique products for each channel
    uniqueproducts = on_channel.producct.unique()
    
    #Iterating over every unique product for a specific channel
    for j in uniqueproducts:
        
        #Get data for every unique product for a specific channel
        on_channel_and_product = on_channel[on_channel['producct'] == j]
        
        #Only select attribute = NET since that would be used for ARIMA calculation
        on_channel_and_product_attribute = on_channel_and_product[on_channel_and_product['attribute'] == 'Net Unit']
        #print(on_channel_and_product_attribute)
        
        X = on_channel_and_product_attribute["quantity"].tolist()
        weeks_in_year = 52
        differenced = difference(X, weeks_in_year)
        
        # fit model
        model = ARIMA(differenced, order=(1,1,1))
        model_fit = model.fit(disp=0)
        # multi-step out-of-sample forecast
        forecast = model_fit.forecast(steps=52)[0]
        
        # invert the differenced forecast to something usable
        history = [x for x in X]
        #history
        week = 1
        predictions = []
        for yhat in forecast:
            inverted = inverse_difference(history, yhat, weeks_in_year)
            #print('Week %d: %f' % (week, inverted))
            history.append(inverted)
            predictions.append(inverted)
            week += 1
        merged_forecast = merge(futureYearWeekStarts, predictions, j, i, 'ARIMA')
        
        x = forecasts.insert_many(merged_forecast)
        print(merged_forecast)
        print('----Inserted x.inserted_ids elements in the  collection------------------------------------------------------')
        