# Complexity O(n)
def check_the_winner(players: dict[str, list[int]]) -> str | None:
    player1_name, player1_numbers = players.popitem()
    player2_name, player2_numbers = players.popitem()

    if len(player1_numbers) != len(player2_numbers):
        raise ValueError(
            "Each player must choose the same quantity of numbers."
        )

    player1_numbers = set(player1_numbers)
    player2_numbers = set(player2_numbers)

    player1_difference = list(player1_numbers.difference(player2_numbers))
    player2_difference = list(player2_numbers.difference(player1_numbers))

    if len(player1_difference) == 0:
        player1_score = 0
        player2_score = 0
    else:
        player1_score = max(player1_difference) - min(player1_difference)
        player2_score = max(player2_difference) - min(player2_difference)

    if player1_score > player2_score:
        return player1_name
    elif player2_score > player1_score:
        return player2_name

    return None


if __name__ == "__main__":
    players = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}
    print(check_the_winner(players))

    players = {"Clara": [0, 1, 7, 9, 10], "Marco": [0, 2, 6, 9, 10]}
    print(check_the_winner(players))

    players = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 6, 9, 10]}
    print(check_the_winner(players))

    players = {"Clara": [0, 1, 7, 9, 10], "Marco": [0, 1, 7, 9, 10]}
    print(check_the_winner(players))
