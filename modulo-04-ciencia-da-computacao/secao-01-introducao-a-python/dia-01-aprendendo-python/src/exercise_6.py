def is_triangle(sides):
    if len(sides) != 3:
        return False
    if min(sides) <= 0:
        return False
    return True


def is_equilateral_triangle(sides):
    if sides[0] == sides[1] == sides[2]:
        return True
    return False


def is_scalene_triangle(sides):
    if sides[0] != sides[1] != sides[2] != sides[0]:
        return True
    return False


def is_isosceles_triangle(sides):
    if is_equilateral_triangle(sides):
        return False
    elif is_scalene_triangle(sides):
        return False
    return True


def verify_triangle_type(sides):
    if not is_triangle(sides):
        return "Não é triangulo"
    if is_equilateral_triangle(sides):
        return "Equilátero"
    if is_scalene_triangle(sides):
        return "Escaleno"
    return "Isósceles"


if __name__ == "__main__":
    print(verify_triangle_type([2, 3, 3]))
