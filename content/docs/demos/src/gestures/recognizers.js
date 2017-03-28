export var PanRecognizer = (function () {
    function PanRecognizer(direction, threshold, maxAngle) {
        this.direction = direction;
        this.dirty = false;
        this._angle = 0;
        this._isPan = 0;
        var radians = maxAngle * (Math.PI / 180);
        this.maxCosine = Math.cos(radians);
        this.threshold = threshold * threshold;
    }
    PanRecognizer.prototype.start = function (coord) {
        this.startCoord = coord;
        this._angle = 0;
        this._isPan = 0;
        this.dirty = true;
    };
    PanRecognizer.prototype.detect = function (coord) {
        if (!this.dirty) {
            return false;
        }
        var deltaX = (coord.x - this.startCoord.x);
        var deltaY = (coord.y - this.startCoord.y);
        var distance = deltaX * deltaX + deltaY * deltaY;
        if (distance >= this.threshold) {
            var angle = Math.atan2(deltaY, deltaX);
            var cosine = (this.direction === 'y')
                ? Math.sin(angle)
                : Math.cos(angle);
            this._angle = angle;
            if (cosine > this.maxCosine) {
                this._isPan = 1;
            }
            else if (cosine < -this.maxCosine) {
                this._isPan = -1;
            }
            else {
                this._isPan = 0;
            }
            this.dirty = false;
            return true;
        }
        return false;
    };
    PanRecognizer.prototype.angle = function () {
        return this._angle;
    };
    PanRecognizer.prototype.pan = function () {
        return this._isPan;
    };
    return PanRecognizer;
}());
//# sourceMappingURL=recognizers.js.map