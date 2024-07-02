const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');

app.use(express.static('public'))//makes the css and js files responsive(put the file in public )
app.get('/',function(req,res)
{
    res.send('<h1>hellow</h1>')
});


app.post('/recommend',function(req,res)
{
  
})
app.get('/restaurants',function(req,res)
{ 




    
const htmlfilepath=path.join(__dirname,'views','restaurants.html')
  res.sendFile(htmlfilepath);

});

app.get('/about',function(req,res)
{ 
const htmlfilepath=path.join(__dirname,'views','about.html')
  res.sendFile(htmlfilepath);
  
});
app.get('/confirm',function(req,res)
{ 
const htmlfilepath=path.join(__dirname,'views','confirm.html')
  res.sendFile(htmlfilepath);
  
});

app.get('/recommend',function(req,res)
{ 
const htmlfilepath=path.join(__dirname,'views','recommend.html')
  res.sendFile(htmlfilepath);
  
});

app.listen('3000');

