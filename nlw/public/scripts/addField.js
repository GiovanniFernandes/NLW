//procurar o botão
document.querySelector("#add-time")/*qnd clicar nele*/.addEventListener('click', cloneField)

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll("input")
    fields.forEach(function(x){x.value=""})
    document.querySelector('#schedule-item').appendChild(newFieldContainer)
}