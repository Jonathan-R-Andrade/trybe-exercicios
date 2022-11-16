def count_even_numbers(number):
    total_even_numbers = 0

    for number in range(1, number + 1):
        if number % 2 == 0:
            total_even_numbers += 1

    return total_even_numbers


if __name__ == "__main__":
    print(count_even_numbers(1))
    print(count_even_numbers(10))
    print(count_even_numbers(100))
