import Subscription from '../Subscription';
export default class VirtualTimeScheduler {
    constructor() {
        this.actions = [];
        this.active = false;
        this.scheduled = false;
        this.index = 0;
        this.sorted = false;
        this.frame = 0;
    }
    now() {
        return 0;
    }
    sortActions() {
        if (!this.sorted) {
            this.actions.sort((a, b) => {
                return a.delay === b.delay ? (a.index > b.index ? 1 : -1) : (a.delay > b.delay ? 1 : -1);
            });
            this.sorted = true;
        }
    }
    flush() {
        this.sortActions();
        const actions = this.actions;
        while (actions.length > 0) {
            let action = actions.shift();
            this.frame = action.delay;
            action.execute();
        }
        this.frame = 0;
    }
    schedule(work, delay = 0, state) {
        this.sorted = false;
        return new VirtualAction(this, work, this.index++).schedule(state, delay);
    }
}
class VirtualAction extends Subscription {
    constructor(scheduler, work, index) {
        super();
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
    }
    schedule(state, delay = 0) {
        if (this.isUnsubscribed) {
            return this;
        }
        const scheduler = this.scheduler;
        var action = scheduler.frame === this.delay ? this :
            new VirtualAction(scheduler, this.work, scheduler.index += 1);
        action.state = state;
        action.delay = scheduler.frame + delay;
        scheduler.actions.push(action);
        return this;
    }
    execute() {
        if (this.isUnsubscribed) {
            throw new Error("How did did we execute a canceled Action?");
        }
        this.work(this.state);
    }
    unsubscribe() {
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = void 0;
        this.state = void 0;
        this.scheduler = void 0;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        super.unsubscribe();
    }
}
