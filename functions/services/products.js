const admin = require('firebase-admin');

class ProductsService {
  constructor(){

  }

  async getProducts(){
    try {
      const snapshots = await admin.firestore().collection('products').get()
      const list = snapshots.docs.map((snapshot) => {
        const item = snapshot.data()
        item.id = snapshot.id
        return item
      })
      return list
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async getProductsByName(name){
    try {
      const snapshots = await admin.firestore().collection('products')
      .where('name', '==', name)
      .get()
      const list = snapshots.docs.map((snapshot) => {
        const item = snapshot.data()
        item.id = snapshot.id
        return item
      })
      return list
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

module.exports = ProductsService