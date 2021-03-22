import {Store} from './store';

export const JimboCards: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'html#ecwid_html body#ecwid_body.starter-site.sw-activated.no-touch.ecwid-customer-loggedOut.ecwid-lang-de div.body.tiles-wrapper div.tiles.cover-layout--half.cover-position--center.cover-align--center.cover-phone--hide.cover-social--show-in-header.cover-logo--hide.cover-logo-position--show-on-cover.cover-logo--homogeneity.cover-title-size--xxxxl.cover-subtitle-size--l.cover-button-size--m.cover-title--show.cover-title--show-under-subtitle.cover-background--image.cover-overlay--gradient.cover-menu--show.cover-store-hours--hide.cover-get-directions--hide.cover-arrow--show.cover-cart--show div.tile.tile-store div div#main.store.dynamic-product-browser div div#ecwid-products.ecwid div.ec-size.ec-size--xxs.ec-size--xs.ec-size--s.ec-size--m.ec-size--l.ec-size--xl.ecwid-no-touch.ecwid-supports-cssanimations.ecwid-responsive div div.ecwid-productBrowser.ecwid-productBrowser-ProductPage.ecwid-productBrowser-ProductPage-307087599 div div div div.ec-wrapper div.ec-store.ec-store__product-page.ec-store__product-page--307087599.ec-store__product-page--c55034572 div.ec-store__content-wrapper div.product-details.product-details--layout-sidebar-right.product-details--description-side.product-details--small-images div.product-details__sidebar div.product-details-module.product-details__action-panel.details-product-purchase div.product-details-module__content.product-details-module__content--indented div.details-product-purchase__controls div.details-product-purchase__bag-controls div.details-product-purchase__add-buttons div.form-control.form-control--button.form-control--large.form-control--primary.form-control--flexible.form-control--animated.details-product-purchase__add-to-bag.form-control__button--icon-center.form-control--done button.form-control__button',
      text: ['In den Warenkorb'],
    },
    outOfStock: {
      container: 'html#ecwid_html body#ecwid_body.starter-site.sw-activated.no-touch.ecwid-customer-loggedOut.ecwid-lang-de div.body.tiles-wrapper div.tiles.cover-layout--half.cover-position--center.cover-align--center.cover-phone--hide.cover-social--show-in-header.cover-logo--hide.cover-logo-position--show-on-cover.cover-logo--homogeneity.cover-title-size--xxxxl.cover-subtitle-size--l.cover-button-size--m.cover-title--show.cover-title--show-under-subtitle.cover-background--image.cover-overlay--gradient.cover-menu--show.cover-store-hours--hide.cover-get-directions--hide.cover-arrow--show.cover-cart--show div.tile.tile-store div div#main.store.dynamic-product-browser div div#ecwid-products.ecwid div.ec-size.ec-size--xxs.ec-size--xs.ec-size--s.ec-size--m.ec-size--l.ec-size--xl.ecwid-no-touch.ecwid-supports-cssanimations.ecwid-responsive div div.ecwid-productBrowser.ecwid-productBrowser-ProductPage.ecwid-productBrowser-ProductPage-256685234 div div div div.ec-wrapper div.ec-store.ec-store__product-page.ec-store__product-page--256685234.ec-store__product-page--c76890144 div.ec-store__content-wrapper div.product-details.product-details--layout-sidebar-right.product-details--description-side div.product-details__sidebar div.product-details-module.product-details__product-price-row div.product-details-module__content div.product-details__attraction-block.product-details__attraction-block--no-info.product-details__product-soldout div.product-details__label-container div.ec-label.label--flag.label--attention div.label__text',
      text: ['Ausverkauft'],
    },

  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://shop-jimbocards.company.site/Pok%C3%A9mon-Pl%C3%BCschfigur-Monochrom-Pikachu-20cm-p307087599',
    },
    {
      brand: 'nintendo',
      model: 'SWSH4.5',
      series: 'pokemon',
      url:
        'https://shop-jimbocards.company.site/Schwert-&-Schild-4-5-Gl%C3%A4nzendes-Schicksal-Top-Trainer-Box-DE-p256685234',
    },
  ],
  name: 'jimbocards',
};
