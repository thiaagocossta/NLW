document.querySelector("#add-time")//procurando botão 
.addEventListener('click', cloneField)//quando clicar
//ação de quando clicar no botão 
function cloneField() {
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true)//clonando (node se refere a tags,elementos e estrutura HTML )
    const fields = newfieldContainer.querySelectorAll('input')
    fields.forEach(function(field){
        field.value = ""
    })
    document.querySelector('#schedule-items').appendChild(newfieldContainer)
}