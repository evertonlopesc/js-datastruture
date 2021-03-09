var obj = { name: "John" };

function testTrusthy(params) {
    return params ? console.log("trusthy") : console.log("falsy");
}

testTrusthy(true);
testTrusthy(false);
testTrusthy(new Boolean(false));
testTrusthy("");
testTrusthy("Packt");
testTrusthy(new String(""));
testTrusthy(1);
testTrusthy(-1);
testTrusthy(NaN);
testTrusthy(new Number(NaN));
testTrusthy({});
testTrusthy(obj);
testTrusthy(obj.name);
testTrusthy(obj.age);
