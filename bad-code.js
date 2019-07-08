// Say hello to Gandalf
hello('Gandalf');

function hello(name){

    // This code doesn't do what the indentation implies!

    if(name === undefined)
        console.log('Please enter a username!');
        fail();

    // The following line is never reached:

    success(name);
}

function success(name){
    console.log('Hello, ' + name + '!');
}

function fail(){
    throw new Error("Name is missing. Can't say hello!");
}