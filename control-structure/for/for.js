// Fill an array with variables and then add them together.
let purchasePrice = 0;

const cpu = {piece: "CPU", price: 1500};
const motherboard = {piece: "Motherboard", price: 890};
const memory = {piece: "Memory", price: 350};
const graphicCard = {piece: "Graphic Card", price: 1850};
const masterBox = {piece: "Masterbox", price: 400};
const font = {piece: "CPU", price: 600};
const ssd = {piece: "SSD", price: 940};

let names = [
    cpu.piece, motherboard.piece, memory.piece, graphicCard.piece, 
    ssd.piece, font.piece, masterBox.piece
];

let checkout = [
    cpu.price, motherboard.price, memory.price, graphicCard.price, 
    ssd.price, font.price, masterBox.price
];

for (let index = 0; index < checkout.length; index++) {
    console.log(
        names[index] + " = " +
        new Intl.NumberFormat("pr-BR", 
        {style: "currency", currency: "BRL"}).format(checkout[index])
    )
}

for (let index = 0; index < checkout.length; index++) {
    purchasePrice += checkout[index];
}

console.log("Total = " +
    new Intl.NumberFormat("pr-BR", 
    {style: "currency", currency: "BRL"}).format(purchasePrice)
);