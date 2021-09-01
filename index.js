exports.handler = async (event,context,callback) => {
    // TODO implement
    //console.log(context)
    //let res=JSON.stringify(context);
    let res={"code":200,"Message":"Hello World"};
    //res["data"]['message']="Hello World";
    const response = {
        statusCode: 200,
        body: JSON.stringify(res),
    };
    return response;
};
