from limit_stack_with_linked_list import LimitStack


class Parking:
    def __init__(self, limit):
        self.garage = LimitStack(limit)

    # Complexity O(n)
    def __str__(self):
        vehicles_in_the_garage = []
        for vehicle in self.garage:
            vehicles_in_the_garage.append(vehicle)
        return str(vehicles_in_the_garage)

    # Complexity O(1)
    def add_vehicle(self, vehicle):
        self.garage.push(vehicle)

    # Complexity O(n)
    def remove_vehicle(self, vehicle_to_remove):
        street = LimitStack(len(self.garage))
        vehicle_removed = None

        while not self.garage.is_empty():
            vehicle = self.garage.pop()
            if vehicle == vehicle_to_remove:
                vehicle_removed = vehicle
                break
            street.push(vehicle)

        while not street.is_empty():
            vehicle = street.pop()
            self.garage.push(vehicle)

        return vehicle_removed


if __name__ == "__main__":
    parking = Parking(6)

    parking.add_vehicle("A")
    parking.add_vehicle("B")
    parking.add_vehicle("X")
    parking.add_vehicle("C")
    parking.add_vehicle("D")
    parking.add_vehicle("E")

    print("Vehicles in the garage:", parking)

    removed_vehicle = parking.remove_vehicle("X")
    print("Removed vehicle:", removed_vehicle)

    print("Vehicles in the garage:", parking)
