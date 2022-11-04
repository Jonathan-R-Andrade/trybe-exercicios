#!/bin/bash

echo -e "Acessando GET http://google.com\n"
curl -v http://google.com
sleep 3

echo -e "\n-----------------------------------------------------------------------------"

echo -e "Acessando GET http://google.com com o parâmetro -L\n"
curl -v -L http://google.com
