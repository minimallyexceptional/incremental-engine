import * as m from 'mithril';

// View
export default class Resource {
	_rednderButton (resource, does_require, requiredResource) {
		if (does_require) {
			return (
				<button 
					className="btn btn-primary" 
					disabled={resource.in_progress || resource.cant_afford}
					onclick={() => resource.gatherRequired(requiredResource)}>
					{resource.name}
				</button>
			)
		} else {
			return (
				<button 
					className="btn btn-primary" 
					disabled={resource.in_progress || resource.cant_afford}
					onclick={() => resource.gather()}>
					{resource.name}
				</button>
			)
		}
	}
	_checkRequiredCost (store, required) {
		if (store.does_require) {
			if (required.total >= store.required_resource_cost) {
				store.cant_afford = false;
			} else {
				store.cant_afford = true;
			}
		}
	}
	_checkAutomation (store, requiredResource) {
		setInterval(function () {
			if (store.automated && !store.in_progress) {
				if (store.does_require) {
					store.gatherRequired(requiredResource)
				} else {
					store.gather();
				}
			}
		}, 1000);
	}
	oninit (vnode) {
		this._checkAutomation(vnode.attrs.primaryResource, vnode.attrs.requiredResource)
	}
    view (vnode: any) {
		const store = vnode.attrs.primaryResource;
		const required = vnode.attrs.requiredResource;
		this._checkRequiredCost(vnode.attrs.store, vnode.attrs.requiredResource);
		return (
			<div className="card">
				<div className="card-header">
				<div className="card-title h5">{store.name}</div>
				<div className="card-subtitle text-gray">{store.tagline}</div>
				</div>
				<div className="card-body">
					<div className="bar">
						<div 
							className="bar-item" 
							role="progressbar" 
							style={{width: `${store.progress}%`}} 
							aria-valuenow={store.progress} 
							aria-valuemin={store.min_value}
							aria-valuemax={store.max_value} />
					</div>
				</div>
				<div className="card-footer">
					{this._rednderButton(store, store.does_require, required)}
				</div>
			</div>
		);
    }
}
