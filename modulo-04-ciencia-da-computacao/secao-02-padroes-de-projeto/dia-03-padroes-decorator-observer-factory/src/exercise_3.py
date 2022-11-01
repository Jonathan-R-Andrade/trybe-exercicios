from abc import ABC, abstractmethod
from typing import List


class System(ABC):
    def __init__(self, system_name: str):
        self.__system_name = system_name

    def get_system_name(self):
        return self.__system_name


class SupportSystem(System):
    def __init__(self):
        super().__init__("Suporte")


class FinanceSystem(System):
    def __init__(self):
        super().__init__("Financeiro")


class SalesSystem(System):
    def __init__(self):
        super().__init__("Vendas")


class Account(ABC):
    def __init__(self, username: str):
        self.username = username
        self.allowed_accesses: List[System] = []
        self.add_accesses()

    @abstractmethod
    def add_accesses():
        pass

    def show_allowed_accesses(self):
        allowed_access = [
            f"- {allowed_access.get_system_name()}"
            for allowed_access in self.allowed_accesses
        ]
        print(f"{self.username} tem acesso permitido para o(s) sistema(s):")
        print("\n".join(allowed_access))

    def add_access_to(self, system: System):
        self.allowed_accesses.append(system)


class SupportAccount(Account):
    def add_accesses(self):
        self.add_access_to(SupportSystem())


class ManagerAccount(Account):
    def add_accesses(self):
        self.add_access_to(SupportSystem())
        self.add_access_to(FinanceSystem())
        self.add_access_to(SalesSystem())


class SupportSalerAccount(Account):
    def add_accesses(self):
        self.add_access_to(SupportSystem())
        self.add_access_to(SalesSystem())


if __name__ == "__main__":
    account_1 = SupportAccount("Fulano")
    account_1.show_allowed_accesses()
    print()

    account_2 = ManagerAccount("Beltrano")
    account_2.show_allowed_accesses()
    print()

    account_3 = SupportSalerAccount("Sicrano")
    account_3.show_allowed_accesses()
