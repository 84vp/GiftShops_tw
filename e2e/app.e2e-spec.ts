import { GiftShopPage } from './app.po';

describe('gift-shop App', () => {
  let page: GiftShopPage;

  beforeEach(() => {
    page = new GiftShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
