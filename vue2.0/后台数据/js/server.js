const Koa = require('koa')
const router = require('koa-router')()
const parser = require('koa-parser')
const cors = require('koa2-cors')
const app = new Koa()
app.use(cors())
app.use(parser())


const fruitList = ['香蕉', '苹果', '鸭梨']
router.get('/fruits', async ctx => {
    ctx.body = fruitList
})

router.post('/fruits', async ctx => {
    let fruit = ctx.request.body.fruit
    fruitList.push(fruit)
    ctx.body = true
})

router.delete('/fruits/:index', async ctx => {
    let index = ctx.params.index
    fruitList.splice(index, 1)
    ctx.body = true
})
app.use(router.routes())
app.listen(3060, () => {
    console.log('server is running!');
})