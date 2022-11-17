def is_prime_number(number, divisor=3):
    if number == 2 or number == divisor:
        return True
    if number < 2 or number % 2 == 0 or number % divisor == 0:
        return False
    return is_prime_number(number, divisor + 2)


if __name__ == "__main__":
    for i in range(1, 1001):
        if is_prime_number(i):
            print(i)
