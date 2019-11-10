#!/bin/sh

echo "----------------------------------------------------"
echo "Executing ApplicationStop hook. In stop_server.sh "
echo "----------------------------------------------------"

cd /home/ec2-user/Node_Services
echo "Present working directory"
echo "------------------------------------------"
echo $PWD
echo "-------------------------"
#pm2 stop node-server