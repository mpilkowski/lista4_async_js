
webSocket = new WebSocket('wss://niezniszczalny-chinczyk.com/twitch-chat')

webSocket.onmessage = (serverEvent) => newMessage(serverEvent)


const chatWindow = document.getElementById("chatWindowMain")
const chatFrame = document.getElementById('chatFrame')
const msgInput = document.getElementById("msgInput")

let userColors = {}
let colorCounter = 1

function newMessage(serverEvent){
    const newMsgAuthor = document.createElement("span")
    const newMsgContent = document.createElement("span")
    const newMsg = document.createElement('div')

    const serverMsgData = JSON.parse(serverEvent.data)
    //console.log(msg)
    //console.log(`${msg.author}: ${msg.message}`)    

    
    newMsgAuthor.textContent = serverMsgData.author + ":"
    newMsgAuthor.classList.add('msgStyle')
    
    if (serverMsgData.author === 'szczenaTheMonke'){
        newMsgAuthor.classList.add('msgIsYours')
    }

    newMsgContent.textContent =serverMsgData.message   
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
