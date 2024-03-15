import { setSizeChoice } from "./TransientState.js"

const handleSizeChoice = (event) => {

    if (event.target.name === "size") {
        setSizeChoice(parseInt(event.target.value))
    }
}


export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let optionsHTML = "<h2>Sizes</h2>"

    // Use map() to generate new array of strings
    const divStringArray = sizes.map(
        (size) => {
          return `<div>
              <input type='radio' name='size' value='${size.id}' /> ${size.carets}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}

document.addEventListener("change", handleSizeChoice)