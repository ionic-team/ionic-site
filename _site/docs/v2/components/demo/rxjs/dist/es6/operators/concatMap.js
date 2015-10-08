import { FlatMapOperator } from './flatMap-support';
export default function concatMap(project, projectResult) {
    return this.lift(new FlatMapOperator(project, projectResult, 1));
}
