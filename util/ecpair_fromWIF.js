const wif = require('wif')
const ECPair = require('../src/ecpair')

const fixtures = require('../test/fixtures/ecpair.json')
const NETWORKS = require('../src/networks')

fixtures.valid.forEach(function (f) {
	const decoded = wif.decode(f.WIF)
	const network = NETWORKS[f.network] || NETWORKS.bitcoingreen
	const ecp = ECPair.fromPrivateKey(decoded.privateKey, {
		compressed: decoded.compressed,
		network: network
	})
	
	console.log("From " + f.WIF)
	console.log(ecp.toWIF() + "\n")
})