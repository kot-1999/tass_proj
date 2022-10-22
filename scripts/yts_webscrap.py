from operator import sub
from bs4 import BeautifulSoup
import requests, wget, re, time, csv
import subprocess

def runcmd(cmd, verbose = False, *args, **kwargs):
    process = subprocess.Popen(
        cmd,
        stdout = subprocess.PIPE,
        stderr = subprocess.PIPE,
        text = True,
        shell = True
    )
    std_out, std_err = process.communicate()
    if verbose:
        print(std_out.strip(), std_err)
    pass

for page in range(123):
    if page == 0:
        movies_list_url = 'https://yts-subs.com/language/italian'.format(page)
    else:
        movies_list_url = 'https://yts-subs.com/language/italian?page={}'.format(page)

    html_text = requests.get(movies_list_url).content
    soup = BeautifulSoup(html_text.decode('utf-8','ignore'), features="lxml", from_encoding="utf-8")

    media_body = soup.findAll("li", {"class":"media-movie-clickable"})
    for mb in media_body:
        href = mb.find("a", href=re.compile("/movie-imdb/tt"))['href']
        ttf = href.split('/')[2]
        movies_url = 'https://yts-subs.com{}'.format(href)
        html_text_sub = requests.get(movies_url).content
        soup_sub = BeautifulSoup(html_text_sub.decode('utf-8','ignore'), features="lxml", from_encoding="utf-8")
        sub_href_el = soup_sub.findAll("span", text = re.compile('Italian'))[0].parent.find_next('td')
        sub_url = sub_href_el.find("a")['href']
        download = sub_url.split('/')[2]
        runcmd("wget --output-document={1}.zip --directory-prefix=download_folder https://yifysubtitles.org/subtitle/{0}.zip".format(download, ttf), verbose = False)
