const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST endpoint to handle form submission
app.post("/submit-form", (req, res) => {
    const { email, name } = req.body;
    console.log(`Received form data - Email: ${email}, Name: ${name}`);

    // Send a success response
    res.json({ message: "Form submitted successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
axios.post("http://localhost:3000/submit-form", { email, name })
    .then(response => {
        alert(response.data.message);
    })
    .catch(error => {
        console.error("There was an error submitting the form!", error);
    });
