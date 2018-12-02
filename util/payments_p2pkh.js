const bs58check = require('bs58check')

const address = '134D6gYy8DsR5m4416BnmgASuMBqKvogQh'
const payload = bs58check.decode(address)

payload.writeUInt8(38, 0)
console.log(payload)
console.log(bs58check.encode(payload))
