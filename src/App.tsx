import * as m from 'mithril';

import Resource from './components/Resource';
import StatsPanel from './components/StatsPanels';
import TabOne from './layout/TabOne'
import TabTwo from './layout/TabTwo'

export default class  App {
  activeTab = 1;
  _renderTab(activeTab, vnode) {
    switch (activeTab) {
      case 1: return  <TabOne resourceOne={vnode.attrs.resourceOne} resourceTwo={vnode.attrs.resourceTwo} />
      case 2: return  <TabTwo resourceOne={vnode.attrs.resourceOne} resourceTwo={vnode.attrs.resourceTwo} />
      default: return  <TabOne resourceOne={vnode.attrs.resourceOne} resourceTwo={vnode.attrs.resourceTwo} />
    }
  }
  view (vnode) {
    return (
      <div className="main-wrap">
        <div className="container">
          <div className="columns">
             {this._renderTab(this.activeTab, vnode)}
            <div className="column col-12">
              <div className="tab-wrap">
                <ul className="tab tab-block">
                  <li className={`tab-item ${this.activeTab == 1 ? 'active' : ''}`} onclick={() => this.activeTab = 1}>
                    <a href="#">Crafting</a>
                  </li>
                  <li className={`tab-item ${this.activeTab == 2 ? 'active' : ''}`} onclick={() => this.activeTab = 2}>
                    <a href="#" >Log</a>
                  </li>
                  <li className={`tab-item ${this.activeTab == 3 ? 'active' : ''}`} onclick={() => this.activeTab = 3}>
                    <a href="#">Research</a>
                  </li>
                  <li className={`tab-item ${this.activeTab == 4 ? 'active' : ''}`} onclick={() => this.activeTab = 4}>
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
