def build_a_right_triangle(base_length):
    triangle = ""
    for index in range(base_length):
        if index > 0:
            triangle += "\n"
        triangle += "*" * (index + 1)
    return triangle


if __name__ == "__main__":
    print(build_a_right_triangle(5))
