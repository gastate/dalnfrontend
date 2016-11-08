
# Today's tasks
- have no Hardcoded elements, dynamically get post elements
- work on pages
    - dynamic pages using crossroads
    - 2nd priority is history
- add sorting data


## Notes:
- word wrap on the title
- WARNING: Hardcoded height at 227px for item spans.
- Start router with library or jquery update detail by jquery update or routing

## Notes:

- Video location is the embedded link add https://mwharker.vids.io/videos/videoID for shareable.



## Questions:

Currently:

- If we do no api changes, no dynamic videos. Can do sounds because I can match up with the soundcloud api now.




Later:        



- Jaro: config file structure.
    - api_url for base url (currently http://ec2-54-211-221-216.compute-1.amazonaws.com:8080) and the latter half (/dalnws/api/DALNService/json/p   osts/all)
        - Should I append each function or just keep all the same url?
        - Checkup: Also should I keep the last "/" character, or assume it won't be there. Like /posts/all is the url endpoint. For some methods this is critical of whether to add or not since it won't call correctly if "/" is not escaped.
    - should I log okay HTTP requests?

# Answered:
- Ask Jaro what happens once in development, do I rewrite my console.log options to tests that will run in a different page?
    - **Answer**: You can put them all in an html page as a sort of test file. http://stackoverflow.com/questions/20256760/javascript-console-log-to-html


- Shakib or Lisa: http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService/posts/get
    - Above returns a 404
    - what is the difference between /posts/get and /posts/{postId}
        - **Answer**: both functionally the same, but /posts/get can be made into a search function using a textbox. (See Shakib's frontend for more information)

- what was the key we were looking for: https://developers.soundcloud.com/docs/api/reference#tracks?
    - Pretty sure it is the permalink
- Ask Jaro what happens once in development, do I rewrite my console.log options to tests that will run in a different page?
    - Yeah just put on an html page. Be sure to take out once in development.

- DNS:
    - https://wedding.vids.io/ HAHAHAHAHAHA
    > *Late night coding with Wasfi*

    ```
    > be me
    > be coding in javascript for about 3 hours cuz of stupid ways javascript handles shit and also idk how do
    > finished coding the handling of several audio, video, and document assets
    > time to start hitting some APIs
    > letsdothis.jpg
    > all of the sudden no videos showing up
    > wtf
    > check video urls; returning no video data
    > FUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
    > check code
    > check code part 2
    > check code part 3
    > can't find out
    > look at url again
    > "DNS server not resolved"
    > wait
    > check other parts of video service that feed in videos api
    > mfw the DNS is down
    > mfw I remember that there have been massive DDOS attacks everywhere this week
    > ffs
    > send message to boss
    > "hey the internet is down so im going to bed now"
    ```
# Previous Tasks:

-  jquery for each function:
    -  iterate through to get video, then audio, then text (place a picture for text)
    - for video, copy default iframe and put in id; same for audio
