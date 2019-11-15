1. **Install MongoDB**
   * Setup MongoDB
     ```
        i. Windows: Refer https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
            a. Download the installer (.msi) from the MongoDB Download Center
            b. Run the MongoDB installer
            c. Follow the MongoDB Community Edition installation wizard.
            d. Install MongoDB Compass
            e. To begin using MongoDB, connect a mongo.exe shell to the running MongoDB instance 
            open a Command Interpreter with Administrative privileges and run:
                    "C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"
            Mac OS X: Refer https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
                a. Install XCode
                b. Install Homebrew
                c. Install MongoDB by executing the following command:
                    brew install mongodb-community@4.2
                d. Run MongoDB using brew, run 
                    brew services start mongodb-community
                e. Connect and Use MongoDB, run
                    mongo        
     ```
   * Create and Populate Database and master collection                
     ```             
        ii. Create the following DB by executing the following command in Mongo shell
            use Forecast

        iii. Populate Master data by running the following command from the shell:
            db.channels.insert({"channelId": "DSO", "channelName": "Direct Store Order"})
            db.channels.insert({"channelId": "DOS", "channelName": "Direct Online Sales"})
            db.channels.insert({"channelId": "PHO", "channelName": "Phone Order"}) 

            db.modelparams.insert({"fromDate": Date("2019-01-01"),"toDate": Date("2019-01-01"),"model": "ARIMA","values": [{"key":"p", "value": 1},{"key":"d", "value": 1},{"key":"q", "value": 1}]})

            db.lookups.insert({"key": "WEEKS","values": [{"key":"4", "value": "4"},{"key":"5", "value": "5"},{"key":"6", "value": "6"},{"key":"7", "value": "7"},{"key":"8", "value": "8"},{"key":"9", "value": "9"},{"key":"10", "value": "10"},{"key":"11", "value": "11"},{"key":"12", "value": "12"},{"key":"13", "value": "13"},{"key":"14", "value": "14"},{"key":"15", "value": "15"},{"key":"16", "value": "16"},{"key":"17", "value": "17"},{"key":"18", "value": "18"},{"key":"19", "value": "19"},{"key":"20", "value": "20"},{"key":"21", "value": "21"},{"key":"22", "value": "22"},{"key":"23", "value": "23"},{"key":"24", "value": "24"},{"key":"25", "value": "25"},{"key":"26", "value": "26"}]}) 

            db.lookups.insert({"key": "USERROLES","values": [{"key":"ADMIN", "value": "Administrator"},{"key":"GENERAL", "value": "General"}]})

        iv. Verify that the 3 collections channels, modelparams and lookups have been created in Forecast db and have documents in them   
     ```  

2. **Install Python3**
   ```
    i. Windows: Refer https://realpython.com/installing-python/
       a. Download the Python 3 Installer
       b. Run the Installer
       c. Verify the version of python by running the following from powershell/command prompt:
           python3 ––version
       d. Install pip
           - Download get-pip.py to a folder on your computer.
           - Open a command prompt and navigate to the folder containing get-pip.py.
           - Run the following command:
               python get-pip.py
           - pip -V         

       Mac OS X: Refer https://programwithus.com/learn-to-code/install-python3-mac/
       a. Install Brew
       b. Install Python3 with Brew, run
           brew install python3
       c, Set (Optional) PATH environment. run
           export PATH=/usr/local/bin:/usr/local/sbin:$PATH
       d. Verify the version of python by running the following from terminal:
           python3 ––version    
       e. Install pip (Refer https://pip.pypa.io/en/stable/installing/)
           - Download pip, by running the following in your terminal
               curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
           - Install pip using python3
                python3 get-pip.py    
           - Verify the installation of pip3 by running the following on the Terminal
                which pip3
    ii. Run the following commands from command prompt/powershell (for Windows) or terminal (for Mac OS X)
       a. Install pymongo (Refer: https://api.mongodb.com/python/current/installation.html)
           python3 -m pip install pymongo
       b. Install pandas
           pip install pandas
       c. Install Statsmodels    
           pip install statsmodels            
   ```
    
3. Clone or download Github repository https://github.com/ParnabBasak/Group3_Hackathon

4. Run Node_Services Server
   ```
    i.   cd <Path to your local Node_Server folder>
    ii.  npm install
    iii. Verify the host and port that mongoDB instance is running on. If the host and port are other that
         localhost and 27017, then change the corresponsing seeting in .env (under Node_Services folder
         accordingly
    iv.  Change directory to the following path /Node_Services/uploads. Find the absolute path of this
         folder.Copy the path.
    v.   Go to the .env file (in the folder Node_Services) and paste the path to the value UPLOAD_FILE_DIR
    vi.  Verify that the last line looks like
          UPLOAD_FILE_DIR=<Your local absolute path to ./Node_Services/uploads folder>  
    vii. Run npm start and verify that the following lines show 
               Listening on port 3000
               DB Connected!
         If they dont, then verify that your mongoDB is up and running and you have mentioned the correct host 
         and port in .env file
    viii.Use curl to verify connection to mongoDB. Run to view the data from database.
          curl http://localhost:3000/api/channels
   ```
   
5. Run Angular_UI Client
  ```
   a. cd <Path to your local Angular_UI folder>
   b. Change the host and port of your Node_Services server (if not running on localhost and on port 3000) 
      in the Angular_UI/src/environments/environment.ts file 
      apiBaseUrl: 'http://<your host>:<your port>/api' 
   c. Run npm install
   d. Run npm start
   ```
   
6. Go to http://localhost:4200/ to verify that Angular_UI is up and running
  
7. Go to the Signup page and verify that the Role dropdown is populated.
