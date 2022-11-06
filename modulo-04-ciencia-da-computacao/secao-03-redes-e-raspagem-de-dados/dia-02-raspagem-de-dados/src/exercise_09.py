from selenium import webdriver
from parsel import Selector
import time


def scroll_the_whole_page(url, pause_time=1):
    driver = webdriver.Chrome()

    driver.get(url)

    time.sleep(pause_time)

    scroll_height = driver.execute_script("return window.screen.height;")

    while True:
        driver.execute_script(
            "window.scrollTo(0, document.body.scrollHeight);"
        )
        time.sleep(pause_time)
        new_scroll_height = driver.execute_script(
            "return document.body.scrollHeight;"
        )
        if new_scroll_height == scroll_height:
            break
        scroll_height = new_scroll_height

    return driver.page_source


if __name__ == "__main__":
    URL = "http://quotes.toscrape.com/scroll"

    page_source = scroll_the_whole_page(URL)

    selectors = Selector(text=page_source).css("div.quotes div.quote")

    quotes = []

    for selector in selectors:
        author = selector.css("small.author::text").get()
        text = selector.css("span.text::text").get()
        quotes.append({"quote": text, "author": author})

    print("Total quotes =", len(quotes), end="\n\n")

    for quote in quotes:
        print(quote["quote"], quote["author"], sep=" by ", end="\n\n")
