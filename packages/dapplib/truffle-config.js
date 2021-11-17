require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember arrow grid clinic tail skull'; 
let testAccounts = [
"0x91faec8c8c3928fc4df67d19584d5507d8e752e40f8b108055e9dbb7a9c725e0",
"0x34a0214de98ad657e0eaa9cd53e8de69809da3343f54c1ba87e05392088e8189",
"0x6dea232d2e425de3ea05fcc0e71855a75a26fe2408c313700146dc541a700c41",
"0x38465820ad9c6be82bd212715670dfd0e66e50db4a4cd5d9b1a7817df76d8e46",
"0xc0ce9a228e1404979b95c3e4369bea382a76ab9323ad886b5cc9e1b578ea4109",
"0x2e3c17898a345f82f5ff86e9ea3efa3ce562044708913b023f32c45d19679c66",
"0x1bba156a1a7a50f0e7eea4d563f3007b225e1f38b1d340fc64ead1389a8cc310",
"0x2edf6c483b4bfa78e87f2a0b298f69efee6193baef3e53292d6dcd54e64f3036",
"0xccdd48083c9f72cdb2719963f75ebfcd0c83e7be24226d91cca869f3208d412c",
"0x97720b9897ffd41b9731d18d7e86421e1ccc2b3737da4d385d56a0cd96a42ee1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

