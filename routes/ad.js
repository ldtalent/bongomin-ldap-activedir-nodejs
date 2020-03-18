var express = require('express');
var router = express.Router();
var ldap = require('ldapjs');


// route handling active directory user binding
router.post("/", (req, res) => {
   const client = ldap.createClient({
      url: req.body.serverUrl
   });

   client.bind(req.body.username + '@' + req.body.domain, req.body.password, function (err) {
      if (err) {
         res.send("Bind failed " + err);
         return;
      }

      res.send("Log on successful");

   }); // client.bind

}); // app.post("/ad...")

/******Note: please you can try the Active Directory connections by using
 active Directory credentials for an organisation***/


module.exports = router;