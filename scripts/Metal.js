export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let html = "<ul>"
    for (const metal of metals) {
        html += `<li data-pk="${metal.id}">${metal.metal}</li>`
    }
    html += "</ul>"

    return html
}