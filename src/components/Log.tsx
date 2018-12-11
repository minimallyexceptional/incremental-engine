import * as m from 'mithril';

// View
export default class Resource {
    _renderLog(log) {
        return log.map(element => {
            return <p>{element}</p>
        });
    }
    view (vnode: any) {
        return (
            <div className="panel" style={{height: '90%'}}>
                <div className="panel-header" style={ {textAlign: "center"} }>
                    <h1 className="panel-title">Log</h1>
                </div>
                <div className="panel-body">
                    {this._renderLog(vnode.attrs.store.global.log)}
                </div>
                <div className="panel-footer">
                    <button className="btn btn-lg btn-block" onclick={() => vnode.attrs.store.global.clearLog()}>Clear</button>
                </div>
            </div>
		  );
    }
}
