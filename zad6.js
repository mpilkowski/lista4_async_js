
webSocket = new WebSocket('wss://niezniszczalny-chinczyk.com/twitch-chat')

webSocket.onmessage = (serverEvent) => newMessage(serverEvent)

// global const ---- DOM elements
const chatWindow = document.getElementById("chatWindowMain")
const chatFrame = document.getElementById('chatFrame')
const msgInput = document.getElementById("msgInput")
//global const ---- user colors 
let userColors = {}
let colorCounter = 1

//global const ----  emojis
const regExpSplit = /:/g
const emojiCollection = {  
    'Kappa':'https://i.imgur.com/GCh8zty.png',
    '4Head':'https://i.imgur.com/MjosPa0.png',    
    'GachiBald':'https://i.imgur.com/N9XmopO.png',    
    'KEKW':'https://i.imgur.com/XNr1hYK.png',    
    'POGGERS':'https://i.imgur.com/lNxwHuq.png',    
    'OMEGALUL':'https://i.imgur.com/04lFVre.png',        
    'GachiGASM':'https://i.imgur.com/z8IzqTM.png',    
    'KappaPride':'https://i.imgur.com/GCh8zty.png',                
    'PepeLaugh':'https://i.imgur.com/MjosPa0.png',    
    'LUL':'https://i.imgur.com/N9XmopO.png',    
    'monkaW':'https://i.imgur.com/XNr1hYK.png',    
    'Sadge':'https://i.imgur.com/lNxwHuq.png',    
    'PJSalt':'https://i.imgur.com/04lFVre.png',    
    'AYAYA':'https://i.imgur.com/z8IzqTM.png',
}
function emojiReplacer(inputPlace, msgToBeSplitted){
    const newpost = document.createElement('div')  
    
    const splitted = msgToBeSplitted.split(regExpSplit)
    
    for( const part of splitted){    
        if(emojiCollection[part]){
          const Emoji = document.createElement('img')
          Emoji.src = emojiCollection[part]
          newpost.appendChild(Emoji)
        }else{
          const textPart = document.createElement('span')
          textPart.textContent = part
          newpost.appendChild(textPart)
        }            
    } 
    inputPlace.appendChild(newpost)
  }

function newMessage(serverEvent){
    const newMsgAuthor = document.createElement("span")
    const newMsgContent = document.createElement("span")
    const newMsg = document.createElement('div')

    const serverMsgData = JSON.parse(serverEvent.data)      

    
    newMsgAuthor.textContent = serverMsgData.author + ":"
    newMsgAuthor.classList.add('msgStyle')
    
    if (serverMsgData.author === 'szczenaTheMonke'){
        newMsgAuthor.classList.add('msgIsYours')
    }
    emojiReplacer(newMsgContent, serverMsgData.message)
    //newMsgContent.textContent =serverMsgData.message   
    newMsgContent.classList.add('msgStyle')    
    
    userColor(serverMsgData)
    newMsgAuthor.style.setProperty('color', `var(--userColor${userColors[`${serverMsgData.author}`]})`)
    newMsg.appendChild(newMsgAuthor)
    newMsg.appendChild(newMsgContent)
    newMsg.classList.add('newMsg')

    chatWindow.appendChild(newMsg)
    newMsg.scrollIntoView()
    cleanUpChat()
    
    
}
function userColor(msg){
    
    if (!userColors[`${msg.author}`]){
    userColors[`${msg.author}`] = colorCounter
    colorCounter += 1
    }

    if (colorCounter > 6){
        colorCounter = 0
    }    
}

function cleanUpChat(){
    const chatWindowLength = chatWindow.childNodes.length

    if(chatWindowLength >= 50){
        chatWindow.removeChild(chatWindow.firstChild)
    }
}


chatFrame.addEventListener('submit', (event)=>{
    event.preventDefault()   
    
    const userMsg ={
        author: 'You',
        message: msgInput.value 
    }

    console.log(userMsg)
    webSocket.send(JSON.stringify(userMsg));

    msgInput.value = ''
})
