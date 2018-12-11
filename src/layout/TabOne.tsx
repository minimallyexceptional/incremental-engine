import * as m from 'mithril';

import Resource from '../components/Resource';
import StatsPanel from '../components/StatsPanels';

// View
export default class TabOne {
    view (vnode: any) {
        return (
			<div className="layout-tab tab-one column col-12">
                <div className="container">
                    <div className="columns">
                        <div className="column col-12">
                            <StatsPanel store={vnode.attrs.store} primaryResource={vnode.attrs.store.resourceOne} />
                        </div>
                        <div className="column col-6">
                            <Resource store={vnode.attrs.store} primaryResource={vnode.attrs.store.resourceOne} />
                        </div>
                        <div className="column col-6">
                            <Resource store={vnode.attrs.store} primaryResource={vnode.attrs.store.resourceOne} />
                        </div>
                        <div className="column col-12">
                            <Resource store={vnode.attrs.store} primaryResource={vnode.attrs.store.resourceTwo} requiredResource={vnode.attrs.store.resourceOne}/>
                        </div>
                    </div>
                </div>
            </div>
		  );
    }
}
