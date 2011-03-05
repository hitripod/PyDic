#!/usr/bin/env python
import urllib, urllib2
import re
import httplib2
from BeautifulSoup import BeautifulSoup

http = httplib2.Http()

#url = 'http://www.google.com.tw/dictionary/wordlist?hl=zh-TW' # write ur URL here


def getTheList(url):
    headers = {
                'Host': 'www.google.com.tw',
                'Content-type': 'application/x-www-form-urlencoded',
                'Cookie': 'PREF=ID=160a7133fa88afda:U=fd40ae9dc7781969:FF=0:LD=zh-TW:NR=10:TM=1291306579:LM=1291531690:IG=4:S=38KnqrphKj8EXCw_; NID=41=KKfbayZO7TP31h5szZLR5EWJcAIr2qbOf2ofS3BFoJRugu0ynQtfuGnrueqX76miE50PJF7hrOkL8nKgYlzEHGDrYX9bh77uswZC1EwfchmbyamUFOSIQcj5b2Xvykdx; SID=DQAAAKoAAAAunR2S7KuFI3_2iRzGNUq_J-2C4O0I8mNOrSU1rS61SO-Iyv6UFuPlEoet8QDciAGTgYoLbsQHohcOkIfsbgqIBHMm8_Mxl5XGlemBj0mZLdd6Kd1lIWyAM5w85PtkTd_fdjqdDxxa7G5eGWkyVatNVlKVJwEFi5P3ChakeRBQd8PaOd6HmzvqMuJTeLs7bWW8CulMz0Laa1zU-zcpIxjc--wSQso7jlNEkN7g_o8nLg; HSID=AEvVy4HBbM81HGVlc ',
                'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; zh-TW; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'zh-tw,en-us;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip,deflate',
                'Accept-Charset':  'UTF-8,*',
                'Keep-Alive':  '115',
                'Connection':  'keep-alive',
                'Referer': 'http://www.google.com.tw/dictionary?langpair=en%7Czh-TW&q=df&hl=zh-TW&aq=f',
              }
    global content
    response, content = http.request(url, 'GET', headers=headers)

    if response.status == 200:
        print 'Success !'

dic_lit = []
def filterTheList():
    wordList = []
    soup = BeautifulSoup(content)
    for tag in soup.findAll('a', href=True):
        url = tag['href']
        if url[0:38] == '/dictionary?hl=zh-TW&sl=en&tl=zh-TW&q=':
            wordList.append(url[38:len(url)])
        else:
            continue
    fout = open('/Users/kordan/Practices/python/pydic/dic_list.txt', 'a')
    for word in wordList:
        fout.write(word + '\n')
    fout.close()

# fetch all
url1 = 'http://www.google.com.tw/dictionary/wordlist?num=200&start=0&hl=zh-TW' 
url2 = "http://www.google.com.tw/dictionary/wordlist?num=200&start=200&hl=zh-TW"
url3 = "http://www.google.com.tw/dictionary/wordlist?num=200&start=400&hl=zh-TW"
url4 = "http://www.google.com.tw/dictionary/wordlist?num=200&start=600&hl=zh-TW"
url5 = "http://www.google.com.tw/dictionary/wordlist?num=200&start=800&hl=zh-TW"
url6 = "http://www.google.com.tw/dictionary/wordlist?num=200&start=1000&hl=zh-TW"
url7 = "http://www.google.com.tw/dictionary/wordlist?num=200&start=1200&hl=zh-TW"
url8 = "http://www.google.com.tw/dictionary/wordlist?num=200&start=1400&hl=zh-TW"
url9 = "http://www.google.com.tw/dictionary/wordlist?num=200&start=1600&hl=zh-TW"

getTheList(url1)
filterTheList()
getTheList(url2)
filterTheList()
getTheList(url3)
filterTheList()
getTheList(url4)
filterTheList()
getTheList(url5)
filterTheList()
getTheList(url6)
filterTheList()
getTheList(url7)
filterTheList()
getTheList(url8)
filterTheList()
getTheList(url9)
filterTheList()
