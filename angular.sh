#!/bin/sh

echo "-------------------------"
echo "This is Angular Building"
echo "-------------------------"
cd ./Angular_UI

echo "-------------------------"
echo "Running npm install"
echo "-------------------------"
npm install

echo "-------------------------"
echo "Running npm run test"
echo "-------------------------"
npm run test -- --watch=false --no-progress --browsers=ChromeHeadlessNoSandbox

echo "-------------------------"
echo "Running ng build --prod"
echo "-------------------------"
ng build --prod

echo "Process completed with exit code $?"