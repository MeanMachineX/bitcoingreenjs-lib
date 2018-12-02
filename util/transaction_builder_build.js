const ECPair = require('../src/ecpair')
const wif = require('wif')

const NETWORKS = require('../src/networks')
const fixtures = require('../test/fixtures/transaction_builder')

fixtures.valid.build.forEach(function (f) {
	console.log(f.description)
	f.inputs.forEach(function (i) {
		i.signs.forEach(function (s) {
			const decoded = wif.decode(s.keyPair)
			const network = NETWORKS[f.network] || NETWORKS.bitcoingreen
			
			const ecp = ECPair.fromPrivateKey(decoded.privateKey, {
				compressed: decoded.compressed,
				network: network
			})
			
			console.log(ecp.toWIF())
		})
	})
})