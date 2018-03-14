import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable, Subject } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import { Post } from "../model/post-model";
import { Asset } from "../model/asset-model";
import { environment } from "../../environments/environment";
//import { POSTS } from "./mock-postlist";

@Injectable()
export class SearchService {
  resultsPerPage: number;
  currentPageResults: Post[];
  private endPoint = environment.API_ENDPOINTS;

  constructor(private _http: Http) {
    this.resultsPerPage = 12;
    this.currentPageResults = [];
  }

  search_page(
    searchQueryParam: string,
    resultsPerPage: number,
    startPageIndex: number
  ): Observable<any> {
    searchQueryParam = searchQueryParam.replace(/[^a-zA-Z ]/g, "");
    resultsPerPage ? resultsPerPage : this.resultsPerPage;
    return this._http
      .get(
        this.endPoint.search_posts +
        searchQueryParam +
        "/" +
        resultsPerPage +
        "/" +
        startPageIndex
      )
      .map((res: Response) => {
        let temp = {
          found: res.json().found,
          hits: this.translatePosts(res.json().hit),
          start: res.json().start
        };
        return temp;
      })
      .catch((error: Response) => Observable.throw(error));
  }

  translatePosts(results: any[]) {
    if (!results) {
      return [];
    }
    let posts: Post[] = [];
    results.forEach(res => {
      let post = new Post();
      post.postId = res.fields.postid[0];
      post.title = res.fields.title;
      post.description = res.fields.description;
      post.hiddenDescription = res.fields.hiddenDescription
      post.areAllFilesUploaded = res.fields.areallfilesuploaded;
      post.contributorAuthor = res.fields.contributorauthor;
      post.coverageNationality = res.fields.coveragenationality;
      post.coveragePeriod = res.fields.coverageperiod;
      post.coverageRegion = res.fields.coverageregion;
      post.coverageStateProvince = res.fields.coveragestateprovince;
      post.creatorGender = res.fields.creatorgender;
      post.creatorYearOfBirth = res.fields.creatoryearofbirth;
      post.dateAccessioned = res.fields.dateaccessioned;
      post.dateAvailable = res.fields.dateavailable;
      post.dateCreated = res.fields.datecreated;
      post.dateIssued = res.fields.dateissued;
      post.identifierUri = res.fields.identifieruri;
      post.language = res.fields.language;
      post.rightsConsent = res.fields.rightsconsent;
      post.subject = res.fields.subject;
      post.assetList = this.translateAssets(res.fields);
      posts.push(post);
    });
    return posts;
  }

  translateAssets(fields: any) {
    let assetList = [];
    for (let i = 0; i < fields.assetembedlink.length; i++) {
      assetList[i] = new Asset();
      assetList[i].assetName =
        fields.assetname && fields.assetname[i]
          ? fields.assetname[i]
          : "No asset name provided";
      assetList[i].assetType =
        fields.assettype && fields.assettype[i]
          ? fields.assettype[i]
          : "No asset type provided";
      assetList[i].assetID =
        fields.assetid && fields.assetid[i]
          ? fields.assetid[i]
          : "No asset id provided";
      assetList[i].assetEmbedLink =
        fields.assetembedlink && fields.assetembedlink[i]
          ? fields.assetembedlink[i]
          : "No asset embed link provided";
      assetList[i].assetLocation =
        fields.assetlocation && fields.assetlocation[i]
          ? fields.assetlocation[i]
          : "No asset location provided";
      assetList[i].assetDescription =
        fields.assetdescription && fields.assetdescription[i]
          ? fields.assetdescription[i]
          : "No asset description provided";
    }
    return assetList;
  }
}
