from exercise_01 import count_even_numbers


def count_even_numbers_recursively(number):
    is_even = 1 if number % 2 == 0 else 0
    if number == 1:
        return 0
    return is_even + count_even_numbers(number - 1)


if __name__ == "__main__":
    print(count_even_numbers(1))
    print(count_even_numbers_recursively(1))

    print(count_even_numbers(10))
    print(count_even_numbers_recursively(10))

    print(count_even_numbers(100))
    print(count_even_numbers_recursively(100))
