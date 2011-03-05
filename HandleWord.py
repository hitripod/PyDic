#!/usr/bin/env python
import urllib, urllib2
import re
import httplib2

import sys
from optparse import OptionParser

parser = OptionParser()
parser.add_option("-a", "--action", dest="actionName", help="ACTION(remove or add) on this word", metavar="ACTION")

(options, args) = parser.parse_args()
print options.actionName
word = args[0]
print word

if options.actionName == 'remove':
    action = 'removeword'
else:
    action = 'addword'

# options.actionName: Remove/Add the word
# word
# ex: ./HandleWord.py -a add apple; ./HandleWord.py -a remove apple;

http = httplib2.Http()

url = 'http://www.google.com.tw/dictionary/wordlistop?q=' + word + '&sl=en&tl=zh-TW&action=' + action # write ur URL here

response, content = http.request(url)
#response, content = http.request(url, 'POST', headers=headers, body=urllib.urlencode(body))

previousCookie = response['set-cookie']

headers = {'Cookie': previousCookie }

#response, content = http.request(url, 'GET', headers=headers)
#a = str(a) + ";hello"

# real login action
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
http.redirection_limit = 100;
response, content = http.request(url, 'GET', headers=headers)
print response
print content
