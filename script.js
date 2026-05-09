function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
})
}

function contact(){
document.getElementById("contact").scrollIntoView({
behavior:"smooth"
})
}

function toggleFaq(element){

let p = element.nextElementSibling

if(p.style.display === "block"){
p.style.display = "none"
}else{
p.style.display = "block"
}

}


const MIN_SPEED = 1.5
const MAX_SPEED = 2.5

function randomNumber(min,max){
return Math.random()*(max-min)+min
}

class Blob{

constructor(el){

this.el=el

const rect=this.el.getBoundingClientRect()

this.size=rect.width

this.initialX=randomNumber(0,window.innerWidth-this.size)
this.initialY=randomNumber(0,window.innerHeight-this.size)

this.el.style.top=this.initialY+"px"
this.el.style.left=this.initialX+"px"

this.vx=randomNumber(MIN_SPEED,MAX_SPEED)*(Math.random()>0.5?1:-1)
this.vy=randomNumber(MIN_SPEED,MAX_SPEED)*(Math.random()>0.5?1:-1)

this.x=this.initialX
this.y=this.initialY

}

update(){

this.x+=this.vx
this.y+=this.vy

if(this.x>=window.innerWidth-this.size){
this.x=window.innerWidth-this.size
this.vx*=-1
}

if(this.y>=window.innerHeight-this.size){
this.y=window.innerHeight-this.size
this.vy*=-1
}

if(this.x<=0){
this.x=0
this.vx*=-1
}

if(this.y<=0){
this.y=0
this.vy*=-1
}

}

move(){
  this.el.style.transform =
    `translate(${this.x - this.initialX}px, ${this.y - this.initialY}px)`;
}

}



function initBlobs(){

const blobEls=document.querySelectorAll(".bouncing-blob")

const blobs=Array.from(blobEls).map(el=>new Blob(el))

function update(){

requestAnimationFrame(update)

blobs.forEach(blob=>{
blob.update()
blob.move()
})

}

requestAnimationFrame(update)

}

initBlobs()


const cookieBox = document.querySelector(".cookie__box");

if(cookieBox){

const acceptBtn = cookieBox.querySelector(".accept__btn");

acceptBtn.onclick = () => {

document.cookie =
"siteCookieAccepted=true; max-age=" +
60 * 60 * 24 * 30;

cookieBox.classList.add("hide");

};

let checkCookie = document.cookie.indexOf("siteCookieAccepted=true");

if(checkCookie != -1){

cookieBox.classList.add("hide");

}

}

function openLogin(){
document.getElementById("loginModal").style.display="flex"
}

function closeLogin(){
document.getElementById("loginModal").style.display="none"
}

function showLogin(){

document.getElementById("loginForm").style.display="flex"
document.getElementById("registerForm").style.display="none"

document.querySelectorAll(".tab")[0].classList.add("active")
document.querySelectorAll(".tab")[1].classList.remove("active")

}

function showRegister(){

document.getElementById("loginForm").style.display="none"
document.getElementById("registerForm").style.display="flex"

document.querySelectorAll(".tab")[1].classList.add("active")
document.querySelectorAll(".tab")[0].classList.remove("active")

}

function checkPrice(){

let price = Number(document.getElementById("housePrice").value)
let avg = Number(document.getElementById("avgPrice").value)

let diff = ((price - avg) / avg) * 100

if(diff > 15){
document.getElementById("priceResult").innerHTML =
"🔴 Ціна завищена на " + diff.toFixed(1) + "%"
}
else if(diff < -15){
document.getElementById("priceResult").innerHTML =
"🟢 Дуже вигідна ціна. Нижче ринку на " + Math.abs(diff).toFixed(1) + "%"
}
else{
document.getElementById("priceResult").innerHTML =
"🟡 Ціна відповідає ринку"
}

}



function checkSafety(){

let score = document.getElementById("district").value

let text = ""

if(score >= 8){
text = "🟢 Один із найбезпечніших районів"
}
else if(score >= 6){
text = "🟡 Середній рівень безпеки"
}
else{
text = "🔴 Підвищений ризик"
}

document.getElementById("safeResult").innerHTML = text

}



