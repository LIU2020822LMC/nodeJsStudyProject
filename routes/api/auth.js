const express = require('express');
const router = express.Router();
// 导入 用户 模型
const UserModel = require('../../modules/UserModel')
const md5 = require('md5');
// 导入 jwt
const jwt = require('jsonwebtoken');

// 登录操作
router.post('/login',async (req,res)=>{
    const {username,password} = req.body
    // 查询数据库
    const data =await UserModel.findOne({username:username,password: md5(password)})
    if(data){
        const token = jwt.sign({
            username: data.username,
            _id: data._id
        }, 'LMC', {
            expiresIn: 60 * 60 * 24 * 3
        });
        res.json({
            code: 200,
            msg: '登录成功',
            data:token
        })

    }else if(!data){
        res.status(500)
            .json({
                code: '1002',
                msg: '用户名或密码错误~',
                data: null
            })
    }
    else {
        res.status(500)
            .json({
            code: '1001',
            msg: '登陆失败，请稍后再试~',
            data: null
        })
    }
})

// 退出登录
router.post('/logout',(req,res)=>{
    // 销毁session
    req.session.destroy(()=>{
        res.render('success',{msg:'退出成功',url:'/login'})
    })
})

module.exports = router;