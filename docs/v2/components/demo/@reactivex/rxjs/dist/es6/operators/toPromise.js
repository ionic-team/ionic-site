export default function toPromise(PromiseCtor = Promise) {
    return new PromiseCtor((resolve, reject) => {
        let value;
        this.subscribe(x => value = x, err => reject(err), () => resolve(value));
    });
}
