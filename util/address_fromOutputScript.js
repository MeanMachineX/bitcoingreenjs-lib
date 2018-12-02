const baddress = require('../src/address')
const bscript = require('../src/script')

const fixtures = require('../test/fixtures/address.json')

fixtures.standard.forEach(function (f) {
	if (!f.base58check) return
	
	const base58check = baddress.toBase58Check(Buffer.from(f.hash, 'hex'), f.version)
	console.log(base58check)
})