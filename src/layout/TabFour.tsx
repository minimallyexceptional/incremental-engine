import * as m from 'mithril';

import Resource from '../components/Resource';
import StatsPanel from '../components/StatsPanels';
import Progress from '../components/Progress'

// View
export default class TabFour {
    view (vnode: any) {
        return (
			<div className="layout-tab tab-one column col-12">
                <div className="container">
                    <div className="columns">
                        <div className="column col-12">
                            <Progress 
                                name={'Paperclips'}
                                min={0}
                                max={1000}
                                progress={vnode.attrs.store.resourceOne.total}
                            />
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
