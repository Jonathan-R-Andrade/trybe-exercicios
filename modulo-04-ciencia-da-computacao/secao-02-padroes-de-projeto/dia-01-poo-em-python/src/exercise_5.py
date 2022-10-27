class CreditCard:
    def __init__(
        self, name: str, number: int, month: int, year: int, security_code: int
    ):
        self.name = name
        self.number = number
        self.month = month
        self.year = year
        self.security_code = security_code


class Order:
    def __init__(self, items: list, credit_card: CreditCard):
        self.items = items
        self.credit_card = credit_card
