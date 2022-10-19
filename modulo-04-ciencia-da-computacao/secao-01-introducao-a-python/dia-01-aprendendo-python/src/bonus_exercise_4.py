def decrease_in_percentage(value, percentage):
    return value * (1 - percentage / 100)


def apply_discount(liters_sold, total_price, fuel_type):
    if fuel_type == "A":
        return (
            decrease_in_percentage(total_price, 5)
            if liters_sold > 20
            else decrease_in_percentage(total_price, 3)
        )
    if fuel_type == "G":
        return (
            decrease_in_percentage(total_price, 6)
            if liters_sold > 20
            else decrease_in_percentage(total_price, 4)
        )
    return total_price


def calculate_fuel_price(
    liters_sold, fuel_type, gasoline_price=2.50, alcohol_price=1.90
):
    total_price = (
        liters_sold * alcohol_price
        if fuel_type == "A"
        else liters_sold * gasoline_price
    )
    price_with_discount = apply_discount(liters_sold, total_price, fuel_type)
    return round(price_with_discount, 2)


if __name__ == "__main__":
    print(calculate_fuel_price(20, "G"))
