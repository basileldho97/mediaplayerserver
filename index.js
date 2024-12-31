const jsonServer = require("json-server")
const MPserver = jsonServer.create()

const middleWare = jsonServer.defaults()
const PORT = 3000

const route = jsonServer.router('db.json')

MPserver.use(middleWare)
MPserver.use(route)

MPserver.listen(PORT,()=>{
    console.log(`mpsever strating running at post : ${PORT} and its waiting`);
    
})