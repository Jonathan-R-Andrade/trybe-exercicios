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

    # Complexity O(n)
    def min_value(self):
        min_value = None
        for value in self.linked_list:
            if min_value is None or value < min_value:
                min_value = value
        return min_value


if __name__ == "__main__":
    content_stack = Stack()

    content_stack.push(1)
    content_stack.push(-2)
    content_stack.push(3)
    content_stack.push(-5)
    content_stack.push(7)
    content_stack.pop()
    content_stack.pop()
    print(content_stack.min_value())
