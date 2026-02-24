const d = new Date(10, 20, 2022, 6, 0, 0)
const hour  = d.getHours();

// Nested if else-if
if(hour < 12){
    console.log('Good Morninng!');
}
else if(hour < 18){
    console.log('Good Afternoon!')
} else{
    console.log('Good Night!')
}

// Nested if 
if(hour < 12){
    console.log('Good Morninng!');
}
    if(hour === 6){
        console.log('Wake Up!')
} else{
    console.log('Good Night!')
    if(hour >=20){
        console.log('Sleeping zzz!')
    }
}


if( hour >= 7 && hour <= 15){
    console.log('Working Time!');
}

if(hour === 6 || hour === 20){
    console.log('Brush Your Teeth!')
}