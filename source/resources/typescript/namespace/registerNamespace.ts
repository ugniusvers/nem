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

import {Account, Deadline, NetworkType, RegisterNamespaceTransaction, TransactionHttp, UInt64} from 'nem2-sdk';

/* start block 01 */
const namespaceName = "test";
var priv;
var genHash;

import fs from 'fs';
fs.readFile('../../generatedAddresses/privateKey.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Private key read: " + data.toString());
    priv = data.toString();
});

import fs from 'fs';
fs.readFile('../../generatedAddresses/generationHash', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Gen hash read: " + data.toString());
    genHash = data.toString();
});

const registerNamespaceTransaction = RegisterNamespaceTransaction.createRootNamespace(
    Deadline.create(),
    namespaceName,
    UInt64.fromUint(1000),
    NetworkType.MIJIN_TEST);

const privateKey = priv;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);
const networkGenerationHash = genHash;
const signedTransaction = account.sign(registerNamespaceTransaction, networkGenerationHash);

const transactionHttp = new TransactionHttp('http://localhost:3000');
transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));
/* end block 01 */