# NEM
NEM files, typescript, shell scripts, ansible playbooks  

HOW TO START NEM NETWORK AND MAKE FIRST TRANSACTIONS  
-
------ STEP BY STEP ------  

--- 1 STEP - clone this github to your system
-
git clone https://github.com/ugniusvers/nem  

--- 2 STEP - configure Virtual Machine, download files and start NEM Network
-
chmod +x nem/source/scripts/shell/*  
./nem/source/scripts/shell/startNEM.sh

(https://github.com/ugniusvers/nem/blob/master/source/scripts/shell/startNEM.sh)  

--- 3 STEP - prepare environment in nem directory
-
cd nem  
./source/scripts/shell/prepareEnvironment.sh

(https://github.com/ugniusvers/nem/blob/master/source/scripts/shell/prepareEnvironment.sh)  

--- 4 STEP - execute prepared ansible script (make sure NEM network is running !)
-
ansible-playbook nem/source/scripts/ansible/execTypecsript.yml

Generate new account (Private, public key and address
Register Namespace
Register SubNamespace
Create Mosaic
Modify Mosaic
Send Mosaic

(https://github.com/ugniusvers/nem/blob/master/source/scripts/ansible/execTypecsript.yml)  
