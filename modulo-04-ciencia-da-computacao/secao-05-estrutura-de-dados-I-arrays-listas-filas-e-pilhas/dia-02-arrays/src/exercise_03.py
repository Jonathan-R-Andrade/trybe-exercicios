# Complexidade O(n²)
def calculate_pairs(items: list) -> int:
    total_pairs = 0
    for current_index in range(len(items) - 1):
        for next_index in range(current_index + 1, len(items)):
            if items[current_index] == items[next_index]:
                total_pairs += 1

    return total_pairs


if __name__ == "__main__":
    items_a = [1, 3, 1, 1, 2, 3]
    items_b = [1, 1, 2, 3]

    result_a = calculate_pairs(items_a)
    result_b = calculate_pairs(items_b)

    print(result_a)
    print(result_b)
