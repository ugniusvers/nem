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

import {AccountHttp, Address, NetworkType} from "nem2-sdk";

/* start block 01 */
const accountHttp = new AccountHttp('http://localhost:3000');
var pub;

import fs from 'fs';
fs.readFile('../../generatedAddresses/publicKey.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Public key read: " + data.toString());
    pub = data.toString();
});

const publicKey = pub;
const address = Address.createFromPublicKey(publicKey, NetworkType.MIJIN_TEST);

accountHttp
    .getAccountInfo(address)
    .subscribe(accountInfo => console.log(accountInfo), err => console.error(err));
/* end block 01 */