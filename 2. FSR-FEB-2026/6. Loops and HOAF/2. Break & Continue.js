//  Break; helps ot break out of the loop

// for(let i = 0; i <= 20; i++){
//     if(i === 15){
//         console.log('breaking...')
//         break;
//     } else{
//         console.log('Number' + i);
//     }
// }

// Continue; Skipping the iteration to the next statement

for (let i = 0; i <= 20; i++){
    if (i === 13){
        console.log('Skipping 13...');
        continue;
    }
    console.log(i);

}