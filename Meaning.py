# -*- coding: utf-8 -*-
import simplejson as json
import urllib
import re
import os.path

def word_not_found(word):
    print word

def printAllTypesOfMeaning(entriesArray): # value of the first "entries"
    for aType in entriesArray:

        # Special Case: a "terms" key right there (e.g. only one meaning such as "miraculous")
        if "terms" in aType:
            tTerms = aType["terms"]
            if "labels" in aType:
                tArray = aType["labels"]
                tDic = tArray[0]
                print "(" + tDic["text"] + ".)"
            for term in tTerms:
                if term["language"] == "zh-Hant":
                    if "labels" in term:
                        tArray = term["labels"]
                        tDic = tArray[0]
                        print '\033[31m' + "(" + tDic["text"] + ".)" + "\033[0m"
                    print term["text"]
            return None
                
        # Normal Case
        meaningOfType = aType["entries"]
        tArray = aType["labels"]
        tDic = tArray[0]
        print 'In Normal'
        print '\033[31m' + "(" + tDic["text"] + ".)" + "\033[0m"

        # get the type of this meaning and start to iterate all meanings of this type
        count = 1
        for meaning in meaningOfType: # meaningOfType is a value of second "entries"
            tTerms = meaning["terms"]
            if len(tTerms) != 0:
                print str(count) + ". ",
            for term in tTerms:
                if term["language"] == "zh-Hant":
                    print term["text"]
            count = count + 1


def exists(word, wordList):
    for w in wordList: 
        if w == word:
            return True
    return False

def saveMeaningIntoFile(word, meaning):
    wordList = []
    if os.path.exists("save/metadata.txt"):
        fp_meta = open('save/metadata.txt', 'r+')
        fp_meaning = open('save/meaning.txt', 'a')
        content = fp_meta.read()
        wordList = content.split(' ')

        if exists(word, wordList):
            print "the meaning of word already exists"
            fp_meta.close()
            fp_meaning.close()
            return

    else:
        fp_meta = open('save/metadata.txt', 'w')
        fp_meaning = open('save/meaning.txt', 'w')

    # append the word into metadata
    fp_meta.write(' '+word)
    # append the meaning
    input = '=='+meaning
    fp_meaning.write(input)
    fp_meta.close()
    fp_meaning.close()
    return

def fetchMeaningFromFile(word):
    wordList = []
    if os.path.exists("save/metadata.txt"):
        fp_meta = open('save/metadata.txt', 'r+')
        fp_meaning = open('save/meaning.txt', 'r')
        content = fp_meta.read()
        wordList = content.split(' ')
        if not exists(word, wordList):
            print 'Failed'
            return 'Failed'
        
        i = 0
        for w in wordList:
            if w == word:
                break
            i += 1
        meaningList = fp_meaning.read().split('==')
        try:
            if meaningList[i] is None:
                return 'Failed'
            else:
                return meaningList[i]
        except IndexError, e:
            print e
            return 'Failed'


def show(word):

    resultStr = fetchMeaningFromFile(word) 
    if resultStr == 'Failed' or resultStr is None:
        #url = 'http://www.google.com/dictionary/json?callback=dict_api.callbacks.id100&q=' + word + '&sl=en&tl=zh-tw&restrict=pr,de&client=te'
        url = 'http://www.google.com/dictionary/json?callback=dict_api.callbacks.id100&q=speculative&sl=en&tl=zh-tw&restrict=pr,de&client=te'

        result = urllib.urlopen(url)
        content = result.read()
        pattern = r'''\\x([0-9a-z][0-9a-z])'''
        replacement = r'''\u00\1'''
        out = re.sub(pattern, replacement, content)
        out.strip()
        resultStr = out[25:len(out)-10]

    saveMeaningIntoFile(word, resultStr)

    try:
        jsonObj = json.loads(resultStr)
        primary_array = jsonObj["primaries"]

        primary_dic = primary_array[0]
        # len(entry_array): the number of meaning
        DiffTypeMeaningsArray = primary_dic["entries"]
        
        printAllTypesOfMeaning(DiffTypeMeaningsArray)


    except KeyError:
        return word_not_found(word)

if __name__ == '__main__':
    show('book')
else:
    None
