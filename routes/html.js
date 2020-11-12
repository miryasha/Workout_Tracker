const path = require("path");

module.exports =  (app) =>{
    
    app.get("/exercise",  (req,res) => {
        res.sendFile(path.join(__dirname));
    });

    app.get("/", (req,res)  => {
        res.sendFile(path.join(__dirname));
    });

    app.get("/stats", (req, res) =>  {
        res.sendFile(path.join(__dirname));
    });

}