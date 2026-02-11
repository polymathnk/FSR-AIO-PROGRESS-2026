// Built in API For formatting date and time in vanilla javascript
let x;

let d = new Date();

x = Intl.DateTimeFormat('en-IN').format(d);

x = d.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'IST'
});

console.log(x)