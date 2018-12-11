import * as m from 'mithril';

import Resource from '../components/Resource';
import StatsPanel from '../components/StatsPanels';
import Log from '../components/Log'
import Player from '../components/Player';
import Enemy from '../components/Enemy';

// View
export default class TabTwo {
    view (vnode: any) {
        return (
			<div className="layout-tab tab-two column col-12">
                <div className="container">
                    <div className="columns">
                        <div className="column col-12">
                            <Enemy store={vnode.attrs.store} player={vnode.attrs.player} />
                            <Player store={vnode.attrs.store} enemy={vnode.attrs.store.enemy}/>
                        </div>
                    </div>
                </div>
            </div>
		  );
    }
}
