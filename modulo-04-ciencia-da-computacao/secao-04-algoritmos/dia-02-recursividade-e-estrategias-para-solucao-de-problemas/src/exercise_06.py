def reverse(arr):
    if len(arr) < 2:
        return arr
    return arr[-1:] + reverse(arr[:-1])


if __name__ == "__main__":
    print(reverse([1]))
    print(reverse([1, 2]))
    print(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]))
