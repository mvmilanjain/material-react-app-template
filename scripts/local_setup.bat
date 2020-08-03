@echo off

echo --------------------------------------------------------
echo ------------------ Setting up project ------------------
echo --------------------------------------------------------

echo Step 1 - Running "npm install" command to add "node_modules"
call npm install

echo Step 2 - Running "npm run build:css" command to generate styles (main.css file)
call npm run build:css

echo Project setup is finished
echo Run "npm start" command to run project on "http://localhost:3000"