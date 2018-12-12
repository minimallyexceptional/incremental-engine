import * as m from 'mithril';

import { getPercentage } from '../logic/IncrementalMath'

// View
export default class Progress {
    view (vnode: any) {
        const name = vnode.attrs.name;
        const progress = vnode.attrs.progress;
        const min = vnode.attrs.min;
        const max = vnode.attrs.max;
		return (
			<div className="card">
				<div className="card-header">
				<div className="card-title h5">{name}</div>
				<div className="card-subtitle text-gray">{progress}/{max}</div>
				</div>
				<div className="card-body">
					<div className="bar">
						<div 
							className="bar-item" 
							role="progressbar" 
							style={{width: `${getPercentage(min, max, progress)}%`}}
							aria-valuenow={progress} 
							aria-valuemin={min}
							aria-valuemax={max} />
					</div>
				</div>
			</div>
		);
    }
}
