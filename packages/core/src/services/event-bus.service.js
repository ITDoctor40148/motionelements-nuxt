import Vue from 'vue';
import store from '@/store/index.js';
import * as teleport from '@/helpers/teleport.v2.js';

// Event Bus
// https://www.digitalocean.com/community/tutorials/vuejs-global-event-bus
// https://github.com/DivanteLtd/vue-storefront/blob/master/core/compatibility/plugins/event-bus/index.js

const EventBus = new Vue();

function isMember() {
  return store.getters['user/isMember'];
}

function addFavoriteItem(product, folderId) {
  console.log('addFavorites', product);

  folderId = folderId || 'default';

  store.dispatch('favorites/addFavoriteItem', {
    folderId: folderId,
    product: product,
  }).then((response) => {
    console.log('addFavorites done', folderId, product, response);

    const data = _.get(response, 'data.data');

    // @deprecated
    if (folderId === 'default' && _.has(data, 'totalCount')) {
      store.dispatch('site/setFavoritesCount', {
        data: {
          id: folderId,
          items: {
            total_count: data.totalCount,
          },
        },
      });
    }

    const favoritesAddTimestamp = _.get(data, 'addedAt');
    const favoritesElementInfo = product;

    const productsInfo = [];
    productsInfo.push(favoritesElementInfo);

    const teleportInfo = {
      'timestamp': favoritesAddTimestamp,
      'products': productsInfo,
    };

    console.log('addFavorites teleportProductInfo', teleportInfo);

    teleport.event('product_favorited', teleportInfo);
    /*
    store.dispatch('site/getFavoritesCount').then((result) => {
    store.dispatch('site/setFavoritesCount', result.data);
    // console.log('addFavorites', result.data);

    const notify = store.getters['site/notifyMessages'];
    notify.status = true;
    notify.contents.push({
      name: 'notifyMessages',
      type: 'success',
      title: this.$i18n.t('search.element_added_to_your_favorites'),
      autohide: true,
      delay: 3000,
    });
    store.dispatch('site/setNotifyMessages', notify);
    });
     */
  });
}

function showLoginModal() {
  store.dispatch('modal/showSignUp');
}


EventBus.$on('product-favorited', (product, folderId) => {
  // console.log('bus: product-favorited', product);
  // EventBus.$off('product-favorited');

  if (!isMember()) {
    showLoginModal();
    return;
  }

  addFavoriteItem(product, folderId);
});

/*
EventBus.$on('product-variant-selected', (sku) => {
  // console.log('bus: product-favorited', product);
  // EventBus.$off('product-favorited');

  if (!isMember()) {
    showLoginModal();
    return;
  }

  store.dispatch('product/setSelectedVariantSku', sku);
  store.dispatch('product/setProductSku', sku);
  // push to product
  store.dispatch('modal/show', 'product-download-modal');
});

EventBus.$on('product-collection-selected', (sku) => {
  if (!isMember()) {
    showLoginModal();
    return;
  }

  store.dispatch('product/setProductSku', sku);
  // push to product
  console.log('showmodal', 'collection-purchase-modal');

  store.dispatch('modal/show', 'collection-purchase-modal');
});
*/

const Dummy = {};

export { EventBus, Dummy };
