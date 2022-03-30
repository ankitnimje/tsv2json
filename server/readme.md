# TSV2JSON BACKEND

## Setup

1. clone or unzip this repo
2. cd into backend folder
3. run `npm install` for installing the dependencies
4. run `npm start` to start the application

## Apis

Because there are two api we are including everything in single file called app.js

1. We use `/tsv-to-json` api for parsing the tsv input
2. We are using `/json-output/:id` for getting already parsed tsv
3. We are storing the output of tsv-to-json to result object in `result.js` when we reload it will initialized to empty object again

## Postman collection

1. Included postman collection file called `postman-collection.json` we import this file and test the apis
