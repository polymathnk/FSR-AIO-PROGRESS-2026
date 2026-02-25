const socials = ['Twitter', 'LinkedIn', 'Instagram', 'Facebook'];

// socials.forEach((social)=>{
//     console.log(social);
// })

// Shorthand for that

// socials.forEach((social) => console.log(social));

// we can also pass index and the whole array into callback function
// socials.forEach((social, index, array) => console.log(`${index} - ${social}`, array));


// for array of objects

const socialObj = [
    {name: 'Twitter', url: 'www.twitter.com'},
    {name: 'LinkedIn', url: 'www.LinkedIn.com'},
    {name: 'Instagram', url: 'www.Instagram.com'},
    {name: 'Facebook', url: 'www.Facebook.com'}
];

socialObj.forEach((item)=>{
    console.log(item.url); 
})