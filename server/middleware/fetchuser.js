const jwt = require('jsonwebtoken');
const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(200).send({
            error: "please authnticate"
        })
    }
    try {
       // console.log('helloooooo');
        const data = jwt.verify(token,process.env.JWT_SECRET);
        //console.log(data,'hello');
        req.user = data.user;
        next();
    } catch (error) {
        res.status(400).send({
            error: "auntkmfsd"
        })

    }


}
module.exports = fetchuser;