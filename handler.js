'use strict';

module.exports.helloworld = async (event,context) => {
  
  var obj = JSON.stringify(event);
  const data = event.requestContext;
  var httpVal=data.http;
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
