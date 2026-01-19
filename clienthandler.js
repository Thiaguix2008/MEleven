// MODULES & ESSENTIALS //
const { Collection } = require('discord.js')
const express = require('express')

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

    /////////////////////////////////////////////////////////////////////////////////////
    const app = express()

    app.get('/', (req, res) => {
        res.send('r')
    })

    const PORT = process.env.PORT || 3000

    app.listen(PORT, () => {
        console.log(`Running on ${PORT}`)
    })
}