export class NavController {
  constructor(nav) {
    this._nav = nav;
  }
  setItems(items) {
    return this._nav.setItems(items);
  }
  clear() {
    return this._nav.clear();
  }
  push() {
    return this._nav.push.apply(this._nav, arguments);
  }
  pop() {
    return this._nav.pop.apply(this._nav, arguments);
  }
}
