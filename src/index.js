const app = require('./app.js');

app.listen(app.get('port'), () => {
  console.log('Server is running on port : ' + app.get('port'));    
});
