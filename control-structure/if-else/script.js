function verifyMonthTrue(params) {
    if (params === 5) {
        console.log("Month is equal to 1.");
    }
}

function verifyMonthFalse(params) {
    if (params === 0) {
        console.log("Month is equal to 1.");
    } else {
        console.log("Month is not equal to 1, the value of Month is " + params);
    }
}

function verifyMonthSimple(params) {
    params === 5 ? console.log(true) : console.log(false);
}

function verifyNumberComposite(params) {
    if (params === 1) {
        console.log("January");
    } else if (params === 2) {
        console.log("February");
    } else if (params === 3) {
        console.log("March");
    } else {
        console.log("Month is not January, February or March");
    }
}

var month = 5;

verifyMonthTrue(month);
verifyMonthFalse(month);
verifyMonthSimple(month);
verifyNumberComposite(month);

// ###################################################################################################
/**
 * 5. Considere a situação em que um cliente faz uma determinada compra em uma loja.
 * Ao realizar o pagamento, são oferecidas as seguintes condições para pagamento:
 *  • Pagamento à vista - 15% de desconto sobre o valor total da compra.
 *  • Pagamento com cheque pré-datado para 30 dias - 10% de desconto sobre o valortotal da compra.
 *  • Pagamento parcelado em 3 vezes - 5% de desconto sobre o valor total da compra.
 *  • Pagamento parcelado em 6 vezes - não tem desconto.
 *  • Pagamento parcelado em 12 vezes - 8% de acréscimo sobre o valor total dacompra.
 *
 *  De acordo com o valor total da compra, verifique a opção de pagamento do cliente,
 *  calcule o valor final da compra e se a escolha for por pagamento parcelado,
 *  calcule também o valor das parcelas. Apresente ao usuário uma mensagem com o valor total da compra,
 *  o valor final dacompra, a diferença entre os dois, identifique como desconto se a diferença for positiva,
 *  como juros se for negativa, mostre, também, a quantidade e o valor das parcelas.
 */
