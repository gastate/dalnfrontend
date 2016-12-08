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
  rightsConsent: string;
  rightsRelease: string;
  contributorAuthor: string[];
  creatorGender: string[];
  coverageStateProvince: string[];
  creatorYearOfBirth: string[];
  coveragePeriod: string[];
  subject: string[];
  assetList: Array<any>;
}
