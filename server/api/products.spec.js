// /* global describe beforeEach it */

// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const Products = db.model('products')

// describe('products routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/products/', () => {
//     const codysEmail = 'cody@puppybook.com'

//     beforeEach(() => {
//       return Products.create({
//         email: codysEmail
//       })
//     })

//     it('GET /api/products', async () => {
//       const res = await request(app)
//         .get('/api/products')
//         .expect(200)

//       expect(res.body).to.be.an('array')
//       expect(res.body[0].email).to.be.equal(codysEmail)
//     })
//   })
//   describe('/api/products/:id', () => {
//     const codysEmail = 'cody@puppybook.com'

//     beforeEach(() => {
//       return Products.create({
//         email: codysEmail
//       })
//     })

//     it('GET /api/products/:id', async () => {
//       const res = await request(app)
//         .get('/api/products/1')
//         .expect(200)

//       expect(res.body.email).to.be.equal('cody@puppybook.com')
//     })
//   })
// })
