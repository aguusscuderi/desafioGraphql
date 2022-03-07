const newProduct = require('./productsClass')
let root = {
    hello: ()=> {
        return 'Hola Mundo!'
    },

    createProduct: ({ data }) => {
        return newProduct.save(data)
    },

    deleteProduct: (data) => {
        return newProduct.deleteById(data.id)
    },
    
    getAllProducts: () => {
        return newProduct.getAll()
    },

    updateProduct: (data) => {
        console.log(data.id)
        return newProduct.updateById(data.data, data.id)
    }
    
}

module.exports = { root }