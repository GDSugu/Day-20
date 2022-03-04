var div = document.createElement("div");
div.className="container"
var table = document.createElement("table");
table.className = "table table-striped table-hover table-secondary";
var thead = document.createElement("thead");
thead.className="thead-dark";

var tr = document.createElement("tr");
var th1 = createele("th","From Currency");
var th2 = createele("th","To Currency");
var th3 = createele("th","Exchange Rate");

tr.append(th1,th2,th3);
thead.append(tr);

var tbody = document.createElement("tbody");

table.append(thead,tbody);
div.append(table)
document.body.append(div);

function createele(elename,value){
    var res = document.createElement(elename);
    res.innerHTML = value;
    return res;
}
async function exchangeRate(){

    let fromcurrency = document.getElementById("fromCurrency").value;
    let tocurrency = document.getElementById("toCurrency").value;
    
    let exchange = await fetch(`https://v6.exchangerate-api.com/v6/5461f860c41344e038294f5b/pair/${fromcurrency}/${tocurrency}`);
    let exchange1 = await exchange.json();

    let exchangeRate = document.getElementById("exchangeRate");
    exchangeRate.value = `${exchange1.conversion_rate}`;

    var tr1 = document.createElement("tr");
    var td1 = createele("td");
    td1.innerHTML=fromcurrency;
    var td2 = createele("td");
    td2.innerHTML=tocurrency
    
    var td3 = createele("td");
    td3.innerHTML=`${exchange1.conversion_rate}`;
    tr1.append(td1,td2,td3);
    tbody.append(tr1)      
}
exchangeRate();









