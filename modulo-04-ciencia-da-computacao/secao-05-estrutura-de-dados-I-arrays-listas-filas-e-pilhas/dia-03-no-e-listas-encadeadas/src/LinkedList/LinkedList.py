from Node import Node


class LinkedList:
    def __init__(self):
        self.__head = None
        self.__tail = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.__head})"

    def __len__(self):
        return self.__length

    # Complexity O(n)
    def __get_node_at(self, position):
        if position == self.__length - 1:
            return self.__tail
        node_to_be_returned = self.__head
        while position > 0:
            node_to_be_returned = node_to_be_returned.next
            position -= 1
        return node_to_be_returned

    # Complexity O(1)
    def insert_first(self, value):
        first_value = Node(value, self.__head)
        self.__head = first_value
        self.__length += 1
        if self.__length == 1:
            self.__tail = first_value

    # Complexity O(1)
    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)
        self.__tail.next = Node(value)
        self.__tail = self.__tail.next
        self.__length += 1

    # Complexity O(n)
    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= self.__length:
            return self.insert_last(value)
        current_value = self.__get_node_at(position - 1)
        new_value = Node(value, current_value.next)
        current_value.next = new_value
        self.__length += 1

    # Complexity O(1)
    def remove_first(self):
        value_to_be_removed = self.__head
        if value_to_be_removed:
            self.__head = self.__head.next
            value_to_be_removed.next = None
            self.__length -= 1
            if self.is_empty():
                self.__tail = None
        return value_to_be_removed

    # Complexity O(n)
    def remove_last(self):
        if self.__length <= 1:
            return self.remove_first()
        before_last_value = self.__get_node_at(self.__length - 2)
        value_to_be_removed = before_last_value.next
        before_last_value.next = None
        self.__tail = before_last_value
        self.__length -= 1
        return value_to_be_removed

    # Complexity O(n)
    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= self.__length - 1:
            return self.remove_last()
        previous_to_be_removed = self.__get_node_at(position - 1)
        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    # Complexity O(n)
    def get_element_at(self, position):
        if position >= self.__length or position < 0:
            return None
        node = self.__get_node_at(position)
        if node is not None:
            return node.value
        return None

    # Complexity O(1)
    def clear(self):
        self.__head = None
        self.__tail = None
        self.__length = 0

    # Complexity O(1)
    def is_empty(self):
        return not bool(self.__length)


if __name__ == "__main__":
    linked_list = LinkedList()

    print(linked_list.is_empty(), linked_list)

    linked_list.insert_at("A", 0)
    linked_list.insert_at("B", 1)
    linked_list.insert_at("C", 2)
    linked_list.insert_at("D", 1)
    linked_list.remove_at(1)
    linked_list.remove_first()
    linked_list.remove_last()
    linked_list.insert_first("A")
    linked_list.remove_last()
    linked_list.insert_last("B")
    linked_list.insert_at("C", 5)
    linked_list.remove_last()
    linked_list.insert_last("D")
    linked_list.insert_at("C", 2)
    linked_list.insert_at("J", 2)
    linked_list.remove_at(2)
    linked_list.remove_last()
    linked_list.remove_first()
    linked_list.insert_first("A")
    linked_list.insert_last("E")
    linked_list.insert_at("D", 3)

    print(linked_list.is_empty(), linked_list)

    print(linked_list.get_element_at(-1))
    print(linked_list.get_element_at(0))
    print(linked_list.get_element_at(1))
    print(linked_list.get_element_at(2))
    print(linked_list.get_element_at(3))
    print(linked_list.get_element_at(4))
    print(linked_list.get_element_at(5))

    linked_list.clear()

    print(linked_list.is_empty(), linked_list)
