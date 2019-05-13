const path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname + '/../client/dist')));

app.listen(3000, function() {
  console.log('listening for cows on port 3000');
});
app.get('/api/cows',(req,res)=>{
  res.send(mockData)
})
var mockData=[
  {id:1,title: 'Mean Girls', description: 'that is so fetch'},
  {id:2,title: 'Hackers', description: 'w3 ar3 h4x0rz'},
  {id:3,title: 'The Grey', description: 'when something is neither black nor white'},
  {id:4,title: 'Sunshine', description: 'on a cloudy day'},
  {id:5,title: 'Ex Machina', description: 'deus ex machina?'}
]

