#!/bin/sh

echo "-------------------------"
echo "This is Node Building"
echo "-------------------------"
cd ./Node_Services
npm install

echo "-------------------------"
echo "Process completed with exit code 0"
echo "-------------------------"

res="$($1)"
echo "$?"
echo "$res"