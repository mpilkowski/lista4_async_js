const superGra = fetch("https://raider.io/api/v1/characters/profile?region=eu&realm=burning-legion&name=Nunijo")
const statusCheck = document.getElementById("status")

superGra.then((response) => {
    if (response.ok){
        statusCheck.textContent = "status Promise : Fulfilled"    
    }else{
        statusCheck.textContent = "coś się popsuło i nie było mnie słychać"
    }
    return response.json()
}, (error)=> {
    console.error(error)
    statusCheck.textContent = "coś się popsuło i nie było mnie słychać"
}).then((body)=>{
    console.log(body)
    const superMonke = body

    for (const key in superMonke) {
       const objKey = document.createElement("p")
       objKey.id = `${key}`
       objKey.textContent = `${key}: ${superMonke[key]}`
       document.body.appendChild(objKey)
    }


})


    // if (response.ok){
    //     statusCheck.textcontent = "gra i śpiewa, wszystko działa"        
    // }else{
    //     statusCheck.textContent = "coś się popsuło i nie było mnie słychać"
    // } 



