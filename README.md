# LmcAccounts - 赛博朋克风记账本项目（尚硅谷node.js视频教程练习案例-记账项目）

这是一个基于 Node.js、Express 和 MongoDB 开发的记账本项目。该项目拥有极具现代感的赛博朋克/科幻风格界面，支持账单的新增、查看、删除和修改（模态框交互），并集成了用户注册登录及 JWT 鉴权功能。

## 🛠️ 技术栈

- **后端**：Node.js + Express
- **前端模板**：EJS
- **数据库**：MongoDB (Mongoose)
- **时间处理**：Moment.js
- **身份验证**：express-session & jsonwebtoken
- **UI/样式**：原生 CSS (赛博朋克风格定制)

## 🚀 本地部署步骤

### 1. 克隆项目

```bash
git clone https://github.com/your-username/LmcAccounts.git
cd LmcAccounts
```

### 2. 环境要求

- **Node.js**: 推荐 v22
- **MongoDB**: 需安装并运行 MongoDB 服务 (默认端口 27017)

### 3. 安装依赖

```bash
npm install
```

### 4. 数据库配置

打开 `config/config.js` 文件，根据你的本地 MongoDB 环境修改配置：

```javascript
module.exports = {
  DBHOST: "127.0.0.1", // 数据库地址
  DBPOST: 27017, // 数据库端口
  DBNAME: "testLMC", // 数据库名称
  secret: "LMC", // JWT 签名密钥
};
```

### 5. 运行项目

使用 nodemon (开发环境) 或直接启动：

```bash
# 开发模式
npm start

# 或直接运行
node ./bin/www
```

项目默认运行端口为 `3000`。

### 6. 访问项目

打开浏览器，访问：
`http://localhost:3000`

## 📂 项目目录说明

- `bin/www`: 项目启动入口
- `routes/web/`: 页面路由 (注册、登录、账单展示等)
- `routes/api/`: RESTful API 路由
- `views/`: EJS 页面模板
- `modules/`: Mongoose 数据模型 (AccountModel, UserModel)
- `middlewares/`: 自定义中间件 (鉴权逻辑)
- `public/`: 静态资源文件

## 📝 使用说明

1. **注册与登录**：首次使用需前往 `/reg` 页面注册账号，然后登录。
2. **添加账单**：点击首页的“添加账单”进入创建页面。
3. **修改与删除**：在列表页，点击每条记录右上角的“修改”按钮可通过模态框编辑，点击“X”按钮可删除记录。

---

_本项目基于尚硅谷 node.js 教程进行改编样式重构。感谢尚硅谷出的优质教程_

---

**感悟：** 
- 这个node.js教程对于前端来说是非常好的，它可以使你入门熟悉很多后端相关的概念，如果以后要学习全栈的话，个人觉得这个教程很值得你花时间去学习，教程最后的部署是利用windows作为服务器，我没有跟着做，懒得又花钱去弄了，毕竟对于现阶段的我来说，资金还是不充份的😅。
- 还有一个学习过程感到印象深刻的一个知识点就是 `公益404`,什么是`公益404`呢？就是说，当用访问没有定义的路由地址的时候，我们就可以给用户展示404的页面，如果我们在404页面插入公益404连接的话，那么404页面就会展示出一些公益事情的页面给用户看。

<img width="1436" height="678" alt="image" src="https://github.com/user-attachments/assets/a045f2d7-857e-44c5-a32c-c2ed74b6d8f8" />

<img width="1377" height="588" alt="image" src="https://github.com/user-attachments/assets/75a5d753-1478-448a-b683-40784c04ebda" />

<img width="1917" height="981" alt="image" src="https://github.com/user-attachments/assets/d182cb3e-54c4-40b7-a431-b089cb8f5fbd" />

### 以下是这个简单的项目所能展示的页面

#### 注册页面

<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/d0334ba5-21fe-474d-8b13-bfbff94e67a3" />

#### 登录页面

<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/2a8ec7ed-0a79-4953-9cd0-bcdf82060232" />

#### 成功页面（有不同类型，根据所执行的功能所决定展示文字）

<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/42e08dff-385e-4b4b-92b3-014da739e8db" />

#### 记账本页面

<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/883ab1c0-3694-4436-a5a8-7472f080813d" />

#### 修改数据页面

<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/e7fdba32-89f5-4a2d-85e3-be10157fd5e5" />

#### 添加记录页面

<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/5ebc8e05-83dc-4b48-b899-67a8a9911996" />

### 所涉及到接口

<img width="1812" height="242" alt="image" src="https://github.com/user-attachments/assets/f7b1399c-2dc4-476c-81ef-a693b3a1b6d1" />












