import { MetalOptions } from './Metal.js'
import { SizeOptions } from './Size.js'
import { StyleOptions } from './Style.js'

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()

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

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `

    document.querySelector("#container").innerHTML = composedHTML
}

render()