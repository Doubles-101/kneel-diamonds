import { MetalOptions } from './Metal.js'
import { Orders } from './Orders.js'
import { SaveSubmission } from './SaveSubmission.js'
import { SizeOptions } from './Size.js'
import { StyleOptions } from './Style.js'

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()
    const buttonHTML = await SaveSubmission()
    const orderHTML = await Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${buttonHTML}
        </article>

        <article class="customOrders">
            ${orderHTML}
        </article>
    `

    document.querySelector("#container").innerHTML = composedHTML
}

// Custom event listener to change html when button is pressed
document.addEventListener("newOrderCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()