function checkMortgage(){

let income = Number(document.getElementById("income").value)
let family = Number(document.getElementById("family").value)
let firstPay = Number(document.getElementById("firstPay").value)

let maxPrice = income * 60 + firstPay

document.getElementById("mortgageResult").innerHTML =
"🏠 Ви можете претендувати на житло до $" + maxPrice.toFixed(0)

}

function toggleTheme(){

document.body.classList.toggle("dark-mode")

}

function saveHome(name){

alert("❤️ Додано в обране: " + name)

}



function aiHelp(){

let budget = Number(document.getElementById("aiBudget").value)

let text = ""

if(budget < 70000){
text = "Рекомендуємо 1 кімнатну квартиру Дарницький район"
}
else if(budget < 120000){
text = "2 кімнатна квартира Оболонь або Позняки"
}
else if(budget < 180000){
text = "3 кімнатна Голосіївський район"
}
else{
text = "Premium ЖК Печерський район"
}

document.getElementById("aiResult").innerHTML = text

}

function unicornAI(){

let money = Number(document.getElementById("money").value)

let result = ""

if(money < 70000){
result = "1к квартира Дарницький район"
}
else if(money < 120000){
result = "2к квартира Оболонь"
}
else if(money < 180000){
result = "3к Голосіївський"
}
else{
result = "Premium ЖК Печерськ"
}

document.getElementById("uniResult").innerHTML =
"🤖 AI рекомендує: " + result

}



function roiCalc(){

let buy = Number(document.getElementById("buyPrice").value)
let rent = Number(document.getElementById("rentMonth").value)

let roi = (rent * 12 / buy) * 100

document.getElementById("roiResult").innerHTML =
"💰 ROI = " + roi.toFixed(1) + "% річних"

}

function showDistrict(area){

let box = document.getElementById("districtInfo");

if(area === "pechersk"){
box.innerHTML =
"🏙 Печерський<br>" +
"💰 $3200 / м²<br>" +
"🟢 Безпека: висока<br>" +
"🏫 Школи: 18<br>" +
"🚇 Метро: 6 станцій<br>" +
"🚨 Тривоги: низький ризик";
}

if(area === "holosiiv"){
box.innerHTML =
"🏙 Голосіївський<br>" +
"💰 $2100 / м²<br>" +
"🟢 Безпека: добра<br>" +
"🏫 Школи: 24<br>" +
"🚇 Метро: 5 станцій<br>" +
"🚨 Тривоги: середній ризик";
}

if(area === "obolon"){
box.innerHTML =
"🏙 Оболонь<br>" +
"💰 $1900 / м²<br>" +
"🟡 Безпека: середня<br>" +
"🏫 Школи: 20<br>" +
"🚇 Метро: 4 станції<br>" +
"🚨 Тривоги: середній ризик";
}

if(area === "darnytsia"){
box.innerHTML =
"🏙 Дарницький<br>" +
"💰 $1600 / м²<br>" +
"🔴 Безпека: нижча<br>" +
"🏫 Школи: 17<br>" +
"🚇 Метро: 3 станції<br>" +
"🚨 Тривоги: підвищений ризик";
}

}

let map;
let markers = [];

