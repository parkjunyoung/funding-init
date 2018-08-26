var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

// 확장자가 ejs 로 끈나는 뷰 엔진을 추가한다.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 정적폴더 추가
app.use('/static', express.static('static'));

app.get('/', function(req,res){
    res.render('home');
});

app.listen( port, function(){
    console.log('Express listening on port', port);
});