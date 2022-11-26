# Complexidade O(n)
def calc_total_persons(entries: list[int], exits: list[int], hour: int) -> int:
    total_persons = 0
    for index in range(len(entries)):
        if entries[index] <= hour <= exits[index]:
            total_persons += 1

    return total_persons


if __name__ == "__main__":
    entries = [1, 2, 3]
    exits = [3, 2, 7]

    total_persons = calc_total_persons(entries, exits, hour=4)

    print(total_persons)
