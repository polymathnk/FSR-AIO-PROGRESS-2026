// Creatin and IIFE
(function (){
    const user = 'NK'
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

(function(name){
    console.log(`Hello ` + name);
})('Nitin Kumar');

(function hello(){
    console.log('hello')
})();