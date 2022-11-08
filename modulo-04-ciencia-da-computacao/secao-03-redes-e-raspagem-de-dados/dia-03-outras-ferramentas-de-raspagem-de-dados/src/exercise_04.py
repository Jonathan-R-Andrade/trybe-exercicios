import requests
from bs4 import BeautifulSoup

BASE_URL = "https://pt.wikipedia.org"
PAGE = "wiki/Rock_in_Rio"

response = requests.get(f"{BASE_URL}/{PAGE}")

html_content = response.text

soup = BeautifulSoup(html_content, "html.parser")

links_elements = soup.findAll("a")

links = []


def fix_link(link: str):
    if link.startswith("/"):
        return BASE_URL + link
    elif link.startswith("#"):
        return f"{BASE_URL}/{PAGE}{link}"
    return link


for link in links_elements:
    try:
        href = link["href"]
        links.append(fix_link(href))
    except KeyError:
        continue

if __name__ == "__main__":
    total_links_to_show = 20 if 20 < len(links) else len(links)

    for index in range(total_links_to_show):
        print(links[index])

    if total_links_to_show < len(links):
        print("...")

    print("Links totais:", len(links))
