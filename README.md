NeoBytescore Library
====================

[![NPM Package](https://img.shields.io/npm/v/neobytes-project/neobytescore-lib.svg?style=flat-square)](https://www.npmjs.org/package/neobytes-project/neobytescore-lib)

A pure and powerful JavaScript NeoBytes library.

## Principles

NeoBytes is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the NeoBytes network allows for highly resilient NeoBytes infrastructure, and the developer community needs reliable, open-source tools to implement NeoBytes apps and services.

## Get Started
### NodeJS
```
npm install neobytescore-lib
```

### Browser

See the section below to generate your own bundle, or download the pre-generated [minified file](dist/neobytescore-lib.min.js)


## Docs

* [Addresses](docs/address.md)
* [Block](docs/block.md)
* [Crypto](docs/crypto.md)
* [Encoding](docs/encoding.md)
* [Hierarchically-derived Private and Public Keys](docs/hierarchical.md)
* [Networks](docs/networks.md)
* [PrivateKey](docs/privatekey.md)
* [PublicKey](docs/publickey.md)
* [Script](docs/script.md)
* [Transaction](docs/transaction.md)
* [Using Different Units](docs/unit.md)
* [Unspent Output](docs/unspentoutput.md)
* [URI](docs/uri.md)
* [Governance Object / Proposal](docs/govobject/govobject.md)

## Examples

Some examples can be found [here](docs/examples.md), below is a list of direct links for some of them.


* [Generate a random address](docs/examples.md#generate-a-random-address)
* [Generate an address from a SHA256 hash](docs/examples.md#generate-a-address-from-a-sha256-hash)
* [Import an address via WIF](docs/examples.md#import-an-address-via-wif)
* [Create a Transaction](docs/examples.md#create-a-transaction)
* [Sign a NeoBytes message](docs/examples.md#sign-a-bitcoin-message)
* [Verify a NeoBytes message](docs/examples.md#verify-a-bitcoin-message)
* [Create an OP RETURN transaction](docs/examples.md#create-an-op-return-transaction)
* [Create a 2-of-3 multisig P2SH address](docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
* [Spend from a 2-of-2 multisig P2SH address](docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)

## Modules

Some functionality is implemented as a module that can be installed separately:

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/neobytes-project/neobytescore-lib/blob/master/CONTRIBUTING.md) file.

## Building the Browser Bundle

To build a neobytescore-lib full bundle for the browser:

```sh
npm run build
```

This will generate files named `neobytescore-lib.js` and `neobytescore-lib.min.js` in the `dist/` folder.

## Usage on Browser

```
<script src='./dist/neobytescore-lib.min.js' type="text/javascript"></script>
<script>
  const PrivateKey = neobytescore.PrivateKey;
  const privateKey = new PrivateKey();
  const address = privateKey.toAddress().toString();
</script>
```

## Development & Tests

```sh
git clone https://github.com/neobytes-project/neobytescore-lib
cd neobytescore-lib
npm install
```

Run all the tests:

```sh
npm test
```

You can also run just the Node.js tests with `npm run test:node`, just the browser tests with `npm run test:browser`
or run a test coverage report with `npm run coverage`.

## License

Code released under [the MIT license](LICENSE).

Copyright 2013-2017 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.  
Copyright 2016-2017 The Dash Foundation, Inc.  
Copyright 2017-2018 Dash Core Group, Inc.  
Copyright 2024 The NeoBytes Core Developers
