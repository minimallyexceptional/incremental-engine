import * as m from 'mithril';

import TabOne from './layout/TabOne'
import TabTwo from './layout/TabTwo'
import TabThree from './layout/TabThree'

export default class  App {
  _renderTab(activeTab, vnode) {
    switch (activeTab) {
      case 1: return  <TabOne store={vnode.attrs.store} />
      case 2: return  <TabTwo store={vnode.attrs.store} />
      case 3: return  <TabThree store={vnode.attrs.store} />
      default: return  <TabOne store={vnode.attrs.store} />
    }
  }
  view (vnode) {
    const store = vnode.attrs.store.global;
    return (
      <div className="main-wrap">
        <div className="container">
          <div className="columns">
             {this._renderTab(store.activeTab, vnode)}
            <div className="column col-12">
              <div className="tab-wrap">
                <ul className="tab tab-block">
                  <li className={`tab-item ${store.activeTab == 1 ? 'active' : ''}`} onclick={() => store.setTab(1)}>
                    <a href="#">Crafting</a>
                  </li>
                  <li className={`tab-item ${store.activeTab == 2 ? 'active' : ''}`} onclick={() => store.setTab(2)}>
                    <a href="#" >Log</a>
                  </li>
                  <li className={`tab-item ${store.activeTab == 3 ? 'active' : ''}`} onclick={() => store.setTab(3)}>
                    <a href="#">Combat</a>
                  </li>
                  <li className={`tab-item ${store.activeTab == 4 ? 'active' : ''}`} onclick={() => store.setTab(4)}>
                    <a href="#">Options</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
