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
    "channelId": "DSO", 
    "channelName": "Direct Store Order"
}

Collection Name: saleshistories
{
    "channel": "DSO", 
    "saleDate": Date("2013-08-07"), 
    "producct": "Brand A1 - Phone", 
    "attribute": "Net Unit", 
    "quantity": 50
}

Collection Name: salesforecast
{
    "channel": "DSO", 
    "saleDate": Date("2022-08-07"), 
    "producct": "Brand A1 - Phone", 
    "attribute": "Net Unit", 
    "quantity": 150
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

//Creates channel (Master)
db.channels.insert({"channelId": "DSO", "channelName": "Direct Store Order"})
db.channels.insert({"channelId": "DOS", "channelName": "Direct Online Sales"})
db.channels.insert({"channelId": "PHO", "channelName": "Phone Order"})


//Creates SalesHistories
db.saleshistories.insert({"channel": "DSO", "saleDate": Date("2013-08-07"), "producct": "Brand A1 - Phone", "attribute": "Net Unit", "quantity": 50})
db.saleshistories.insert({"channel": "DSO", "saleDate": Date("2013-08-07"), "producct": "Brand A1 - Phone", "attribute": "Forecasting Methodology", "quantity": 51})
db.saleshistories.insert({"channel": "DSO", "saleDate": Date("2013-08-07"), "producct": "Brand A1 - Phone", "attribute": "Last Year", "quantity": 52})
db.saleshistories.insert({"channel": "DSO", "saleDate": Date("2013-08-07"), "producct": "Brand A1 - Phone", "attribute": "Year Over Year", "quantity": 53})
db.saleshistories.insert({"channel": "DSO", "saleDate": Date("2013-08-07"), "producct": "Brand A1 - Phone", "attribute": "Week Over Year", "quantity": 54})

//Creates SalesForecast
db.salesforecasts.insert({"channel": "DSO", "saleDate": Date("2022-08-07"), "producct": "Brand A1 - Phone", "attribute": "Net Unit", "quantity": 150})
db.salesforecasts.insert({"channel": "DSO", "saleDate": Date("2022-08-07"), "producct": "Brand A1 - Phone", "attribute": "ARIMA", "quantity": 151})
db.salesforecasts.insert({"channel": "DSO", "saleDate": Date("2022-08-07"), "producct": "Brand A1 - Phone", "attribute": "Last Year", "quantity": 152})
db.salesforecasts.insert({"channel": "DSO", "saleDate": Date("2022-08-07"), "producct": "Brand A1 - Phone", "attribute": "Year Over Year", "quantity": 153})
db.salesforecasts.insert({"channel": "DSO", "saleDate": Date("2022-08-07"), "producct": "Brand A1 - Phone", "attribute": "Week Over Year", "quantity": 154})
```
