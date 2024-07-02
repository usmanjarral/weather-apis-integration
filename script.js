let rawalpindiTemperature=document.querySelector('.rawalpindi-temp')
let rawalpindiImg=document.querySelector('.rawalpindi-img');
let rawalpindiWind=document.querySelector('.rawalpindi-wind')
let rawalpindiHumidity=document.querySelector('.rawalpindi-humidity')
let rawalpindiWindDegree=document.querySelector('.rawalpindi-wind_degree')


// Just rawalpindi displayer
async function weatherDisplayerrawalpindi(){
    let url1=`https://api.weatherapi.com/v1/current.json?key=ea38e5e435ff426bbd260806233008&q=rawalpindi&aqi=no`
    let response= await fetch(url1)
    let data = await response.json();
    const{  
        current:{
            temp_c,condition:{icon},wind_kph,humidity,wind_degree
        }
    }=data;
    RawalpindiWeather(temp_c,icon,wind_kph,humidity,wind_degree)
}
weatherDisplayerrawalpindi()
function RawalpindiWeather(temp,picture,wind,humidity,windDegree){
    rawalpindiTemperature.innerText=temp+'°';
    rawalpindiImg.src=picture;
    rawalpindiWind.innerText=wind
    rawalpindiHumidity.innerText=humidity
    rawalpindiWindDegree.innerText=windDegree
}









let Temperature=document.querySelector('.temp')
let Img=document.querySelector('.img');
let Wind=document.querySelector('.wind')
let Humidity=document.querySelector('.humidity')
let WindDegree=document.querySelector('.wind_degree')
let cityName=document.querySelector('.city-name')
let blackBox=document.querySelector('.black-box')
let search=document.querySelector('.search')
let button=document.querySelector('button')

let city='lahore';

async function wheatherDisplay(city){   
    let url = `https://api.weatherapi.com/v1/current.json?key=ea38e5e435ff426bbd260806233008&q=${city}&aqi=no`
    try{
        let response =await fetch(url);
        let data=await response.json();
        console.log(data);
        const {
            current:{temp_c ,wind_kph,humidity,wind_degree, condition:{icon}},
            location:{name}            
        }=data;
        console.log(name);
        weather(temp_c ,wind_kph,humidity,wind_degree,icon,name);
    }catch(e){
        console.log(e);
    }
    
}

wheatherDisplay(city);

function weather(temp,wind,humidity,wind_degree,icon,name){
    Temperature.innerText=temp;
    Img.src=icon;
    Wind.innerText=wind;
    Humidity.innerText=humidity;
    WindDegree.innerText=wind_degree;
    cityName.innerText=name;
}

button.addEventListener('click',()=>{
    city = search.value;
    wheatherDisplay(city);
})