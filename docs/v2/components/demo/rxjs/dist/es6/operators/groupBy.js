import Subscriber from '../Subscriber';
import Map from '../util/Map';
import FastMap from '../util/FastMap';
import GroupSubject from '../subjects/GroupSubject';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default function groupBy(keySelector, elementSelector, durationSelector) {
    return this.lift(new GroupByOperator(keySelector, durationSelector, elementSelector));
}
class GroupByOperator {
    constructor(keySelector, durationSelector, elementSelector) {
        this.keySelector = keySelector;
        this.durationSelector = durationSelector;
        this.elementSelector = elementSelector;
    }
    call(subscriber) {
        return new GroupBySubscriber(subscriber, this.keySelector, this.durationSelector, this.elementSelector);
    }
}
class GroupBySubscriber extends Subscriber {
    constructor(destination, keySelector, durationSelector, elementSelector) {
        super(destination);
        this.keySelector = keySelector;
        this.durationSelector = durationSelector;
        this.elementSelector = elementSelector;
        this.groups = null;
    }
    _next(x) {
        let key = tryCatch(this.keySelector)(x);
        if (key === errorObject) {
            this.error(key.e);
        }
        else {
            let groups = this.groups;
            const elementSelector = this.elementSelector;
            const durationSelector = this.durationSelector;
            if (!groups) {
                groups = this.groups = typeof key === 'string' ? new FastMap() : new Map();
            }
            let group = groups.get(key);
            if (!group) {
                groups.set(key, group = new GroupSubject(key));
                if (durationSelector) {
                    let duration = tryCatch(durationSelector)(group);
                    if (duration === errorObject) {
                        this.error(duration.e);
                    }
                    else {
                        this.add(duration._subscribe(new GroupDurationSubscriber(group, this)));
                    }
                }
                this.destination.next(group);
            }
            if (elementSelector) {
                let value = tryCatch(elementSelector)(x);
                if (value === errorObject) {
                    group.error(value.e);
                }
                else {
                    group.next(value);
                }
            }
            else {
                group.next(x);
            }
        }
    }
    _error(err) {
        const groups = this.groups;
        if (groups) {
            groups.forEach((group, key) => {
                group.error(err);
                this.removeGroup(key);
            });
        }
        this.destination.error(err);
    }
    _complete() {
        const groups = this.groups;
        if (groups) {
            groups.forEach((group, key) => {
                group.complete();
                this.removeGroup(group);
            });
        }
        this.destination.complete();
    }
    removeGroup(key) {
        this.groups[key] = null;
    }
}
class GroupDurationSubscriber extends Subscriber {
    constructor(group, parent) {
        super(null);
        this.group = group;
        this.parent = parent;
    }
    _next(value) {
        const group = this.group;
        group.complete();
        this.parent.removeGroup(group.key);
    }
    _error(err) {
        const group = this.group;
        group.error(err);
        this.parent.removeGroup(group.key);
    }
    _complete() {
        const group = this.group;
        group.complete();
        this.parent.removeGroup(group.key);
    }
}
