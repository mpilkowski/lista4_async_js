const characterForm = document.getElementById("raiderId")
const charRegion = document.getElementById("regionInput")
const charRealm = document.getElementById("realmInput")
const charName = document.getElementById("nameInput")

const btnTest = document.getElementById("btnTest")
const charSheet = document.getElementById("charSheet")

function getCharacter(charRegion, charRealm, charName){
    const params = {
        region: charRegion,
        realm: charRealm,
        name: charName
    }
    const searchParams = new URLSearchParams(params)

    return fetch(`https://raider.io/api/v1/characters/profile?${searchParams.toString()}`)
}
characterForm.addEventListener('submit', (event)=>{
    event.preventDefault()  
    charSheet.innerHTML =""
    const inputParams = [charRegion.value, charRealm.value, charName.value]
    const character = getCharacter(inputParams[0], inputParams[1], inputParams[2])

    character.then(res =>  res.json())   
    .then((body)=>{            
            const superMonke = body
        
            for (const key in superMonke) {
               const objKey = document.createElement("p")
               objKey.id = `${key}`
               objKey.textContent = `${key}: ${superMonke[key]}`
               charSheet.appendChild(objKey)
            }
        })
    
    for (const Param of inputParams){
        if(Param.length === 0){
            character.then(error => console.error("incorrect input, try again!"))  
        }   
    }    
})

