const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    // 获取token
    const token = req.get('token')
    if (!token) {
        return res.json({
            code: 401,
            msg: 'token 缺失',
            data: null
        })
    }else {
        // 校验token
        jwt.verify(token, 'LMC', (err, data) => {
            if (err) {
                return res.json({
                    code: 401,
                    msg: 'token校验失败~',
                    data: null
                })
            }else {
                next()
            }
        })

    }
};