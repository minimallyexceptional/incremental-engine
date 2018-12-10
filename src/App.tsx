import * as m from 'mithril';

import Resource from './components/Resource';
import StatsPanel from './components/StatsPanels';

var App = {
  view: function(vnode) {
    return (
      <main>
        <StatsPanel resourceOne={vnode.attrs.resourceOne} resourceTwo={vnode.attrs.resourceTwo} />
        <Resource store={vnode.attrs.resourceOne} requiredResource={null}/>
        <Resource store={vnode.attrs.resourceTwo} requiredResource={vnode.attrs.resourceOne}/>
      </main>
    )
  }
}

export default App;