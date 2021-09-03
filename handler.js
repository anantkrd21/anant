'use strict';

module.exports.helloworldechoip = async (event,context) => {
  //getting request information from request event
  try{
    const data = event.requestContext;
    var httpVal=data.http;
    //gettign user ip 
    var sourceIp=httpVal.sourceIp;
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hi '+sourceIp+" It's test api",
          sourceIp:sourceIp
        }
      ),
    };
  }catch(err){
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: "Something went wrong"
        }
      ),
    };
  }
  
};
