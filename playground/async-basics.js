console.log("starting app...");

setTimeout(() => {
    console.log("inside of callback...");
}, 1000);

setTimeout(()=>{
  console.log("another inside of callback");
},0)
console.log("Finishing app...");