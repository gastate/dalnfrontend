# Made with Python 2.7.15

import csv
import os
import glob
import sys


# ENV Variables
path = "./Posts"
num_files = 73  # please change this to the number of files in the directory


files = []


# get the csv filenames
# beware this was meant for windows
# glob returns inconsistently, sometimes 10 filenames sometimes all filenames
# but it did better than python's os library
for file in glob.glob(path + "/" + "*.csv"):
    files.append(file)

if (len(files) == num_files):
    print("\nGot all files!")
else:
    print("\n!!!Error!!!: Didn't get all files. Please rerun the program and check that num_files is set correctly.")
    sys.exit()

print("Processing...")

# values to keep track of
TOTAL_POSTS = 0
NUM_TEXT_ASSETS = NUM_AUDIO_ASSETS = NUM_VIDEO_ASSETS = 0

# intialize rows and fields
fields = []
rows = []

# reading csv fields
for f in files:
    with open(f, 'r') as csvfile:
        csvreader = csv.reader(csvfile)
        fields = csvreader.next()

        for row in csvreader:
            rows.append(row)
            # print row[0]

        # increment total posts by the number of rows
        # found in the file
        TOTAL_POSTS += csvreader.line_num


# Print out complete info
print("\n--------METADATA INFO--------")
print("\n\tTotal number of posts: %d" % (TOTAL_POSTS))

# if you want header row (the json key values) uncomment
# print("\n\tField names are: " + ", ".join(field for field in fields))

# print('\n\tFirst 5 rows are: \n')
# for row in rows[:5]:
#     for col in row:
#         print("%10s" % col),
#     print("\n")


# Future Functions
#     - get dates and plot a range of creatorYOB, dateCreated, coveragePeriod
#     - get number of times a subject keyword is used
#     - get total number of unique authors
#     - get number of male vs female
