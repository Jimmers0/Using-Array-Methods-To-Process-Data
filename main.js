


const avg = items.reduce(function(a, b){
    return a + b.price
}, 0) / items.length

const answer1 = `The average price is $${avg.toFixed(2)}`

document.querySelector("#answer1").innerHTML = answer1

const priceRange = items.filter(function(range){
 if (range.price > 14.00 && range.price < 18.00) {
     return true
 } else {
     return false
 }
})

let answer2 = ''

console.log(answer2)

priceRange.forEach(function(item){
    answer2 += item.title + '\n\n'
})

document.querySelector('#answer2').innerHTML = answer2

 var gbp = items.map(function(item) {
    return {
        name: item.title,
        currency_code: item.currency_code,
        cost: item.price
    }   
 }).filter(function(item){
     return item.currency_code === "GBP"
 })

 answer3 = ''

 gbp.forEach(function(item){
    answer3 += item.name + ' costs ' + item.cost 
 })

 document.querySelector('#answer3').innerHTML = answer3
 
let wood = []
var woodmaterials = items.map(function(item){
    return {
        name: item.title,
        materials: item.materials
    }
    }).forEach(function(material){
        if (material.materials.includes('wood')) {
            wood.push(material)
        }
    })
 let answer4 = ''

    wood.forEach(function(item){
        answer4 += item.name + ' is made of wood.' + '\n\n'
    })
    
    document.querySelector('#answer4').innerHTML = answer4

var itemsOfWood = items.map(function(woods) {
    return {
        name: woods.title,
        materials: woods.materials,
    }

})

// console.log(woodItems)


let answer5 = ''

var materials = items.map(function(item){
    return {
        name: item.title,
        materials: item.materials 
    }
 }).filter(function(item){
     return item.materials.length > 8 
 })


materials.forEach(function(item){
    answer5 +=  item.name + ' has '
 + item.materials.length + ' materials: ' + '\n\n' 
 + item.materials 
})

document.querySelector('#answer5').innerHTML = answer5

 let whoMade = items.map(function(manufactured){
        return {
            who_made: manufactured.who_made === 'i_did'
            }

 }).filter(function(whomade){
     return whomade.who_made === true
 })

 let answer6 = whoMade.length + ' were made by their sellers'

 document.querySelector('#answer6').innerHTML = answer6

