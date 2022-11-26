//闭包(一个作用域中引用了另外一个作用域的值或者变量)
//scope
//全局作用域
//函数作用域
//块作用域

const sentence ='我感觉要G'

function text(msg){
    console.log(msg)
}

text(sentence)
text('2222')
function closure(){
    console.log(sentence)
}



closure()
console.log('我感觉要G')




const fn =[]
var i;
for(i =0;i<=5; i++){
    const j =(function(num){
        function main (){
            console.log(num);
        }
        return main;
    })(i)
    fn.push(j)
}


const fn1=[]
for(i=0;i<5;i++){
    const j=function(){
        console.log(i)
    }
    fn1.push(j)
}
console.log(fn)
fn[1]()
fn1[1]()

//(function text(msg){console.log(msg)})('life')


