from exercise_2 import play


with open("src/words-list-pt-br.txt", mode="r") as file:
    words = [row.upper().replace("\n", "") for row in file.readlines()]
    play(words)
