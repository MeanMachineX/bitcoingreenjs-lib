var baddress = require('../src/address')
var NETWORKS = require('../src/networks')

let address = '1BgGZ9tcN4rm9KBzDn7KprQz87SZ26SAMH'
let decode = baddress.fromBase58Check(address)

// Print new base check
console.log('Input address = ' + address)
let newVersion = NETWORKS.bitcoingreen.pubKeyHash
console.log(baddress.toBase58Check(decode.hash, newVersion))
