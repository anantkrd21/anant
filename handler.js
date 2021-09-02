'use strict';

module.exports.helloworld = async (event,context) => {
  //getting request information from request Context
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
      },
      null,
      2
    ),
  };
};
