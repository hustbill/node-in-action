const crypto = require('crypto')

/**
 * Utility function for decryption of credentials
 *
 * @param {string} key - Private key used for decryption
 * @param {string} cipher - Text to be decrypted
 * @return {string} decrypted cleartext of `cipher`
 */
const decrypt = (key, cipher) => {
  const buf = Buffer.from(cipher, 'hex')
  const iv = buf.slice(0, 16)
  const crypt = buf.slice(16, buf.length)

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
  let dec = decipher.update(crypt)
  dec += decipher.final('utf8')
  return dec
}


const userName =  "0f2994d50d9e1c97055e371f6475beb404c6ced34b03ec54339097d781c8adb";
const password = "4ca4f05c5797515cd3c4b4689b3dc6409c0531486de9366e34e18f77f89a9fd1e898a464eb765912e66b39ae4d8a2ef";
const key =  "3F649729C8272FC865CEAA2C71AA7C";

var dUserName = decrypt(key, userName);
var dpassword = decrypt(key, password);

console.log("userName: \t" + dUserName);
console.log("password: \t" + dpassword);
