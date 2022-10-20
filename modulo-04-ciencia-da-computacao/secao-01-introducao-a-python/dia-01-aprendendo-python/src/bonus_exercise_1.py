def smaller_number(numbers):
    # return min(numbers)
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller


if __name__ == "__main__":
    print(smaller_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
