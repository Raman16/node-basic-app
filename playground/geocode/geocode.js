const request=require('request');

const geocodeAddress=(address,callback)=>{
    let url=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`;
    request({
        url,
        json:true
    },(error,response,body)=>{
        if(error){
            callback('unable to connect to google servers');
        }
        else  if (body.status==='ZERO_RESULTS'){
            callback('unable to find the address');
        }
        else if(body.status==='OK'){
            callback(undefined,{
                  address:body.results[0].formatted_address,
                  lan:body.results[0].geometry.location.lng,
                  lat:body.results[0].geometry.location.lat
            });
        }
      
    })
}

module.exports={
    geocodeAddress
}