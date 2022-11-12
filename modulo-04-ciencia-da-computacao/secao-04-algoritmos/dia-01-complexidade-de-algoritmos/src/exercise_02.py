from timeit import timeit


def check_for_a_ship(board, line, column):
    if board[line][column] == 1:
        return True

    return False


#  Complexidade de tempo = O(1)
# Complexidade de espaço = O(1)

if __name__ == "__main__":
    board_1 = [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [0, 0, 0, 1, 0],
    ]

    board_2 = [
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    ]

    print(check_for_a_ship(board_1, 0, 4))
    print(check_for_a_ship(board_2, 1, 1))

    print(timeit(lambda: check_for_a_ship(board_1, 0, 4), number=1000000))
    print(timeit(lambda: check_for_a_ship(board_2, 0, 4), number=1000000))
