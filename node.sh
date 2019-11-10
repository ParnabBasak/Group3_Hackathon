#!/bin/sh

echo "-------------------------"
echo "This is Node Building"
echo "-------------------------"
cd ./Node_Services

echo "-------------------------"
echo "Run npm install --prod"
echo "-------------------------"
npm install --prod
echo "-------------------------"
echo "Completed npm install --prod"
echo "-------------------------"

echo "-------------------------"
echo "Run npm pack"
echo "-------------------------"
cd dist
npm pack ../
echo "-------------------------"
echo "Completed npm pack"
echo "-------------------------"

echo "-------------------------"
echo "Process completed with exit code 0"
echo "-------------------------"

res="$($1)"
echo "$?"
echo "$res"