from linked_list import LinkedList


class StackOverflow(Exception):
    pass


class LimitStack:
    def __init__(self, limit):
        self.linked_list = LinkedList()
        self.limit = limit

    def __len__(self):
        return len(self.linked_list)

    def __iter__(self):
        return iter(self.linked_list)

    # Complexity O(1)
    def push(self, value):
        if len(self) == self.limit:
            raise StackOverflow
        self.linked_list.insert_last(value)

    # Complexity O(1)
    def pop(self):
        return self.linked_list.remove_last()

    # Complexity O(1)
    def peek(self):
        return self.linked_list.get_element_at(len(self) - 1)

    # Complexity O(1)
    def is_empty(self):
        return self.linked_list.is_empty()

    # Complexity O(n)
    def min_value(self):
        min_value = None
        for value in self.linked_list:
            if min_value is None or value < min_value:
                min_value = value
        return min_value


if __name__ == "__main__":
    content_stack = LimitStack(2)
    content_stack.push(1)
    content_stack.push(-2)

    try:
        content_stack.push(3)
    except StackOverflow:
        print("Não é possível adicionar outro item à pilha")
