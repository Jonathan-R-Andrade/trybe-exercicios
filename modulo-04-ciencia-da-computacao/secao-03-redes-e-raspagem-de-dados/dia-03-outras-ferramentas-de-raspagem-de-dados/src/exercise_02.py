from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from time import sleep

options = Options()
options.add_argument("--headless")

firefox = webdriver.Firefox(options=options)

URL = "https://www.wikimetal.com.br/"
PAGE = "iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/"

firefox.get(URL + PAGE)

sleep(2)

p_tags = firefox.find_elements(By.TAG_NAME, "p")

paragraphs = [tag.get_attribute("innerText") for tag in p_tags]

print("\n\n".join(paragraphs))
