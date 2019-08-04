/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleProduct} from './SingleProduct'
// import { connect } from 'react-redux'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('SingleProduct', () => {
  describe('should render the product props it receives', () => {
    let product
    let ProductWrapper

    beforeEach('create <SingleProduct /> wrapper', () => {
      // Hey! Here's my pug profile! Make sure to catch my good side!
      product = {
        title: 'Jewelry',
        imageUrl: 'https://i.imgur.com/zuiYfUM.jpg',
        description: 'Buy this jewelry',
        price: 99.99
      }

      ProductWrapper = shallow(<SingleProduct product={product} />)
    })
    it('includes the product name as the first div', () => {
      expect(ProductWrapper.find('div')).to.have.html('<h1>Jewelry</h1>')
    })

    it('includes the the image in a col', () => {
      expect(ProductWrapper.find('.products-image-size')).to.have.html(
        `<img class="products-image-size" src="https://i.imgur.com/zuiYfUM.jpg"/>`
      )
    })

    it('includes the product description as a div', () => {
      expect(ProductWrapper.find('div')).to.have.html(
        '<div>Buy this jewelry</div>'
      )
    })

    it('includes the product description as a div', () => {
      expect(ProductWrapper.find('.price')).to.have.html(
        '<div class="price">99.99</div>'
      )
    })

    it('changes if a different single product is passed in as props', () => {
      // Another pug?!? Wait, is that...Doug?! From the internet?!? Of course he can have a profile!
      // Make sure the Profile component accomodates him too!
      product = {
        title: 'Jewelry2',
        imageUrl: 'https://i.imgur.com/ylmsp5j.jpg',
        description: 'Buy this jewelry as well',
        price: 89.99
      }

      ProductWrapper = shallow(<SingleProduct product={product} />)
      expect(ProductWrapper.find('div')).to.have.html('<h1>Jewelry2</h1>')
      expect(ProductWrapper.find('.products-image-size')).to.have.html(
        `<img class="products-image-size" src="https://i.imgur.com/ylmsp5j.jpg"/>`
      )
      expect(ProductWrapper.find('div')).to.have.html(
        '<div>Buy this jewelry as well</div>'
      )
      expect(ProductWrapper.find('.price')).to.have.html(
        '<div class="price">89.99</div>'
      )
    })
  }) // end describe should render the product props it receives
}) // end describe SingleProduct
