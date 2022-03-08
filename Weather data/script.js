var div = document.createElement("div");
div.className="container"
var table = document.createElement("table");
table.className = "table table-striped table-hover table-secondary";
var thead = document.createElement("thead");
thead.className="thead-dark";

var tr = document.createElement("tr");
var th1 = createele("th","Name");
var th2 = createele("th","Humidity");
var th3 = createele("th","Pressure");
var th4 = createele("th","Temperature");
var th5 = createele("th","Wind-speed");
var th6 = createele("th","Sea-level");
var th7 = createele("th","Ground-level");

tr.append(th1,th2,th3,th4,th5,th6,th7);
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

async function weather(){
        let latitude = document.getElementById("lat").value
        let longitude = document.getElementById("long").value   
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4ee8eae4781643bb17ae3c8a7393e581`);
        let res1 = await res.json();
        var tr1 = document.createElement("tr");
        var td1 = createele("td",res1.name);
        var td2 = createele("td",res1.main.humidity);
        var td3 = createele("td",res1.main.pressure);
        var td4 = createele("td",res1.main.temp);
        var td5 = createele("td",res1.wind.speed);
        var td6 = createele("td",res1.main.sea_level);
        var td7 = createele("td",res1.main.grnd_level);
        tr1.append(td1,td2,td3,td4,td5,td6,td7);
        tbody.append(tr1)     
}
weather()