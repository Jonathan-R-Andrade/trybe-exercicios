from stack_with_linked_list import Stack


# Complexity O(n)
def reverse_words(phrase):
    stacks: list[Stack] = []
    curr_stack_index = -1
    for char in phrase:
        if char == "(":
            curr_stack_index += 1
            continue
        elif char == ")":
            curr_stack_index -= 1
            continue
        if curr_stack_index >= 0:
            if len(stacks) <= curr_stack_index:
                stacks.append(Stack())
            stacks[curr_stack_index].push(char)

    new_phrase = ""
    curr_stack_index = -1
    for char in phrase:
        if char == "(":
            curr_stack_index += 1
            continue
        elif char == ")":
            curr_stack_index -= 1
            continue
        if curr_stack_index == -1:
            new_phrase += char
        else:
            new_phrase += stacks[curr_stack_index].pop()

    return new_phrase


if __name__ == "__main__":
    print(reverse_words("teste (lagel)"))
    print(reverse_words("cool (tset)"))
    print(reverse_words("12(8(54(76))3)9"))
