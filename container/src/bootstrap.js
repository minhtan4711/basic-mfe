import { mount as productsMount } from 'products/ProductsIndex' // run the module's global code, but doesn't actually import any values
import { mount as cartMount } from 'cart/CartShow'

console.log('container')

productsMount(document.querySelector('#my-products'))
cartMount(document.querySelector('#my-cart'))
