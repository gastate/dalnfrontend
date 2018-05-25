# Made with Python 2.7.15
# requires pandas module

import csv
import os
import glob
import sys
import pandas as pd
from collections import Counter
# ENV Variables
path = "./Posts"  # please change this to the path where the csv files are
num_files = 73   # please change this to the number of files in the directory


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
        fo = pd.read_csv(f)

        # assetList row in csv
        assetList = fo['assetList (L)']
        types = ['"text"', '"audio"', '"audio/video"', '"file"']
        asset_dict = {w: w.replace(' ', '_') for w in types}

        # from https://stackoverflow.com/questions/30493364/sum-partial-string-key-word-matches-in-a-pandas-dataframe
        corpus = ' '.join(str(v) for v in assetList.str.lower())
        for w, w2 in asset_dict.items():
            corpus = corpus.replace(w, w2)

        all_counts = Counter(corpus.split())
        final_counts = {w: all_counts[w2] for w, w2 in asset_dict.items()}

        # increment total posts by the number of rows
        # found in the file
        TOTAL_POSTS += assetList.count()
        NUM_TEXT_ASSETS += final_counts['"text"']
        NUM_TEXT_ASSETS += final_counts['"file"']
        NUM_AUDIO_ASSETS += final_counts['"audio"']
        NUM_VIDEO_ASSETS += final_counts['"audio/video"']

        num_processed_files += 1
        processed_files.append(f)
    except IOError as e:
        print (e)


# Print out complete info
print("\n--------METADATA INFO--------")
print("\n\tTotal number of posts: %d" % (TOTAL_POSTS))
print("\n\tEach type of asset found: ")
print("\n\t\tText: " + str(NUM_TEXT_ASSETS))
print("\n\t\tAudio: " + str(NUM_AUDIO_ASSETS))
print("\n\t\tVideo: " + str(NUM_VIDEO_ASSETS))


# uncomment for file I/O and other information on the program
# sometimes returns an IO error, don't know why
print("\n--------DEBUG INFO--------")
print("\n\tTotal files processed: %d" % (num_processed_files))
print("\n\t" + str(num_files - num_processed_files) +
      " files were not processed:\n")
print(list(set(files) ^ set(processed_files)))

# File write out
# print(fo['assetList (L)'].to_csv(r'tweets.txt',
#                                  header=None, index=None, sep=' ', mode='a'))


# Future Functions
#     - get dates and plot a range of creatorYOB, dateCreated, coveragePeriod
#     - get number of times a subject keyword is used
#     - get total number of unique authors
#     - get number of male vs female
