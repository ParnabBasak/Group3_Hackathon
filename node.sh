#!/bin/sh

echo "----------------------------"
echo "This is Node Servis Building"
echo "----------------------------"
cd ./Node_Services

echo "-------------------------"
echo "Run npm install --prod"
echo "-------------------------"
npm install --prod
echo "----------------------------"
echo "Completed npm install --prod"
echo "----------------------------"

echo "-------------------------"
echo "Run zip"
echo "-------------------------"
rm -rf node_modules
zip -r latest *
mkdir -p dist
mv latest.zip ./dist/latest.zip
echo "-------------------------"
echo "Completed zip"
echo "-------------------------"

echo "----------------------------------"
echo "Process completed with exit code $?"
echo "----------------------------------"