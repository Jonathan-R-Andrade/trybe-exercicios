def avarage(numbers):
    # total, length = sum(numbers), len(numbers)
    total, length = 0, 0
    for number in numbers:
        total += number
        length += 1
    return total / length


if __name__ == "__main__":
    print(avarage([20, 30]))
