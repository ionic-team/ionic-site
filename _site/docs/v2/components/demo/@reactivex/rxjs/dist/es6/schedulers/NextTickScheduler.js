import ImmediateScheduler from './ImmediateScheduler';
import NextTickAction from './NextTickAction';
import ImmediateAction from './ImmediateAction';
export default class NextTickScheduler extends ImmediateScheduler {
    scheduleNow(work, state) {
        return (this.scheduled ?
            new ImmediateAction(this, work) :
            new NextTickAction(this, work)).schedule(state);
    }
}
