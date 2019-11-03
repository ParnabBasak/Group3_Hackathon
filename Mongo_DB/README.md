# MongoDB Design

This section outlines the Mongo DB table design

## DB Model 
The folowing collections have been created in database **Forecast**
```
Collection Name: users
{
    "firstName" :"First Name",
    "firstName":"Last Name",
    "email": "a@a.com", 
    "password": "aaaaaaaa", 
    "saltSecret":"secret",
    "role":"ADMIN"
}

Collection Name: channels
{
    "ChannelId": "DSO", 
    "ChannelName": "Direct Store Order"
}

Collection Name: saleshistory
{
    "Channel": "DSO", 
    "SaleDate": Date("2013-08-07"), 
    "Product": "Brand A1 - Phone", 
    "Attribute": "Net Unit", 
    "Quantity": 50
}

Collection Name: salesforecast
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

//Creates a new DB called Forecast
use Forecast

//Creates Users
db.users.insert({"firstName" :"John", "lastName" :"Smith", "email": "John.Smith@tcs.com", "password": "password", "saltSecret":"secret","role":"ADMIN"})
db.users.insert({"firstName" :"Mary", "lastName" :"Smith", "email": "Mary.Smith@tcs.com", "password": "password", "saltSecret":"secret","role":"GENERAL"})

//Creates Channel (Master)
db.channels.insert({"ChannelId": "DSO", "ChannelName": "Direct Store Order"})
db.channels.insert({"ChannelId": "DOS", "ChannelName": "Direct Online Sales"})
db.channels.insert({"ChannelId": "PHO", "ChannelName": "Phone Order"})


//Creates SalesHistory
db.saleshistory.insert({"Channel": "DSO", "SaleDate": Date("2013-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Net Unit", "Quantity": 50})
db.saleshistory.insert({"Channel": "DSO", "SaleDate": Date("2013-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Forecasting Methodology", "Quantity": 51})
db.saleshistory.insert({"Channel": "DSO", "SaleDate": Date("2013-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Last Year", "Quantity": 52})
db.saleshistory.insert({"Channel": "DSO", "SaleDate": Date("2013-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Year Over Year", "Quantity": 53})
db.saleshistory.insert({"Channel": "DSO", "SaleDate": Date("2013-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Week Over Year", "Quantity": 54})

//Creates SalesForecast
db.salesforecast.insert({"Channel": "DSO", "SaleDate": Date("2022-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Net Unit", "Quantity": 150})
db.salesforecast.insert({"Channel": "DSO", "SaleDate": Date("2022-08-07"), "Product": "Brand A1 - Phone", "Attribute": "ARIMA", "Quantity": 151})
db.salesforecast.insert({"Channel": "DSO", "SaleDate": Date("2022-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Last Year", "Quantity": 152})
db.salesforecast.insert({"Channel": "DSO", "SaleDate": Date("2022-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Year Over Year", "Quantity": 153})
db.salesforecast.insert({"Channel": "DSO", "SaleDate": Date("2022-08-07"), "Product": "Brand A1 - Phone", "Attribute": "Week Over Year", "Quantity": 154})
```
