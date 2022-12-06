from node import Node
from linked_list_iterator import LinkedListIterator


class LinkedList:
    def __init__(self):
        self.__head = None
        self.__tail = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.__head})"

    def __len__(self):
        return self.__length

    def __iter__(self):
        return LinkedListIterator(self.__head)

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
        node_to_be_removed = self.__head
        if node_to_be_removed:
            self.__head = self.__head.next
            node_to_be_removed.next = None
            self.__length -= 1
            if self.is_empty():
                self.__tail = None
            return node_to_be_removed.value
        return None

    # Complexity O(n)
    def remove_last(self):
        if self.__length <= 1:
            return self.remove_first()
        before_last_node = self.__get_node_at(self.__length - 2)
        node_to_be_removed = before_last_node.next
        before_last_node.next = None
        self.__tail = before_last_node
        self.__length -= 1
        return node_to_be_removed.value

    # Complexity O(n)
    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= self.__length - 1:
            return self.remove_last()
        previous_to_be_removed = self.__get_node_at(position - 1)
        node_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = node_to_be_removed.next
        node_to_be_removed.next = None
        self.__length -= 1
        return node_to_be_removed.value

    # Complexity O(n)
    def get_element_at(self, position):
        if position < 0 or position >= self.__length:
            return None
        node = self.__get_node_at(position)
        if node is not None:
            return node.value
        return None

    # Complexity O(n)
    def index_of(self, value):
        current_node = self.__head
        current_index = 0
        while current_node is not None:
            if current_node.value == value:
                return current_index
            current_node = current_node.next
            current_index += 1
        return -1

    # Complexity O(1)
    def clear(self):
        self.__head = None
        self.__tail = None
        self.__length = 0

    # Complexity O(1)
    def is_empty(self):
        return not bool(self.__length)
