import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class AppProfilePage {
=======
export class ApplicationPage {
>>>>>>> origin/master
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
