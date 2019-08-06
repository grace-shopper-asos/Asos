// /* eslint-env mocha, chai */

// const {expect} = require('chai')
// const db = require('../index')
// const Products = db.model('products')
// const Orders = db.model('./orders')
// const User = db.model('user')

// describe('Products model', () => {
//   beforeEach(() => db.sync({force: true}))

//   describe('column definitions and validations', () => {
//     it('has a `title`, `description`, and `price`', async () => {
//       const item = await Products.create({
//         title: 'gold hoop earrings',
//         description: 'quintessential closet item',
//         price: 49.99
//       })

//       expect(item.title).to.equal('gold hoop earrings')
//       expect(item.description).to.equal('quintessential closet item')
//       expect(item.price).to.equal(49.99)
//     })

//     it('`title` is required', () => {
//       const product = Products.build()
//       return product.validate().then(
//         () => {
//           throw new Error('Validation should have failed!')
//         },
//         err => {
//           expect(err).to.be.an('error')
//         }
//       )
//     })

//     it('`imageUrl` has a default value', async () => {
//       const item = await Products.create({
//         title: 'abc',
//         description: 'xyz',
//         price: 99.99
//       })
//       expect(item.imageUrl).to.equal(
//         'https://www.cartridge.co.za/wp-content/uploads/woocommerce-placeholder.png'
//       )
//     })

//     // associations
//     it('has manually set one-many relationship with Orders', async () => {
//       const newProduct = await Products.create({
//         title: 'sparkly',
//         description: 'shiny',
//         price: 999.99
//       })
//       const newUser = await User.create({
//         email: 'teressa@gmail.com',
//         password: 'teresssssssa'
//       })
//       const newOrder = await Orders.create({
//         productId: newProduct.id,
//         userId: newUser.id
//       })

//       await newOrder.getUserId({
//         where: {
//           email: 'teressa@gmail.com',
//           status: 'open'
//         }
//       })
//       //double check with yulia to see if there is a way to test manually set
//       //or check to see that there is NO default foreign key that is set here

//       expect(newOrder.userId).to.be.equal(newUser.id)
//     })

//     it('`status` has a default value', async () => {
//       const newItem = await Orders.create({
//         productId: 3,
//         userId: 2
//       })
//       expect(newItem.status).to.equal('open')
//     })

// // Make sure that you define the associations in `server/models/index.js`!
// // Note: be careful - the pluralization is important here!
// it('has a many-many relationship with other Pugs as `friends`', async () => {
//   const penny = await Pug.create({name: 'Penny'})
//   const doug = await Pug.create({name: 'Doug'})
//   await penny.addFriend(doug)
//   const friends = await penny.getFriends()
//   expect(friends).to.be.an('array')
//   expect(friends.length).to.equal(1)
//   expect(friends[0].name).to.equal('Doug')
//   })
// })

//   describe('instance method: isPuppy', () => {
//     it('returns true if a pug is a puppy (less than one year old)', async () => {
//       const pup = await Pug.create({name: 'Pupster', age: 0})
//       const notPup = await Pug.create({name: 'Grouchy', age: 2})

//       expect(pup.isPuppy()).to.equal(true)
//       expect(notPup.isPuppy()).to.equal(false)
//     })
//   })

//   describe('instance method: shortBio', () => {
//     // Note: the first sentence might be defined as all of the text
//     // leading up to but not including the first period,
//     // question mark, or exclamation point.
//     it('returns first sentence of bio', async () => {
//       const cody = await Pug.create({
//         name: 'Cody',
//         biography: 'He is a pug. A cuddly pug. But also kind of a brat.'
//       })

//       const doug = await Pug.create({
//         name: 'Doug',
//         biography: 'He is internet famous! Quite a popular pug.'
//       })

//       const penny = await Pug.create({
//         name: 'Penny',
//         biography: 'Who is Penny the Pug? Only the most popular pug around!'
//       })

//       expect(cody.shortBio()).to.be.equal('He is a pug')
//       expect(doug.shortBio()).to.be.equal('He is internet famous')
//       expect(penny.shortBio()).to.be.equal('Who is Penny the Pug')
//     })
//   })

//   // Check out: http://docs.sequelizejs.com/manual/tutorial/querying.html#relations-associations
//   describe('class method: `findByCoffee`', () => {
//     it('finds all pugs with the given favorite coffee', async () => {
//       const latte = await Coffee.create({name: 'latte'})
//       const cortado = await Coffee.create({name: 'cortado'})
//       await Promise.all([
//         Pug.create({name: 'Cody', favoriteCoffeeId: latte.id}),
//         Pug.create({name: 'Doug', favoriteCoffeeId: cortado.id}),
//         Pug.create({name: 'Penny', favoriteCoffeeId: latte.id})
//       ])

//       const latteLovers = await Pug.findByCoffee('latte')
//       const cortadoCourtiers = await Pug.findByCoffee('cortado')

//       expect(latteLovers.length).to.equal(2)
//       expect(latteLovers.some(pug => pug.name === 'Cody')).to.equal(true)
//       expect(latteLovers.some(pug => pug.name === 'Penny')).to.equal(true)

//       expect(cortadoCourtiers.length).to.equal(1)
//       expect(cortadoCourtiers.some(pug => pug.name === 'Doug')).to.equal(true)
//     })

//     it('finds pugs and eagerly loads their favorite coffee', async () => {
//       const espresso = await Coffee.create({name: 'espresso'})
//       const joe = await Pug.create({name: 'Joe', favoriteCoffeeId: espresso.id})

//       const espressoEnthusiasts = await Pug.findByCoffee('espresso')

//       expect(espressoEnthusiasts[0].name).to.equal(joe.name)
//       expect(espressoEnthusiasts[0].favoriteCoffee.id).to.equal(espresso.id)
//     })
//   })

//   describe('hooks', () => {
//     it('capitalizes a pug\'s name before saving it to the database', async () => {
//       const pug = await Pug.create({name: 'joe'})

//       expect(pug.name).to.equal('Joe')

//       const pupdatedPug = await pug.update({name: 'joey'})

//       expect(pupdatedPug.name).to.equal('Joey')
//     })
//   })
// })
