const login = require.main.require('./model/login');

exports.getLogin = (req, res, next) => {
    res.render('login');
};

exports.postLogin = (req,res,next) => {
    const un = req.body.uname;
    const ps = req.body.pass;
    login.validateUser(un,ps, (result)=> {
        //console.log(result);
		if(result)
		{
            req.session.user = result;
            //console.log(req.session.user);
			
			res.redirect('/chat');
		}
		else
		{
			res.send('Invalid');
		}
    });


};

exports.getChatbox = (req, res, next) => {
    res.render('chatbox', {
        user: req.session.user
    });
};