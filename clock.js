const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime(){
    const date = new Date();    
    const jsHr = TimeZero(date.getHours());
    const jsMin = TimeZero(date.getMinutes());
    const jsSec = TimeZero(date.getSeconds());
    clockTitle.innerHTML = `${jsHr}:${jsMin}:${jsSec}`;

}

function TimeZero(object){
    if(object < 10){
        return `0${object}`;
    }else{
        return object;
    }
}

function init(){
    getTime();
    setInterval(getTime, 1000);    
}
init();
