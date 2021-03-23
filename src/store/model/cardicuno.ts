import {Store} from './store';

export const CardiCuno: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'html body.body-offcanvas div#main-wrapper.main-wrapper.boxed div#content-wrapper div.container div.container-block.beveled div.row div#content.col-xs-12 div#result-wrapper form#buy_form.evo-validate div#product-offer.row.product-primary div.product-info.col-sm-6 div.product-info-inner div.product-offer div.row div.col-xs-5.text-right div.delivery-status span.status.status-2',
      text: ['sofort verfügbar'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://cardicuno.de/6-nimmt',
    },
    {
      brand: 'nintendo',
      model: 'SWSH5',
      series: 'pokemon',
      url:
        'https://cardicuno.de/VORVERKAUF-Pokemon-Fruehjahrs-Tin-Mew-Lahmus-Lucario-Sprache-Deutsch-OVP',
    },
    {
      brand: 'nintendo',
      model: 'SWSH4.5',
      series: 'pokemon',
      url:
        'https://cardicuno.de/VORVERKAUF-Schwert-und-Schild-5-Kampfstyle-Top-Trainer-Box-DE-OVP-zufaellig',
    },
  ],
  name: 'cardicuno',
};
