var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
//var MongoClient = require('mongodb');
var cors=require("cors");

//const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });


const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/Login',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"));

app.get("/",(req,res)=>{
  res.set({
      "Allow-access-Allow-Origin": '*'
  })
  return res.redirect('home.html');
}).listen(8000);


console.log("Listening on PORT 8000");


app.post("/signup",(req,res)=>{
    var name = req.body.name;
    var password = req.body.password;

    var data = {
        "name": name,
        "password" : password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
        res.json("sucess");
    });

    

})



app.post("/login", async (request, response) => {
  try {
      //adding
      const username = request.body.name;
      const password = request.body.password;

      const usermail = db.collection('users').findOne({ name: username }, (err, res) => {
          if (res == null) {
             // response.send("Invalid information!❌❌❌! Please create account first");
             alert("invalid");
          }
          else if (err) throw err;


          if (res.password === password) {
             // return response.redirect('home.html');
              response.json("sucesss");
          }
          else {
              //response.send("Invalid Password!❌❌❌");
             // response.json("invalid");
          
          }


      });
  }
  catch (error) {
      response.send("Invalid information❌");
  }

})




app.post("/addemp",(req,res)=>{
  console.log("hi");

  var name = req.body.name;
  var password = req.body.pn;
  var mail=req.body.id;
  var salary=req.body.salary;
  var designation=req.body.designation;
  var dof=req.body.doj; 

  var data = {
      "name": name,
      "password" : password,
      "mailid":mail,
      "salary":salary,
      "designation":designation,
      "dateOfJoining":dof

  }

  db.collection('employeelist').insertOne(data,(err,collection)=>{
    if(err){
        throw err;
    }
    console.log("Record Inserted Successfully");
    res.json("sucess");
});

//return res.redirect('admin.html')

  

})

app.patch('/updateemp',(req,res)=>{

  console.log(req.body);
  var name = req.body.name;
  var password = req.body.pn;
  var mail=req.body.id;
  var salary=req.body.salary;
  var designation=req.body.designation;
  var dof=req.body.doj; 

  var data = {
      "name": name,
      "password" : password,
      "mailid":mail,
      "salary":salary,
      "designation":designation,
      "dateOfJoining":dof

  }
  db.collection('employeelist').updateMany({name:name},{$set: {password: password,mailid:mail,salary:salary,designation:designation,dateOfJoining:dof}},(err,collection)=>{

    if(err){
      throw err;
  }
  console.log("Record updated sucessfully");
  res.json("sucess udated")

  })

})

app.post("/attendance",(req,res)=>{
  var id=req.body.id;
  var name=req.body.name;
  var designation=req.body.designation;
  var attendance=req.body.attendance;
  
  var data={
    "id":id,
    "name":name,
    "designation":designation,
    "attendance":attendance
  }

  db.collection('attendance').insertOne(data,(err,collection)=>{
    if(err)
    {
      throw err;
    }
    console.log("attendance inserted successfully");
    res.json("sucess");

  })
 
})

app.get("/users",async (req,res)=>{

    var user;

    //var user=db.collection('users').find();

    let sitesCol = db.collection("users");
    let site = await sitesCol.find().toArray();

    console.log(site);
    res.json({data:site});


    
})

app.get("/getemp",async(req,res)=>{
    var user;

    let sitesCol = db.collection("employeelist");
    let site = await sitesCol.find().toArray();

    console.log(site);
    
    res.json({data:site});

})
  
app.get("/calemp",async (req,res)=>{

   // db.employeelist.count();
    //res.send(s);

    try {
       
        const coll = db.collection('employeelist');
        const count = await coll.countDocuments(); // Count documents in the collection
        console.log(count);
        res.json({ count });
         // Send count as a JSON response
    } catch (err) {
        res.status(500).send({ error: err.message });
    }

})

app.post('/dept',(req,res)=>
{
    var deptname = req.body.name;
  var depthead = req.body.department;
  var deptdescrip=req.body.des;

  var data={
    "department name":deptname,
    "department head":depthead,
    "department descrip":deptdescrip
  }

  db.collection('departdetails').insertOne(data,(err,collection)=>{
    if(err)
    {
      throw err;
    }
    console.log("department inserted successfully");

  })
  res.json("sucess");


})

app.get('/caldepart',async (req,res)=>{

  
  try {
       
    const coll = db.collection('departdetails');
    const count = await coll.countDocuments(); // Count documents in the collection
    console.log(count);
    res.json({ count }); // Send count as a JSON response
} catch (err) {
    res.status(500).send({ error: err.message });
}

})


app.post('/leave',(req,res)=>{

  var name = req.body.name;
  var department = req.body.department;
  var rollno=req.body.rollno;
  var reason=req.body.reason;
  var nodates=req.body.da;
  var leavefrom=req.body.lf;
  var leaveto=req.body.lt;
 

  var data={
    "name":name,
    "department":department,
    "rollno":rollno,
    "reason":reason,
    "noofdates":nodates,
    "leavefrom":leavefrom,
    "leaveto":leaveto
  }

  db.collection('leave').insertOne(data,(err,collection)=>{
    if(err)
    {
      throw err;
    }
    console.log("leave updated successfully");
    res.json("sucess");

  })
  

})


app.get("/displeave",async (req,res)=>{

  var user;

  //var user=db.collection('users').find();

  let sitesCol = db.collection("leave");
  let site = await sitesCol.find().toArray();

  console.log(site);
  res.json({data:site});


  
})

app.post("/delemp",async (req,res)=>{

  var user;

  //var user=db.collection('users').find();

 var name=req.body.name;
 console.log(req.body);
 db.collection("employeelist").deleteOne({name:name});

  res.json("sucess");
  
})