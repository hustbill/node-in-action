const express = require('express')
const cors = require('cors')
const crypto = require('crypto')
const fs = require('fs')

const privateKey = fs.readFileSync('./pkey.key', 'utf8')

function encrypt(textToEncrypt) {
    const buffer = Buffer.from(textToEncrypt, 'utf-8')
    const encrypted = crypto.privateEncrypt(privateKey, buffer)
    return encrypted.toString('base64')
}

function decrypt(textToDecrypt) {
    const buffer = Buffer.from(textToDecrypt, 'base64')
    const decrypted = crypto.privateDecrypt({
        key: privateKey.toString(),
        passphrase: ''
    }, buffer)
    return decrypted.toString('utf-8')
}

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.text({defaultCharset: 'utf-8', type: 'text/plain'}))
const port = 3001

app.post('/login', (req, res) => {
    console.log(req.body)
    const decryptedText = decrypt(req.body)
    console.log(decryptedText)
    const encryptedResponse = encrypt('Authenticated!')
    console.log(encryptedResponse)
    res.send(encryptedResponse)
})

app.listen(port, () => console.log(`Running on http://localhost:${port}/`))