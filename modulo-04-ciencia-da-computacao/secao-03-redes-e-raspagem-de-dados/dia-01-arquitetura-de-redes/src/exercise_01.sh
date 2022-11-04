#!/bin/bash

echo -e "Acessando GET http://localhost:5000\n"
curl --request GET --url http://localhost:5000/
sleep 3

echo -e "\n----------------------------------------------------"

echo -e "Acessando GET http://localhost:5000/headers\n"
curl --request GET \
  --url http://localhost:5000/headers \
  --header 'Test-header-1: 123' \
  --header 'Test-header-2: abc'
sleep 3

echo -e "\n----------------------------------------------------"

echo -e "Acessando POST http://localhost:5000\n"
curl --request POST \
  --url http://localhost:5000/ \
  --header 'Content-Type: application/json' \
  --data '{"Test": 123}'
