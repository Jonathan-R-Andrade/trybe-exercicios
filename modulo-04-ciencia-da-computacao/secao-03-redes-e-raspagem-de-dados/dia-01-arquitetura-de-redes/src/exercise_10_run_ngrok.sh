#!/bin/bash

echo -e "Criando túnel para http://localhost:80"
sleep 3
ngrok http 80
