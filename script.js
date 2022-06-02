const fruitTea = "https://linedrejer.dk/gotcha-db/wordpress/wp-json/wp/v2/menu?categories=3";

getFruitTea();

function getFruitTea(){
    fetch(fruitTea)
    .then(res=>res.json())
    .then(setupFruitTea);
}

function setupFruitTea(fruitTea){
    const template = document.querySelector(".fruit_tea_template").content;
    const parentElement = document.querySelector(".menu_fruit_tea");
    fruitTea.forEach(tea=>{
        const copy = template.cloneNode(true);
        copy.querySelector(".fruit_tea_img").src = tea.image.guid;
        copy.querySelector(".fruit_tea_name").textContent = tea.title.rendered;

       
parentElement.appendChild(copy);
})
}

const milkTea = "https://linedrejer.dk/gotcha-db/wordpress/wp-json/wp/v2/menu?categories=4";

getMilkTea();

function getMilkTea(){
    fetch(milkTea)
    .then(res=>res.json())
    .then(setupMilkTea);
}

function setupMilkTea(milkTea){
    const template = document.querySelector(".milk_tea_template").content;
    const parentElement = document.querySelector(".menu_milk_tea");
    milkTea.forEach(milkTea=>{
        const copy = template.cloneNode(true);
        copy.querySelector(".milk_tea_img").src = milkTea.image.guid;
        copy.querySelector(".milk_tea_name").textContent = milkTea.title.rendered;

       

parentElement.appendChild(copy);
})
}


const tapioca = "https://linedrejer.dk/gotcha-db/wordpress/wp-json/wp/v2/menu?categories=6";

getTapioca();

function getTapioca(){
    fetch(tapioca)
    .then(res=>res.json())
    .then(setupTapioca);
}

function setupTapioca(tapioca){
    const template = document.querySelector(".tapioca_template").content;
    const parentElement = document.querySelector(".tapioca");
    tapioca.forEach(tapioca=>{
        const copy = template.cloneNode(true);
        copy.querySelector(".tapioca_img").src = tapioca.image.guid;
        copy.querySelector(".tapioca_name").textContent = tapioca.title.rendered;

       

parentElement.appendChild(copy);
})
}


const bubbles = "https://linedrejer.dk/gotcha-db/wordpress/wp-json/wp/v2/menu?categories=5";

getBubbles();

function getBubbles(){
    fetch(bubbles)
    .then(res=>res.json())
    .then(setupBubbles);
}

function setupBubbles(bubbles){
    const template = document.querySelector(".bubbles_template").content;
    const parentElement = document.querySelector(".bubbles");
    bubbles.forEach(bubbles=>{
        const copy = template.cloneNode(true);
        copy.querySelector(".bubbles_img").src = bubbles.image.guid;
        copy.querySelector(".bubbles_name").textContent = bubbles.title.rendered;

       

parentElement.appendChild(copy);
})
}


const jellies = "https://linedrejer.dk/gotcha-db/wordpress/wp-json/wp/v2/menu?categories=7";

getJellies();

function getJellies(){
    fetch(jellies)
    .then(res=>res.json())
    .then(setupJellies);
}

function setupJellies(jellies){
    const template = document.querySelector(".jellies_template").content;
    const parentElement = document.querySelector(".jellies");
    jellies.forEach(jellies=>{
        const copy = template.cloneNode(true);
        copy.querySelector(".jellies_img").src = jellies.image.guid;
        copy.querySelector(".jellies_name").textContent = jellies.title.rendered;

       

parentElement.appendChild(copy);
})
}