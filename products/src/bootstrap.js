import faker from 'faker'

const mount = (el) => {
    let products = ''

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }

    el.innerHTML = products
}

// context 1
// running this file in devolopment in isolation
// using our local index.htmk file
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products')

    // assuming our container doesn't have an element
    // with id dev-products
    if (el) {
        // we are probably running in isolation
        mount(el)
    }
}

export { mount }