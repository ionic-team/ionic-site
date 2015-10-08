import { MergeOperator } from './merge-support';
export default function mergeAll(concurrent) {
    return this.lift(new MergeOperator(concurrent));
}
