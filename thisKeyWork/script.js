//this is define its object 

const myObj={
    a:1,
    b:2,
    c:function(){
        console.log(this)
    }
}


myObj.c()
var aa=myObj.c
myObj.c=myObj.c.bind(myObj) //Binding || 
aa()
aa.call(myObj) //set context when calling, we can pass array of argivments
aa.apply(myObj,[1,2]) //set context when calling and we can pass argivments as array
//Arrow Function

const myObj1={
    a:9,
    b:99,
    c:()=>{
        console.log(this)
    }
}

aa.call(myObj1)// call another function with another function context
myObj1.c()
var bb=myObj1.c
bb()


