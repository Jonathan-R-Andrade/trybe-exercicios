from random import shuffle
from sorting_techniques import pysort
from Timer import Timer

sortObj = pysort.Sorting()


def compare(list: list[int], sorting_type: str):
    total = len(list)
    with Timer(f"Ordenação por seleção com {total} números {sorting_type} -"):
        sortObj.selectionSort(list)
    with Timer(f"Ordenação por inserção com {total} números {sorting_type} -"):
        sortObj.insertionSort(list)


def get_numbers_lists(total_numbers):
    ordered = list(range(total_numbers))
    inversely_ordered = list(reversed(ordered))
    random = ordered[:]
    shuffle(random)

    return (ordered, inversely_ordered, random)


if __name__ == "__main__":
    for total_numbers in (10000, 100000, 1000000):
        ordered, inversely_ordered, random = get_numbers_lists(total_numbers)
        compare(ordered, "ordenados")
        print("-" * 80)

        compare(inversely_ordered, "inversamento ordenados")
        print("-" * 80)

        compare(random, "aleatórios")
        print("\n", "*" * 80, "\n", sep="")
