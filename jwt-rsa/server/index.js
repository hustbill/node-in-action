const fs = require('fs')
const crypto = require('crypto')

const privateKey = fs.readFileSync('./pkey.key', 'utf8')
const publicKey = fs.readFileSync('./pub.key', 'utf8')

function encrypt(textToEncrypt) {
    const buffer = Buffer.from(textToEncrypt, 'utf-8')
    const encrypted = crypto.publicEncrypt(publicKey, buffer)
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

const encryptedText = encrypt(JSON.stringify({
    username: 'vimselva',
    password: 'Dec2019!'
}))
console.log(encryptedText)

const decryptedText = decrypt(encryptedText)
console.log(JSON.parse(decryptedText))