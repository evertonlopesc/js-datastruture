// o cliente faz o pedido:          requestX
// mostrar opções de pagamento:     [cash, check, parceledThree, parceledSix, parceledTwelve]
// valor total da compra:           requestValue
// verificar forma de pagamento:    payment[3]
// calcular valor final:            requestValue - payment[x]
// calcular o valor das parcelas:   valuePaymentParceled/numberInstallments
// exibir: {
//      requestValue
//      endValue
//      difference
//      differenceDiscount or differenceFees
//      numberInstallments
//      installmentsValue
// }

const requestRandom = 2996.00;
let endValue = 0;

let formCash =           {type: "À Vista",           value: 0.15,   quantity: 0};
let formCheck =          {type: "Cheque Pré-datado", value: 0.10,   quantity: 1};
let formParceledThree =  {type: "Parcelado",         value: 0.05,   quantity: 3};
let formParceledSix =    {type: "Parcelado",         value: 0.00,   quantity: 6};
let formParceledTwelve = {type: "Parcelado",         value: 0.08,   quantity: 12};

function verifyPaymentMethod(formPayment) {
    if (formPayment === formCash) {
        endValue = requestRandom - (requestRandom * formCash.value);
    } else if (formPayment  === formCheck) {
        endValue = requestRandom - (requestRandom * formCheck.value);
    } else if (formPayment === formParceledThree) {
        endValue = requestRandom - (requestRandom * formParceledThree.value);
    } else if (formPayment === formParceledSix) {
        endValue = requestRandom;
    } else if (formPayment === formParceledTwelve) {
        endValue = requestRandom + (requestRandom * formParceledTwelve.value);
    } else {
        console.log("Erro: Pagamento inválido.");
    }
}

function diferenceValue(beginValue, endValue) {
    const diference = (beginValue - endValue) * (-1);

    if (diference < 0) { 
        console.log(
            new Intl.NumberFormat("pr-BR", 
            {style: "currency", currency: "BRL"}).format(diference) + 
            " de desconto");
    } else if (diference === 0) {
        console.log("Sem desconto");
    } else {
        console.log(
            new Intl.NumberFormat("pr-BR", 
            {style: "currency", currency: "BRL"}).format(diference) + 
            " de juros");
    }
}

function parceledValue(endValue, quantity) {
    const parceledValue = (endValue / quantity);

    if (quantity === 0) {
        console.log("Sem parcelas.");
    } else if (quantity === formCheck.quantity) {
        console.log(
            "O valor da parcela será de: " +
            new Intl.NumberFormat("pr-BR", 
            {style: "currency", currency: "BRL"}).format(parceledValue)
        );
    } else {
        console.log(
            "O valor das parcelas serão de: " +
            new Intl.NumberFormat("pr-BR", 
            {style: "currency", currency: "BRL"}).format(parceledValue)
        );
    }
}

function checkout() {
    const formPayment = formParceledTwelve;

    console.log(`Pagamento total da compra: ${
            new Intl.NumberFormat("pr-BR", 
            {style: "currency", currency: "BRL"}).format(requestRandom)
        }`
    );
    
    console.log(`Forma de pagamento escolhida: ${formPayment.type}.`);

    verifyPaymentMethod(formPayment);

    console.log(`Total a pagar: ${
        new Intl.NumberFormat("pr-BR", 
        {style: "currency", currency: "BRL"}).format(endValue)
    }`
    );

    diferenceValue(requestRandom, endValue);

    console.log(`Quantidade de parcelas: ${formPayment.quantity}.`);

    parceledValue(endValue, formPayment.quantity);
}

console.log(
    "Formas de pagamento: " +
    `
        - ${formCash.type},
        - ${formCheck.type},
        - ${formParceledThree.type} em ${formParceledThree.quantity} vezes,
        - ${formParceledSix.type} em ${formParceledSix.quantity} vezes,
        - ${formParceledTwelve.type} em ${formParceledTwelve.quantity} vezes
    `
)    

checkout();
