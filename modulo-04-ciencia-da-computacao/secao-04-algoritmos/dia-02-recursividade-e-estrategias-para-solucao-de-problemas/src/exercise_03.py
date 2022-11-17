def find_largest_integer(numbers):
    if len(numbers) == 1:
        return numbers[0]

    result = find_largest_integer(numbers[1:])
    return numbers[0] if numbers[0] > result else result


if __name__ == "__main__":
    print(find_largest_integer([3, 1, 9, 2, 8, 7, 6, 5, 4]))
    print(find_largest_integer([6, 5]))
    print(find_largest_integer([7]))
