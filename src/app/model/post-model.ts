import { Asset } from './asset-model';

export class Post {
  isPostNotApproved: boolean;
  areAllFilesUploaded: boolean;
  postId: string;
  title: string;
  description: string;
  hiddenDescription: string;
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
  license: string;
  email: string;

}
