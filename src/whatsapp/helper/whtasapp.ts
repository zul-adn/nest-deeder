const accountSID = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')('AC0d487990407f93be50b2affd9b1afc7f', '05f52ee396a3b9f254cecc3e7f0da1f1')

// get initial message
const getInitialMessage = async(arr: any) => {
    const arrParse = JSON.parse(arr).action
    const findMessage = arrParse.find(msg => msg.id === 'main')
    return findMessage.msg ?? ""
}

// get response message
const getResponseMessage = async(arr: any, res: any) => {
    const arrParse = JSON.parse(arr).action
    console.log(arrParse)
    console.log(res)
    const findMessage = arrParse.find(msg => msg.id.toLowerCase() === res.toLowerCase())
    console.log("msg",findMessage)
    return findMessage.msg ?? ""
}

// send whatsapp
const sendWhatsApp = async (msg, to, from) => {
  console.log(to)
  console.log(from)
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
