# Complexidade O(n)
def calc_max_time_without_instability(values: list[int]) -> int:
    max_time_without_instability = 0
    curr_time_without_instability = 0
    for value in values:
        if value == 1:
            curr_time_without_instability += 1
        else:
            curr_time_without_instability = 0
        if curr_time_without_instability > max_time_without_instability:
            max_time_without_instability = curr_time_without_instability
    return max_time_without_instability


if __name__ == "__main__":
    list_a = [0, 1, 1, 1, 0, 0, 1, 1]
    list_b = [1, 1, 1, 1, 0, 0, 1, 1]

    result_a = calc_max_time_without_instability(list_a)
    result_b = calc_max_time_without_instability(list_b)

    print(result_a)
    print(result_b)
