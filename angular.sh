#!/bin/sh

echo "-------------------------"
echo "This is Anngular Building"
echo "-------------------------"
cd ./Angular_UI
npm install
echo "-------------------------"
echo "Running npm run test"
echo "-------------------------"
npm run test -- --watch=false --no-progress --browsers=ChromeHeadlessNoSandbox

echo "-------------------------"
echo "Running ng build --prod"
echo "-------------------------"
ng build --prod

echo "Process completed with exit code 0"
res="$($1)"
echo "$?"
echo "$res"