from linked_list import LinkedList


class Stack:
    def __init__(self):
        self.linked_list = LinkedList()

    def __len__(self):
        return len(self.linked_list)

    def __iter__(self):
        return iter(self.linked_list)

    # Complexity O(1)
    def push(self, value):
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
