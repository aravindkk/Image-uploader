var express=require('express');
var multer=require('multer');
var app=express();
app.use(multer({ dest: './uploads/'}));
var bodyParser=require('body-parser');
var http=require('http');
var server=http.createServer(app);
var fs=require('fs');

var cloudinary=require('cloudinary');

var application_root=__dirname,
    path=require('path');


app.use(bodyParser());
app.use(express.static(application_root));



cloudinary.config({
 cloud_name: 'your_cloud_name',
 api_key: 'your_api_key',
 api_secret: 'your_api_secret'
})


app.get('/',function(req,res)
{
 res.sendfile('index.html');
});

app.post('/new', function(req,res){
  var imageFile=req.files.photo;
  console.log(imageFile);      
  cloudinary.uploader.upload(
  imageFile.path,
  function(result) { console.log(result);
  console.log('***************************');
  console.log(result.secure_url);
  //you can write this image url to your database
    res.send('<p>Your image was uploaded to :'+result.secure_url +'</p>');
  },
  {
    public_id: 'sample', 
    crop: 'limit',
    width: 2000,
    height: 2000,                                    
    tags: ['special', 'for_homepage']
  }      
);
});


var port=process.env.PORT || 5000;
server.listen(port);
console.log("Listening on "+port);
