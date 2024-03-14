export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let html = "<ul>"
    for (const style of styles) {
        html += `<li data-pk="${style.id}">${style.style}</li>`
    }
    html += "</ul>"

    return html
}