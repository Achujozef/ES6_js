const fn = function(a,b){ // function  assin into a variable 
    return a+b
}

const xx=(a,b)=>a+b //single line arrow function

const yy=(edg)=>{ //arrow function 
    return edg*edg
}


 const zz=()=>({ //returining an object
    a:'Achu',
    b:"Bhagath"
 })

const obj ={ //accessing its own variable in the same object
    a:100,
    b:200,
    myFun:function(){
        return this.a+this.b
    }
}



console.log(fn(56,23))
console.log(xx(10,50))
console.log(yy(50))
console.log(zz)
console.log(obj.myFun())