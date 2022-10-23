import json
import random

with open("src/data/pokemons.json", mode="r") as json_file:
    pokemons = json.load(json_file)

random_pokemon = random.choice(pokemons)
pokemon_name = random_pokemon["name"]

for index in range(len(pokemon_name)):
    total_character = index + 1
    name = pokemon_name[0:total_character]
    if len(name) == len(pokemon_name):
        print(f'\nVocê errou 🙁️. O nome é "{pokemon_name}"')
        break
    tried_name = input(f'Adivinhe o nome "{name}": ')
    if tried_name.lower() == pokemon_name.lower():
        print(f'\nVocê acertou 🙂️. O nome é "{pokemon_name}"')
        break