window.addEventListener("load", function(){

  if(document.getElementById("kyivMap")){

    map = L.map('kyivMap').setView([50.4501, 30.5234], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    loadPrices(); // стартовий шар
  }

});

const districts = {
  pechersk: { name:"Печерський", price:3500, safety:5 },
  obolon: { name:"Оболонський", price:2200, safety:4 },
  podil: { name:"Подільський", price:2700, safety:4 },
  svyatoshyn: { name:"Святошинський", price:1800, safety:3 },
  troieshchyna: { name:"Троєщина", price:1200, safety:2 }
};

function loadPrices(){

  clearMarkers();

  Object.keys(districts).forEach(key => {
    let d = districts[key];

    let marker = L.circle([50.45 + Math.random()*0.1, 30.5 + Math.random()*0.2], {
      radius: d.price,
      color: "green"
    }).addTo(map);

    marker.bindPopup(`${d.name}<br>💰 ${d.price}$/м²`);

    markers.push(marker);
  });

  document.getElementById("mapInfo").innerText =
    "Показано середні ціни по районах Києва";
}

function loadSafety(){

  clearMarkers();

  Object.keys(districts).forEach(key => {
    let d = districts[key];

    let color =
      d.safety >= 4 ? "green" :
      d.safety === 3 ? "orange" : "red";

    let marker = L.circle([50.45 + Math.random()*0.1, 30.5 + Math.random()*0.2], {
      radius: 1000,
      color: color
    }).addTo(map);

    marker.bindPopup(`${d.name}<br>🛡 рівень: ${d.safety}/5`);

    markers.push(marker);
  });

  document.getElementById("mapInfo").innerText =
    "Рівень безпеки районів (умовна модель)";
}

function loadSchools(){

  clearMarkers();

  let schools = [
    [50.46,30.52],
    [50.44,30.50],
    [50.47,30.55]
  ];

  schools.forEach(s => {
    let m = L.marker(s).addTo(map)
      .bindPopup("🏫 Школа");

    markers.push(m);
  });

  document.getElementById("mapInfo").innerText =
    "Показано школи Києва";
}

function loadMetro(){

  clearMarkers();

  let metro = [
    [50.4504,30.5247],
    [50.4546,30.5238],
    [50.4412,30.5186]
  ];

  metro.forEach(m => {
    let marker = L.circleMarker(m, {
      radius:8
    }).addTo(map).bindPopup("🚇 Станція метро");

    markers.push(marker);
  });

  document.getElementById("mapInfo").innerText =
    "Метро Києва";
}

function loadAlerts(){

  clearMarkers();

  let zones = [
    [50.45,30.52],
    [50.47,30.53]
  ];

  zones.forEach(z => {
    let circle = L.circle(z, {
      radius: 5000,
      color: "red"
    }).addTo(map).bindPopup("🚨 Повітряна тривога (умовно)");

    markers.push(circle);
  });

  document.getElementById("mapInfo").innerText =
    "Модель зон тривоги (симуляція)";
}

function showLayer(type){

  if(type === "prices") loadPrices();
  if(type === "safety") loadSafety();
  if(type === "schools") loadSchools();
  if(type === "metro") loadMetro();
  if(type === "alerts") loadAlerts();
}

function clearMarkers(){
  markers.forEach(m => map.removeLayer(m));
  markers = [];
}

function initTabs() {
  const tabs = document.querySelector(".tabs");
  if (!tabs) return;

  const selector = tabs.querySelector(".selector");
  const activeItem = tabs.querySelector(".tab-link.active");

  if (!selector || !activeItem) return;

  function moveSelector(element) {
    selector.style.left = element.offsetLeft + "px";
    selector.style.width = element.offsetWidth + "px";
  }

  moveSelector(activeItem);

  window.addEventListener("resize", function () {
    const currentActive = tabs.querySelector(".tab-link.active");
    if (currentActive) {
      moveSelector(currentActive);
    }
  });

  tabs.querySelectorAll(".tab-link").forEach(link => {
    link.addEventListener("mouseenter", function () {
      moveSelector(this);
    });
  });

  tabs.addEventListener("mouseleave", function () {
    const currentActive = tabs.querySelector(".tab-link.active");
    if (currentActive) {
      moveSelector(currentActive);
    }
  });
}

window.addEventListener("load", initTabs);

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 20;
  const y = (e.clientY / window.innerHeight) * 20;

  document.body.style.backgroundPosition = `${x}px ${y}px`;
});

function initParticles(){
  const particlesWrap = document.getElementById("particles");
  if(!particlesWrap) return;

  particlesWrap.innerHTML = "";

  const count = window.innerWidth < 768 ? 22 : 40;

  for(let i = 0; i < count; i++){
    const particle = document.createElement("span");
    particle.classList.add("particle");

    const size = Math.random() * 4 + 3;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.bottom = -(Math.random() * 20) + "vh";
    particle.style.animationDuration = (Math.random() * 10 + 12) + "s";
    particle.style.animationDelay = (Math.random() * 8) + "s";
    particle.style.opacity = Math.random() * 0.5 + 0.2;

    particlesWrap.appendChild(particle);
  }
}

window.addEventListener("load", initParticles);
window.addEventListener("resize", initParticles);