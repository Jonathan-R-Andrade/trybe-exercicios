# Complexity O(n)
def longest_substring_length_without_repetition(string: str) -> int:
    max_len = 0
    start_index = 0
    last_index = {}

    for index, char in enumerate(string):
        if char in last_index and last_index[char] > start_index:
            start_index = last_index[char] + 1

        last_index[char] = index
        curr_len = index - start_index + 1
        max_len = max(max_len, curr_len)

    return max_len


if __name__ == "__main__":
    string = "serdevemuitolegalmasehprecisoestudarbastante"
    length = longest_substring_length_without_repetition(string)
    print(length)
