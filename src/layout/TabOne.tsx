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
                            <StatsPanel resourceOne={vnode.attrs.resourceOne} resourceTwo={vnode.attrs.resourceTwo} />
                        </div>
                        <div className="column col-6">
                            <Resource store={vnode.attrs.resourceOne} requiredResource={null} />
                        </div>
                        <div className="column col-6">
                            <Resource store={vnode.attrs.resourceOne} requiredResource={null} />
                        </div>
                        <div className="column col-12">
                            <Resource store={vnode.attrs.resourceTwo} requiredResource={vnode.attrs.resourceOne} />
                        </div>
                    </div>
                </div>
            </div>
		  );
    }
}
