import * as m from 'mithril';

// View
export default class Player {
	_rednderButton (player, target) {
        return (
            <button 
                className="btn btn-primary" 
                disabled={player.is_attacking}
                onclick={() => player.attack(target)}>
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
	_checkAutomation (player, target) {
		let combat = setInterval(function () {
			if (player.is_automated && !player.is_attacking) {
                if (target.is_dead || player.is_dead) {
                    clearInterval(combat);
                } else {
                    player.attack(target);
                }
            }
		}, player.attack_speed);
	}
	oninit (vnode) {
		this._checkAutomation(vnode.attrs.store.player, vnode.attrs.store.enemy)
	}
    view (vnode: any) {
		const player = vnode.attrs.store.player;
		const enemy = vnode.attrs.enemy;
        // this._checkRequiredCost(vnode.attrs.store, vnode.attrs.enemy);
        if (player.is_dead) {
            return <h1>Dead</h1>
        } else {
            return (
                <div className="card">
                    <div className="card-header">
                    <div className="card-title h5">{player.name}</div>
                    <div className="card-subtitle text-gray">{player.title}</div>
                    </div>
                    <div className="card-body">
                        <h5>Health</h5>
                        <div className="bar">
                            <div 
                                className="bar-item" 
                                role="progressbar" 
                                style={{width: `${player.current_health}%`}} 
                                aria-valuenow={player.current_health} 
                                aria-valuemin={0}
                                aria-valuemax={player.max_health} />
                        </div>
                    </div>
                    <div className="card-footer">
                        {this._rednderButton(player, enemy)}
                    </div>
                </div>
            );
        }
    }
}
