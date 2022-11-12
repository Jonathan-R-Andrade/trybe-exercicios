from timeit import timeit
import random


def calc_averages(n):
    averages = []
    for _ in range(100):
        average = 0

        for _ in range(n):
            average += random.randint(1, n)

        average /= n
        averages.append(average)

    return averages


#  Complexidade de tempo = O(n)
# Complexidade de espaço = O(1)

if __name__ == "__main__":
    print(calc_averages(5))
    print(calc_averages(10))
    print(calc_averages(20))

    print(timeit(lambda: calc_averages(5), number=100))
    print(timeit(lambda: calc_averages(10), number=100))
    print(timeit(lambda: calc_averages(20), number=100))
