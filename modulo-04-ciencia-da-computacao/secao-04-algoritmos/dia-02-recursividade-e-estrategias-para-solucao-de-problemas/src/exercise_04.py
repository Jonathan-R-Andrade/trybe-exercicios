def find_gcd(number_a, number_b):
    if number_a == number_b:
        return number_a
    elif number_a > number_b:
        return find_gcd(number_b, number_a - number_b)

    return find_gcd(number_b, number_a)


if __name__ == "__main__":
    print(find_gcd(20, 28))
    print(find_gcd(18, 78))
