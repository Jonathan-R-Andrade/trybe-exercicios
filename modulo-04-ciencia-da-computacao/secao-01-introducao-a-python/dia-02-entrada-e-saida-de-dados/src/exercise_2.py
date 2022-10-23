import random


def shuffle_word(word):
    while True:
        crambled_word = "".join(random.sample(word, len(word)))
        if crambled_word != word:
            return crambled_word


def play(words):
    random_word = random.choice(words)
    crambled_word = shuffle_word(random_word)

    attempts = 3
    correct = False

    while attempts > 0:
        attempts -= 1
        tried_word = input(f'Que palavra é essa "{crambled_word}"? ').upper()
        correct = tried_word == random_word
        if correct:
            break
        elif attempts:
            print("\nTente novamente")

    if correct:
        print(f'\nVocê acertou 🙂️. A palavra correta é "{random_word}"')
    else:
        print(f'\nVocê errou 🙁️. A palavra correta é "{random_word}"')


if __name__ == "__main__":
    words = [
        "CASA",
        "AVIÃO",
        "CACHORRO",
        "COMPUTADOR",
        "PNEUMOULTRAMICROSCOPICOSSILICOVULCANOCONIÓTICO",  # 😲️
    ]
    play(words)
