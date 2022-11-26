# Complexidade O(n)
def shuffle(cards: list) -> list:
    shuffled_cards = []
    total_cards = len(cards)
    half_cards = len(cards) // 2
    for index in range(half_cards):
        shuffled_cards.append(cards[index])
        shuffled_cards.append(cards[index + half_cards])
    if total_cards % 2 != 0:
        shuffled_cards.insert(half_cards, cards[-1])
    return shuffled_cards


if __name__ == "__main__":
    list_a = [1, 2, 3, 4]
    list_b = [1, 2, 3, 4, 5, 6, 7]
    list_c = [1, 2, 3, 4, 5, 6, 7, 8]

    result_a = shuffle(list_a)
    result_b = shuffle(list_b)
    result_c = shuffle(list_c)

    print(result_a)
    print(result_b)
    print(result_c)
