import { FlatMapOperator } from './flatMap-support';
export default function flatMap(project, projectResult, concurrent) {
    return this.lift(new FlatMapOperator(project, projectResult, concurrent));
}
