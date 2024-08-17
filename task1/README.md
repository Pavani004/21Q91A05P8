# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

The Average Calculator API is a microservice designed to compute the average of numbers fetched from a third-party server. It provides a RESTful endpoint /numbers/{numberid} where numberid can be 'p' for prime, 'f' for Fibonacci, 'e' for even, or 'r' for random numbers. The service maintains a window size (e.g., 10) to store unique numbers received from the server, replacing the oldest number with each new fetch once the window is full. It responds with the previous and current states of stored numbers, the newly fetched numbers, and the computed average. The service ensures quick responses and handles errors or slow responses gracefully.

OUTPUT SREENSHOTS:  


![image](https://github.com/user-attachments/assets/48491702-fd04-415b-8f78-6e2a0fde3433)
the server is running!!


![image](https://github.com/user-attachments/assets/df7b7827-b523-4586-9917-87b699217d8c)
Above picture is the output screen


![image](https://github.com/user-attachments/assets/3589a7b7-b8cd-4614-84ae-8ad6f933dcdf)
We can enter our needed input whether prime(p), fibonacci(f) etc.,


![image](https://github.com/user-attachments/assets/a117f8f3-2134-4ece-97ea-45bf8acb01c4)
by clicking on get numbers we should get the numbers and average is calculated by logic but due to some errors in fetching numbers from api is not done
