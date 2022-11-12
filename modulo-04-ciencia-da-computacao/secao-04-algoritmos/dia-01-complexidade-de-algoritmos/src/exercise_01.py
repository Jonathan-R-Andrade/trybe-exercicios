from timeit import timeit


def contains_duplicate(numbers):
    numbers.sort()  # O(n log n)
    previous_number = "not a number"
    for number in numbers:  # O(n)
        if previous_number == number:
            return True
        previous_number = number

    return False


# Melhor caso = O(n log n)
#  Caso médio = O(n log n)
#   Pior caso = O(n log n)

if __name__ == "__main__":
    numbers_1 = [0, 0, 1, 2, 3]
    numbers_2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    print(contains_duplicate(numbers_1))
    print(contains_duplicate(numbers_2))

    print(timeit(lambda: contains_duplicate(numbers_1), number=100000))
    print(timeit(lambda: contains_duplicate(numbers_2), number=100000))
