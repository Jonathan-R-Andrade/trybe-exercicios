from src.exercise_1 import get_list


def test_get_list():
    expected_list = [
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz',
      'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz',
    ]

    assert get_list(15) == expected_list
