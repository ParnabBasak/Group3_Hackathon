# Hackathon Timeseries Forecasting - Team 3

This is the DEV repository for the Timeseries Forecasting Hackathon Case Study for Team 3.

## Architecture

Refer to the detailed architecture and assumptions in the presentation as available in the architecture subfolder.

## Task List

| Task |	Layer |	Assigned | Status | Comments |
| --- | --- | --- | --- | --- |
|Database Creation|	DB| Parnab | Done | Refer to the Mongo_DB folder|	
|Prepare Test Data|	DB| | |	|
|Framework with SignIn/Signup/Header Footer|	Angular|	Parnab| | |
|Admin Page - UI|	Angular|	Balaji| | |
|Admin Page - Serv|	Node| Parnab |Done | Refer the file controller/upload.controller.js |	
|Admin Page - Serv|	Python|	Parnab|Done |Needs a bit more inscript commeting |
|Forecast Page - Search Section-UI|	Angular|	George| | |
|Forecast Page - Search Section-Services|	Node|	Bharti| | |
|Forecast Page - Result Section-UI|	Angular|	Bala| | |
|Forecast Page - Result Section-Services|	Node|	Praveen| | |
|Forecast Page - Graph Section-UI|	Angular| John| | |
|Forecast Page - Graph Section-Services|	Node| Abhijit| |	
|Error Page|	Angular|	Balaji| | |
|End to End Integration|	All Layers| | | |	
|Test Scripts - UI + Code coverage|	Angular| | | |
|Test Scripts - Service + Code coverage|	Node| | | |
|Documentation|	All Layers| | | |
|Enhance Look & Feel|	Angular| | | |	

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Accessing the PRODUCTION VERSION of the application
Visit:

http://forecasterapp.s3-website-us-east-1.amazonaws.com/

### Prerequisites
Visit respective folder for detailed prerequisites that are needed to run in local for the individual layers.


### Installing in Local (Steps)
Refer to the prerequisites section. If you have that meet, pls proceed further. 

1. Create a new mongo DB instance called **Forecast**. Follow the scripts in as outlined in Mongo_DB folder to create the DB instance
2. Run the node module by following the instructions in Node_Services folder
3. Run the Angular app by following the instructions in Angular_UI folder
4. Navigate to the UI frontend via url http://localhost:4200

## Running the tests

Visit respective folder for detailed steps to run tests for the individual layers.

## Deployment

Refer to the Deployment Architecture slide in the Architectue section.

## Built With
- Angular 8
- Node
- MongoDB
- Python 3

## Authors

balamurugan.k1@tcs.com
parnab.basak@tcs.com
abhijit.and@tcs.com
bharti.chaudhari@tcs.com
j.montfort@tcs.com
p.kavadimatti@tcs.com
balaji.subramanian1@tcs.com

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Thank you Google for your search results

