// const requestTask=wx.request(
//     {
//         url:'test.php',//仅为事例，并非真实的接口地址
//         data:{
//             'content-type':'application/json'
//         },
//     success (res){
//         console.log(res.data)
//     }
//     })
//     requestTask.abort()//取消请求任务
function print(callback) {  
    callback();
}
const message = function() {  
    console.log("栓Q歪瑞马驰");
}
 
setTimeout(message, 3000);
