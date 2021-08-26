let num = new Date().getMilliseconds()
function randomwizard(){

    const result = (num * num).toString().slice(1, 3)
    num = parseInt(result)
     return parseInt(result)
}
console.log(randomwizard(num))
module.exports.randomwizard = randomwizard
