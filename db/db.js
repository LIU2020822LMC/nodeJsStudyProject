const mongoose = require('mongoose');

module.exports = function (success,error) {
    // 判断是否有error传进来
    if (typeof error !== 'function') {
        error = () => {
            console.log('连接失败')
        }
    }

    const  {DBHOST,DBPOST,DBNAME } = require('../config/config.js')

    // 3. 连接 mongodb 服务
    mongoose.connect(`mongodb://${DBHOST}:${DBPOST}/${DBNAME}`,);

    //4. 设置回调
    // 设置连接成功的回调
    mongoose.connection.once('open', () => {
        success()
    });

    // 设置连接错误的回调
    mongoose.connection.on('error', () => {
        error()
    });

    mongoose.connection.on('close', () => {
        console.log('连接关闭');
    });
}

