# MongoDB Design

This section outlines the Mongo DB table desing

## DB Model 

```
Document Name: Channels
{
    "ChannelId": "DSO", 
    "ChannelName": "Direct Store Order"
}

Document Name: SalesHistory
{
    "Channel": "DSO", 
    "SaleDate": Date("2013-08-07"), 
    "Product": "Brand A1 - Phone", 
    "Attribute": "Net Unit", 
    "Quantity": 50
}

Document Name: SalesHistory
{
    "Channel": "DSO", 
    "SaleDate": Date("2022-08-07"), 
    "Product": "Brand A1 - Phone", 
    "Attribute": "Net Unit", 
    "Quantity": 150
}
```

## Data Seed Scripts

Open a MongoDB shell and run the following scripts

```
Create new Database in Mongo called Forecast
--------------------------------------------

//Creates a new DB
use Forecast

//Creates Channel Master
db.Channels.insert({"ChannelId": "DSO", "ChannelName": "Direct Store Order"})
db.Channels.insert({"ChannelId": "DOS", "ChannelName": "Direct Online Sales"})
db.Channels.insert({"ChannelId": "PHO", "ChannelName": "Phone Order"})


//Creates SalesHistory
db.SalesHistory.insert({"Channel": "DSO", "SaleDate": Date("2013-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Net Unit", "Quantity": 50})
db.SalesHistory.insert({"Channel": "DSO", "SaleDate": Date("2013-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Forecasting Methodology", "Quantity": 51})
db.SalesHistory.insert({"Channel": "DSO", "SaleDate": Date("2013-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Last Year", "Quantity": 52})
db.SalesHistory.insert({"Channel": "DSO", "SaleDate": Date("2013-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Year Over Year", "Quantity": 53})
db.SalesHistory.insert({"Channel": "DSO", "SaleDate": Date("2013-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Week Over Year", "Quantity": 54})

//Creates SalesForecast
db.SalesForecast.insert({"Channel": "DSO", "SaleDate": Date("2022-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Net Unit", "Quantity": 150})
db.SalesHistory.insert({"Channel": "DSO", "SaleDate": Date("2022-08-07"), "Product": "Brand A1 - Phone", "Attribute": "ARIMA", "Quantity": 151})
db.SalesHistory.insert({"Channel": "DSO", "SaleDate": Date("2022-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Last Year", "Quantity": 152})
db.SalesHistory.insert({"Channel": "DSO", "SaleDate": Date("2022-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Year Over Year", "Quantity": 153})
db.SalesHistory.insert({"Channel": "DSO", "SaleDate": Date("2022-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Week Over Year", "Quantity": 154})
```
