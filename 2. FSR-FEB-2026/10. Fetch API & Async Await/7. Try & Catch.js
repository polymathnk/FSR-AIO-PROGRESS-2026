// Basic example of try nad catch
try {
  console.log(x);
} catch (error) {
  console.log("Error:" + error);
}

function double (number){
    if(isNaN (number)){
        throw new Error(number + ' is not a number');
    }

    return number * 2;
}

try {
    const y = double('jkkj');
    console.log(y);
} catch (error) {
    console.log(error);
}