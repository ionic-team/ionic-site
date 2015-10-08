import { errorObject } from './errorObject';
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject.e = e;
        return errorObject;
    }
}
export default function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
;
