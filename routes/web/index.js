var express = require("express");
var router = express.Router();
const moment = require("moment");
const AccountModel = require("../../modules/AccountModel");
const checkLoginMiddleware = require("../../middlewares/checkLoginMiddleware");

// 添加首页路由规则
router.get("/", (req, res) => {
  // 重定向 /account
  res.redirect("/account");
});

// 记账本的列表
router.get("/account", checkLoginMiddleware, async (req, res) => {
  // 加 async 关键字
  try {
    // 1. 执行查询，直接 await exec()
    const result = await AccountModel.find().sort({ time: -1 }).exec();

    // 2. 成功逻辑（渲染页面/返回数据）
    res.render("list", { accounts: result });
  } catch (err) {
    // 捕获错误
    console.log("查询失败：", err);
    res.status(500).send("数据库查询错误");
  }
});

// 添加记录
router.get("/account/create", checkLoginMiddleware, function (req, res, next) {
  res.render("create");
});

// 新增记录
router.post("/account", checkLoginMiddleware, async (req, res) => {
  try {
    // 异步创建数据，无回调函数
    await AccountModel.create({
      ...req.body,
      time: moment(req.body.time).toDate(),
    });
    // 成功提示
    res.render("success", { msg: "添加成功", url: "/account" });
  } catch (err) {
    // 捕获错误
    res.status(500).send("插入失败~");
  }
});

//删除记录
router.get("/account/:id", checkLoginMiddleware, async (req, res) => {
  //获取 params 的 id 参数
  let id = req.params.id;
  //删除
  const data = await AccountModel.deleteOne({ _id: id });
  if (data) {
    res.render("success", { msg: "删除成功", url: "/account" });
  } else {
    res.render("success", { msg: "删除失败", url: "/account" });
  }
});

module.exports = router;
