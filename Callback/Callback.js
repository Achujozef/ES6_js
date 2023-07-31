//async callBack

function myFunction(args){
    console.log(args);
}

document.getElementById('button').onclick=myFunction; //callback Registration


//Sync Callback

const arr=[2,4,6,8,10]

arr.forEach(myFunction)

arr.forEach(function(args){
    console.log(args,"unknown")
})

