import { PicManagementWebPage } from './app.po';

describe('pic-management-web App', () => {
  let page: PicManagementWebPage;

  beforeEach(() => {
    page = new PicManagementWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
