const d = new Date(2022, 12, 12, 8, 0, 0);
const month = d.getMonth();

switch (month) {
    case 1:
        console.log('It is january');
        break;
    case 2:
        console.log('It is feburary');
    case 3:
        console.log('It is march');
    case 4:
        console.log('It is april');
    case 5:
        console.log('It is may');
    case 6:
        console.log('It is june');
    case 7:
        console.log('It is july');
    case 8:
        console.log('It is august');
    case 9:
        console.log('It is septemeber');
    case 10:
        console.log('It is october');
    case 11:
        console.log('It is november');
    default:
        console.log('It is december')
}
 