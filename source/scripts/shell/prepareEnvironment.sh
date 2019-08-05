#!/bin/bash

# Download and install ansible
sudo apt-add-repository --yes --update ppa:ansible/ansible
sudo apt-get -y install ansible

# Install typescript and ts-node
npm install -g typescript
npm install -g ts-node