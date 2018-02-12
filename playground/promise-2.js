const request=require('request');
var geocodeAddress=(address)=>{
    
    let url=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`;
    return new Promise((resolve,reject)=>{
           request({
               url,
               json:true
           },(error,response,body)=>{
                 if(error){
                     reject('Not able to fetch');
                 }
                 else  if (body.status==='ZERO_RESULTS'){
                    reject('unable to find the address');
                }
                else if(body.status==='OK'){
                    resolve({
                          address:body.results[0].formatted_address,
                          lan:body.results[0].geometry.location.lng,
                          lat:body.results[0].geometry.location.lat
                    });
                }
           })
    })
}
geocodeAddress('19146')
.then((location)=>{
   console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
   console.log(errorMessage);
})