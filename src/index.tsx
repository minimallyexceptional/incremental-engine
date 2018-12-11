import * as m from 'mithril';
const mobx = require('mobx');

import Global from './stores/Global'
import ResourceOneStore from './stores/ResourceOne';
import ResourceTwoStore from './stores/ResourceTwo';

// Import Pages
import App from './App';

const store = { 
  global: Global,
  resourceOne: ResourceOneStore,
  resourceTwo : ResourceTwoStore
};

mobx.autorun(() => 
  m.render(
    document.body,
    m(App, {store})
  )
)