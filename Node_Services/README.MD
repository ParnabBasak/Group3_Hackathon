Node_Services is a fully functional api server built in Node.js (Express, MongoDB) which serves as the services layer for the Hackathon project.

## Installation
1. Create a folder to hold your installation: mkdir Node_Services
2. FTP/Copy the contents of the zip to your newly created folder
3. Enter folder: cd Node_Services
4. Install dependencies: npm install
5. Start application: npm start --production
6. Verify that the message "Listening on port 3000" and "DB Connected!" shows up in the console
7. Use Postman or Curl to access apis at http://localhost:3000/api

Keeping Node_Services running after closing the terminal can be done in a few ways but we recommend using the PM2 package. To set this up:

1. Install PM2: npm install pm2 -g
2. Add nodeServices to PM2: NODE_ENV=production pm2 start app.js --name "nodeServices"
3. Check PM2 has our app: pm2 list
4. Save the PM2 config: pm2 save
5. To start/stop: pm2 start nodeServices / pm2 stop nodeServices

## Pre Requisites for local installation
   1. Node.js version 7.x or greater is needed. npm should also be installed
   2. An accessible Mongodb instance is up and running. Mongo db url and port can be found in the .env config file. Change the url/port if your local instance is not as per our default.
   3. If you are an Admin user and would need to run the Upload functionality via the Admin screen, you would need to have Python3 installed. The following packages are required:

     1. Pyhon 3.7.0. Command to install: install python3
     2. Pip. Command to install: install pip
     3. Pandas. Command to install: pip install pandas
     4. Pymongo. Command to install: pip install pymongo
     5. Statsmodels. Command to install: pip install statsmodels