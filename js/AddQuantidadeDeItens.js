let valor = 0

const DOMSelectors = {
    NumberOfItens: document.querySelector('#NumberOfItens'),
    QuantityOfItems: document.querySelector('#QuantityOfItens'),
    NumberOfItensInMyCart: document.querySelector('#NumberOfItensInMyCart'),
    AmountOfProduct: document.querySelector('#AmountOfProduct'),
    ValueTotal: document.querySelector('#ValueTotal')
}

const AddItens = () => {
    valor++

    DOMSelectors.QuantityOfItems.innerHTML = valor
    DOMSelectors.NumberOfItensInMyCart.innerHTML = valor
    DOMSelectors.AmountOfProduct.innerHTML = valor

    DOMSelectors.ValueTotal.innerHTML = (valor * 125).toFixed(2).replace('.', ',')
}

const RemoveItens = () => {
    valor--

    if (valor <= -1) {
        return valor = 0
    }

    DOMSelectors.QuantityOfItems.innerHTML = valor
    DOMSelectors.NumberOfItensInMyCart.innerHTML = valor
    DOMSelectors.AmountOfProduct.innerHTML = valor

    DOMSelectors.ValueTotal.innerHTML = (valor * 125).toFixed(2).replace('.', ',')
}