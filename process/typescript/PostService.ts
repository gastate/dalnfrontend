
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';
 

@Injectable() 
export class PostService{
    constructor(private _http: Http){}  

    config: any;
    all_posts: 'http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService/json/posts/all';
    test_endpoint: 'https://jsonplaceholder.typicode.com/posts';
   
   ngOnInit(){
    //    this.config = this.config = this._http.get('../../dev_config.json')
    //     .map((congig: Response) => congig.json());
    //     console.log("config: ", this.config);
   }

   getAllPosts(){
       
    //    this.postList = this._http.get(this.test_endpoint)// ...and calling .json() on the response to return data
    //                      .map((res:Response) => res.json())
    //                      //...errors if any
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    //    console.log("postList: ", this.postList);
       
       return this.postList;
   }

   getPostById(id){
       return this.postList.find((post)=> {return post.id === id});
   }

   postList = 
      [
        {
		"postId": "fae17a81-4513-476c-9649-a1738852d542",
		"title": "Joshua Brunner's Literacy Narrative",
		"description": "This is my boring story.",
		"identifierUri": "http://hdl.handle.net/2374.DALN/60",
		"dateAccessioned": "2008-11-13T20:45:19Z",
		"dateAvailable": "2008-11-13T20:45:19Z",
		"dateCreated": "2008-11-13",
		"dateIssued": "2008-11-13T20:45:19Z",
		"rightsConsent": "adult",
		"rightsRelease": "adult",
		"contributorAuthor": ["Brunner, Joshua"],
		"creatorGender": ["Male"],
		"creatorYearOfBirth": ["1986"],
		"coveragePeriod": ["1980-1989", "1990-1999", "2000-2009"],
		"assetList": [{
			"assetName": "Josh Brunner_final.mp3",
			"assetType": "Audio",
			"assetID": "a18e63be-04b8-4d67-bb83-d996e37d8afc",
			"assetDescription": "None",
			"assetEmbedLink": "https://api.soundcloud.com/tracks/292286292",
			"assetLocation": "http://soundcloud.com/user-15072191/joshua-brunners-literacy-1"
		}]
	}, {
		"postId": "ce6d88fd-67e9-4499-9778-31def4ec263f",
		"title": "Jeff Welbaum's Literacy Narrative",
		"identifierUri": "http://hdl.handle.net/2374.DALN/66",
		"dateAccessioned": "2008-12-18T18:56:20Z",
		"dateAvailable": "2008-12-18T18:56:20Z",
		"dateCreated": "2008-12-18",
		"dateIssued": "2008-12-18T18:56:20Z",
		"rightsConsent": "adult",
		"rightsRelease": "adult",
		"contributorAuthor": ["Welbaum, Jeff"],
		"creatorGender": ["male"],
		"creatorClass": ["working class"],
		"creatorYearOfBirth": ["1988"],
		"coveragePeriod": ["1980-1989", "1990-1999", "2000-2009"],
		"assetList": [{
			"assetName": "Jeff Welbaum_final.mp3",
			"assetType": "Audio",
			"assetID": "d887c393-ea8b-4f7e-8890-47aa7627d3b3",
			"assetDescription": "Jeff Welbaum's Literacy Narrative",
			"assetEmbedLink": "https://api.soundcloud.com/tracks/292287360",
			"assetLocation": "http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"
		}]
	}, {
		"postId": "32c922fe-96e9-46e9-a297-0507519fa7df",
		"title": "Clayton Buffer's Literacy Narrative",
		"description": "A sophomore undergraduate discusses folklore and explores the study's possibilities.",
		"identifierUri": "http://hdl.handle.net/2374.DALN/99",
		"dateAccessioned": "2009-02-25T09:20:46Z",
		"dateAvailable": "2009-02-25T09:20:46Z",
		"dateCreated": "2009-02-25",
		"dateIssued": "2009-02-25T09:20:46Z",
		"rightsConsent": "adult",
		"rightsRelease": "adult",
		"contributorAuthor": ["Buffer, Clayton"],
		"creatorGender": ["Male"],
		"coverageStateProvince": ["Ohio"],
		"subject": ["ebonics", "university district", "folklore"],
		"assetList": [{
			"assetName": "cb_final.mp3",
			"assetType": "Audio",
			"assetID": "ee094a7b-867a-4204-beda-038cdb7fa469",
			"assetDescription": "None",
			"assetEmbedLink": "https://api.soundcloud.com/tracks/292291281",
			"assetLocation": "http://soundcloud.com/user-15072191/clayton-buffers-literacy"
		}]
	}, {
		"postId": "35f94a41-f310-4d7b-93c1-616cb6096535",
		"title": "test post 111116"
	}
    ]
  }
}