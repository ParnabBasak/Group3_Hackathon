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
echo "Run zip"
echo "-------------------------"
#mkdir dist
#cd dist
#npm pack ../
zip -r latest *
mkdir -p dist
mv latest.zip ./dist/latest.zip
echo "-------------------------"
echo "Completed npm pack"
echo "-------------------------"

echo "-------------------------"
echo "Process completed with exit code 0"
echo "-------------------------"

res="$($1)"
echo "$?"
echo "$res"