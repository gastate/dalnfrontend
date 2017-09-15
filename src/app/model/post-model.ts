import {Asset} from './asset-model';

export class Post {
  postId: string;
  title: string;
  description: string;
  identifierUri: string;
  dateAccessioned: string;
  dateAvailable: string;
  dateCreated: string;
  dateIssued: string;
  dateSubmitted: string;
  rightsConsent: string;
  rightsRelease: string;
  contributorAuthor: string[];
  contributorInterviewer: string[];
  creatorGender: string[];
  coverageNationality: string[];
  coveragePeriod: string[];
  coverageRegion: string[];
  coverageSpatial: string[];  
  coverageStateProvince: string[];
  creatorYearOfBirth: string[];
  language: string[];
  subject: string[];
  assetList: Array<Asset>;
}
