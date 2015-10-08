import { FlatMapToOperator } from './flatMapTo-support';
export default function concatMapTo(observable, projectResult) {
    return this.lift(new FlatMapToOperator(observable, projectResult, 1));
}
