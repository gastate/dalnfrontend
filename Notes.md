
# Today's tasks
-  jquery for each function:
    -  iterate through to get video, then audio, then text (place a picture for text)
    - for video, copy default iframe and put in id; same for audio
- Audio asset embed:
    - match json asset id with the curl id of soundcloud using arrays.filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        - basically the second example where you match the curl object to the api object
    - get the uri
    - post uri there
- Start router with library
## Notes:



## Questions:

Currently:

- Ask Jaro what happens once in development, do I rewrite my console.log options to tests that will run in a different page?
- AWS 8,000 development objects, ways to reduce load on AWS?

Later:        

- Shakib: Next week will have to collab with Shakib.
    - DOCUMENTATION!!!! Need to know GET and POST methods, for I am just assuming.
    - upload, update, create functions
    - wtf is this: /dalnws/api/DALNService
    - JSON needs to be lowercase or its invalid (also no spaces plz).

- Jaro: config file structure.
    - api_url for base url (currently http://ec2-54-211-221-216.compute-1.amazonaws.com:8080) and the latter half (/dalnws/api/DALNService/json/p   osts/all)
        - Should I append each function or just keep all the same url?
        - Checkup: Also should I keep the last "/" character, or assume it won't be there. Like /posts/all is the url endpoint. For some methods this is critical of whether to add or not since it won't call correctly if "/" is not escaped.
    - should I log okay HTTP requests?

# Answered:
- Shakib or Lisa: http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService/posts/get
    - Above returns a 404
    - what is the difference between /posts/get and /posts/{postId}
        - **Answer**: both functionally the same, but /posts/get can be made into a search function using a textbox. (See Shakib's frontend for more information)
