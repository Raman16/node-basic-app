
const axios=require('axios');
const yargs=require('yargs');

const argv=yargs.
options({
  a:{
      demand:true,
      alias:'address',
      describe:'Address to fetch weather for ',
      string:true//tells yargs to always parse address as a string 
  }
})
.help()
.alias('help','h')
.argv;

var encodeAddress=encodeURIComponent(argv.address);
let geoCodeUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;
axios.get(geoCodeUrl).then((response)=>{
    if(response.data.status==='ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    }
   var lat=response.data.results[0].geometry.location.lat;
   var lng=response.data.results[0].geometry.location.lat;
   
   let weatherUrl=`https://api.darksky.net/forecast/ecf2b441f028ee797366afd037f9b8fa/${lat},${lng}`;

   console.log(response.data.results[0].formatted_address);
   return axios.get(weatherUrl)
   .then((response)=>{
     console.log(`temperature is:${response.data.currently.temperature}`);
   })
   .catch((e)=>{

   })

}).catch((e)=>{
    if(e.code==='ENOTFOUND'){
        console.log('unable to connect server');
    }
    else{
        console.log(e.message);
    }
});