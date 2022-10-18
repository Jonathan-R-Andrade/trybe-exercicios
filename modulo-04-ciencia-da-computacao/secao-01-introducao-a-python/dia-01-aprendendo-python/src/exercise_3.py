def build_a_square(size):
    row = "*" * size
    square = ""
    for index in range(size):
        if index > 0:
            square += "\n"
        square += row
    return square


if __name__ == "__main__":
    print(build_a_square(5))
