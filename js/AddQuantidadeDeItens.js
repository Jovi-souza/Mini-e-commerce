let valor = 0


const DOMSelectors = {
    NumberOfItens: document.querySelector('#NumberOfItens'),
    QuantityOfItems: document.querySelector('#QuantityOfItens'),
    NumberOfItensInMyCart: document.querySelector('#NumberOfItensInMyCart')
}

const AddItens = () => {
    valor++

    DOMSelectors.QuantityOfItems.innerHTML = valor
    DOMSelectors.NumberOfItensInMyCart.innerHTML = valor
}

const RemoveItens = () => {
    valor--

    if (valor <= -1) {
        return valor = 0
    }

    DOMSelectors.QuantityOfItems.innerHTML = valor
    DOMSelectors.NumberOfItensInMyCart.innerHTML = valor
}