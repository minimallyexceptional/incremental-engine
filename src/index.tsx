import * as m from 'mithril';
const mobx = require('mobx');

import Global from './stores/Global'
import ResourceOneStore from './stores/ResourceOne';
import ResourceTwoStore from './stores/ResourceTwo';
import Player from './stores/Player';
import Enemy from './stores/Enemy';

// Import Pages
import App from './App';

const store = { 
  global: Global,
  player: Player,
  enemy: Enemy,
  resourceOne: ResourceOneStore,
  resourceTwo : ResourceTwoStore
};

mobx.autorun(() => 
  m.render(
    document.body,
    m(App, {store})
  )
)