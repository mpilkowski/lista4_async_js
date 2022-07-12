const characterForm = document.getElementById("raiderId")
const charRegion = document.getElementById("regionInput")
const charRealm = document.getElementById("realmInput")
const charName = document.getElementById("nameInput")

const btnTest = document.getElementById("btnTest")
const charSheet = document.getElementById("charSheet")

function getCharacter(charRegion, charRealm, charName){
    const params = {
        region: `${charRegion}`,
        realm: `${charRealm}`,
        name: `${charName}`
    }
    const searchParams = new URLSearchParams(params)
    
    charSheet.innerHTML =""
    let character = fetch(`https://raider.io/api/v1/characters/profile?${searchParams.toString()}`)
    .then(res =>  res.json())      
    .then((body)=>{
            console.log(body)
            const superMonke = body
        
            for (const key in superMonke) {
               const objKey = document.createElement("p")
               objKey.id = `${key}`
               objKey.textContent = `${key}: ${superMonke[key]}`
               charSheet.appendChild(objKey)
            }
        })
    .then(error => console.error(error))
    return character
}




// btnTest.addEventListener("click", ()=> {
//     console.log(getCharacter(`${charRegion.textContent}`, `${charRealm.textContent}`, `${charName.textContent}`))
// })


// characterForm.addEventListener('change', changeCharacter())

// function changeCharacter(){
//         charRegion.value = charRegion.textContent
//         charRealm.value = charRegion.textContent
//         charName.value = charRegion.textContent
// }


// getCharacter(`${charRegion.value}`,`${charRealm.value}`,`${charName.value}`)
// function changeCharacter(event){
//     event.preventDefault()
//     charRegion.value = charRegion.textContent
//     charRealm.value = charRegion.textContent
//     charName.value = charRegion.textContent
// }
// console.log(getCharacter("eu", "burning-legion", "nunijo"))
// console.log(charRegion.value)

// charName.addEventListener('input', getCharacter(`${charRegion.value}`,`${charRealm.value}`,`${charName.value}`))
// getCharacter(`${charRegion.value}`,`${charRealm.value}`,`${charName.value}`)

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