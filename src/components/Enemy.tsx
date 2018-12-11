import * as m from 'mithril';

// View
export default class Enemy {
	_rednderButton (self, player) {
        return (
            <button 
                className="btn btn-primary" 
                disabled={self.is_attacking}
                onclick={() => self.attack(player)}>
                Attack
            </button>
        )
	}
	// _checkForAttack (player, target) {
	// 	if (store.does_require) {
	// 		if (required.total >= store.required_resource_cost) {
	// 			store.cant_afford = false;
	// 		} else {
	// 			store.cant_afford = true;
	// 		}
	// 	}
	// }
	_checkAutomation (self, target) {
		let combat = setInterval(function () {
			if (self.is_automated && !self.is_attacking) {
                if (target.is_dead || self.is_dead) {
                    clearInterval(combat);
                } else {
                    self.attack(target);
                }
            }
		}, self.attack_speed);
	}
	oninit (vnode) {
		this._checkAutomation(vnode.attrs.store.enemy, vnode.attrs.store.player)
	}
    view (vnode: any) {
		const self = vnode.attrs.store.enemy;
		const player = vnode.attrs.store.player;
        // this._checkRequiredCost(vnode.attrs.store, vnode.attrs.enemy);
        if (self.is_dead) {
            return <h1>Dead</h1>
        } else {
            return (
                <div className="card">
                    <div className="card-header">
                    <div className="card-title h5">{self.name}</div>
                    <div className="card-subtitle text-gray">{self.title}</div>
                    </div>
                    <div className="card-body">
                        <h5>Health</h5>
                        <div className="bar">
                            <div 
                                className="bar-item" 
                                role="progressbar" 
                                style={{width: `${self.current_health}%`}} 
                                aria-valuenow={self.current_health} 
                                aria-valuemin={0}
                                aria-valuemax={self.max_health} />
                        </div>
                    </div>
                    <div className="card-footer">
                        {this._rednderButton(self, player)}
                    </div>
                </div>
            );
        }
    }
}
