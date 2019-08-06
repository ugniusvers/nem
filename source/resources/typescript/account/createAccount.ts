/*
 *
 * Copyright 2018-present NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import {Account, NetworkType} from "nem2-sdk";

/* start block 01 */
const account = Account.generateNewAccount(NetworkType.MIJIN_TEST);
const fs = require('fs');

console.log('Your new account address is:', account.address.pretty(), 'and its private key', account.privateKey);

fs.writeFile('../../generatedAddresses/privateKey.txt', account.privateKey,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Private key file created!");
});

fs.writeFile('../../generatedAddresses/publicKey.txt', account.publicKey,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Public key file created!");
});

fs.writeFile('../../generatedAddresses/address.txt', account.address.plain,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Address file created!");
});

/* end block 01 */