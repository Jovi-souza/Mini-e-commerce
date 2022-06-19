let valor = 0

const QuantityOfItems = () => {
    return document.querySelector('#QuantityOfItens')
}

const AddItens = () => {
    valor++
    QuantityOfItems().innerHTML = valor
}

const RemoveItens = () => {
    valor--
    QuantityOfItems().innerHTML = valor

    if( valor <= 0 ) {
        valor = 1
    }
}