The Typing Test App is a user-friendly tool designed to assess and enhance typing speed and accuracy.
It measures your typing performance in words per minute (WPM) and provides immediate, real-time feedback by highlighting errors in red.
Additionally, the app keeps track of your highest score achieved during the typing exercises.
The typing passages used for the tests are stored within a locally created JSON server, conveniently included in the repository.

To get started with the app:

Launch the JSON server:
Open your Visual Studio Code terminal and execute the following command:

npx json-server -p 3500 -w data/data.json

Ensure that Node.js is installed on your PC to run this command. This action initializes a JSON server that serves the typing passages stored in the data.json file contained in data folder.

Start the main app:
Once the JSON server is running, initiate the main typing app by entering the following command in your terminal:

npm start

This command will activate the app, allowing you to access and engage with the Typing Test interface through your browser or the provided interface.

Make sure to have Node.js installed for using the npx command and managing the server.
Once both the server and the app are up and running, you can evaluate and improve your typing skills, receive immediate error feedback, and view your highest score within the app.
