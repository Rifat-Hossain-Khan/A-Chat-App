const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'chatbox'
});

module.exports = {
	executeQuery: function(sql, params, callback){
		if(params == null)
		{
			connection.query(sql, function(error, result){
				if(error)
				{
					console.log(error);
				}
				callback(result);
			});
		}
		else
		{
			connection.query(sql, params, function(error, result){
				if(error)
				{
					console.log(error);
				}
				callback(result);
			});
		}
	}
};
