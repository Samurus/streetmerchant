import {Store} from './store';

export const StickerPoint: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'html body div#bodyWrapper.bg_body div.row_4 div.wrapper div.container_12 div#bodyContent.grid_9.push_3 div.wrapper_content_block div.contentContainer div.contentPadd.prods_info_page form div.prods_info.decks div.forecastle ol.masthead li.starboard_side.right_side_pic-1 div.info div div',
      text: ['sofort versandfertig, Lieferzeit ca. 1-3 Werktage'],
    },
    outOfStock: {
      container: 'html body div#bodyWrapper.bg_body div.row_4 div.wrapper div.container_12 div#bodyContent.grid_9.push_3 div.wrapper_content_block div.contentContainer div.contentPadd.prods_info_page form div.prods_info.decks div.forecastle ol.masthead li.starboard_side.right_side_pic-1 div.info div div',
      text: ['nicht lieferbar, ausverkauft'],
    },

  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.stickerpoint.de/panini-wm-2010-komplettset-alle-sticker-album-p-52.html',
    },
    {
      brand: 'nintendo',
      model: 'SWSH5',
      series: 'pokemon',
      url:
        'https://www.stickerpoint.de/pokemon-schwert-schild-kampfstile-display-mit-36-tueten-p-1688.html',
    },
    {
      brand: 'nintendo',
      model: 'SWSH4.5',
      series: 'pokemon',
      url:
        'https://www.stickerpoint.de/pokemon-glaenzendes-schicksal-schillerndes-iksbat-vmax-premium-kollektion-p-1775.html',
    },
    {
      brand: 'nintendo',
      model: 'SWSH4.5',
      series: 'pokemon',
      url:
        'https://www.stickerpoint.de/pokemon-glaenzendes-schicksal-schillerndes-katapuldra-vmax-premium-koll-p-1776.html',
    },
  ],
  name: 'stickerpoint',
};
