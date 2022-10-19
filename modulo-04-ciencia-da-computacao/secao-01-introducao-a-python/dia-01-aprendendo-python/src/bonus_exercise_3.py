def add_up_to(number):
    result = 0
    for index in range(number):
        result += index + 1
    return result


if __name__ == "__main__":
    print(add_up_to(5))
