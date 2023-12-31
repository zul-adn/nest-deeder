

// get initial message
const getInitialMessage = async(arr: any) => {
    const arrParse = JSON.parse(arr).action
    const findMessage = arrParse.find(msg => msg.id === 'main')
    return findMessage.msg ?? ""
}

// get response message
const getResponseMessage = async(arr: any, res: any) => {
    const arrParse = JSON.parse(arr).action
    const findMessage = arrParse.find(msg => msg.id.toLowerCase() === res.toLowerCase())
    return findMessage.msg ?? ""
}

// send whatsapp
const sendWhatsApp = async (msg, to, from) => {
    const accountSID = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const client = require('twilio')(accountSID, authToken)
    try {
        await client.messages.create({
            to: to,
            body: msg,
            from: from
        })
    } catch (error) {
        console.log("error send message", error)
    }
}


module.exports = {
    getInitialMessage,
    getResponseMessage,
    sendWhatsApp
}
