
! function t(e, i, n) {
    function s(r, h) {
        if (!i[r]) {
            if (!e[r]) {
                var o = "function" == typeof require && require;
                if (!h && o) return o(r, !0);
                if (a) return a(r, !0);
                var l = new Error("Cannot find module '" + r + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = i[r] = {
                exports: {}
            };
            e[r][0].call(c.exports, function(t) {
                var i = e[r][1][t];
                return s(i || t)
            }, c, c.exports, t, e, i, n)
        }
        return i[r].exports
    }
    for (var a = "function" == typeof require && require, r = 0; r < n.length; r++) s(n[r]);
    return s
}({
    1: [function(t, e, i) {
        "use strict";
        e.exports = function(t, e) {
            if (void 0 === e && (e = t, t = 0), "number" != typeof t || "number" != typeof e) throw new TypeError("Expected all arguments to be numbers");
            return Math.floor(Math.random() * (e - t + 1) + t)
        }
    }, {}],
    2: [function(t, e, i) {
        e.exports = t("./lib/Winwheel")
    }, {
        "./lib/Winwheel": 3
    }],
    3: [function(require, module, exports) {
        function Winwheel(t, e) {
            for (var i in defaultOptions = {
                    canvasId: "canvas",
                    centerX: null,
                    centerY: null,
                    outerRadius: null,
                    innerRadius: 0,
                    numSegments: 1,
                    drawMode: "code",
                    rotationAngle: 0,
                    textFontFamily: "Arial",
                    textFontSize: 10,
                    textFontWeight: "bold",
                    textOrientation: "horizontal",
                    textAlignment: "center",
                    textDirection: "normal",
                    textMargin: null,
                    textFillStyle: "black",
                    textStrokeStyle: null,
                    textLineWidth: 1,
                    fillStyle: "silver",
                    strokeStyle: "#ad541f",
                    lineWidth: 1,
                    clearTheCanvas: !0,
                    imageOverlay: !1,
                    drawText: !0,
                    pointerAngle: 0,
                    wheelImage: null,
                    imageDirection: "N"
                }, defaultOptions) null != t && void 0 !== t[i] ? this[i] = t[i] : this[i] = defaultOptions[i];
            if (null != t)
                for (var i in t) void 0 === this[i] && (this[i] = t[i]);
            for (this.canvasId ? (this.canvas = document.getElementById(this.canvasId), this.canvas ? (null == this.centerX && (this.centerX = this.canvas.width / 2), null == this.centerY && (this.centerY = this.canvas.height / 2), null == this.outerRadius && (this.canvas.width < this.canvas.height ? this.outerRadius = this.canvas.width / 2 - this.lineWidth : this.outerRadius = this.canvas.height / 2 - this.lineWidth), this.ctx = this.canvas.getContext("2d")) : (this.canvas = null, this.ctx = null)) : (this.cavnas = null, this.ctx = null), this.segments = new Array(null), x = 1; x <= this.numSegments; x++) null != t && t.segments && void 0 !== t.segments[x - 1] ? this.segments[x] = new Segment(t.segments[x - 1]) : this.segments[x] = new Segment;
            if (this.updateSegmentSizes(), null === this.textMargin && (this.textMargin = this.textFontSize / 1.7), null != t && t.animation && void 0 !== t.animation ? this.animation = new Animation(t.animation) : this.animation = new Animation, null != t && t.pins && void 0 !== t.pins && (this.pins = new Pin(t.pins)), "image" == this.drawMode || "segmentImage" == this.drawMode ? (void 0 === t.fillStyle && (this.fillStyle = null), void 0 === t.strokeStyle && (this.strokeStyle = "red"), void 0 === t.drawText && (this.drawText = !1), void 0 === t.lineWidth && (this.lineWidth = 1), void 0 === e && (e = !1)) : void 0 === e && (e = !0), null != t && t.pointerGuide && void 0 !== t.pointerGuide ? this.pointerGuide = new PointerGuide(t.pointerGuide) : this.pointerGuide = new PointerGuide, 1 == e) this.draw(this.clearTheCanvas);
            else if ("segmentImage" == this.drawMode)
                for (winwheelToDrawDuringAnimation = this, winhweelAlreadyDrawn = !1, y = 1; y <= this.numSegments; y++) null !== this.segments[y].image && (this.segments[y].imgData = new Image, this.segments[y].imgData.onload = winwheelLoadedImage, this.segments[y].imgData.src = this.segments[y].image)
        }

        function Pin(t) {
            for (var e in defaultOptions = {
                    visible: !0,
                    number: 36,
                    outerRadius: 3,
                    fillStyle: "grey",
                    strokeStyle: "black",
                    lineWidth: 1,
                    margin: 3
                }, defaultOptions) null != t && void 0 !== t[e] ? this[e] = t[e] : this[e] = defaultOptions[e];
            if (null != t)
                for (var e in t) void 0 === this[e] && (this[e] = t[e])
        }

        function Animation(t) {
            for (var e in defaultOptions = {
                    type: "spinOngoing",
                    direction: "clockwise",
                    propertyName: null,
                    propertyValue: null,
                    duration: 10,
                    yoyo: !1,
                    repeat: 0,
                    easing: "power3.easeOut",
                    stopAngle: null,
                    spins: null,
                    clearTheCanvas: null,
                    callbackFinished: null,
                    callbackBefore: null,
                    callbackAfter: null
                }, defaultOptions) null != t && void 0 !== t[e] ? this[e] = t[e] : this[e] = defaultOptions[e];
            if (null != t)
                for (var e in t) void 0 === this[e] && (this[e] = t[e])
        }

        function Segment(t) {
            for (var e in defaultOptions = {
                    size: null,
                    text: "",
                    fillStyle: null,
                    strokeStyle: null,
                    lineWidth: null,
                    textFontFamily: null,
                    textFontSize: null,
                    textFontWeight: null,
                    textOrientation: null,
                    textAlignment: null,
                    textDirection: null,
                    textMargin: null,
                    textFillStyle: null,
                    textStrokeStyle: null,
                    textLineWidth: null,
                    image: null,
                    imageDirection: null,
                    imgData: null
                }, defaultOptions) null != t && void 0 !== t[e] ? this[e] = t[e] : this[e] = defaultOptions[e];
            if (null != t)
                for (var e in t) void 0 === this[e] && (this[e] = t[e]);
            this.startAngle = 0, this.endAngle = 0
        }

        function PointerGuide(t) {
            for (var e in defaultOptions = {
                    display: !1,
                    strokeStyle: "red",
                    lineWidth: 3
                }, defaultOptions) null != t && void 0 !== t[e] ? this[e] = t[e] : this[e] = defaultOptions[e]
        }

        function winwheelPercentToDegrees(t) {
            var e = 0;
            t > 0 && t <= 100 && (e = 360 * (t / 100));
            return e
        }

        function winwheelAnimationLoop() {
            winwheelToDrawDuringAnimation && (0 != winwheelToDrawDuringAnimation.animation.clearTheCanvas && winwheelToDrawDuringAnimation.ctx.clearRect(0, 0, winwheelToDrawDuringAnimation.canvas.width, winwheelToDrawDuringAnimation.canvas.height), null != winwheelToDrawDuringAnimation.animation.callbackBefore && eval(winwheelToDrawDuringAnimation.animation.callbackBefore), winwheelToDrawDuringAnimation.draw(!1), null != winwheelToDrawDuringAnimation.animation.callbackAfter && eval(winwheelToDrawDuringAnimation.animation.callbackAfter))
        }
        module.exports = Winwheel, Winwheel.prototype.updateSegmentSizes = function() {
            if (this.segments) {
                var t = 0,
                    e = 0;
                for (x = 1; x <= this.numSegments; x++) null !== this.segments[x].size && (t += this.segments[x].size, e++);
                var i = 360 - t,
                    n = 0;
                i > 0 && (n = i / (this.numSegments - e));
                var s = 0;
                for (x = 1; x <= this.numSegments; x++) this.segments[x].startAngle = s, this.segments[x].size ? s += this.segments[x].size : s += n, this.segments[x].endAngle = s
            }
        }, Winwheel.prototype.clearCanvas = function() {
            this.ctx && this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }, Winwheel.prototype.draw = function(t) {
            this.ctx && (void 0 !== t ? 1 == t && this.clearCanvas() : this.clearCanvas(), "image" == this.drawMode ? (this.drawWheelImage(), 1 == this.drawText && this.drawSegmentText(), 1 == this.imageOverlay && this.drawSegments()) : "segmentImage" == this.drawMode ? (this.drawSegmentImages(), 1 == this.drawText && this.drawSegmentText(), 1 == this.imageOverlay && this.drawSegments()) : (this.drawSegments(), 1 == this.drawText && this.drawSegmentText()), void 0 !== this.pins && 1 == this.pins.visible && this.drawPins(), 1 == this.pointerGuide.display && this.drawPointerGuide())
        }, Winwheel.prototype.drawPins = function() {
            if (this.pins && this.pins.number) {
                var t = 360 / this.pins.number;
                for (i = 1; i <= this.pins.number; i++) this.ctx.save(), this.ctx.strokeStyle = this.pins.strokeStyle, this.ctx.lineWidth = this.pins.lineWidth, this.ctx.fillStyle = this.pins.fillStyle, this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(i * t + this.rotationAngle)), this.ctx.translate(-this.centerX, -this.centerY), this.ctx.beginPath(), this.ctx.arc(this.centerX, this.centerY - this.outerRadius + this.pins.outerRadius + this.pins.margin, this.pins.outerRadius, 0, 2 * Math.PI), this.pins.fillStyle && this.ctx.fill(), this.pins.strokeStyle && this.ctx.stroke(), this.ctx.restore()
            }
        }, Winwheel.prototype.drawPointerGuide = function() {
            this.ctx && (this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(this.pointerAngle)), this.ctx.translate(-this.centerX, -this.centerY), this.ctx.strokeStyle = this.pointerGuide.strokeStyle, this.ctx.lineWidth = this.pointerGuide.lineWidth, this.ctx.beginPath(), this.ctx.moveTo(this.centerX, this.centerY), this.ctx.lineTo(this.centerX, -this.outerRadius / 4), this.ctx.stroke(), this.ctx.restore())
        }, Winwheel.prototype.drawWheelImage = function() {
            if (null != this.wheelImage) {
                var t = this.centerX - this.wheelImage.height / 2,
                    e = this.centerY - this.wheelImage.width / 2;
                this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(this.rotationAngle)), this.ctx.translate(-this.centerX, -this.centerY), this.ctx.drawImage(this.wheelImage, t, e), this.ctx.restore()
            }
        }, Winwheel.prototype.drawSegmentImages = function() {
            if (this.ctx && this.segments)
                for (x = 1; x <= this.numSegments; x++)
                    if (seg = this.segments[x], seg.imgData.height) {
                        var t = 0,
                            e = 0,
                            i = 0,
                            n = "";
                        "S" == (n = null !== seg.imageDirection ? seg.imageDirection : this.imageDirection) ? (t = this.centerX - seg.imgData.width / 2, e = this.centerY, i = seg.startAngle + 180 + (seg.endAngle - seg.startAngle) / 2) : "E" == n ? (t = this.centerX, e = this.centerY - seg.imgData.height / 2, i = seg.startAngle + 270 + (seg.endAngle - seg.startAngle) / 2) : "W" == n ? (t = this.centerX - seg.imgData.width, e = this.centerY - seg.imgData.height / 2, i = seg.startAngle + 90 + (seg.endAngle - seg.startAngle) / 2) : (t = this.centerX - seg.imgData.width / 2, e = this.centerY - seg.imgData.height, i = seg.startAngle + (seg.endAngle - seg.startAngle) / 2), this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(this.rotationAngle + i)), this.ctx.translate(-this.centerX, -this.centerY), this.ctx.drawImage(seg.imgData, t, e), this.ctx.restore()
                    } else console.log("Segment " + x + " imgData is not loaded")
        }, Winwheel.prototype.drawSegments = function() {
            if (this.ctx && this.segments)
                for (x = 1; x <= this.numSegments; x++) {
                    var t, e, i;
                    seg = this.segments[x], t = null !== seg.fillStyle ? seg.fillStyle : this.fillStyle, this.ctx.fillStyle = t, e = null !== seg.lineWidth ? seg.lineWidth : this.lineWidth, this.ctx.lineWidth = e, i = null !== seg.strokeStyle ? seg.strokeStyle : this.strokeStyle, this.ctx.strokeStyle = i, (i || t) && (this.ctx.beginPath(), this.innerRadius || this.ctx.moveTo(this.centerX, this.centerY), this.ctx.arc(this.centerX, this.centerY, this.outerRadius, this.degToRad(seg.startAngle + this.rotationAngle - 90), this.degToRad(seg.endAngle + this.rotationAngle - 90), !1), this.innerRadius ? this.ctx.arc(this.centerX, this.centerY, this.innerRadius, this.degToRad(seg.endAngle + this.rotationAngle - 90), this.degToRad(seg.startAngle + this.rotationAngle - 90), !0) : this.ctx.lineTo(this.centerX, this.centerY), t && this.ctx.fill(), i && this.ctx.stroke())
                }
        }, Winwheel.prototype.drawSegmentText = function() {
            var t, e, n, s, a, r, h, o, l, c, g;
            if (this.ctx)
                for (x = 1; x <= this.numSegments; x++) {
                    if (this.ctx.save(), seg = this.segments[x], seg.text) {
                        t = null !== seg.textFontFamily ? seg.textFontFamily : this.textFontFamily, e = null !== seg.textFontSize ? seg.textFontSize : this.textFontSize, n = null !== seg.textFontWeight ? seg.textFontWeight : this.textFontWeight, s = null !== seg.textOrientation ? seg.textOrientation : this.textOrientation, a = null !== seg.textAlignment ? seg.textAlignment : this.textAlignment, r = null !== seg.textDirection ? seg.textDirection : this.textDirection, h = null !== seg.textMargin ? seg.textMargin : this.textMargin, o = null !== seg.textFillStyle ? seg.textFillStyle : this.textFillStyle, l = null !== seg.textStrokeStyle ? seg.textStrokeStyle : this.textStrokeStyle, c = null !== seg.textLineWidth ? seg.textLineWidth : this.textLineWidth, g = "", null != n && (g += n + " "), null != e && (g += e + "px "), null != t && (g += t), this.ctx.font = g, this.ctx.fillStyle = o, this.ctx.strokeStyle = l, this.ctx.lineWidth = c;
                        var u = seg.text.split("\n"),
                            m = 0 - e * (u.length / 2) + e / 2;
                        for ("curved" != s || "inner" != a && "outer" != a || (m = 0), i = 0; i < u.length; i++) {
                            if ("reversed" == r) {
                                if ("horizontal" == s) {
                                    this.ctx.textAlign = "inner" == a ? "right" : "outer" == a ? "left" : "center", this.ctx.textBaseline = "middle";
                                    var d = this.degToRad(seg.endAngle - (seg.endAngle - seg.startAngle) / 2 + this.rotationAngle - 90 - 180);
                                    this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(d), this.ctx.translate(-this.centerX, -this.centerY), "inner" == a ? (o && this.ctx.fillText(u[i], this.centerX - this.innerRadius - h, this.centerY + m), l && this.ctx.strokeText(u[i], this.centerX - this.innerRadius - h, this.centerY + m)) : "outer" == a ? (o && this.ctx.fillText(u[i], this.centerX - this.outerRadius + h, this.centerY + m), l && this.ctx.strokeText(u[i], this.centerX - this.outerRadius + h, this.centerY + m)) : (o && this.ctx.fillText(u[i], this.centerX - this.innerRadius - (this.outerRadius - this.innerRadius) / 2 - h, this.centerY + m), l && this.ctx.strokeText(u[i], this.centerX - this.innerRadius - (this.outerRadius - this.innerRadius) / 2 - h, this.centerY + m)), this.ctx.restore()
                                } else if ("vertical" == s) {
                                    this.ctx.textAlign = "center", this.ctx.textBaseline = "inner" == a ? "top" : "outer" == a ? "bottom" : "middle";
                                    d = seg.endAngle - (seg.endAngle - seg.startAngle) / 2 - 180;
                                    if (d += this.rotationAngle, this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(d)), this.ctx.translate(-this.centerX, -this.centerY), "outer" == a) var p = this.centerY + this.outerRadius - h;
                                    else if ("inner" == a) p = this.centerY + this.innerRadius + h;
                                    var w = e - e / 9;
                                    if ("outer" == a)
                                        for (var f = u[i].length - 1; f >= 0; f--) character = u[i].charAt(f), o && this.ctx.fillText(character, this.centerX + m, p), l && this.ctx.strokeText(character, this.centerX + m, p), p -= w;
                                    else if ("inner" == a)
                                        for (f = 0; f < u[i].length; f++) character = u[i].charAt(f), o && this.ctx.fillText(character, this.centerX + m, p), l && this.ctx.strokeText(character, this.centerX + m, p), p += w;
                                    else if ("center" == a) {
                                        var A = 0;
                                        u[i].length > 1 && (A = w * (u[i].length - 1) / 2);
                                        for (p = this.centerY + this.innerRadius + (this.outerRadius - this.innerRadius) / 2 + A + h, f = u[i].length - 1; f >= 0; f--) character = u[i].charAt(f), o && this.ctx.fillText(character, this.centerX + m, p), l && this.ctx.strokeText(character, this.centerX + m, p), p -= w
                                    }
                                    this.ctx.restore()
                                } else if ("curved" == s) {
                                    var y = 0;
                                    "inner" == a ? (y = this.innerRadius + h, this.ctx.textBaseline = "top") : "outer" == a ? (y = this.outerRadius - h, this.ctx.textBaseline = "bottom", y -= e * (u.length - 1)) : "center" == a && (y = this.innerRadius + h + (this.outerRadius - this.innerRadius) / 2, this.ctx.textBaseline = "middle");
                                    var v = 0,
                                        S = 0;
                                    for (u[i].length > 1 ? (this.ctx.textAlign = "left", v = e / 10 * 4, radiusPercent = 100 / y, v *= radiusPercent, totalArc = v * u[i].length, S = seg.startAngle + ((seg.endAngle - seg.startAngle) / 2 - totalArc / 2)) : (S = seg.startAngle + (seg.endAngle - seg.startAngle) / 2, this.ctx.textAlign = "center"), S += this.rotationAngle, S -= 180, f = u[i].length; f >= 0; f--) this.ctx.save(), character = u[i].charAt(f), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(S)), this.ctx.translate(-this.centerX, -this.centerY), l && this.ctx.strokeText(character, this.centerX, this.centerY + y + m), o && this.ctx.fillText(character, this.centerX, this.centerY + y + m), S += v, this.ctx.restore()
                                }
                            } else if ("horizontal" == s) {
                                this.ctx.textAlign = "inner" == a ? "left" : "outer" == a ? "right" : "center", this.ctx.textBaseline = "middle";
                                d = this.degToRad(seg.endAngle - (seg.endAngle - seg.startAngle) / 2 + this.rotationAngle - 90);
                                this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(d), this.ctx.translate(-this.centerX, -this.centerY), "inner" == a ? (o && this.ctx.fillText(u[i], this.centerX + this.innerRadius + h, this.centerY + m), l && this.ctx.strokeText(u[i], this.centerX + this.innerRadius + h, this.centerY + m)) : "outer" == a ? (o && this.ctx.fillText(u[i], this.centerX + this.outerRadius - h, this.centerY + m), l && this.ctx.strokeText(u[i], this.centerX + this.outerRadius - h, this.centerY + m)) : (o && this.ctx.fillText(u[i], this.centerX + this.innerRadius + (this.outerRadius - this.innerRadius) / 2 + h, this.centerY + m), l && this.ctx.strokeText(u[i], this.centerX + this.innerRadius + (this.outerRadius - this.innerRadius) / 2 + h, this.centerY + m)), this.ctx.restore()
                            } else if ("vertical" == s) {
                                this.ctx.textAlign = "center", this.ctx.textBaseline = "inner" == a ? "bottom" : "outer" == a ? "top" : "middle";
                                d = seg.endAngle - (seg.endAngle - seg.startAngle) / 2;
                                if (d += this.rotationAngle, this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(d)), this.ctx.translate(-this.centerX, -this.centerY), "outer" == a) p = this.centerY - this.outerRadius + h;
                                else if ("inner" == a) p = this.centerY - this.innerRadius - h;
                                w = e - e / 9;
                                if ("outer" == a)
                                    for (f = 0; f < u[i].length; f++) character = u[i].charAt(f), o && this.ctx.fillText(character, this.centerX + m, p), l && this.ctx.strokeText(character, this.centerX + m, p), p += w;
                                else if ("inner" == a)
                                    for (f = u[i].length - 1; f >= 0; f--) character = u[i].charAt(f), o && this.ctx.fillText(character, this.centerX + m, p), l && this.ctx.strokeText(character, this.centerX + m, p), p -= w;
                                else if ("center" == a) {
                                    A = 0;
                                    u[i].length > 1 && (A = w * (u[i].length - 1) / 2);
                                    for (p = this.centerY - this.innerRadius - (this.outerRadius - this.innerRadius) / 2 - A - h, f = 0; f < u[i].length; f++) character = u[i].charAt(f), o && this.ctx.fillText(character, this.centerX + m, p), l && this.ctx.strokeText(character, this.centerX + m, p), p += w
                                }
                                this.ctx.restore()
                            } else if ("curved" == s) {
                                y = 0;
                                "inner" == a ? (y = this.innerRadius + h, this.ctx.textBaseline = "bottom", y += e * (u.length - 1)) : "outer" == a ? (y = this.outerRadius - h, this.ctx.textBaseline = "top") : "center" == a && (y = this.innerRadius + h + (this.outerRadius - this.innerRadius) / 2, this.ctx.textBaseline = "middle");
                                v = 0, S = 0;
                                for (u[i].length > 1 ? (this.ctx.textAlign = "left", v = e / 10 * 4, radiusPercent = 100 / y, v *= radiusPercent, totalArc = v * u[i].length, S = seg.startAngle + ((seg.endAngle - seg.startAngle) / 2 - totalArc / 2)) : (S = seg.startAngle + (seg.endAngle - seg.startAngle) / 2, this.ctx.textAlign = "center"), S += this.rotationAngle, f = 0; f < u[i].length; f++) this.ctx.save(), character = u[i].charAt(f), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(S)), this.ctx.translate(-this.centerX, -this.centerY), l && this.ctx.strokeText(character, this.centerX, this.centerY - y + m), o && this.ctx.fillText(character, this.centerX, this.centerY - y + m), S += v, this.ctx.restore()
                            }
                            m += e
                        }
                    }
                    this.ctx.restore()
                }
        }, Winwheel.prototype.degToRad = function(t) {
            return .017453292519943295 * t
        }, Winwheel.prototype.setCenter = function(t, e) {
            this.centerX = t, this.centerY = e
        }, Winwheel.prototype.addSegment = function(t, e) {
            var i;
            if (newSegment = new Segment(t), this.numSegments++, void 0 !== e) {
                for (var n = this.numSegments; n > e; n--) this.segments[n] = this.segments[n - 1];
                this.segments[e] = newSegment, i = e
            } else this.segments[this.numSegments] = newSegment, i = this.numSegments;
            return this.updateSegmentSizes(), this.segments[i]
        }, Winwheel.prototype.setCanvasId = function(t) {
            t ? (this.canvasId = t, this.canvas = document.getElementById(this.canvasId), this.canvas && (this.ctx = this.canvas.getContext("2d"))) : (this.canvasId = null, this.ctx = null, this.canvas = null)
        }, Winwheel.prototype.deleteSegment = function(t) {
            if (this.numSegments > 1) {
                if (void 0 !== t)
                    for (var e = t; e < this.numSegments; e++) this.segments[e] = this.segments[e + 1];
                this.segments[this.numSegments] = void 0, this.numSegments--, this.updateSegmentSizes()
            }
        }, Winwheel.prototype.windowToCanvas = function(t, e) {
            var i = this.canvas.getBoundingClientRect();
            return {
                x: Math.floor(t - i.left * (this.canvas.width / i.width)),
                y: Math.floor(e - i.top * (this.canvas.height / i.height))
            }
        }, Winwheel.prototype.getSegmentAt = function(t, e) {
            var i = null,
                n = this.getSegmentNumberAt(t, e);
            return null !== n && (i = this.segments[n]), i
        }, Winwheel.prototype.getSegmentNumberAt = function(t, e) {
            var i, n, s, a, r, h = this.windowToCanvas(t, e);
            h.x > this.centerX ? (s = h.x - this.centerX, n = "R") : (s = this.centerX - h.x, n = "L"), h.y > this.centerY ? (a = h.y - this.centerY, i = "B") : (a = this.centerY - h.y, i = "T");
            var o = a / s,
                l = 180 * Math.atan(o) / Math.PI,
                c = 0;
            (r = Math.sqrt(a * a + s * s), "T" == i && "R" == n ? c = Math.round(90 - l) : "B" == i && "R" == n ? c = Math.round(l + 90) : "B" == i && "L" == n ? c = Math.round(90 - l + 180) : "T" == i && "L" == n && (c = Math.round(l + 270)), 0 != this.rotationAngle) && ((c -= this.getRotationPosition()) < 0 && (c = 360 - Math.abs(c)));
            var g = null;
            for (t = 1; t <= this.numSegments; t++)
                if (c >= this.segments[t].startAngle && c <= this.segments[t].endAngle && r >= this.innerRadius && r <= this.outerRadius) {
                    g = t;
                    break
                }
            return g
        }, Winwheel.prototype.getIndicatedSegment = function() {
            var t = this.getIndicatedSegmentNumber();
            return this.segments[t]
        }, Winwheel.prototype.getIndicatedSegmentNumber = function() {
            var t = 0,
                e = this.getRotationPosition(),
                i = Math.floor(this.pointerAngle - e);
            for (i < 0 && (i = 360 - Math.abs(i)), x = 1; x < this.segments.length; x++)
                if (i >= this.segments[x].startAngle && i <= this.segments[x].endAngle) {
                    t = x;
                    break
                }
            return t
        }, Winwheel.prototype.getRotationPosition = function() {
            var t = this.rotationAngle;
            if (t >= 0) {
                if (t > 360) t -= 360 * Math.floor(t / 360)
            } else {
                if (t < -360) t -= 360 * Math.ceil(t / 360);
                t = 360 + t
            }
            return t
        }, Winwheel.prototype.startAnimation = function() {
            if (this.animation) {
                this.computeAnimation(), winwheelToDrawDuringAnimation = this;
                var t = new Array(null);
                t[this.animation.propertyName] = this.animation.propertyValue, t.yoyo = this.animation.yoyo, t.repeat = this.animation.repeat, t.ease = this.animation.easing, t.onUpdate = winwheelAnimationLoop, t.onComplete = winwheelStopAnimation, this.tween = TweenMax.to(this, this.animation.duration, t)
            }
        }, Winwheel.prototype.stopAnimation = function(t) {
            winwheelToDrawDuringAnimation && (winwheelToDrawDuringAnimation.tween.kill(), winwheelStopAnimation(t)), winwheelToDrawDuringAnimation = this
        }, Winwheel.prototype.pauseAnimation = function() {
            this.tween && this.tween.pause()
        }, Winwheel.prototype.resumeAnimation = function() {
            this.tween && this.tween.play()
        }, Winwheel.prototype.computeAnimation = function() {
            this.animation && ("spinOngoing" == this.animation.type ? (this.animation.propertyName = "rotationAngle", null == this.animation.spins && (this.animation.spins = 5), null == this.animation.repeat && (this.animation.repeat = -1), null == this.animation.easing && (this.animation.easing = "Linear.easeNone"), null == this.animation.yoyo && (this.animation.yoyo = !1), this.animation.propertyValue = 360 * this.animation.spins, "anti-clockwise" == this.animation.direction && (this.animation.propertyValue = 0 - this.animation.propertyValue)) : "spinToStop" == this.animation.type ? (this.animation.propertyName = "rotationAngle", null == this.animation.spins && (this.animation.spins = 5), null == this.animation.repeat && (this.animation.repeat = 0), null == this.animation.easing && (this.animation.easing = "Power4.easeOut"), null == this.animation.stopAngle ? this.animation._stopAngle = parseInt(document.querySelector("#stop_angle").value) : this.animation._stopAngle = 360 - this.animation.stopAngle + this.pointerAngle, null == this.animation.yoyo && (this.animation.yoyo = !1), this.animation.propertyValue = 360 * this.animation.spins, "anti-clockwise" == this.animation.direction ? (this.animation.propertyValue = 0 - this.animation.propertyValue, this.animation.propertyValue -= 360 - this.animation._stopAngle) : this.animation.propertyValue += this.animation._stopAngle) : "spinAndBack" == this.animation.type ? (this.animation.propertyName = "rotationAngle", null == this.animation.spins && (this.animation.spins = 5), null == this.animation.repeat && (this.animation.repeat = 1), null == this.animation.easing && (this.animation.easing = "Power2.easeInOut"), null == this.animation.yoyo && (this.animation.yoyo = !0), null == this.animation.stopAngle ? this.animation._stopAngle = parseInt(document.querySelector("#stop_angle").value) : this.animation._stopAngle = 360 - this.animation.stopAngle, this.animation.propertyValue = 360 * this.animation.spins, "anti-clockwise" == this.animation.direction ? (this.animation.propertyValue = 0 - this.animation.propertyValue, this.animation.propertyValue -= 360 - this.animation._stopAngle) : this.animation.propertyValue += this.animation._stopAngle) : this.animation.type)
        }, Winwheel.prototype.getRandomForSegment = function(t) {
            var e = 0;
            if (t)
                if (void 0 !== this.segments[t]) {
                    var i = this.segments[t].startAngle,
                        n = this.segments[t].endAngle - i - 2;
                    n > 0 ? e = i + 1 + Math.floor(Math.random() * n) : console.log("Segment size is too small to safely get random angle inside it")
                } else console.log("Segment " + t + " undefined");
            else console.log("Segment number not specified");
            return e
        }, Segment.prototype.changeImage = function(t, e) {
            this.image = t, this.imgData = null, e && (this.imageDirection = e), winhweelAlreadyDrawn = !1, this.imgData = new Image, this.imgData.onload = winwheelLoadedImage, this.imgData.src = this.image
        };
        var winwheelToDrawDuringAnimation = null;

        function winwheelStopAnimation(canCallback) {
            0 != canCallback && null != winwheelToDrawDuringAnimation.animation.callbackFinished && eval(winwheelToDrawDuringAnimation.animation.callbackFinished)
        }
        var winhweelAlreadyDrawn = !1;

        function winwheelLoadedImage() {
            if (0 == winhweelAlreadyDrawn) {
                var t = 0;
                for (i = 1; i <= winwheelToDrawDuringAnimation.numSegments; i++) null != winwheelToDrawDuringAnimation.segments[i].imgData && winwheelToDrawDuringAnimation.segments[i].imgData.height && t++;
                t == winwheelToDrawDuringAnimation.numSegments && (winhweelAlreadyDrawn = !0, winwheelToDrawDuringAnimation.draw())
            }
        }
    }, {}],
    4: [function(t, e, i) {
        const n = t("winwheel"),
            s = (t("random-int"), document.querySelector(".HeaderWheelName")),
            a = document.querySelector(".SpinButton"),
            r = document.querySelector(".WheelResult"),
            h = document.body;
        let o = null,
            l = null,
            c = s.textContent;
        const g = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
            u = ["#dc783d", "#dc783d", "#dc783d", "#dc783d", "#dc783d", "#dc783d", "#dc783d", "#dc783d", "#dc783d", "#dc783d"];
        window.lunchWheel = {
            segments: function(t) {
                if (!Array.isArray(t)) return l;
                l = t;
                try {
                    localStorage.setItem("lunchwheel:segments", JSON.stringify(t))
                } catch (t) {}
                return p = m(), l
            },
            name: function(t) {
                if ("string" != typeof t) return c;
                c = t;
                try {
                    localStorage.setItem("lunchwheel:name", c)
                } catch (t) {}
                return s.textContent = c, c
            }
        };
        try {
            l = JSON.parse(localStorage.getItem("lunchwheel:segments"))
        } catch (t) {}
        l || (l = g);
        try {
            const t = localStroage.getItem("lunchwheel:name");
            t && (c = t, lunchWheel.name(c))
        } catch (t) {}

        function m() {
            const t = l.map((t, e) => ({
                fillStyle: u[e],
                text: t,
                textFontSize: 20,
                textFillStyle: "#fff"
            }));
            return new n({
                outerRadius: 70,
                innerRadius: 30,
                textFontSize: 3,
                textOrientation: "vertical",
                textAlignment: "outer",
                numSegments: t.length,
                segments: t,
                animation: {
                    type: "spinAndBack",
                    duration: 10,
                    spins: 5,
                    callbackFinished: "alertPrize1()"
                }
            })
        }

        function d(t) {
            t.preventDefault(), p = m(), x(), h.classList.toggle("Spinning", !0), p.startAnimation()
        }

        function x() {
            // r.textContent = "", r.classList.toggle("Show", !1)
        }
        let p = m();
        window.alertPrize = function() {
            const t = p.getIndicatedSegment().text;
            "0" != $("#stop_angle").val() && h.classList.toggle("Spinning", !1), clearTimeout(o), decalreLastBet(), updateMatchDetail(), o = setTimeout(() => {
                x(), resetWinnerBetAndWinner()
            }, 3e3)
        }, $("#stop_angle").bind("change", d), $("#reset_angle").bind("change", function(t) {
            t.preventDefault(), p = function() {
                const t = l.map((t, e) => ({
                    fillStyle: u[e],
                    text: t,
                    textFontSize: 25,
                    textFillStyle: "#fff"
                }));
                return new n({
                    outerRadius: 150,
                    innerRadius: 55,
                    textFontSize: 7,
                    textOrientation: "horizontal",
                    textAlignment: "outer",
                    numSegments: t.length,
                    segments: t,
                    animation: {
                        type: "spinAndBack",
                        duration: 0,
                        spins: 0,
                        callbackFinished: "alertPrize()"
                    }
                })
            }(), x(), h.classList.toggle("Spinning", !0), p.startAnimation()
        }), 
        document.querySelector(".clock_old");
        ! function t() {
            const e = new Date;
            let i = e.getHours();
            e.getMinutes(), e.getSeconds();
            n = i > 12 ? i - 12 : i, n < 10 && (n = "0" + n), i = n, setTimeout(t, 500);
            var n
        }()
    }, {
        "random-int": 1,
        winwheel: 2
    }]
}, {}, [4]);