from timeit import timeit


def kids_with_candies(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# Melhor caso = O(n)
#  Caso médio = O(n)
#   Pior caso = O(n)
# Complexidade de espaço = O(n)

if __name__ == "__main__":
    candies_1 = [2, 3, 5, 1, 3]
    candies_2 = [4, 1, 1, 4, 9, 5, 7, 1, 4, 9]
    extra_candies_1 = 3
    extra_candies_2 = 8

    print(kids_with_candies(candies_1, extra_candies_1))
    print(kids_with_candies(candies_2, extra_candies_2))

    time_1 = timeit(
        lambda: kids_with_candies(candies_1, extra_candies_1),
        number=100000,
    )
    time_2 = timeit(
        lambda: kids_with_candies(candies_2, extra_candies_2),
        number=100000,
    )

    print(time_1)
    print(time_2)
