import { SweatersAppPage } from './app.po';

describe('sweaters-app App', () => {
  let page: SweatersAppPage;

  beforeEach(() => {
    page = new SweatersAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
