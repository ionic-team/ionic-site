import { CombineLatestOperator } from './combineLatest-support';
export default function combineAll(project) {
    return this.lift(new CombineLatestOperator(project));
}
