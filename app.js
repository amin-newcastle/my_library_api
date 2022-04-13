// Setup your express server.

// Require the express:
const express = require('express');
// Create the app:
const app = express();

app.get("/", (req, res) => {
    res.send('My Library');
});

const bookRouter = require('./routes/book_routes');

app.use('/library', bookRouter);

// Set up your app to run and listen. You can simply do app.listen(3000) or
// If the port env. var. is not undefined then parse as int and use that as the
// port otherwise default to 3000:
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));