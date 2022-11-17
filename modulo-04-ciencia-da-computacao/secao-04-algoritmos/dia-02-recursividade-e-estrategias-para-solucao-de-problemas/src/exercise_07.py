def tower_of_hanoi(source, auxiliary, destination, disk_index=None):
    disk_index = len(source) if disk_index is None else disk_index
    if disk_index > 0:
        tower_of_hanoi(source, destination, auxiliary, disk_index - 1)
        destination.append(source.pop())
        tower_of_hanoi(auxiliary, source, destination, disk_index - 1)


if __name__ == "__main__":
    column_a = [3, 2, 1]
    column_b = []
    column_c = []

    print(column_a, column_b, column_c)
    tower_of_hanoi(column_a, column_b, column_c)
    print(column_a, column_b, column_c)
