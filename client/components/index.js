/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */

export {default as Nav} from './Nav'
export {default as UserHome} from './user-home'
export {default as Products} from './Products'
export {default as SingleProduct} from './SingleProduct'
export {default as Checkout} from './Checkout'
export {default as Cart} from './cart'
export {Login, Signup} from './auth-form'
export {default as Home} from './Home'
// export {default as Login} from './auth-form'
// export {default as Signup} from './auth-form'
