// MODULES & ESSENTIALS //
const { Collection } = require('discord.js')

function delay(secs,callback) {
    setTimeout(callback,secs*1000)
}

// BOT HANDLER //
module.exports = (client) => {
    if (client != null) {
        client.on('clientReady', () => {
            client.commands = new Collection
            console.log('ready.')

            client.on('messageCreate', (msg) => {
                if (msg.author.bot) return
                if (!msg.guild?.id) return
            })
        })
    } else {
        throw new Error("Client instance is undefined. Make sure client exists or isn't null.");
        return
    }
}