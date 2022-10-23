def get_list(last_number):
    numbers = []
    for number in range(last_number):
        number += 1
        if number % 3 == 0 and number % 5 == 0:
            numbers.append("FizzBuzz")
        elif number % 3 == 0:
            numbers.append("Fizz")
        elif number % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(number)
    return numbers


if __name__ == "__main__":
    print(get_list(20))
