var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { SlideGesture } from './slide-gesture';
import { defaults } from '../util/util';
import { pointerCoord, windowDimensions } from '../util/dom';
/**
 * @private
 */
export var SlideEdgeGesture = (function (_super) {
    __extends(SlideEdgeGesture, _super);
    function SlideEdgeGesture(element, opts) {
        if (opts === void 0) { opts = {}; }
        defaults(opts, {
            edge: 'left',
            maxEdgeStart: 50
        });
        _super.call(this, element, opts);
        // Can check corners through use of eg 'left top'
        this.edges = opts.edge.split(' ');
        this.maxEdgeStart = opts.maxEdgeStart;
    }
    SlideEdgeGesture.prototype.canStart = function (ev) {
        var _this = this;
        var coord = pointerCoord(ev);
        this._d = this.getContainerDimensions();
        return this.edges.every(function (edge) { return _this._checkEdge(edge, coord); });
    };
    SlideEdgeGesture.prototype.getContainerDimensions = function () {
        return {
            left: 0,
            top: 0,
            width: windowDimensions().width,
            height: windowDimensions().height
        };
    };
    SlideEdgeGesture.prototype._checkEdge = function (edge, pos) {
        switch (edge) {
            case 'left': return pos.x <= this._d.left + this.maxEdgeStart;
            case 'right': return pos.x >= this._d.width - this.maxEdgeStart;
            case 'top': return pos.y <= this._d.top + this.maxEdgeStart;
            case 'bottom': return pos.y >= this._d.height - this.maxEdgeStart;
        }
    };
    return SlideEdgeGesture;
}(SlideGesture));
//# sourceMappingURL=slide-edge-gesture.js.map