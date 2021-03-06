const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("This is service A!");
});

app.get("/info", (req, res) => {
    res.json({
        name: 'Service A',
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
