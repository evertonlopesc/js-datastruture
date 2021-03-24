// Fill an array with variables and then add them together.
let purchasePrice = 0;
let endValue = 0;

function convertPrice(coin) {
    return new Intl.NumberFormat("pr-BR", 
    {style: "currency", currency: "BRL"}).format(coin)
};

class Desktop {
    constructor(description, price) {
        this.description = description;
        this.price = price;
    }

    printDesktop(){
        console.log(` Descrição: ${this.description} - 
            Valor: ${convertPrice(this.price)}`
        );
    }
};

let cpu = new Desktop(
    "Processador Intel Core i5 9400F 2.90GHz", 914.90);
let motherboard = new Desktop(
    "Placa Mãe ASUS Prime H310M-E DDR4 LGA 1151", 479.00);
let memory = new Desktop(
    "Memória DDR4 OLOy Owl Black, 8GB, 3000MHz", 356.70);
let graphicCard = new Desktop(
    "Placa de Vídeo Asus GeForce RTX 2060 OC EVO Dual, 192bit", 3914.13);
let font = new Desktop(
    "Fonte SuperFrame 500W, 80 Plus Bronze, PFC Ativo", 321.03);
let ssd = new Desktop(
    "SSD WD Green 480GB, Sata III, L 545MBs e G 430MBs", 415.90);
let masterBox = new Desktop(
    "Gabinete Gamer Redragon Grapple, Mid Tower", 339.00);

class Payment {
    constructor(method, value, quantity) {
        this.method = method;
        this.value = value;
        this.quantity = quantity;
    }

    printPayment() {
        console.log(this.method);
    }
};

let formCash = new Payment("À Vista", 0.15, 0);
let formCheck = new Payment("Cheque Pré-datado", 0.10, 1);
let formParceledThree = new Payment("Parcelado 3x", 0.05, 3);
let formParceledSix = new Payment("Parcelado 6x", 0.00, 6);
let formParceledTwelve = new Payment("Parcelado 12x", 0.08, 12);

let names = [
    cpu.description, motherboard.description, memory.description, 
    graphicCard.description, ssd.description, font.description, 
    masterBox.description
];

let items = [
    cpu.price, motherboard.price, memory.price, 
    graphicCard.price, ssd.price, font.price, 
    masterBox.price
];

console.log()

function calculateRequest(items) {
    for (let index = 0; index < items.length; index++) {
        purchasePrice += items[index];
    };

    return purchasePrice;
};

function showChosenProduct() {
    console.log("Produtos escolhidos:");
    cpu.printDesktop();
    motherboard.printDesktop();
    memory.printDesktop();
    graphicCard.printDesktop();
    font.printDesktop();
    ssd.printDesktop();
    masterBox.printDesktop();
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
        `Total do pedido: ${ convertPrice(calculateRequest(items)) }`
    );
    
    console.log(`Forma de pagamento escolhida: ${formPayment.method}.`);
    
    console.log(
        `Quantidade de parcelas: ${ formPayment.quantity } vez(es).`
    );

    verifyPaymentMethod(formPayment);

    diferenceValue(purchasePrice, endValue);

    console.log(`Total a pagar: ${ convertPrice(endValue) }`);
    
    parceledValue(endValue, formPayment.quantity);
};

console.log("------------------------------------------------------");

showChosenProduct();

console.log("------------------------------------------------------");

console.log("Formas de pagamento:"); 
formCash.printPayment();
formCheck.printPayment();
formParceledThree.printPayment();
formParceledSix.printPayment();
formParceledTwelve.printPayment();

console.log("------------------------------------------------------");

checkout();
