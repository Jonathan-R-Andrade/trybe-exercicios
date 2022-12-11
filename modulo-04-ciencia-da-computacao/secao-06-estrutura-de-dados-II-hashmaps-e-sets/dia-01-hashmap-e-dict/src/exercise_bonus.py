class CompanyHierarchy:
    def __init__(self, max_subordinates: int):
        self.__max_subordinates: int = max_subordinates
        self.__scores: dict[str, int] = {}
        self.__leaders: dict[str, str] = {}
        self.persons: dict[str, str] = {}

    # Complexity O(1)
    def __check_hierarchy(self, person: str, subordinate: str) -> None:
        if self.persons.get(person) is None:
            raise Exception(f"{person} was not found.")

        leader = self.__leaders.get(subordinate)
        if leader is not None:
            raise Exception(f"{subordinate} already has the leader {leader}.")

    # Complexity O(n)
    def __increment_score(self, person: str, value: int) -> None:
        self.__scores[person] += value
        leader = self.__leaders.get(person)
        while leader is not None:
            self.__scores[leader] += value
            leader = self.__leaders.get(leader)

    # Complexity O(1)
    def add_person(self, person: str) -> None:
        self.persons[person] = []
        self.__scores[person] = 1

    # Complexity O(n)
    def add_subordinate(self, person: str, subordinate: str) -> None:
        self.__check_hierarchy(person, subordinate)

        if self.persons.get(subordinate) is None:
            self.add_person(subordinate)

        was_the_person_found = False
        for key in self.persons:
            if key == person:
                was_the_person_found = True
            if not was_the_person_found:
                continue

            subordinates = self.persons[key]
            if len(subordinates) < self.__max_subordinates:
                subordinates.append(subordinate)
                self.__leaders[subordinate] = key
                self.__increment_score(key, self.__scores[subordinate])
                break

    # Complexity O(n)
    def add_subordinate_recursively(
        self, person: str, subordinate: str
    ) -> None:
        self.__check_hierarchy(person, subordinate)

        if self.persons.get(subordinate) is None:
            self.add_person(subordinate)

        subordinates = self.persons[person]
        if len(subordinates) < self.__max_subordinates:
            subordinates.append(subordinate)
            self.__leaders[subordinate] = person
            self.__increment_score(person, self.__scores[subordinate])
        else:
            self.add_subordinate_recursively(subordinates[0], subordinate)

    # Complexity O(1)
    def get_score(self, person: str) -> int:
        return self.__scores[person]


if __name__ == "__main__":
    company_hierarchy = CompanyHierarchy(2)
    company_hierarchy.add_person("1")
    company_hierarchy.add_subordinate("1", "2")
    company_hierarchy.add_subordinate("1", "3")
    company_hierarchy.add_subordinate("2", "4")
    company_hierarchy.add_subordinate("4", "5")
    company_hierarchy.add_subordinate("4", "6")
    company_hierarchy.add_subordinate("5", "7")

    print(f"{company_hierarchy.persons}\n")

    for person in company_hierarchy.persons:
        score = company_hierarchy.get_score(person)
        print(f"person {person} => score {score}")

    company_hierarchy.add_subordinate("4", "8")
    company_hierarchy.add_subordinate("6", "9")

    print(f"\n{company_hierarchy.persons}\n")

    for person in company_hierarchy.persons:
        score = company_hierarchy.get_score(person)
        print(f"person {person} => score {score}")
