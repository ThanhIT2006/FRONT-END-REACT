function greetingWithWeather(name,weather) {
    if (weather=="sunny") {
        console.log(`Chao ${name}! Hom nay troi nang tuyet voi!`);
    }else if(weather=="rainy"){
        console.log(`Chao ${name}! Hom nay troi mua, hay mang theo o!`);
    }else{
        console.log(`Chao ${name}! Hom nay thoi tiet khong xac dinh`);
    }
}
greetingWithWeather("Nguyen An","sunny");
greetingWithWeather("Le Nam","rainy");
greetingWithWeather("Tran Tam","cloudy");


