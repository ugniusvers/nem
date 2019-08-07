
#!/bin/bash

privateKey=`cat ../../generatedAddresses/privateKey.txt`
nem2-cli profile create --privatekey $privateKey --network MIJIN_TEST --url http://localhost:3000 --profile test1

curl=`curl http://localhost:3000/block/1`
genHash=${curl%%totalFee*}
genHash=${genHash##*generationHash}
genHash=${genHash:3}
genHash=${genHash::-3}
echo $genHash>>../../generatedAddresses/generationHash.txt