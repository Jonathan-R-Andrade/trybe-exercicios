from math import ceil


def calculate_painting_cost(
    square_metre, can_price=80, can_liter=18, coverage_per_liter=3
):
    coverage_per_can = can_liter * coverage_per_liter
    necessary_cans = ceil(square_metre / coverage_per_can)
    total_price = necessary_cans * can_price
    return (necessary_cans, total_price)


if __name__ == "__main__":
    print(calculate_painting_cost(100))
