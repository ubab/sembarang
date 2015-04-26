var _mysql=require('mysql');
var mysql= _mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'toor',
	database:'console'
});
mysql.connect();
var sql='select from mobil';
mysql.query(sql,function(err,rows,fileds){
	if(!err)
		console.log('hasil query ='+ rows);
	else
		consoel.log('error '+ err);
});
