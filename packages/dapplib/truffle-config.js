require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remind minor idea enroll force task'; 
let testAccounts = [
"0x1fe4b7bce61d8151ca3283e11bec486f55b804cc88047bc8089c882103919813",
"0x79003dd652d595456bee4903d0f6fdc01cb8402ca46488101dc84a863fb0619f",
"0xb35ffc7bee15f3fd77eccc5a78abc2c06192554ce802876f0e4f47a05bb7a428",
"0x3e7bad43c2e41ac46f91bfc9fea944035cb15e399cd05b716ae7c131c37ff6a8",
"0x2afb89012804dd68c12a063b436f736fe8f0d6f443c1041e33c38a538705e4d8",
"0x4f1eba49d919df80161c95391d079b1511ee7231a25f529eb42e41b639c16769",
"0x0129899164a5a3e85f43084e4de5ad677931148c326a113f42ad29aab54754f3",
"0x200f9ebbb3b37e5b34ae7442e662f9f35f19445d6740d639c2a3ea5bfae7cdf4",
"0xed9cf7f42c2019b859832064f4e8751dca2d249335323f0670f7dc4b4028c2aa",
"0xfef3d874e6a9429b490865d206abb82b4a4a9d54bac172a938dbbb384f570ad0"
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

