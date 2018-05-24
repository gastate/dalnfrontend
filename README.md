# DALN Metadata export  

This branch serves as metadata extraction from the DALN's production Dynamo DB. 

First, you'll need to get the entire database as a csv download. You can do this by either a command line tool like aws-cli or just clicking 
through the DynamoDB interface and exporting every record.

Here's a blog post on the subject: https://medium.com/@quodlibet_be/an-overview-of-tools-to-export-from-dynamoddb-to-csv-d2707ad992ac

Then, install python 2 (not 3) from https://www.python.org/. Change the environment variables at the top of ```daln-metadata.py``` and run the program with ```python daln-metadata.py```. The program should run and give you the resulting metadata in the console.

**BE SURE NEVER TO COMMIT THE CSV DATA FILES**

As development on the DALN continues, the statistics admin function should replace this branch.