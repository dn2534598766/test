// new Promise((resolve,reject)=>{
//     resolve('123')
// }).then(res=> {
//     console.log(res)
//     return '590'
// }).then(res=>{
//     console.log(res)
// })
// // console.log(a)
// async function b(){
//    let a = await new Promise((resolve,reject)=>{
//         resolve('18u128')
//     })
//     console.log(a)
// }
// b()
let a = {
    name:'小明',
    age:19,
    city:"广州",
    fun:function(){
        return this.age
    }
}
console.log(a.fun())