import { ZipOperator } from './zip-support';
export default function zipAll(project) {
    return this.lift(new ZipOperator(project));
}
