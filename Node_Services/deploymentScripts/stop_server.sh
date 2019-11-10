#!/bin/sh

echo "----------------------------------------------------"
echo "Executing ApplicationStop hook. In stop_server.sh "
echo "----------------------------------------------------"

cd /home/ec2-user/Node_Services
#pm2 stop node-server