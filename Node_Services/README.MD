Node_Services is a fully functional api server built in Node.js (Express, MongoDB).

## Installation
Create a folder to hold your installation: mkdir Node_Services
FTP/Copy the contents of the zip to your newly created folder
Enter folder: cd Node_Services
Install dependencies: npm install
Start application: npm start --production
Visit http://127.0.0.1:3000 in your browser
Keeping Node_Services running after closing the terminal can be done in a few ways but we recommend using the PM2 package. To set this up:

Install PM2: npm install pm2 -g
Add nodeServices to PM2: NODE_ENV=production pm2 start app.js --name "nodeServices"
Check PM2 has our app: pm2 list
Save the PM2 config: pm2 save
To start/stop: pm2 start nodeServices / pm2 stop nodeServices
Note: Node.js version 7.x or greater is needed.