# -*- coding: utf-8 -*-  
import os, cgi, urllib, re
from google.appengine.ext.webapp import template

from google.appengine.api import users
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app

import simplejson

class MainPage(webapp.RequestHandler):
  def get(self):
#    greetings_query = Greeting.all().order('-date')
#    greetings = greetings_query.fetch(10)
#
#    if users.get_current_user():
#      url = users.create_logout_url(self.request.uri)
#      url_linktext = 'Logout'
#    else:
#      url = users.create_login_url(self.request.uri)
#      url_linktext = 'Login'

    template_values = {
#      'greetings': greetings,
#      'url': url,
#      'url_linktext': url_linktext,
      }

    path = os.path.join(os.path.dirname(__file__), 'web-app2/index.html')
    self.response.out.write(template.render(path, template_values))

class Test(webapp.RequestHandler):
    def get(self):

        json = simplejson.dumps({"str": "HelloWorld"})
        jsoncallback = self.request.get('callback') # the jsoncallback argument
        result = '%s(%s)' % (jsoncallback, json) if jsoncallback else json

        self.response.headers['Content-Type'] = 'text/javascript; charset=UTF-8'
        self.response.out.write(result)

class FetchTest(webapp.RequestHandler):
    def get(self):
        wordList = []
        path = os.path.join(os.path.dirname(__file__), 'dic_list.txt')
        fin = open(path, 'r')
        while 1:
            line = fin.readline()
            if not line:
                break
            line = line[ 0 : len(line) - 1]; # cut '\n' and the first space character
            wordList.append(line)

        resultDic = {}
        resultDic['words'] = wordList
        self.response.headers["Content-Type"] = "text/plain"
        self.response.out.write(simplejson.dumps(resultDic))
        


class JsonForOutput:
    def __init__(self):
        self.list = []
    def append(self, str):
        tmpDic = {}
        tmpDic['word'] = str
        self.list.append(tmpDic) 
        
    def out(self):
        output = simplejson.dumps(self.list)
        handler.response.headers["Content-Type"] = "text/plain"
        handler.response.out.write(output)
    
def printAllTypesOfMeaning(entriesArray): # value of the first "entries"
    
    result = JsonForOutput()
    for aType in entriesArray:
        # Special Case: a "terms" key right there (e.g. only one meaning such as "miraculous")
        if "terms" in aType:
            tTerms = aType["terms"]
            if "labels" in aType:
                tArray = aType["labels"]
                tDic = tArray[0]
                result.append(tDic["text"])
                #self.response.headers["Content-Type"] = "text/plain"
                #self.response.out.write(tDic["text"])

            for term in tTerms:
                if term["language"] == "zh-Hant":
                    if "labels" in term:
                        tArray = term["labels"]
                        tDic = tArray[0]
                        #self.response.headers["Content-Type"] = "text/plain"
                        #self.response.out.write(tDic["text"])
                        result.append(tDic["text"])
                    #self.response.headers["Content-Type"] = "text/plain"
                    #self.response.out.write(term["text"])
                    result.append(term["text"])
            return None
     
        # Normal Case
        meaningOfType = aType["entries"]
        tArray = aType["labels"]
        tDic = tArray[0]
        
        result.append(tDic["text"])

        # get the type of this meaning and start to iterate all meanings of this type
        count = 1 
        for meaning in meaningOfType: # meaningOfType is a value of second "entries"
            tTerms = meaning["terms"]
            if len(tTerms) != 0:
                pass#print str(count) + ". ",
            for term in tTerms:
                if term["language"] == "zh-Hant":
                    pass#self.response.headers["Content-Type"] = "text/plain"
                    #self.response.out.write(term["text"])
                    result.append(term["text"]);
            count = count + 1
        result.out()

handler = None;
class getMeaning(webapp.RequestHandler):
    def get(self):
        global handler 
        handler = self
        word = self.request.get('word') 
        url = 'http://www.google.com/dictionary/json?callback=dict_api.callbacks.id100&q=' + word + '&sl=en&tl=zh-tw&restrict=pr,de&client=te'
        #url = 'http://www.google.com/dictionary/json?callback=dict_api.callbacks.id100&q=speculative&sl=en&tl=zh-tw&restrict=pr,de&client=te'

        result = urllib.urlopen(url)
        content = result.read()
        pattern = r'''\\x([0-9a-z][0-9a-z])'''
        replacement = r'''\u00\1'''
        out = re.sub(pattern, replacement, content)
        out.strip()
        resultStr = out[25:len(out)-10]

        #json = simplejson.dumps([{"str": "HelloWorld"}])
        #self.response.headers["Content-Type"] = "text/plain"
        #self.response.out.write(json)
    

        try:
            jsonObj = simplejson.loads(resultStr)
            primary_array = jsonObj["primaries"]

            primary_dic = primary_array[0]
            # len(entry_array): the number of meaning
            DiffTypeMeaningsArray = primary_dic["entries"]
         
            printAllTypesOfMeaning(DiffTypeMeaningsArray)

        except KeyError:
            return word_not_found(word)

application = webapp.WSGIApplication(
                                     [('/', MainPage),
                                     ('/test*', Test),
                                     ('/fetch*', FetchTest),
                                     ('/getMeaning*', getMeaning)],
                                     debug=True)

def main():
  run_wsgi_app(application)

if __name__ == "__main__":
  main()
