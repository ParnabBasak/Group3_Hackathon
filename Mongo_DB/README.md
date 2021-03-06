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

Colletion Name: lookups
{
  "key": "WEEKS",
  "values": [{"key":"1", "value": "1"},
             {"key":"2", "value": "2"},
             {"key":"3", "value": "3"}]
})

Collection Name: modelparams
{
  "fromDate": Date("2019-01-01"),
  "toDate": Date("2019-01-01"),
  "model": "ARIMA",
  "values": [{"key":"p", "value": 1},
             {"key":"d", "value": 1},
             {"key":"q", "value": 1}]
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

//Creates modelparams (Master)
db.modelparams.insert(
{
  "fromDate": Date("2019-01-01"),
  "toDate": Date("2019-01-01"),
  "model": "ARIMA",
  "values": [{"key":"p", "value": 1},
             {"key":"d", "value": 1},
             {"key":"q", "value": 1}]
  })

//creates lookups (Master)
db.lookups.insert(
{
  "key": "WEEKS",
  "values": [{"key":"4", "value": "4"},
             {"key":"5", "value": "5"},
             {"key":"6", "value": "6"},
             {"key":"7", "value": "7"},
             {"key":"8", "value": "8"},
             {"key":"9", "value": "9"},
             {"key":"10", "value": "10"},
             {"key":"11", "value": "11"},
             {"key":"12", "value": "12"},
             {"key":"13", "value": "13"},
             {"key":"14", "value": "14"},
             {"key":"15", "value": "15"},
             {"key":"16", "value": "16"},
             {"key":"17", "value": "17"},
             {"key":"18", "value": "18"},
             {"key":"19", "value": "19"},
             {"key":"20", "value": "20"},
             {"key":"21", "value": "21"},
             {"key":"22", "value": "22"},
             {"key":"23", "value": "23"},
             {"key":"24", "value": "24"},
             {"key":"25", "value": "25"},
             {"key":"26", "value": "26"}]
}) 

db.lookups.insert(
{
  "key": "USERROLES",
  "values": [{"key":"ADMIN", "value": "Administrator"},
             {"key":"GENERAL", "value": "General"}]
})

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
