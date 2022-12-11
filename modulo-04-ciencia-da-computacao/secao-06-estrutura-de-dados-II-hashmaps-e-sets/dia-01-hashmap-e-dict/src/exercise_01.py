# Complexity O(ab + c)
def count_words(words: list[str], chars: str) -> int:
    char_frequency = {}
    # O(c)
    for char in chars:
        if char in char_frequency:
            char_frequency[char] += 1
        else:
            char_frequency[char] = 1

    total_words_length = 0

    # O(ab)
    for word in words:  # O(a)
        used_char = {}
        is_valid_word = True

        for char in word:  # O(b)
            if char not in char_frequency:
                is_valid_word = False
                break

            if char in used_char:
                used_char[char] += 1
                if used_char[char] > char_frequency[char]:
                    is_valid_word = False
                    break
            else:
                used_char[char] = 1

        if is_valid_word:
            total_words_length += len(word)

    return total_words_length


if __name__ == "__main__":
    words = ["cat", "bt", "hat", "tree"]
    chars = "atach"
    result = count_words(words, chars)
    print(result)

    words = ["hello", "world", "students"]
    chars = "welldonehoneyr"
    result = count_words(words, chars)
    print(result)
