// * https://en.bitcoin.it/wiki/List_of_address_prefixes
// * Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

// TODO: Adapt bitcoingreen network to configuration
// * = belongs to bitcoin configuration

module.exports = {
  bitcoingreen: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',	// *
    bech32: 'bc',					// *
    bip32: {
      public: 0x0488b21e,				// *
      private: 0x0488ade4				// *
    },
    pubKeyHash: 0x26,
    scriptHash: 0x06,
    wif: 0x2E
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',	// *
    bech32: 'tb',					// *
    bip32: {
      public: 0x043587cf,				// *
      private: 0x04358394				// *
    },
    pubKeyHash: 0x62,
    scriptHash: 0x0c,
    wif: 0x6c
  }
}
