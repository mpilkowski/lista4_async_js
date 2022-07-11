const characterForm = document.getElementById("raiderId")
const charRegion = document.getElementById("regionInput")
const charRealm = document.getElementById("realmInput")
const charName = document.getElementById("nameInput")

const btnTest = document.getElementById("test")


function getCharacter(charRegion, charRealm, charName){
    const param1 = encodeURIComponent(charRegion)
    const param2 = encodeURIComponent(charRealm)
    const param3 = encodeURIComponent(charName)
    
    const character = fetch(`https://raider.io/api/v1/characters/profile?region=${param1}&realm=${param2}&name=${param3}`)
    .then(res =>  res.json())  
    // .then(error => console.error(error))  
    // .then((body)=>{
    //         console.log(body)
    //         const superMonke = body
        
    //         for (const key in superMonke) {
    //            const objKey = document.createElement("p")
    //            objKey.id = `${key}`
    //            objKey.textContent = `${key}: ${superMonke[key]}`
    //            document.body.appendChild(objKey)
    //         }
    //     })
    return console.log(character)
}

// console.log(getCharacter("eu", "burning-legion", "nunijo"))
// console.log(charRegion.value)
btnTest.addEventListener("click", getCharacter(charRegion.value, charRealm.value, charName.value))
// characterForm.addEventListener("submit", getCharacter)



















// const superGra = fetch("https://raider.io/api/v1/characters/profile?region=eu&realm=burning-legion&name=Nunijo")
// const statusCheck = document.getElementById("status")

// superGra.then((response) => {
//     if (response.ok){
//         statusCheck.textContent = "status Promise : Fulfilled"    
//     }else{
//         statusCheck.textContent = "coś się popsuło i nie było mnie słychać"
//     }
//     return response.json()
// }, (error)=> {
//     console.log(response.ok)
//     statusCheck.textContent = "coś się popsuło i nie było mnie słychać"
// }).then((body)=>{
//     console.log(body)
//     const superMonke = body

//     for (let key in superMonke) {
//        const objKey = document.createElement("p")
//        objKey.id = `${key}`
//        objKey.textContent = `${key}: ${superMonke[key]}`
//        document.body.appendChild(objKey)
//     }


// })