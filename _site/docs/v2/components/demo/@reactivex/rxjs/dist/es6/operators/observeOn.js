import { ObserveOnOperator } from './observeOn-support';
export default function observeOn(scheduler, delay = 0) {
    return this.lift(new ObserveOnOperator(scheduler, delay));
}
