import { RsOrgOnlinePage } from './app.po';

describe('rs-org-online App', function() {
  let page: RsOrgOnlinePage;

  beforeEach(() => {
    page = new RsOrgOnlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
