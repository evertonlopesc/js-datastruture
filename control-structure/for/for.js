// Fill an array with variables and then add them together.
let purchasePrice = 0;
let endValue = 0;

const cpu =         {piece: "Processador",   price: 1500};
const motherboard = {piece: "Placa-Mãe",     price: 890 };
const memory =      {piece: "Memória",       price: 350 };
const graphicCard = {piece: "Placa gráfica", price: 1850};
const masterBox =   {piece: "Gabinete",      price: 400 };
const font =        {piece: "Fonte",         price: 600 };
const ssd =         {piece: "Armazenamento", price: 940 };

let formCash =           {type: "À Vista",           value: 0.15,   quantity: 0 };
let formCheck =          {type: "Cheque Pré-datado", value: 0.10,   quantity: 1 };
let formParceledThree =  {type: "Parcelado",         value: 0.05,   quantity: 3 };
let formParceledSix =    {type: "Parcelado",         value: 0.00,   quantity: 6 };
let formParceledTwelve = {type: "Parcelado",         value: 0.08,   quantity: 12};

let names = [
    cpu.piece, motherboard.piece, memory.piece, graphicCard.piece, 
    ssd.piece, font.piece, masterBox.piece
];

let Items = [
    cpu.price, motherboard.price, memory.price, graphicCard.price, 
    ssd.price, font.price, masterBox.price
];

function convertPrice(coin) {
    return new Intl.NumberFormat("pr-BR", 
    {style: "currency", currency: "BRL"}).format(coin)
};

function showChosenProduct(names, items) {
    console.log("Produtos escolhidos:");

    for (let index = 0; index < items.length; index++) {
        console.log(
            names[index] + " = " + convertPrice(items[index])
        );
        purchasePrice += items[index];
    };
};

function verifyPaymentMethod(formPayment) {
    if (formPayment === formCash) {
        endValue = purchasePrice - (purchasePrice * formCash.value);
    } else if (formPayment  === formCheck) {
        endValue = purchasePrice - (purchasePrice * formCheck.value);
    } else if (formPayment === formParceledThree) {
        endValue = purchasePrice - (purchasePrice * formParceledThree.value);
    } else if (formPayment === formParceledSix) {
        endValue = purchasePrice;
    } else if (formPayment === formParceledTwelve) {
        endValue = purchasePrice + (purchasePrice * formParceledTwelve.value);
    } else {
        console.log("Erro: Pagamento inválido.");
    }
};

function diferenceValue(beginValue, endValue) {
    const diference = (beginValue - endValue) * (-1);

    if (diference < 0) { 
        console.log(
            convertPrice(diference) + 
            " de desconto");
    } else if (diference === 0) {
        console.log("Sem desconto");
    } else {
        console.log(
            convertPrice(diference) + 
            " de juros");
    }
};

function parceledValue(endValue, quantity) {
    const parceledValue = (endValue / quantity);

    if (quantity === 0) {
        console.log("Sem parcelas.");

    } else if (quantity === formCheck.quantity) {
        console.log(
            "O valor da parcela será de: " + convertPrice(parceledValue)
        );

    } else {
        console.log(
            "O valor das parcelas serão de: " + convertPrice(parceledValue)
        );
    }
};

function checkout() {
    // Choose a payment method of the project
    const formPayment = formParceledThree;

    console.log(
        `Total do pedido: ${ convertPrice(purchasePrice) }`
    );
    
    console.log(`Forma de pagamento escolhida: ${formPayment.type}.`);
    
    console.log(
        `Quantidade de parcelas: ${ formPayment.quantity } vez(es).`
    );

    verifyPaymentMethod(formPayment);

    console.log(`Total a pagar: ${ convertPrice(endValue) }`);

    diferenceValue(purchasePrice, endValue);

    parceledValue(endValue, formPayment.quantity);
};

console.log("------------------------------------------------------");

showChosenProduct(names, Items);

console.log("------------------------------------------------------");

console.log("Formas de pagamento: " +
    `
        - ${formCash.type},
        - ${formCheck.type},
        - ${formParceledThree.type} em ${formParceledThree.quantity} vezes,
        - ${formParceledSix.type} em ${formParceledSix.quantity} vezes,
        - ${formParceledTwelve.type} em ${formParceledTwelve.quantity} vezes
    `
); 

console.log("------------------------------------------------------");

checkout();
