var asyncAdd=(a,b)=>{
  
    return new Promise((resolve,reject)=>{
       
       setTimeout(()=>{
        if(typeof a ==='number' && typeof b ==='number'){
            resolve(a+b);
        }
        else{
            reject('Not a number');
        }
       },1500) 
    })
}

asyncAdd(5,7)
.then((res)=>{
    console.log(res);
    return asyncAdd(res,'33');
})
.then((res)=>{
    console.log(res);
})

.catch((errorMessage)=>{
    console.log(errorMessage);
})