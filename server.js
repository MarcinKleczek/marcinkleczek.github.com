// simple serwer on node.js to test blog
var express = require("express"),
    app     = express(),
    port    = parseInt(process.env.PORT, 10) || 4567;
    
app.use(express.static(__dirname));
app.listen(port);
