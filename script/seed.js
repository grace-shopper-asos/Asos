'use strict'

const db = require('../server/db')
const {User, Products, Orders} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const products = await Promise.all([
    Products.create({
      title: 'Claire custom name plate',
      description: 'Use name plate as ring or necklace pendant',
      imageUrl: 'https://i.imgur.com/zuiYfUM.jpg',
      price: 9999
    }),
    Products.create({
      title: 'Yulia custom name plate',
      description: 'Use name plate as ring or necklace pendant',
      imageUrl: 'https://i.imgur.com/GVzEurd.jpg',
      price: 9999
    }),
    Products.create({
      title: 'Teressa custom name plate',
      description: 'Use name plate as ring or necklace pendant',
      imageUrl: 'https://i.imgur.com/ylmsp5j.jpg',
      price: 9999
    }),
    Products.create({
      title: 'Letter A Earring Stud',
      description:
        'Sans-serif letter A available in rose gold, yellow gold, and sterling silver',
      imageUrl: 'https://i.imgur.com/Lz0IPb9.jpg',
      price: 8999
    }),
    Products.create({
      title: 'Letter B Earring Stud',
      description:
        'Sans-serif letter B available in rose gold, yellow gold and sterling silver',
      imageUrl: 'https://i.imgur.com/tZBAHfV.jpg',
      price: 8999
    }),
    Products.create({
      title: 'Letter C Earring Stud',
      description:
        'Sans-serif letter C available in rose gold, yellow gold and sterling silver',
      imageUrl: 'https://i.imgur.com/DnawXsa.jpg',
      price: 8999
    }),
    Products.create({
      title: 'Letter X Earring Stud',
      description:
        'Serif letter X available in rose gold, yellow gold, and sterling silver',
      imageUrl: 'https://i.imgur.com/ggPCyTa.jpg',
      price: 8999
    }),
    Products.create({
      title: 'Letter Y Earring Stud',
      description:
        'Serif letter Y available in rose gold, yellow gold and sterling silver',
      imageUrl: 'https://i.imgur.com/B8JIhMw.jpg',
      price: 8999
    }),
    Products.create({
      title: 'Letter Z Earring Stud',
      description:
        'Serif letter Z available in rose gold, yellow gold and sterling silver',
      imageUrl: 'https://i.imgur.com/BRDOsh1.jpg',
      price: 8999
    })
  ])

  const orders = await Promise.all([
    Orders.create({
      productId: 9,
      userId: '1',
      price: 9999,
      title: 'test item'
    }),
    Orders.create({productId: 3, userId: '2', price: 9999, title: 'test item'})
  ])

  console.log(
    `seeded ${users.length} users, ${products.length} products, ${
      orders.length
    } orders`
  )
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
