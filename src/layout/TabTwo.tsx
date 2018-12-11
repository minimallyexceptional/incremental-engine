import * as m from 'mithril';

import Resource from '../components/Resource';
import StatsPanel from '../components/StatsPanels';
import Log from '../components/Log'

// View
export default class TabTwo {
    view (vnode: any) {
        return (
			<div className="layout-tab tab-two column col-12">
                <div className="container">
                    <div className="columns">
                        <div className="column col-12">
                            <Log store={vnode.attrs.store} />
                        </div>
                    </div>
                </div>
            </div>
		  );
    }
}
