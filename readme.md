# TSV2JSON

## Tech stack used:

- Frontend: JavaScript, React, MaterialUI, axios
- Backend: JavaScript, NodeJS, express
- Built on Windows platform

### Setup

1. unzip this repo
2. cd into "server" directory
3. run `npm install` for installing the dependencies
4. run `npm start` to start the application (Server should run on port 7000)
5. open another terminal and cd into "client" directory
6. run `npm install` for installing the dependencies
7. run `npm start` to start the application (App should run on port 3000 by default)

### TSV2JSON BACKEND

because there are just two APIs we are including both APIs in a single file called app.js

1. POST - `/tsv-to-json` api is used for parsing the tsv input
   - `/tsv-to-json` accepts a string which is expected to be in TSV format
   - `/tsv-to-json` api passes the request data to `parseAsString` function inside `tsv2json.js`, which parses the passed string into JSON.
   - This parsed JSON data is then stored in `result` at + 1 index each time
   - The API will then sends the parsed JSON data back to client.
2. GET - `/json-output/:id` is used for getting already parsed tsv
   - A get call to this API with a key with get the result json data at index `key`
   - The API will then returns the JSON data stored at that index
   - storing the output of tsv-to-json to result object in `result.js`, after a reload it will initialize to empty object again

### TSV2JSON FRONTEND

1. We are using 2 routes for the application - `/` and `/:id`
2. Default route `/` renders a simple form with text area and and a button to parse inputted TSV data using post api - `/tsv-to-json`
   - After user enters the data and clicks on 'Convert TSV to JSON' button, axios will fire a POST call to `/tsv-to-json` api with entered string and returns a JSON response with data, key, and errors if any.
   - A closable modal popup will show up with codeblocks to show parsed JSON data, errors, and a link to the route with key
   - A link will be presented with a route and key, clicking on it redirects to the link. Link can be copied using a button next to it.
3. Another route `/:id` shows the exact same modal with the data from api - `/json-output/:id`
   - This will fire a GET call to `/json-output/:id` using axios passing id.
   - The API will return the JSON data at index `id`
4. Some other FE libraries and components:
   - Used 'CopyBlock' from `react-code-blocks` library to show codeblocks
   - Used `axios` for the API calls from frontend
   - Used CSS in JS styled components using `@emotion`
   - A simple header with toggle button in the end to switch the color

#### Postman collection

1. Included postman collection file called `postman-collection.json`, we can import this file and test the APIs

\*\* I've struggled to get the error message correctly so it's left from the requirements
