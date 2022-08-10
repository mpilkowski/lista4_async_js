
webSocket = new WebSocket('wss://niezniszczalny-chinczyk.com/twitch-chat')

webSocket.onmessage = (serverEvent) => newMessage(serverEvent)


const chatWindow = document.getElementById("chatWindowMain")
const chatFrame = document.getElementById('chatFrame')
const msgInput = document.getElementById("msgInput")

function newMessage(serverEvent){
    const newMsg = document.createElement("p")
    

    const msg = JSON.parse(serverEvent.data)
    //console.log(msg)
    //console.log(`${msg.author}: ${msg.message}`)

    

    const author = msg.author
    const message = msg.message
    newMsg.textContent = msg.author+ ": "+ msg.message
    newMsg.classList.add('msgStyle')
    newMsg.classList.add('newMsg')

    chatWindow.appendChild(newMsg)
    newMsg.scrollIntoView()
    cleanUpChat()
    isMsgYours()
}

function cleanUpChat(){
    const chatWindowLength = chatWindow.childNodes.length

    if(chatWindowLength >= 30){
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
