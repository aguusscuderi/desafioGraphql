const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const app = express()
//const path = require('path')
const serverRouter = require('./routes')
const { schema } = require('./schema')
const { root } = require('./resolver')

const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.use('/form', express.static(path.join(__dirname, 'views')))

app.get('/', (req,res)=>{
    res.send('En la raiz del SERVER')
})
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
serverRouter(app)

app.listen(PORT, ()=> {
    console.log(`Estas conectado a http://localhost:${PORT}`)
})
