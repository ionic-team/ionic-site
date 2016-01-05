var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var E2EApp = (function () {
    function E2EApp() {
    }
    E2EApp.prototype.tapTest = function (eleType) {
        console.debug('test click', eleType);
    };
    E2EApp = __decorate([
        ionic_1.App({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [])
    ], E2EApp);
    return E2EApp;
})();
function onEvent(ev) {
    var c = pointerCoord(ev);
    var l = '(' + c.x + ',' + c.y + ')';
    if (ev.isIonicTap) {
        l += ' isIonicTap';
    }
    console.debug(ev.type, l);
}
function pointerCoord(ev) {
    // get coordinates for either a mouse click
    // or a touch depending on the given event
    var c = { x: 0, y: 0 };
    if (ev) {
        var touches = ev.touches && ev.touches.length ? ev.touches : [ev];
        var e = (ev.changedTouches && ev.changedTouches[0]) || touches[0];
        if (e) {
            c.x = e.clientX || e.pageX || 0;
            c.y = e.clientY || e.pageY || 0;
        }
    }
    return c;
}
document.addEventListener('touchstart', onEvent);
document.addEventListener('touchcancel', onEvent);
document.addEventListener('touchend', onEvent);
document.addEventListener('mousedown', onEvent);
document.addEventListener('mouseup', onEvent);
document.addEventListener('click', onEvent);
var msgs = [];
var index = 0;
var timeId;
var winConsoleError = console.error;
console.error = function () {
    winConsoleError.apply(this, arguments);
    var args = ['ERROR!'];
    for (var i = 0, j = arguments.length; i < j; i++) {
        args.push(arguments[i]);
    }
    console.debug.apply(this, args);
};
console.debug = function () {
    index++;
    var msg = [];
    msg.push(index);
    for (var i = 0, j = arguments.length; i < j; i++) {
        msg.push(arguments[i]);
    }
    msg.push(getTime());
    msg = msg.join(', ');
    if (arguments[0] === 'ERROR!')
        msg = '<span style="color:red;font-weight:bold">' + msg + '</span>';
    if (arguments[0] === 'touchstart')
        msg = '<span style="color:blue">' + msg + '</span>';
    if (arguments[0] === 'touchend')
        msg = '<span style="color:darkblue">' + msg + '</span>';
    if (arguments[0] === 'mousedown')
        msg = '<span style="color:red">' + msg + '</span>';
    if (arguments[0] === 'mouseup')
        msg = '<span style="color:maroon">' + msg + '</span>';
    if (arguments[0] === 'click')
        msg = '<span style="color:purple">' + msg + '</span>';
    if (arguments[0] === 'test click')
        msg = '<span style="color:orange">' + msg + '</span>';
    msgs.unshift(msg);
    if (msgs.length > 25) {
        msgs.splice(25);
    }
    // do this so we try not to interfere with the device performance
    clearTimeout(timeId);
    timeId = setTimeout(function () {
        document.getElementById('logs').innerHTML = msgs.join('<br>');
    }, 100);
};
function getTime() {
    var d = new Date();
    return d.getSeconds() + '.' + d.getMilliseconds();
}