import { SminfoAppPage } from './app.po';

describe('sminfo-app App', function() {
  let page: SminfoAppPage;

  beforeEach(() => {
    page = new SminfoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
