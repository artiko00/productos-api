const firestore = require('../model')

const getProductos = (req, res) => {
    const productos = {}
    const limite = Number(req.query.limite) || 100
    firestore.collection('productos').limit(limite).get().then(snapshot => {
        snapshot.forEach(doc => {
            productos[doc.id] = doc.data()
        })
        return res.status(200).json(productos)
    }).catch(error => {
        console.log("Error:\n" + error)
    })
}

const getProducto = (req, res) => {
    const producto = req.query.sku
    firestore.collection('productos').doc(producto).get().then(doc => {
        if(doc.exists){
            return res.status(200).json(doc.data())
        }else{
            return res.status(500).json({"error": false,"message":"Producto no existe"})
        }
        
    }).catch(error => {
        console.log("Error:\n" + error)
    })
}


module.exports = { getProductos, getProducto }