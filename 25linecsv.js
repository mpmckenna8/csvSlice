// designed to be run on the command line and take a large csv as the first argument and return a csv w/ 25 lines of data

var fs = require('fs');

var csvin = process.argv[2];
var outfile = process.argv[3];

console.log(process.argv);



fs.readFile('./'+csvin, function(err, data){

  if(err){throw err}

//data.length;
  //  console.log(data.length);

  var smaCSV = data.slice(0,100000);

  var strCSV = data.toString('utf-8',0, 30000);
//    var ut8st = smaCSV.toString('ascii',0,smaCSV.length)

    var spicsv = strCSV.split("\n");

  var finCSV = spicsv.slice(0,26);

  var lastStr = [];


finCSV.forEach(function(doc){
var neLid =doc+'\n';
lastStr.push(neLid)

})

var strungOut = (lastStr.join(''));



   fs.writeFile(outfile, strungOut,'utf8',function(err){
     if(err)throw err;
       console.log('small.csv was saved, see if it makes any sense... should have 25 rows of data')
   })

});
