import * as m from 'mithril';

// View
export default class StatsPanel {
    view (vnode: any) {
            const resourceOne = vnode.attrs.resourceOne;
            const resourceTwo = vnode.attrs.resourceTwo;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="container">
                        <div className="columns">
                        <div className="column col-3">
                            <div className="card-title h5">{resourceOne.name}: {resourceOne.total}</div>
                        </div>
                        <div className="column col-3">
                            <div className="card-title h5">{resourceTwo.name}: {resourceTwo.total}</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
		  );
    }
}
