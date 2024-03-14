export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let html = "<ul>"
    for (const size of sizes) {
        html += `<li data-pk="${size.id}">${size.carets} carets</li>`
    }
    html += "</ul>"

    return html
}