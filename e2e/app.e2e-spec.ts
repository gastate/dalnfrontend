import {DALNWEBCLIPage} from './app.po';

describe('daln-web-cli App', function () {
  let page: DALNWEBCLIPage;

  beforeEach(() => {
    page = new DALNWEBCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
