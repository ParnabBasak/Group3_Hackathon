#!/bin/sh

source /home/ec2-user/.bash_profile
echo "------------------------------------------"
echo "Executing BeforeInstall hook. In unzip.sh "
echo "------------------------------------------"
cd /home/ec2-user/Node_Services
echo "-------------------------"
echo "Run npm install"
echo "-------------------------"
sudo npm install
echo "-------------------------"
echo "Completed npm install"
echo "-------------------------"
