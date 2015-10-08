import ImmediateAction from './ImmediateAction';
export default class FutureAction extends ImmediateAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    schedule(state, delay = 0) {
        if (this.isUnsubscribed) {
            return this;
        }
        this.delay = delay;
        this.state = state;
        const id = this.id;
        if (id != null) {
            this.id = undefined;
            clearTimeout(id);
        }
        const scheduler = this.scheduler;
        this.id = setTimeout(() => {
            this.id = void 0;
            scheduler.actions.push(this);
            scheduler.flush();
        }, this.delay);
        return this;
    }
    unsubscribe() {
        const id = this.id;
        if (id != null) {
            this.id = void 0;
            clearTimeout(id);
        }
        super.unsubscribe();
    }
}
