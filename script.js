const tempfied=document.querySelector(".weather1");
const cityfied=document.querySelector(".weather2 p");
const datefied=document.querySelector(".weather2 span");
const emojified=document.querySelector(".weather3 img");
const weatherfied=document.querySelector(".weather3 span");
let searchfied=document.querySelector(".search");
const form=document.querySelector("form");
let target="Ludhiana";
const fetchdata=async (target)=>
{
const url=`https://api.weatherapi.com/v1/current.json?key=310cc484d2a541d58d8100201230807&q=${target}`; //& ke baad ka url hata dena
const response=await fetch(url);
// fetch(url) ne ek promise return kiya jo response me save ho geay
const data=await response.json();// yeh bhi ek promise hi return karega.
console.log(data);
updatedom(`${data.current.temp_c}°`,data.location.name, data.current.condition.icon,data.current.condition.text,String(new Date()).substring(0,String(new Date()).lastIndexOf('G')));
};

function updatedom(temp,city,emoji,text,date){
    tempfied.innerText=temp; 
    cityfied.innerText=city;
    emojified.src=emoji;
    weatherfied.innerText=text;
    datefied.innerText=date;

}
fetchdata(target);   
const search=(e)=>
{
e.preventDefault();
target=searchfied.value;
fetchdata(target);
console.log(target);
};
form.addEventListener("submit",search);
