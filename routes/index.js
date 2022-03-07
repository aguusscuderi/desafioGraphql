const { Router } = require('express')
const router = Router()
function serverRouter(app){
    app.use('/api', router)

    router.get('/productos', async (req, res)=>{
        res.send('Enrutado con exito!')
    })


}

module.exports = serverRouter