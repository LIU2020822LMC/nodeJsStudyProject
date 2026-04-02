var express = require('express');
var router = express.Router();
const moment = require('moment');
const AccountModel = require('../../modules/AccountModel');
const {Types} = require("mongoose");

// 记账本的列表
router.get('/account', async (req, res) => { // 加 async 关键字
    try {
        // 1. 执行查询，直接 await exec()
        const result = await AccountModel.find().sort({ time: -1 }).exec();

        // 2. 成功逻辑（渲染页面/返回数据）
        res.json({
            code: 200,
            msg:'读取成功',
            data: result
        })

    } catch (err) { // 捕获错误
        console.log('查询失败：', err);
        res.json({
            code: '0000',
            msg:'读取失败',
            data: null
        })
    }
});


// 新增记录
router.post('/account', async (req,res)=>{
    try {
        // 异步创建数据，无回调函数
        await AccountModel.create({
            ...req.body,
            time: moment(req.body.time).toDate()
        });
        // 成功提示
        res.json({
            code: 200,
            msg: '新增成功',
            data: req.body
        })
    } catch (err) {
        // 捕获错误
        res.json({
            code: '0000',
            msg: "创建失败",
            data: null
        })
    }
})

//删除记录
router.delete('/account/:id', async (req, res) => {
    //获取 params 的 id 参数
    let id = req.params.id;
    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            code: 400,
            msg: 'ID 格式不合法',
            data: null
        });
    }
    //删除
    const data = await AccountModel.deleteOne({_id: id});
    if(data) {
        res.json({
            code: 200,
            msg: '删除成功',
            data: null
        })
    }else {
        res.json({
            code: '0000',
            msg: '删除账单失败',
            data: null
        })
    }
});

// 获取单个账单信息
router.get('/account/:id', async (req,res)=>{
    let id = req.params.id;
    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            code: 400,
            msg: 'ID 格式不合法',
            data: null
        });
    }
    const data = await AccountModel.findById(id)
    if(data) {
        res.json({
            code: 200,
            msg:'读取成功',
            data: data
        })
    }else {
        res.json({
            code: '0000',
            msg: '读取失败',
            data: null
        })
    }
})

// 更新单个账单信息
router.patch('/account/:id', async (req,res)=>{
    let id = req.params.id;
    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            code: 400,
            msg: 'ID 格式不合法',
            data: null
        })
    }
    // 更新数据库
    const data = await AccountModel.updateOne({_id: id}, req.body)
    if(data) {
        const UpdateData = await AccountModel.findById(id)
        if(UpdateData) {
            res.json({
                code: 200,
                msg: '更新成功',
                data: UpdateData
            })
        }else {
            res.json({
                code: 200,
                msg: '账单更新成功，但读取信息失败',
                data: null
            })
        }

    }else {
        res.json({
            code: '0000',
            msg: '更新失败',
            data: null
        })
    }
})

module.exports = router;
