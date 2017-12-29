"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const defunt_1 = require("../models/defunt");
// Assign router to the express.Router() instance
const router = express_1.Router();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req, res) => {
    // Reply with a hello world when no name param is provided
    //const defunts = await defunt.find();
    //console.log(defunts)
    var defunt = new defunt_1.default({
        nom: 'toto',
        prenom: 'toto'
    });
    defunt.save().then((p) => console.log('save', p)).catch((e) => console.log('not save', e));
    res.send('Hello, Worlds !');
});
router.get('/:name', (req, res) => {
    // Extract the name from the request parameters
    let { name } = req.params;
    // Greet the given name
    res.send(`Hello, ${name}`);
});
// Export the express.Router() instance to be used by server.ts
exports.WelcomeController = router;
//# sourceMappingURL=welcomeController.js.map