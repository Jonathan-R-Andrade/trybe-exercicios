from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from time import sleep

options = Options()
options.add_argument("--headless")

firefox = webdriver.Firefox(options=options)

firefox.get("https://quotes.toscrape.com/")

sleep(2)

quote = firefox.find_element(By.CLASS_NAME, "quote")

text = quote.find_element(By.CLASS_NAME, "text").get_attribute("innerText")

author = quote.find_element(By.CLASS_NAME, "author").get_attribute("innerText")

print(text, author, sep=" by ")
