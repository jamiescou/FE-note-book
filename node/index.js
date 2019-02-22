const Koa = require('koa')
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const mongoose = require('mongoose')
const app = new Koa()
mongoose.set('useNewUrlParser', true); 
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true); // v5.4.13
mongoose.connect(config.dataBase, {useNewUrlParser: true}, (err, db) => {
    if (err) return console.log(err)
    console.log('数据库连接')
})
app.use(cors());
app.use(bodyParser());

// const user_routers = require('./routes/user_route')
const ciyu_routers = require('./routes/ciyu_route')
const words_routers = require('./routes/words_route')
const idiom_routers = require('./routes/idiom_route')
const xiehouyu_routers = require('./routes/xiehouyu_route')


app.use(ciyu_routers.routes()).use(ciyu_routers.allowedMethods())
app.use(words_routers.routes()).use(words_routers.allowedMethods())
app.use(idiom_routers.routes()).use(idiom_routers.allowedMethods())
app.use(xiehouyu_routers.routes()).use(xiehouyu_routers.allowedMethods())


app.listen(config.port)
console.log('服务启动在 http://localhost:' + config.port)