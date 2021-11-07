import bootstrap from 'bootstrap'
import { f } from './helpers'

const form = document.getElementById("form")

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const inputs = Array.from(event.target.elements)
        .filter((e) => !!e.name)
        .map(({name, value}) => [name, value])
    const request = Object.fromEntries(inputs)

    const response = await fetch("https://api.chigrin.ml/form", {
        method: "POST",
        body: JSON.stringify(request)
    })
    const data = await response.json()
    console.log(data)
})

