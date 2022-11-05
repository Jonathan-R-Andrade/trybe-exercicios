#!/bin/bash

echo -e "IP interno:\n"
ip a

echo -e "\n--------------------------------------------------------------------------------"

echo -e "\nIP externo:\n"
URL1="https://ifconfig.me"
URL2="https://ipecho.net/plain"

IP1=$(curl -s $URL1)
IP2=$(curl -s $URL2)

echo -e "IP identificado em $URL1: $IP1"
echo -e "IP identificado em $URL2: $IP2"
