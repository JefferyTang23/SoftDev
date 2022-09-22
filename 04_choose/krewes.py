'''
Jeffery Tang
SoftDev
K04 -- Dictionaries + RNG
2022-09-22
time spent: .5 hrs

DISCO:
 - we learned how to reference dictionaries
 - we learned how to import random and use it
 - we learned how to make test cases :D

QCC:
 - is there way to create an object in python?

OPS SUMMARY:
 - take in a dictionary and a 

'''

import random as random
    
def choose(dictionary, dlist):
    return(random.choice(dictionary[dlist[random.randint(0,len(dlist)-1)]]))

##TEST CASE
pd2 = ["john", "bob"]
pd7 = ["calvin", "samantha"]
pd8 = ["man", "woman"]

pdlist = [2, 7, 8]
krewes = {2:pd2, 7:pd7, 8:pd8}

print(choose(krewes,pdlist))