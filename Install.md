list-style-type:lower-roman;

1. Install MongoDB
  

2. Install Python3
    

3. Clone or download Github repository https://github.com/ParnabBasak/Group3_Hackathon

4. Run Node_Services Server
  ```
    i.  cd <Path to your local Node_Server folder>
    ii. npm install
    iii.Verify the host and port that mongoDB instance is running on. If the host and port are other that
         localhost and 27017, then change the corresponsing seeting in .env (under Node_Services folder
         accordingly
    iv. Change directory to the following path /Node_Services/uploads. Find the absolute path of this folder.       Copy the path.
    v. Go to the .env file (in the folder Node_Services) and paste the path to the value UPLOAD_FILE_DIR
    vi. Verify that the last line looks like
        UPLOAD_FILE_DIR=<Your local absolute path to ./Node_Services/uploads folder>  
    vii. Run npm start and verify that the following lines show 
               Listening on port 3000
               DB Connected!
         If they dont, then verify that your mongoDB is up and running and you have mentioned the correct host 
         and port in .env file
    viii. Use curl to verify connection to mongoDB. Run to view the data from database.
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
  

7. Go to the Signup page and verify that the Role dropdown is populated
           
          

