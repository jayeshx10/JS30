const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    //FOR SECONDS-HAND
    const seconds = now.getSeconds();
    const seconds_degrees = ((seconds/60)* 60) + 90;
    secondHand.style.transform = `rotate(${seconds_degrees}deg)`;
    console.log(seconds);

    //FOR MINUTE-HAND
   const minutes = now.getMinutes();
   const minutes_degrees = ((minutes/60)*360) + 90;
   minuteHand.style.transform = `rotate(${minutes_degrees}deg)`;

   //FOR HOUR-HAND
   const hours = now.getHours();
   const hours_degrees = ((hours/12)*360) + 90;
   hourHand.style.transform = `rotate(${hours_degrees}deg)`;

}

setInterval(setDate, 1000);
