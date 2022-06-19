let valor = 0

const QuantityOfItems = () => {
    return document.querySelector('#QuantityOfItens')
}

const ItensInMyCart = () => {
    return document.querySelector('#ItensInMyCart')
}

const AddItens = () => {
    valor++
    QuantityOfItems().innerHTML = valor
    ItensInMyCart().innerHTML = valor
}

const RemoveItens = () => {
    valor--
    
    if (valor <= -1) {
        return valor = 0
    }

    QuantityOfItems().innerHTML = valor
    ItensInMyCart().innerHTML = valor

}