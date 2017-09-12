var express=require('express');
var path=require('path');
var open=require('open');
var webpack=require('webpack');
var config =require(__dirname,  '../webpack.config.jas');

/*eslint-disable no-console */

const port=3000;
const app=express();
const compiler =webpack(config);

app.use(require('webpack-jas-middleware')(compiler, {
  noInfo:true,
  publicpath : config.output.publicpath
}));

app.get('/', function(req,res){

res.sendFile(path.join(__dirname,  '../src/index.html'));

});

app.listen(port,function(err){
if(err)
  {
    console.log(err);
  }
  else{
    open('http://localhost:' +port);
  }
  });



