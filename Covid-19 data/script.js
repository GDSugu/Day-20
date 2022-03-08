
let container = document.createElement("div");
container.className="container-md"
let row = document.createElement("div");
row.className="row"


container.append(row)
document.body.append(container)



async function covid19data(){
    let cc = document.getElementById("search").value;
    
    let res = await fetch(`https://api.covid19api.com/country/${cc}`);
    let res1 = await res.json();
    

    for( let i=0; i<res1.length;i++){
       
       let res = document.createElement("div")
       res.className="col-md-4"
       let inner = document.createElement("div");
       inner.className="inner"      
        let date = document.createElement("div");
        date.className="date"
        date.innerHTML=`Date:${res1[i].Date.slice(0,10)}`
        let active = document.createElement("div");
        active.className="active"
        active.innerHTML=`Active:${res1[i].Active}`
        let confirmed = document.createElement("div");
        confirmed.className="confirmed"
        confirmed.innerHTML=`confirmed:${res1[i].Confirmed}`
        let death = document.createElement("div");
        death.className="death"
        death.innerHTML=`Death:${res1[i].Deaths}`
        let recovered = document.createElement("div");
        recovered.className="recovered"
        recovered.innerHTML=`recovery:${res1[i].Recovered}`
        let coordinates = document.createElement("div");
        coordinates.className="coordinates"
        coordinates.setAttribute("id","coordinate")
        coordinates.innerHTML=`Lat:${res1[i].Lat} Lon:${res1[i].Lat}`


        inner.append(date,active,confirmed,death,recovered,coordinates)
        res.append(inner)
        row.append(res)  
    }
         
}
covid19data();