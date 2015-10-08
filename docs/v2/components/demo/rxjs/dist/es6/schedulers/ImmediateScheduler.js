import ImmediateAction from './ImmediateAction';
import FutureAction from './FutureAction';
export default class ImmediateScheduler {
    constructor() {
        this.actions = [];
        this.active = false;
        this.scheduled = false;
    }
    now() {
        return Date.now();
    }
    flush() {
        if (this.active || this.scheduled) {
            return;
        }
        this.active = true;
        const actions = this.actions;
        for (let action; action = actions.shift();) {
            action.execute();
        }
        this.active = false;
    }
    schedule(work, delay = 0, state) {
        return (delay <= 0) ?
            this.scheduleNow(work, state) :
            this.scheduleLater(work, delay, state);
    }
    scheduleNow(work, state) {
        return new ImmediateAction(this, work).schedule(state);
    }
    scheduleLater(work, delay, state) {
        return new FutureAction(this, work).schedule(state, delay);
    }
}
