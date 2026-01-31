// CONSOLE IS FOR DEVELOPERS NOT FOR USERS

console.log(100);

console.log('Hello World');

console.log(20, 'I am string', true);

const x = 100;

console.log(x);

console.error('This is a console error');

console.warn('This is a console warn');

console.table(
    {
        name: 'Nitin',
        age: 24,
        work: 'Developer',
        shift: 'day',
        access: true
    }
)

// CONSOLE GROUP
console.group('simlple')
console.log(100);
console.log('Hello World');
console.log(20, 'I am string', true);
console.groupEnd()

// COOL STUFF: ADDING CSS TO YOUR CONSOLE OUTPUTS
const styles = 'padding: 10px; background: red; color: white;' 
console.log('%cApplied CSS through console', styles)
