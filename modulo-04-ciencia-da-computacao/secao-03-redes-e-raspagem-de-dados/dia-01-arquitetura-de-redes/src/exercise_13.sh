#!/bin/bash

echo -e 'Acessando "https://localhost:8000/" com cURL sem o parâmetro --insecure\n'
curl https://localhost:8000/
sleep 3

echo -e "\n-----------------------------------------------------------------------------------\n"

echo -e 'Acessando "https://localhost:8000/" com cURL usando o parâmetro --insecure\n'
curl --insecure https://localhost:8000/
