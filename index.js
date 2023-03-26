var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8081;

app.get("/",(req,res)=>{
   res.json({message:"Server is active"});
})

app.post("/", (req, res) => {
  
   try {
      var dateone = new Date(req.body.date1);
      var datetwo = new Date(req.body.date2);
      var dif = dateone.getTime() - datetwo.getTime();

      var Seconds_from_T1_to_T2 = dif / 1000;
      var timediff = Math.abs(Seconds_from_T1_to_T2);

      if(timediff){
         res.json({ timediff: timediff });
      }else{
         throw new Error("Invalid Input");
      }  
   } catch (error) {
      res.json({error: error.message});
   }
    
});

var server = app.listen(port, function () {
  var port = server.address().port;
  console.log("Timediff running on port ", port);
});
