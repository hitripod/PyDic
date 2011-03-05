# -*- coding: utf-8 -*-  
import os, cgi
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

    path = os.path.join(os.path.dirname(__file__), 'web-app/index.html')
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
        

application = webapp.WSGIApplication(
                                     [('/', MainPage),
                                     ('/test*', Test),
                                     ('/fetch*', FetchTest)],
                                     debug=True)

def main():
  run_wsgi_app(application)

if __name__ == "__main__":
  main()
