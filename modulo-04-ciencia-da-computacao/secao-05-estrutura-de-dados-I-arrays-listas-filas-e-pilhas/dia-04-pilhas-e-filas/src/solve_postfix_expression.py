from stack_with_linked_list import Stack
from re import sub


def has_greater_precedence(token: str, token_to_compare: str) -> bool:
    precedence = {
        "(": 0,
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2,
        "^": 3,
    }
    return precedence[token] > precedence[token_to_compare]


def get_tokens(infix_expression: str) -> list[str]:
    infix_expression = sub(r"\s*", "", infix_expression)
    infix_expression = sub(r"\[|\{", "(", infix_expression)
    infix_expression = sub(r"\]|\}", ")", infix_expression)
    infix_expression = sub(
        r"(\)|\d)\(",
        lambda matchobj: matchobj.group().replace("(", "*("),
        infix_expression,
    )
    infix_expression = sub(
        r"\)(\d|\()",
        lambda matchobj: matchobj.group().replace(")", ")*"),
        infix_expression,
    )
    infix_expression = sub(
        r"\+|\-|\*|\/|\^|\(|\)",
        lambda matchobj: f" {matchobj.group()} ",
        infix_expression,
    )
    infix_expression = sub(
        r"(\+|\-|\*|\/|\^|\(|^)\s*- \d",
        lambda matchobj: matchobj.group().replace("- ", "-"),
        infix_expression,
    )
    return infix_expression.split()


def convert_infix_expression_to_postfix(infix_expression: str) -> str:
    tokens = get_tokens(infix_expression)
    postfix_expression = []
    operators = ["+", "-", "*", "/", "^"]
    stack = Stack()

    for token in tokens:
        if token in operators:
            if len(stack) == 0:
                stack.push(token)
            else:
                while len(stack) != 0 and not has_greater_precedence(
                    token, stack.peek()
                ):
                    postfix_expression.append(stack.pop())
                stack.push(token)
        elif token == "(":
            stack.push(token)
        elif token == ")":
            while len(stack) != 0 and stack.peek() != "(":
                postfix_expression.append(stack.pop())
            stack.pop()
        else:
            postfix_expression.append(token)

    while len(stack) != 0:
        postfix_expression.append(stack.pop())

    return " ".join(postfix_expression)


# Complexity O(n)
def solve_postfix_expression(postfix_expression: str) -> float:
    stack = Stack()
    tokens_list = postfix_expression.split(" ")

    for token in tokens_list:
        if token == "+":
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == "*":
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == "-":
            operator_2 = stack.pop()
            operator_1 = stack.pop()
            result = operator_1 - operator_2
            stack.push(result)
        elif token == "/":
            operator_2 = stack.pop()
            operator_1 = stack.pop()
            result = operator_1 / operator_2
            stack.push(result)
        elif token == "^":
            operator_2 = stack.pop()
            operator_1 = stack.pop()
            result = operator_1**operator_2
            stack.push(result)
        else:
            stack.push(float(token))

    return stack.pop()


if __name__ == "__main__":
    infix_expressions = [
        "A + B - C / A",
        "B + (A * C) / C * 2",
        "A * B - C + 4 * A - B",
        "(A + C / B) * (A + B)",
        "50 * B / 2 * 5 / A",
        "30.55 - A * B / C",
        "-A - -B",
        "A(C - B)",
        "B ^ A / C",
    ]

    for infix in infix_expressions:
        infix = infix.replace("A", "5").replace("B", "10").replace("C", "20")
        postfix = convert_infix_expression_to_postfix(infix)
        result = solve_postfix_expression(postfix)
        print(infix.ljust(25), "->", postfix.ljust(25), "=", result)
