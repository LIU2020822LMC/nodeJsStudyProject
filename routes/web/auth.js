const express = require('express');
const router = express.Router();
// 导入 用户 模型
const UserModel = require('../../modules/UserModel')
const md5 = require('md5');

// 注册
router.get('/reg',(req,res)=>{
    // 响应HTML内容
    res.render('auth/reg')
})

// 注册用户
router.post('/reg',async (req,res)=>{
    try {
        const data = await UserModel.create({...req.body,password:md5(req.body.password)})
        if(data){
            res.json({
                code: 200,
                msg: '注册成功~',
                data:data
            })
            // res.status(200).render('success',{msg:'注册成功',url: '/login' })
        }

    }catch (err) {
        res.json({
            code: '1001',
            msg: '注册失败',
            data:err,
        })
    }
    res.send('测试获取请求体')
})

// 登录页面
router.get('/login',(req,res)=>{
    res.render('auth/login')
})

// 登录操作


module.exports = router;