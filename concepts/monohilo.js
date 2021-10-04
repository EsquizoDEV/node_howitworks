/** Node ejecuta de forma asincrona, por eso primero se ejecutan los
 * logs fuera del intervalo, dado que el intervalor se va al threadPool
*/

//1 Se ejecuta este console log
console.log("Hola mundo")

let i = 0
//3 se ejecuta este intervalo
setInterval(function(){
    console.log(i);
    i++
    // if(i === 5){
    //     var a = 3+z
    // }

}, 1000)

// 2 Se ejecuta este console.log
console.log('Segunda instrucción')