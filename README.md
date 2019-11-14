# Hackathon Timeseries Forecasting - Team 3

This is the DEV repository for the Timeseries Forecasting Hackathon Case Study for Team 3.

# Overview Recording
https://youtu.be/JI0YlqAwMxs

## Architecture

Refer to the detailed architecture and assumptions in the presentation as available in the architecture subfolder.

## Task List

| Task |	Layer |	Assigned | Status | Comments |
| --- | --- | --- | --- | --- |
|Database Creation|	DB| Parnab | Done | Refer to the Mongo_DB folder|	
|Prepare Test Data|	DB| Parnab | Done | Refer to samples subfolder under Mongo_DB folder|
|Framework with SignIn/Signup/Header Footer|	Angular|	Parnab| Done | NA |
|Admin Page - UI|	Angular|	Parnab/Balaji| Done | NA |
|Admin Page - Serv|	Node| Parnab |Done | Refer the file controller/upload.controller.js |	
|Admin Page - Serv|	Python|	Parnab|Done |Needs a bit more inscript commeting |
|Forecast Page - Search Section-UI|	Angular|	Parnab  | Done | |
|Forecast Page - Search Section-Services|	Node|	Bharti| Done | |
|Forecast Page - Result Section-UI|	Angular|	Bala| Done | |
|Forecast Page - Result Section-Services|	Node|	Abhijit/Praveen| Done | |
|Forecast Page - Graph Section-UI|	Angular| John| Done | |
|Forecast Page - Graph Section-Services|	Node| Abhijit| Done |	
|Error Page|	Angular|	Balaji| Done | |
|End to End Integration|	All Layers| Parnab | Done | |	
|Create CI/CD Pipeline|	All Layers| Parnab | Done | |
|Create Cloud Deployment environment|	All Layers| Parnab | Done | |
|Documentation|	All Layers| All Team members | Done | |
|Enhance Look & Feel|	Angular| Balaji | Done | |	

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Accessing the PRODUCTION VERSION of the application
Visit on your browser:

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
- Node 10.6.3
- MongoDB 3.7.4
- Python 3.7.0

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

