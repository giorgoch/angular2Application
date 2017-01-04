import { AppProfilePage } from './app.po';

describe('app-profile App', function() {
  let page: AppProfilePage;

  beforeEach(() => {
    page = new AppProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
