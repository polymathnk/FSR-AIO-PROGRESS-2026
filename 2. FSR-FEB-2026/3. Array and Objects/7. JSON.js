const post = {
    id: 1,
    title: 'Post One',
    body: 'This is a body'
};

// Convert to a JSON string (Stringigy)
const str = JSON.stringify(post);

// Covert a string to a JSON Object (Parsing)
const strPasrse = JSON.parse(str)

const post2 = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is a 1st body'
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is a 2nd body'
    }
    
];

console.log(post2); 