# Complexity O(n)
def calc_score_recursively(persons: dict[str, list[str]], person: str) -> int:
    total_score = 1

    for subordinate in persons[person]:
        total_score += calc_score_recursively(persons, subordinate)

    return total_score


# Complexity O(n)
def calc_score_iteratively(persons: dict[str, list[str]], person: str) -> int:
    total_score = 1

    persons_list = [person]

    for person in persons_list:
        subordinates = persons[person]
        total_score += len(subordinates)
        persons_list.extend(subordinates)

    return total_score


if __name__ == "__main__":
    persons = {
        "1": ["2", "3"],
        "2": ["4"],
        "3": [],
        "4": ["5", "6"],
        "5": ["7"],
        "6": [],
        "7": [],
    }

    print("Calculating recursively:")
    for person in persons:
        score = calc_score_recursively(persons, person)
        print(f"person {person} => score {score}")

    print()

    print("Calculating iteratively:")
    for person in persons:
        score = calc_score_iteratively(persons, person)
        print(f"person {person} => score {score}")
