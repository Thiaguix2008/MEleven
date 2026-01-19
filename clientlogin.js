require('dotenv').config()
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

console.log('starting...')

client.login(process.env.CLIENT_TOKEN).then(() => {
    require('./clienthandler')(client)
}).catch(err => console.error(err))