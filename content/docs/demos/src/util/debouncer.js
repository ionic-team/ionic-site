export var TimeoutDebouncer = (function () {
    function TimeoutDebouncer(wait) {
        this.wait = wait;
        this.timer = null;
    }
    TimeoutDebouncer.prototype.debounce = function (callback) {
        this.callback = callback;
        this.schedule();
    };
    TimeoutDebouncer.prototype.schedule = function () {
        this.cancel();
        if (this.wait <= 0) {
            this.callback();
        }
        else {
            this.timer = setTimeout(this.callback, this.wait);
        }
    };
    TimeoutDebouncer.prototype.cancel = function () {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    return TimeoutDebouncer;
}());
//# sourceMappingURL=debouncer.js.map