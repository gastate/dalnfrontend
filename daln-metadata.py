import csv
import os
import glob
import sys


# ENV Variables
path = "./Posts"
num_files = 73  # please change this to the number of files in the directory


# other variables for tracking
files = []
processed_files = []
num_processed_files = 0


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
    try:
        fo = open(f, 'r')
        csvreader = csv.reader(fo)
        fields = csvreader.next()

        # if you want header row (the json key values) uncomment
        # print("\n\tField names are: " + ", ".join(field for field in fields))

        # for field in fields:
        #     fields.append(field)

        for row in csvreader:
            rows.append(row)

        # increment total posts by the number of rows
        # found in the file
        TOTAL_POSTS += csvreader.line_num

        fo.close()
        num_processed_files += 1
        processed_files.append(fo.name)
    except IOError as e:
        print (e)


# Print out complete info
print("\n--------METADATA INFO--------")
print("\n\tTotal number of posts: %d" % (TOTAL_POSTS))

# uncomment for file I/O and other information on the program
# sometimes returns an IO error, don't know why
print("\n--------DEBUG INFO--------")
print("\n\tTotal files processed: %d" % (num_processed_files))
print("\n\t" + str(num_files - num_processed_files) +
      " files were not processed:\n")
print(list(set(files) ^ set(processed_files)))


# Future Functions
#     - get dates and plot a range of creatorYOB, dateCreated, coveragePeriod
#     - get number of times a subject keyword is used
#     - get total number of unique authors
#     - get number of male vs female
