var express = require('express');
var router = express.Router();
var personDetails = [
    {
        name: "akhil", age: 21, loc: "hyd"
    },
    {
        name: "dinesh", age: 23, loc: "chennai"
    },
    {
        name: "ashik", age: 25, loc: "bglr"
    },
    {
        name: "palani", age: 30, loc: "madras"
    },
    {
        name: "viyay", age: 28, loc: "tnagar"
    },

]
router.get('/', function (req, res,next) {
    res.send("It is working fine").status(200);
});
router.post('/backend', function (req, res) {
    // console.log("Response received",r);
    var name = req.body.command;
    console.log("The request received is",req);
    personDetails.forEach(req => {
        if (req=personDetails.name) {
            res.status(200).json({Value: personDetails[req]})
        } else {

            
        }
    });
    // do{
    //     res.status(200).json({Value: personDetails});
    // }
    // while(req.name=personDetails.name)

    // switch (name) {
    //     case "akhil":
    //         res.status(200).json(
    //             {
    //                 Value: personDetails[0]
    //             }
    //         );
    //     case "dinesh":
    //         res.status(200).json(
    //             {
    //                 Value: personDetails[1]
    //             }
    //         );
    //     case "ashik":
    //         res.status(200).json(
    //             {
    //                 Value: personDetails[2]
    //             });
    //     case "default":
    //         res.status(200).json(
    //             {
    //                 Value: "Select any of the value"
    //             }
    //         );
    // }
})
    module.exports = router;
