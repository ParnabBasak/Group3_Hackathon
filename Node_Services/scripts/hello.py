import sys 
import pandas as pd
from pandas import read_csv
from pymongo import MongoClient
# Takes first name and last name via command  
# line arguments and then display them 
print("Output from Python") 
print("Path name: " + sys.argv[1]) 

series = read_csv(sys.argv[1])
print(sys.argv[1], " File Read Successfully.")
client = MongoClient('mongodb://localhost:27017/')
db = client.Forecast
print("connected to db")
forecasts = db.salesforecasts

#Delete all existing Data in Forecast Collection
x = forecasts.delete_many({})
print(x.deleted_count, " documents deleted.")