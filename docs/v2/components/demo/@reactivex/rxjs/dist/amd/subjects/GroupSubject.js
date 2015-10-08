var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subject'], function (require, exports, Subject_1) {
    var GroupSubject = (function (_super) {
        __extends(GroupSubject, _super);
        function GroupSubject(key) {
            _super.call(this);
            this.key = key;
        }
        return GroupSubject;
    })(Subject_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GroupSubject;
});
//# sourceMappingURL=GroupSubject.js.map