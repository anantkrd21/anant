'use strict';

module.exports.helloworld = async (event,context) => {
  //extract data from event
  var obj = JSON.stringify(event);
  const data = event.requestContext;
  var httpVal=data.http;
  //gettign user ip 
  var sourceIp=httpVal.sourceIp;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World',
        sourceIp:sourceIp
      },
      null,
      2
    ),
  };
};
