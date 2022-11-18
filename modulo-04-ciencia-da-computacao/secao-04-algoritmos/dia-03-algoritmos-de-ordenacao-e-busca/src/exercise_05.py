def binary_search(array, value):
    first_index = 0
    last_index = len(array) - 1

    while first_index <= last_index:
        middle_index = (first_index + last_index) // 2

        if value == array[middle_index]:
            return value
        elif value > array[middle_index]:
            first_index = middle_index + 1
        else:
            last_index = middle_index - 1

    return None


if __name__ == "__main__":
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    print(binary_search(numbers, 0))
    print(binary_search(numbers, 5))
    print(binary_search(numbers, 10))
