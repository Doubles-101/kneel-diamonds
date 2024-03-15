import { setStyleChoice } from "./TransientState.js"

const handleStyleChoice = (event) => {

    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
}


export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let optionsHTML = "<h2>Styles</h2>"

    // Use map() to generate new array of strings
    const divStringArray = styles.map(
        (style) => {
          return `<div>
              <input type='radio' name='style' value='${style.id}' /> ${style.style}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}

document.addEventListener("change", handleStyleChoice)