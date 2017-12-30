"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var mongoose = require("mongoose");
dotenv.config({ path: 'variables.env' });
var dblink = String(process.env.DB_HOST || '');
// Launch Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(dblink, { useMongoClient: true }, function (err) {
    if (err)
        console.log("WTF there was an error " + err.message);
    console.log("mongo is now connected to our systeme please request away :)");
});
var server_1 = require("./src/server");
// The port the express app will listen on
var port = parseInt(process.env.PORT || '3000', 10);
// Serve the application at the given port
server_1.application.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
//# sourceMappingURL=start.js.map