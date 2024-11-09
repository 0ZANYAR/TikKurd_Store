const express = require('express');
const app = express();
const PORT = 3000;

// Example valid product keys (In a real scenario, these would be stored in a database)
const validProductKeys = ["ABC123", "XYZ456", "DEF789"];

app.use(express.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

// Product key validation route
app.post('/validate-key', (req, res) => {
    const { key } = req.body;

    if (validProductKeys.includes(key)) {
        // If the product key is valid, redirect to a special page or homepage
        res.json({
            success: true,
            message: "Product key is valid!",
            redirectUrl: "http://127.0.0.1:5500/index.html" // URL to redirect the user
        });
    } else {
        res.json({
            success: false,
            message: "Invalid product key. Please try again."
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

