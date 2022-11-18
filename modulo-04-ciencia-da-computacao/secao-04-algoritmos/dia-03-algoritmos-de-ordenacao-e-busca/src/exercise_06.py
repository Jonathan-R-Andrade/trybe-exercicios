def find_error(array: list[bool]):
    first_index = 0
    last_index = len(array) - 1

    while first_index <= last_index:
        middle_index = (first_index + last_index) // 2

        if array[middle_index]:
            first_index = middle_index + 1
        else:
            last_index = middle_index - 1

    return first_index or None


if __name__ == "__main__":
    array_1 = [True, True, True, True, False, False, False]
    array_2 = [True, True, False, False, False, False, False]

    print(find_error(array_1))
    print(find_error(array_2))
