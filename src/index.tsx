import * as m from 'mithril';
const mobx = require('mobx');

import ResourceOneStore from './stores/ResourceOne';
import ResourceTwoStore from './stores/ResourceTwo';

// Import Pages
import App from './App';

mobx.autorun(() => 
  m.render(
    document.body,
    m(App, { 
      resourceOne: ResourceOneStore,
      resourceTwo : ResourceTwoStore
    })
  )
)