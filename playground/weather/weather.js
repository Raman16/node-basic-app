
const request=require('request');

var getWeather=(lat,lng,callback)=>{

    let url=`https://api.darksky.net/forecast/ecf2b441f028ee797366afd037f9b8fa/${lat},${lng}`;
    console.log(url);
    request({
        url:url,
        json:true
        
    },(error,response,body)=>{
        if(error){
            callback('unable to connect to server');
        }
        else if(response.statusCode===400){
            callback('unable to fecth');
        }
        else if(response.statusCode===200){
            callback('undefined',{
                 temperature:body.currently.temperature
            });
        }
    });

}
module.exports={
    getWeather
}