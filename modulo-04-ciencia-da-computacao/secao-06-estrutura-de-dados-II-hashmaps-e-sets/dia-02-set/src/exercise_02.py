# Complexity O(n²)
def longest_substring_length_without_repetition(string: str) -> int:
    max_len = 0
    string_len = len(string)

    for substring_len in range(1, string_len + 1):
        for start_index in range(string_len - substring_len + 1):
            last_index = start_index + substring_len
            substring = string[start_index:last_index]
            substring_chars = set(substring)

            if substring_len == len(substring_chars):
                max_len = substring_len

    return max_len


if __name__ == "__main__":
    string = "serdevemuitolegalmasehprecisoestudarbastante"
    length = longest_substring_length_without_repetition(string)
    print(length)
