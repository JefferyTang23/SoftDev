"""
TNPG: sadidas; Roster: Joseph Jeon, Jeffery Tang, Jian Hong Li
SoftDev
K08
2022-10-06
Time Spent:
"""

from flask import Flask
import random

app = Flask(__name__) # Q0: Where have you seen similar syntax in other langs?

@app.route("/") # Q1: What points of reference do you have for meaning of '/'?

def main():
    jobs = []
    weight = []
    # parseinfo takes in a csv file and 2 lists. It parses the jobs in the csv file to the jobs list and the weights to the weight list, not including the total
    parseinfo("occupations.csv", jobs, weight)
    print(__name__) 
    return(random.choices(jobs, weights = weight))
    
def parseinfo(file, jobs, weight):
    occ_wei = open(file, "r").read()
    
    # Creates a list of all occupation,weight pairs, excluding the first line, which isn't relevant.
    occ_wei = occ_wei.split("\n")[1:]
    
    for pair in occ_wei:
        # first see if pair is empty.
        if(len(pair) != 0):
            # rsplit() splits from  the left, and the second argument decides how many times to split.
            job_percent_pair = pair.rsplit(",", 1)
            # Dont include the Total,percent pair
            if(job_percent_pair[0] != "Total"):
                jobs.append(job_percent_pair[0])
                # Because we are using the choices method, the weights list has to only include integers, since
                weight.append(int(float(job_percent_pair[1]) * 10))
                


app.run()  # Q5: Where have you seen similar constructs in other languages?


'''
DISCO:
QCC:
0. I have not seen similar syntax anywhere, unless the underscores are just normal characters 
1. Maybe the slash is the separator between the directories when you find the path to the file?
2. To the terminal
3. The name of this program?
4. No, because it's only the returntype and it's not being printed anywhere
5. Processing's run method? 
...
INVESTIGATIVE APPROACH:
<Your concise summary of how
 you and your team set about
 "illuminating the cave of ignorance" here...>
'''