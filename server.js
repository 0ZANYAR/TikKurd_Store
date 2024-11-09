const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON
app.use(bodyParser.json());

// Define the valid password (you can replace this with a more secure method in a real application)
const validPassword = '19831983';

// Endpoint to validate the password
app.post('/validate-password', (req, res) => {
    const { password } = req.body;

    if (password === validPassword) {
        // If the password is correct, send a success message
        res.status(200).json({ message: 'Password valid', success: true });
    } else {
        // If the password is incorrect, send an error message
        res.status(401).json({ message: 'Invalid password', success: false });
    }
});

// Serve the protected content after successful login
app.get('/main-content', (req, res) => {
    res.send('<h1>Welcome to the protected content of your website!</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
