from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from time import sleep

options = Options()
options.add_argument("--headless")

firefox = webdriver.Firefox(options=options)

firefox.get("https://diolinux.com.br/")

sleep(2)

posts_elements = firefox.find_elements(By.CLASS_NAME, "post-outer")

posts = []

for post in posts_elements:
    title = (
        post.find_element(By.CLASS_NAME, "entry-title")
        .find_element(By.TAG_NAME, "a")
        .get_attribute("innerText")
    )
    excerpt = post.find_element(By.CLASS_NAME, "entry-excerpt").get_attribute(
        "innerText"
    )
    link = (
        post.find_element(By.CLASS_NAME, "entry-title")
        .find_element(By.TAG_NAME, "a")
        .get_attribute("href")
    )

    posts.append({"title": title, "excerpt": excerpt, "link": link})

if __name__ == "__main__":
    for post in posts:
        print(
            post["title"], post["excerpt"], post["link"], sep="\n", end="\n\n"
        )
