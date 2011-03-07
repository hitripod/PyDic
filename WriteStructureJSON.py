import os

filepath_prefix = os.getcwd() + '/' 
filename = 'structure.txt'
filepath = filepath_prefix + filename
fin = open(filepath_prefix+'dic_list.txt', 'r')
fout = open(filepath, 'w')

wordList = []

while 1:
    word = fin.readline()
    if not word:
        break
    word = word[ 0 : len(word) - 1]; # cut '\n' and the first space character
    wordList.append(word)

fout.write(r'{"text": "WordList","cls": "launchscreen","items":[');
for i in range(len(wordList)):
    word = wordList[i]
    item = r'{"text": "' + word + r'","leaf": true},'
    if i == len(wordList)-1:
        item = r'{"text": "' + word + r'","leaf": true}'
    fout.write(item);
fout.write(r']}')
fout.close()
