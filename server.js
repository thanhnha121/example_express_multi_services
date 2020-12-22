const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("This is service A1!");
});

app.get("/info", (req, res) => {
    res.json({
        name: "Service A1",
    });
});

app.get("/only_on_a", (req, res) => {
    res.json({
        title: "This api available only on A server!",
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
