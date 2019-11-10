#!/bin/sh

echo "------------------------------------------"
echo "Executing BeforeInstall hook. In unzip.sh "
echo "------------------------------------------"

cd /home/ec2-user/Node_Services
echo "------------------------------------------"
echo "Present working directory"
echo "-------------------------"
echo $PWD
echo "-------------------------"
echo "Run npm install"
echo "-------------------------"
npm install
echo "-------------------------"
echo "Completed npm install"
echo "-------------------------"
