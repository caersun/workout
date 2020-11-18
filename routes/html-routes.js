const path = require("path");

module.exports = (app) => {
    app.get("*", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/index.html"));
    });
};