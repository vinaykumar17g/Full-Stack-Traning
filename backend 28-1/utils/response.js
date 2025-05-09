export let response=(res,data=null,message,success,status=200)=>
{
    let responseData={
        message,status
    }
    if(data !=null)
    {
        responseData.data=data;
    }
    return res.status(status).json(responseData)
}