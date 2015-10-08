import { FlatMapToOperator } from './flatMapTo-support';
export default function flatMapTo(observable, projectResult, concurrent) {
    return this.lift(new FlatMapToOperator(observable, projectResult, concurrent));
}
