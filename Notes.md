# PRIORITY
- HARDCODE EVERYTHING
- home page and detail view
    - GET MEDIA ON IT
    - For homepage, may want to just get pics and use isotope.js
- list view



# Today's tasks
- ~~Get JSON config working with ajax callback~~
- detail page
- finish coding display of randomly selected narratives on main page (each post has title of narrative and embedded media type)
- Selenium Testing
- research the social media tokens

## Notes:
- **Run insecurely via http for all URLs.**
- One single post works: http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService/posts/c529509f-2b9a-49d0-bb0d-2f1825544968
- index url: https://daln.s3.amazonaws.com/frontend/index.html

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
