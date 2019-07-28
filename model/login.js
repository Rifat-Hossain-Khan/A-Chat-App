const db = require('./db');
module.exports = {
	validateUser: function(username, password, callback){
		const sql = "SELECT * FROM users WHERE User_Name=? AND Pass=?";
		const sqlParam = [username, password];
		db.executeQuery(sql, sqlParam, function(result){
			if(!result)
			{
				callback(false);
			}
			else
			{
                console.log(result[0]);
				callback(result[0]);
			}
		});
	}
};