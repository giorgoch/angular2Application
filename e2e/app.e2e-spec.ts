<<<<<<< HEAD
import { AppProfilePage } from './app.po';

describe('app-profile App', function() {
  let page: AppProfilePage;

  beforeEach(() => {
    page = new AppProfilePage();
=======
import { ApplicationPage } from './app.po';

describe('application App', function() {
  let page: ApplicationPage;

  beforeEach(() => {
    page = new ApplicationPage();
>>>>>>> origin/master
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
