const Koa = require('koa')
const router = require('koa-router')()
const cors = require('koa2-cors')
const parser = require('koa-parser')
const static = require('koa-static')
const app = new Koa()

app.use(parser())
app.use(cors())
app.use(static(__dirname + '/public'))

const studentList = [
    { id: 1, name: '小明', "age": 2 },
    { id: 2, name: '小红', "age": 4 },
    { id: 3, name: '小亮', "age": 6 },
]
router.get("/student", async ctx => {
    ctx.body = studentList
})

router.post("/student", async ctx => {
    let student = ctx.request.body.student
    studentList.push(student)
    ctx.body = true
})

router.delete("/student/:id", async ctx => {
    let id = ctx.params.id
    studentList.map((item, index) => {
        if (item.id == id) {
            studentList.splice(index, 1)
        }
    })
    ctx.body = true
})
app.use(router.routes())
app.listen(3080, () => {
    console.log('3080 is running!');
})