class Soldier:
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi:
    def __init__(self, level):
        self.level = level

    def attackWithSaber(self):
        return self.level * 100


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")


class JediAdapter:
    def __init__(self, jedi: Jedi):
        self.jedi = jedi

    def attack(self):
        return self.jedi.attackWithSaber()


if __name__ == "__main__":
    StarWarsGame(Soldier(5)).fight_enemy()
    jedi = Jedi(20)
    StarWarsGame(JediAdapter(jedi)).fight_enemy()
