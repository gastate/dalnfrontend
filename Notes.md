
# Today's tasks


=======
-  jquery for each function:
    -  iterate through to get video, then audio, then text (place a picture for text)
    - for video, copy default iframe and put in id; same for audio
- Audio asset embed:
    - match json asset id with the curl id of soundcloud using arrays.filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        - basically the second example where you match the curl object to the api object
    - get the uri
    - post uri there

- word wrap on the title
- Start router with library or jquery update detail by jquery update or routing

## Notes:
- get shakib's client id

- Video location is the embedded link add https://mwharker.vids.io/videos/videoID for shareable.



- SoundCloud is wrong??????
-  http://api.soundcloud.com/tracks/288649343?client_id=2b9b6641f376ef230312ec09259e2146
- http://stackoverflow.com/questions/10159802/getting-specific-users-track-list-with-soundcloud-api
- WE ARE MATCHING THE PERMALINK
=======
- Start router with library

## Notes:
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

- Should we combine all of our issues for later or as we go on?

- what was the key we were looking for: https://developers.soundcloud.com/docs/api/reference#tracks?

>>>>>>> 5a0b67573f3058160c339cfb79418e2e35c0025e
- BIG ISSUE: Sprout video
    - Have: API Key, video Id; Need: security token
    - Cannot access security token through javascript
    - Can use Javascript Player. Upload is through API no problem.
        - http://sproutvideo.com/help/api/javascript_player_api
        - http://sproutvideo.com/docs/api.html
        - Or can use direct url api key


- Ask Shakib:
   -  all of the types of Asset Types, specifically (you didn't do anything like different Audios)?
   - Not every Asset has a Location?
    - Kara's Narrative



## Questions:

Currently:

<<<<<<< HEAD

=======
- Ask Jaro what happens once in development, do I rewrite my console.log options to tests that will run in a different page?
- AWS 8,000 development objects, ways to reduce load on AWS?
>>>>>>> 5a0b67573f3058160c339cfb79418e2e35c0025e

Later:        

- Shakib:
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
<<<<<<< HEAD
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
=======
>>>>>>> 5a0b67573f3058160c339cfb79418e2e35c0025e
