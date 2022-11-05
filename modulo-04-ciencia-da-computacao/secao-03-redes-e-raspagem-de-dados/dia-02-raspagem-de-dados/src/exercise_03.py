import requests


def am_i_a_robot(text):
    try:
        assert "bot detected" not in text
        print("Não sou um robô! 🤫️😎️")
    except AssertionError:
        print("🤖️🤖️🤖️")


URL = "https://scrapethissite.com/pages/advanced/?gotcha=headers"

headers = {
    "user-agent": (
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    ),
    "accept": (
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,*/*,"
        "image/webp,image/apng;q=0.8,application/signed-exchange;v=b3;q=0.9"
    ),
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
}


if __name__ == "__main__":
    response1 = requests.get(URL)
    response2 = requests.get(URL, headers=headers)

    print("Tentativa 1:")
    am_i_a_robot(response1.text)

    print("\nTentativa 2:")
    am_i_a_robot(response2.text)
