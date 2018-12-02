var ecpair = require('../src/ecpair')
var wif = require('wif')

/*	
	More information about WIF:
	
	https://en.bitcoin.it/wiki/Wallet_import_format
*/

function generateRandomAddress() 
{
	/*	Test makeRandom() */
	let keyPair = ecpair.makeRandom()

	/*	Test toWIF() export */
	let stringWif = keyPair.toWIF()
	console.log('Private key as WIF: ' + stringWif)

	/*	Test fromWIF() import */
	let imported = ecpair.fromWIF(stringWif)
	if(imported.toWIF() == stringWif)
	{
		console.log('Successfull import again')
	}
	else
	{
		console.log('Import failed!')
	}
}

generateRandomAddress()
