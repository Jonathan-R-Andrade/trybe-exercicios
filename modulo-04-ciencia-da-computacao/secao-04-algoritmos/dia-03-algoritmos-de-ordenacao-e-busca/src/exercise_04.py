from random import shuffle
from sorting_techniques import pysort
from Timer import Timer

sortObj = pysort.Sorting()

numbers = list(range(10000))
shuffle(numbers)

with Timer("merge_sort"):
    sortObj.mergeSort(numbers)

# Casos do Merge Sort:
# Melhor = O(n log n)
#  Médio = O(n log n)
#   Pior = O(n log n)

with Timer("bubble_sort"):
    sortObj.bubbleSort(numbers)

# Casos do Bubble Sort:
# Melhor = O(n)
#  Médio = O(n²)
#   Pior = O(n²)
