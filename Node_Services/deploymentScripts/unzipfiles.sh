#!/bin/sh

source /home/ec2-user/.bash_profile
echo "------------------------------------------"
echo "Executing BeforeInstall hook. In unzip.sh "
echo "------------------------------------------"
echo "-------------------------"
echo "Present working directory before cd"
echo "-------------------------"
echo $PWD
echo "-------------------------"
cd /home/ec2-user/Node_Services
echo "-------------------------"
echo "Present working directory after cd"
echo "-------------------------"
echo $PWD
echo "-------------------------"
echo "Run npm install"
echo "-------------------------"
sudo npm install
echo "-------------------------"
echo "Completed npm install"
echo "-------------------------"
