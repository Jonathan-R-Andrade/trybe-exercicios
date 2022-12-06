from typing import Iterator
from node import Node


class LinkedListIterator(Iterator):
    def __init__(self, node: Node):
        self.node = node

    def __next__(self):
        if self.node is not None:
            value = self.node.value
            self.node = self.node.next
            return value
        raise StopIteration
