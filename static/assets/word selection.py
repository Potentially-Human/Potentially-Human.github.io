f = open("static/assets/words.txt", "r")
wordlist = f.read().split()
newwordlist = [[], [], [], [], []]
for i in wordlist:
    if len(i) <= 4 and (i.lower() == i):
        newwordlist[len(i)].append(i)
f.close()
for i in range(2, 5):
    newfile = open("static/assets/words-" + str(i) + ".txt", "w")
    newfile.write(str(newwordlist[i]))
    newfile.close()
