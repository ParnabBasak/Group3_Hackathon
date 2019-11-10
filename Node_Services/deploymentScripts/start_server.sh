#!/bin/sh

source /home/ec2-user/.bash_profile
echo "----------------------------------------------------"
echo "Executing ApplicationStart hook. In start_server.sh "
echo "----------------------------------------------------"
cd /home/ec2-user/Node_Services
pm2 start ./bin/www --name node-server
echo "----------------------------------------------------"
echo "'node-server' server started "
echo "----------------------------------------------------"