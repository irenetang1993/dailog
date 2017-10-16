import Mock from 'mockjs'

const Random = Mock.Random
const getProducts = function () {
  let products = []
  for (let i = 0; i < 10; i++) {
    let product = {
      id: Random.increment(),
      name: '蒙牛纯牛奶' + Random.increment(),
      barcode: Random.natural(10000)
    }
    products.push(product)
  }
  return { products }
}

const getPms = function () {
  let products = []
  for (let i = 0; i < 20; i++) {
    let product = {
      id: Random.increment(),
      gallery: 'http://assets.lelai.com/images/catalog/product/default/v2/img_placeholder_180x180@2x.png',
      brand: '蒙牛',
      name: '冠益乳',
      barcode: Random.natural(10000),
      specification: '100ml',
      sales_attribute_value: '瓶'
    }
    products.push(product)
  }
  return { products }
}

Mock.mock('/products', 'get', getProducts)
Mock.mock('/products/search', 'post', getPms)
