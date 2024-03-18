// Transient State
const transientState = {
    "metalId": 0,
    "styleId": 0,
    "sizeId": 0
}


// Setter Functions
export const setStyleChoice = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}
export const setMetalChoice = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}
export const setSizeChoice = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

// Puts transient state into permanent
export const placeOrder = async () => {
    
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)

}