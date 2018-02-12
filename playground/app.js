
const yargs=require('yargs');
const geocode=require('./geocode/geocode');
const weather=require('./weather/weather');

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

geocode.geocodeAddress(argv.address,(errorMessage,response)=>{
   
    if(errorMessage){
        console.log(errorMessage);
    }
    else {
        
           // var data=JSON.parse(response);
            console.log(response);
            var lat=response.lat;
            var lng=response.lan;
            //  var lat='37.8267';
            //  var lng='-122.4233';
            //
             weather.getWeather(lat,lng,(error1,response2)=>{
               console.log("temperature is:"+response2.temperature);
            if(error1){
              console.log(error1);
            }
            else{
            console.log(response2.temperature);
            }

            });
    }
});