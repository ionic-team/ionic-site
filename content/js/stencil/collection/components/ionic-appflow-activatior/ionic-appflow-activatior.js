import { TweenLite } from "gsap/TweenLite";
export class IonicAppflowActivator {
    constructor() {
        this.$circles = [];
        this.$lis = [];
        this.screenshots = [];
        this.active = null;
        this.duration = 6;
        this.quickDuration = .25;
        this.r = 31;
        this.gsRefs = [];
        this.scrollPause = null;
        this.circumference = this.r * 2 * Math.PI;
        this.animationSelect = this.animationSelect.bind(this);
        this.animationStart = this.animationStart.bind(this);
    }
    componentDidLoad() {
        setTimeout(this.animationStart, 2000, 0);
        const addCircle = (li, i) => {
            this.$lis[i] = li;
            this.$circles[i] = li.querySelector('.progress-ring__circle');
            this.screenshots[i] = li.querySelector('a').dataset.screenshot;
            if (li.nextElementSibling && li.nextElementSibling.nodeName === 'LI') {
                addCircle(li.nextElementSibling, i + 1);
            }
        };
        addCircle(this.el.querySelector('li:nth-child(1)'), 0);
        this.active = 0;
    }
    animationStart(index) {
        console.log('starting');
        if (window.pageYOffset > 1000) {
            console.log('pausing');
            this.scrollPause = setTimeout(this.animationStart, 5000, 0);
            return;
        }
        this.active = index;
        this.$lis[index].classList.add('active');
        TweenLite.to(this.$circles[index], .4, {
            opacity: 1
        });
        TweenLite.to(this.$circles[index], this.duration, {
            strokeDashoffset: 0,
            onCompleteScope: this,
            onComplete: () => {
                this.animationStart(index >= this.$circles.length - 1 ? 0 : index + 1);
                this.$lis[index].classList.remove('active');
                TweenLite.to(this.$circles[index], .2, {
                    opacity: 0,
                    onCompleteScope: this,
                    onComplete: () => {
                        TweenLite.to(this.$circles[index], 0, {
                            strokeDashoffset: this.circumference,
                            lazy: true
                        });
                    }
                });
            }
        });
    }
    animationSelect(index) {
        this.$lis[index].classList.add('active');
        this.active = index;
        if (this.scrollPause) {
            clearTimeout(this.scrollPause);
        }
        this.animationStopOthers(index);
        TweenLite.to(this.$circles[index], this.quickDuration, {
            strokeDashoffset: 0,
            opacity: 1,
            onCompleteScope: this,
            onComplete: () => {
                this.animationStopOthers(index);
            }
        });
    }
    animationRestart(index) {
        this.animationStopOthers(index);
        TweenLite.to(this.$circles[index], .5, {
            strokeDashoffset: this.circumference * -1,
            lazy: true,
            onCompleteScope: this,
            onComplete: () => {
                TweenLite.to(this.$circles[index], 0, {
                    strokeDashoffset: this.circumference,
                    opacity: 0,
                    lazy: true,
                    onCompleteScope: this,
                    onComplete: () => {
                        this.animationStart(index);
                    }
                });
            }
        });
    }
    animationStopOthers(index) {
        const circles = [];
        this.$circles.forEach((circle, i) => {
            if (i != index) {
                circles.push(circle);
                this.$lis[i].classList.remove('active');
            }
        });
        TweenLite.to(circles, .2, {
            opacity: 0,
            lazy: true,
            onCompleteScope: this,
            onComplete: () => {
                TweenLite.to(circles, 0, {
                    strokeDashoffset: this.circumference,
                    opacity: 0,
                    lazy: true
                });
            }
        });
    }
    circle(percent = 0) {
        return (h("svg", { class: "progress-ring", height: "64", width: "64" },
            h("circle", { class: "progress-ring__circle", stroke: "#6C89F7", "stroke-width": "2", fill: "transparent", r: this.r, cx: "32", cy: "32", style: {
                    strokeDasharray: `${this.circumference} ${this.circumference}`,
                    strokeDashoffset: this.circumference - percent / 100 * this.circumference
                } })));
    }
    render() {
        return ([
            h("div", { class: "app-screenshot" }, this.screenshots.map((screenshot, i) => h("img", { class: i === this.active ? 'active' : 'inactive', src: screenshot }))),
            h("nav", null,
                h("ul", null,
                    h("li", { onMouseEnter: () => this.animationSelect(0), onMouseLeave: () => this.animationRestart(0) },
                        this.circle(),
                        h("slot", { name: "1" })),
                    h("li", { onMouseEnter: () => this.animationSelect(1), onMouseLeave: () => this.animationRestart(1) },
                        this.circle(),
                        h("slot", { name: "2" })),
                    h("li", { onMouseEnter: () => this.animationSelect(2), onMouseLeave: () => this.animationRestart(2) },
                        this.circle(),
                        h("slot", { name: "3" }))))
        ]);
    }
    static get is() { return "ionic-appflow-activator"; }
    static get properties() { return {
        "$circles": {
            "state": true
        },
        "$lis": {
            "state": true
        },
        "active": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "screenshots": {
            "state": true
        }
    }; }
    static get style() { return "/**style-placeholder:ionic-appflow-activator:**/"; }
}
