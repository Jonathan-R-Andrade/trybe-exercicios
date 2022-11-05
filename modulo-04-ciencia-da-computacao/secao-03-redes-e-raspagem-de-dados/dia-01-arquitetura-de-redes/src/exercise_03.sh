#!/bin/bash

echo -e "Acessando GET https://www.betrybe.com\n"
wget -O trybe.html https://www.betrybe.com
xdg-open trybe.html
sleep 3

echo -e "\n-----------------------------------------------------------------------------"

echo -e "Acessando GET https://www.google.com\n"
wget -O google.html https://www.google.com
xdg-open google.html
