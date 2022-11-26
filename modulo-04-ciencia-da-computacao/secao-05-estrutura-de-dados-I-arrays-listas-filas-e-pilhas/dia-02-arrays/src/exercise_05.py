# Complexidade O(nm)
def count_servers_in_communication(grid: list[list]) -> int:
    total_servers = 0

    total_rows, total_columns = len(grid), len(grid[0])
    total_servers_in_rows = [0 for _ in range(total_rows)]
    total_servers_in_columns = [0 for _ in range(total_columns)]

    for row_index in range(total_rows):
        for column_index in range(total_columns):
            server = grid[row_index][column_index]
            total_servers_in_rows[row_index] += server
            total_servers_in_columns[column_index] += server

    for row_index in range(total_rows):
        for column_index in range(total_columns):
            server = grid[row_index][column_index]
            total_servers_in_row = total_servers_in_rows[row_index]
            total_servers_in_column = total_servers_in_columns[column_index]
            if server > 0 and (
                total_servers_in_row > 1 or total_servers_in_column > 1
            ):
                total_servers += 1

    return total_servers


if __name__ == "__main__":
    servers_a = [
        [1, 0],
        [0, 1],
    ]
    servers_b = [
        [1, 0],
        [1, 1],
    ]
    servers_c = [
        [1, 1, 0, 1],
        [1, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 1],
    ]

    result_a = count_servers_in_communication(servers_a)
    result_b = count_servers_in_communication(servers_b)
    result_c = count_servers_in_communication(servers_c)

    print(result_a)
    print(result_b)
    print(result_c)
