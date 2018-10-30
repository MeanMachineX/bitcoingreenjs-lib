var ecpair = require('../src/ecpair')
var wif = require('wif')
var NETWORKS = require('../src/networks')

function computeNewStr() {
	let str = '927CnUkUbasYtDwYwVn2j8GdTuACNnKkjZ1rpZd2yBB1CLcnXpo'
	console.log('Decoding string "' + str + '"')

	let decoded = wif.decode(str)
	console.log('Decoded object network version: ' + decoded.version)
	
	let newVer = NETWORKS.testnet.wif
	console.log('Setting network version to: ' + newVer)
	decoded.version = newVer
	
	let encoded = wif.encode(decoded)
	console.log('Encoded result: "' + encoded + '"')
}

computeNewStr()
