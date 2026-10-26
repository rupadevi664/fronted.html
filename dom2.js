const data = {
 "cars": [

 { "name": "maruti", model: "swift" },

{ "name": "benz", model: "s300" },

 { "name": "bmw", model: "X9" }
 ],
 "bikes": [

 { "name": "hero", model: "splender" },

 { "name": "honda", model: "shine" },

 { "name": "yamaha", model: "r15" }

]

}
// data.bikes.map((bike,idx)=>{
//     console.log(`${bike.name}:${bike.model}`)
//     let li = document.createElement('li')
//     li.className = 'li-bike-item'
//     li.textContent = `${bike.name}:${bike.model}`
//     bikesList.appendChild(li)
// })
const carsList = document.getElementById('cars');
const bikesList = document.getElementById('bikes');

data.cars.map((car, index) => {
    console.log(`${car.name}: ${car.model}`);
    
    const li = document.createElement('li');
    li.textContent = `${car.name}:${car.model}`;
    carsList.appendChild(li);
})

data.bikes.map((bike, index) => {
    console.log(`${bike.name}: ${bike.model}`);
    
    const li = document.createElement('li');
    li.textContent = `${bike.name}:${bike.model}`;
    bikesList.appendChild(li);
})