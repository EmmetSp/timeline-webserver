var TL = function(t) {
    var e = {};

    function i(a) {
        if (e[a]) return e[a].exports;
        var s = e[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(s.exports, s, s.exports, i), s.l = !0, s.exports
    }
    return i.m = t, i.c = e, i.d = function(t, e, a) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) i.d(a, s, function(e) {
                return t[e]
            }.bind(null, s));
        return a
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 2)
}([function(t, e, i) {
    /*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */
    t.exports = function() {
        "use strict";
        var t = Object.hasOwnProperty,
            e = Object.setPrototypeOf,
            i = Object.isFrozen,
            a = Object.getPrototypeOf,
            s = Object.getOwnPropertyDescriptor,
            n = Object.freeze,
            o = Object.seal,
            r = Object.create,
            l = "undefined" != typeof Reflect && Reflect,
            h = l.apply,
            d = l.construct;
        h || (h = function(t, e, i) {
            return t.apply(e, i)
        }), n || (n = function(t) {
            return t
        }), o || (o = function(t) {
            return t
        }), d || (d = function(t, e) {
            return new(Function.prototype.bind.apply(t, [null].concat(function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                    return i
                }
                return Array.from(t)
            }(e))))
        });
        var c, u = x(Array.prototype.forEach),
            m = x(Array.prototype.pop),
            p = x(Array.prototype.push),
            _ = x(String.prototype.toLowerCase),
            f = x(String.prototype.match),
            g = x(String.prototype.replace),
            v = x(String.prototype.indexOf),
            y = x(String.prototype.trim),
            w = x(RegExp.prototype.test),
            b = (c = TypeError, function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return d(c, e)
            });

        function x(t) {
            return function(e) {
                for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
                return h(t, e, a)
            }
        }

        function k(t, a) {
            e && e(t, null);
            for (var s = a.length; s--;) {
                var n = a[s];
                if ("string" == typeof n) {
                    var o = _(n);
                    o !== n && (i(a) || (a[s] = o), n = o)
                }
                t[n] = !0
            }
            return t
        }

        function T(e) {
            var i = r(null),
                a = void 0;
            for (a in e) h(t, e, [a]) && (i[a] = e[a]);
            return i
        }

        function M(t, e) {
            for (; null !== t;) {
                var i = s(t, e);
                if (i) {
                    if (i.get) return x(i.get);
                    if ("function" == typeof i.value) return x(i.value)
                }
                t = a(t)
            }
            return function(t) {
                return console.warn("fallback value for", t), null
            }
        }
        var L = n(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
            E = n(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
            D = n(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
            S = n(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
            N = n(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
            A = n(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
            C = n(["#text"]),
            I = n(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
            j = n(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
            O = n(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
            z = n(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
            R = o(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
            P = o(/<%[\s\S]*|[\s\S]*%>/gm),
            H = o(/^data-[\-\w.\u00B7-\uFFFF]/),
            q = o(/^aria-[\-\w]+$/),
            F = o(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
            $ = o(/^(?:\w+script|data):/i),
            B = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
            U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };

        function W(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return Array.from(t)
        }
        var G = function() {
                return "undefined" == typeof window ? null : window
            },
            Z = function(t, e) {
                if ("object" !== (void 0 === t ? "undefined" : U(t)) || "function" != typeof t.createPolicy) return null;
                var i = null;
                e.currentScript && e.currentScript.hasAttribute("data-tt-policy-suffix") && (i = e.currentScript.getAttribute("data-tt-policy-suffix"));
                var a = "dompurify" + (i ? "#" + i : "");
                try {
                    return t.createPolicy(a, {
                        createHTML: function(t) {
                            return t
                        }
                    })
                } catch (t) {
                    return console.warn("TrustedTypes policy " + a + " could not be created."), null
                }
            };
        return function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G(),
                i = function(e) {
                    return t(e)
                };
            if (i.version = "2.2.7", i.removed = [], !e || !e.document || 9 !== e.document.nodeType) return i.isSupported = !1, i;
            var a = e.document,
                s = e.document,
                o = e.DocumentFragment,
                r = e.HTMLTemplateElement,
                l = e.Node,
                h = e.Element,
                d = e.NodeFilter,
                c = e.NamedNodeMap,
                x = void 0 === c ? e.NamedNodeMap || e.MozNamedAttrMap : c,
                Y = e.Text,
                V = e.Comment,
                J = e.DOMParser,
                X = e.trustedTypes,
                K = h.prototype,
                Q = M(K, "cloneNode"),
                tt = M(K, "nextSibling"),
                et = M(K, "childNodes"),
                it = M(K, "parentNode");
            if ("function" == typeof r) {
                var at = s.createElement("template");
                at.content && at.content.ownerDocument && (s = at.content.ownerDocument)
            }
            var st = Z(X, a),
                nt = st && Rt ? st.createHTML("") : "",
                ot = s,
                rt = ot.implementation,
                lt = ot.createNodeIterator,
                ht = ot.getElementsByTagName,
                dt = ot.createDocumentFragment,
                ct = a.importNode,
                ut = {};
            try {
                ut = T(s).documentMode ? s.documentMode : {}
            } catch (t) {}
            var mt = {};
            i.isSupported = "function" == typeof it && rt && void 0 !== rt.createHTMLDocument && 9 !== ut;
            var pt = R,
                _t = P,
                ft = H,
                gt = q,
                vt = $,
                yt = B,
                wt = F,
                bt = null,
                xt = k({}, [].concat(W(L), W(E), W(D), W(N), W(C))),
                kt = null,
                Tt = k({}, [].concat(W(I), W(j), W(O), W(z))),
                Mt = null,
                Lt = null,
                Et = !0,
                Dt = !0,
                St = !1,
                Nt = !1,
                At = !1,
                Ct = !1,
                It = !1,
                jt = !1,
                Ot = !1,
                zt = !0,
                Rt = !1,
                Pt = !0,
                Ht = !0,
                qt = !1,
                Ft = {},
                $t = k({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                Bt = null,
                Ut = k({}, ["audio", "video", "img", "source", "image", "track"]),
                Wt = null,
                Gt = k({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
                Zt = null,
                Yt = s.createElement("form"),
                Vt = function(t) {
                    Zt && Zt === t || (t && "object" === (void 0 === t ? "undefined" : U(t)) || (t = {}), t = T(t), bt = "ALLOWED_TAGS" in t ? k({}, t.ALLOWED_TAGS) : xt, kt = "ALLOWED_ATTR" in t ? k({}, t.ALLOWED_ATTR) : Tt, Wt = "ADD_URI_SAFE_ATTR" in t ? k(T(Gt), t.ADD_URI_SAFE_ATTR) : Gt, Bt = "ADD_DATA_URI_TAGS" in t ? k(T(Ut), t.ADD_DATA_URI_TAGS) : Ut, Mt = "FORBID_TAGS" in t ? k({}, t.FORBID_TAGS) : {}, Lt = "FORBID_ATTR" in t ? k({}, t.FORBID_ATTR) : {}, Ft = "USE_PROFILES" in t && t.USE_PROFILES, Et = !1 !== t.ALLOW_ARIA_ATTR, Dt = !1 !== t.ALLOW_DATA_ATTR, St = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Nt = t.SAFE_FOR_TEMPLATES || !1, At = t.WHOLE_DOCUMENT || !1, jt = t.RETURN_DOM || !1, Ot = t.RETURN_DOM_FRAGMENT || !1, zt = !1 !== t.RETURN_DOM_IMPORT, Rt = t.RETURN_TRUSTED_TYPE || !1, It = t.FORCE_BODY || !1, Pt = !1 !== t.SANITIZE_DOM, Ht = !1 !== t.KEEP_CONTENT, qt = t.IN_PLACE || !1, wt = t.ALLOWED_URI_REGEXP || wt, Nt && (Dt = !1), Ot && (jt = !0), Ft && (bt = k({}, [].concat(W(C))), kt = [], !0 === Ft.html && (k(bt, L), k(kt, I)), !0 === Ft.svg && (k(bt, E), k(kt, j), k(kt, z)), !0 === Ft.svgFilters && (k(bt, D), k(kt, j), k(kt, z)), !0 === Ft.mathMl && (k(bt, N), k(kt, O), k(kt, z))), t.ADD_TAGS && (bt === xt && (bt = T(bt)), k(bt, t.ADD_TAGS)), t.ADD_ATTR && (kt === Tt && (kt = T(kt)), k(kt, t.ADD_ATTR)), t.ADD_URI_SAFE_ATTR && k(Wt, t.ADD_URI_SAFE_ATTR), Ht && (bt["#text"] = !0), At && k(bt, ["html", "head", "body"]), bt.table && (k(bt, ["tbody"]), delete Mt.tbody), n && n(t), Zt = t)
                },
                Jt = k({}, ["mi", "mo", "mn", "ms", "mtext"]),
                Xt = k({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                Kt = k({}, E);
            k(Kt, D), k(Kt, S);
            var Qt = k({}, N);
            k(Qt, A);
            var te = "http://www.w3.org/1998/Math/MathML",
                ee = "http://www.w3.org/2000/svg",
                ie = "http://www.w3.org/1999/xhtml",
                ae = function(t) {
                    var e = it(t);
                    e && e.tagName || (e = {
                        namespaceURI: ie,
                        tagName: "template"
                    });
                    var i = _(t.tagName),
                        a = _(e.tagName);
                    if (t.namespaceURI === ee) return e.namespaceURI === ie ? "svg" === i : e.namespaceURI === te ? "svg" === i && ("annotation-xml" === a || Jt[a]) : Boolean(Kt[i]);
                    if (t.namespaceURI === te) return e.namespaceURI === ie ? "math" === i : e.namespaceURI === ee ? "math" === i && Xt[a] : Boolean(Qt[i]);
                    if (t.namespaceURI === ie) {
                        if (e.namespaceURI === ee && !Xt[a]) return !1;
                        if (e.namespaceURI === te && !Jt[a]) return !1;
                        var s = k({}, ["title", "style", "font", "a", "script"]);
                        return !Qt[i] && (s[i] || !Kt[i])
                    }
                    return !1
                },
                se = function(t) {
                    p(i.removed, {
                        element: t
                    });
                    try {
                        t.parentNode.removeChild(t)
                    } catch (e) {
                        try {
                            t.outerHTML = nt
                        } catch (e) {
                            t.remove()
                        }
                    }
                },
                ne = function(t, e) {
                    try {
                        p(i.removed, {
                            attribute: e.getAttributeNode(t),
                            from: e
                        })
                    } catch (t) {
                        p(i.removed, {
                            attribute: null,
                            from: e
                        })
                    }
                    if (e.removeAttribute(t), "is" === t && !kt[t])
                        if (jt || Ot) try {
                            se(e)
                        } catch (t) {} else try {
                            e.setAttribute(t, "")
                        } catch (t) {}
                },
                oe = function(t) {
                    var e = void 0,
                        i = void 0;
                    if (It) t = "<remove></remove>" + t;
                    else {
                        var a = f(t, /^[\r\n\t ]+/);
                        i = a && a[0]
                    }
                    var n = st ? st.createHTML(t) : t;
                    try {
                        e = (new J).parseFromString(n, "text/html")
                    } catch (t) {}
                    if (!e || !e.documentElement) {
                        var o = (e = rt.createHTMLDocument("")).body;
                        o.parentNode.removeChild(o.parentNode.firstElementChild), o.outerHTML = n
                    }
                    return t && i && e.body.insertBefore(s.createTextNode(i), e.body.childNodes[0] || null), ht.call(e, At ? "html" : "body")[0]
                },
                re = function(t) {
                    return lt.call(t.ownerDocument || t, t, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT, (function() {
                        return d.FILTER_ACCEPT
                    }), !1)
                },
                le = function(t) {
                    return !(t instanceof Y || t instanceof V || "string" == typeof t.nodeName && "string" == typeof t.textContent && "function" == typeof t.removeChild && t.attributes instanceof x && "function" == typeof t.removeAttribute && "function" == typeof t.setAttribute && "string" == typeof t.namespaceURI && "function" == typeof t.insertBefore)
                },
                he = function(t) {
                    return "object" === (void 0 === l ? "undefined" : U(l)) ? t instanceof l : t && "object" === (void 0 === t ? "undefined" : U(t)) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
                },
                de = function(t, e, a) {
                    mt[t] && u(mt[t], (function(t) {
                        t.call(i, e, a, Zt)
                    }))
                },
                ce = function(t) {
                    var e = void 0;
                    if (de("beforeSanitizeElements", t, null), le(t)) return se(t), !0;
                    if (f(t.nodeName, /[\u0080-\uFFFF]/)) return se(t), !0;
                    var a = _(t.nodeName);
                    if (de("uponSanitizeElement", t, {
                            tagName: a,
                            allowedTags: bt
                        }), !he(t.firstElementChild) && (!he(t.content) || !he(t.content.firstElementChild)) && w(/<[/\w]/g, t.innerHTML) && w(/<[/\w]/g, t.textContent)) return se(t), !0;
                    if (!bt[a] || Mt[a]) {
                        if (Ht && !$t[a]) {
                            var s = it(t),
                                n = et(t);
                            if (n && s)
                                for (var o = n.length - 1; o >= 0; --o) s.insertBefore(Q(n[o], !0), tt(t))
                        }
                        return se(t), !0
                    }
                    return t instanceof h && !ae(t) ? (se(t), !0) : "noscript" !== a && "noembed" !== a || !w(/<\/no(script|embed)/i, t.innerHTML) ? (Nt && 3 === t.nodeType && (e = t.textContent, e = g(e, pt, " "), e = g(e, _t, " "), t.textContent !== e && (p(i.removed, {
                        element: t.cloneNode()
                    }), t.textContent = e)), de("afterSanitizeElements", t, null), !1) : (se(t), !0)
                },
                ue = function(t, e, i) {
                    if (Pt && ("id" === e || "name" === e) && (i in s || i in Yt)) return !1;
                    if (Dt && w(ft, e));
                    else if (Et && w(gt, e));
                    else {
                        if (!kt[e] || Lt[e]) return !1;
                        if (Wt[e]);
                        else if (w(wt, g(i, yt, "")));
                        else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== v(i, "data:") || !Bt[t])
                            if (St && !w(vt, g(i, yt, "")));
                            else if (i) return !1
                    }
                    return !0
                },
                me = function(t) {
                    var e = void 0,
                        a = void 0,
                        s = void 0,
                        n = void 0;
                    de("beforeSanitizeAttributes", t, null);
                    var o = t.attributes;
                    if (o) {
                        var r = {
                            attrName: "",
                            attrValue: "",
                            keepAttr: !0,
                            allowedAttributes: kt
                        };
                        for (n = o.length; n--;) {
                            var l = e = o[n],
                                h = l.name,
                                d = l.namespaceURI;
                            if (a = y(e.value), s = _(h), r.attrName = s, r.attrValue = a, r.keepAttr = !0, r.forceKeepAttr = void 0, de("uponSanitizeAttribute", t, r), a = r.attrValue, !r.forceKeepAttr && (ne(h, t), r.keepAttr))
                                if (w(/\/>/i, a)) ne(h, t);
                                else {
                                    Nt && (a = g(a, pt, " "), a = g(a, _t, " "));
                                    var c = t.nodeName.toLowerCase();
                                    if (ue(c, s, a)) try {
                                        d ? t.setAttributeNS(d, h, a) : t.setAttribute(h, a), m(i.removed)
                                    } catch (t) {}
                                }
                        }
                        de("afterSanitizeAttributes", t, null)
                    }
                },
                pe = function t(e) {
                    var i = void 0,
                        a = re(e);
                    for (de("beforeSanitizeShadowDOM", e, null); i = a.nextNode();) de("uponSanitizeShadowNode", i, null), ce(i) || (i.content instanceof o && t(i.content), me(i));
                    de("afterSanitizeShadowDOM", e, null)
                };
            return i.sanitize = function(t, s) {
                var n = void 0,
                    r = void 0,
                    h = void 0,
                    d = void 0,
                    c = void 0;
                if (t || (t = "\x3c!--\x3e"), "string" != typeof t && !he(t)) {
                    if ("function" != typeof t.toString) throw b("toString is not a function");
                    if ("string" != typeof(t = t.toString())) throw b("dirty is not a string, aborting")
                }
                if (!i.isSupported) {
                    if ("object" === U(e.toStaticHTML) || "function" == typeof e.toStaticHTML) {
                        if ("string" == typeof t) return e.toStaticHTML(t);
                        if (he(t)) return e.toStaticHTML(t.outerHTML)
                    }
                    return t
                }
                if (Ct || Vt(s), i.removed = [], "string" == typeof t && (qt = !1), qt);
                else if (t instanceof l) 1 === (r = (n = oe("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === r.nodeName || "HTML" === r.nodeName ? n = r : n.appendChild(r);
                else {
                    if (!jt && !Nt && !At && -1 === t.indexOf("<")) return st && Rt ? st.createHTML(t) : t;
                    if (!(n = oe(t))) return jt ? null : nt
                }
                n && It && se(n.firstChild);
                for (var u = re(qt ? t : n); h = u.nextNode();) 3 === h.nodeType && h === d || ce(h) || (h.content instanceof o && pe(h.content), me(h), d = h);
                if (d = null, qt) return t;
                if (jt) {
                    if (Ot)
                        for (c = dt.call(n.ownerDocument); n.firstChild;) c.appendChild(n.firstChild);
                    else c = n;
                    return zt && (c = ct.call(a, c, !0)), c
                }
                var m = At ? n.outerHTML : n.innerHTML;
                return Nt && (m = g(m, pt, " "), m = g(m, _t, " ")), st && Rt ? st.createHTML(m) : m
            }, i.setConfig = function(t) {
                Vt(t), Ct = !0
            }, i.clearConfig = function() {
                Zt = null, Ct = !1
            }, i.isValidAttribute = function(t, e, i) {
                Zt || Vt({});
                var a = _(t),
                    s = _(e);
                return ue(a, s, i)
            }, i.addHook = function(t, e) {
                "function" == typeof e && (mt[t] = mt[t] || [], p(mt[t], e))
            }, i.removeHook = function(t) {
                mt[t] && m(mt[t])
            }, i.removeHooks = function(t) {
                mt[t] && (mt[t] = [])
            }, i.removeAllHooks = function() {
                mt = {}
            }, i
        }()
    }()
}, function(t, e, i) {}, function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, "Timeline", (function() {
        return Xe
    })), i.d(e, "parseGoogleSpreadsheetURL", (function() {
        return te
    })), i.d(e, "lookupMediaType", (function() {
        return $e
    }));
    i(1);
    const a = navigator ? navigator.userAgent.toLowerCase() : "no-user-agent-specified",
        s = document ? document.documentElement : null,
        o = !!a && -1 !== a.indexOf("phantom"),
        r = window && "ActiveXObject" in window,
        l = (Boolean(r && a.match(/MSIE 9/i)), r && document && document.addEventListener, -1 !== a.indexOf("webkit")),
        h = (a.indexOf("android"), -1 !== a.search("android [23]")),
        d = !!window && void 0 !== window.orientation,
        c = !(!navigator || !window) && (navigator.msPointerEnabled && navigator.msMaxTouchPoints && !window.PointerEvent),
        u = navigator && window ? window.PointerEvent && navigator.pointerEnabled && navigator.maxTouchPoints : c,
        m = !!window && window.opera,
        p = (a.indexOf("gecko"), -1 !== a.indexOf("gecko") && !l && !m && !r),
        _ = (a.indexOf("chrome"), -1 !== a.indexOf("edge/")),
        f = !!s && (r && "transition" in s.style),
        g = !!window && ("WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !h),
        v = !!s && "MozPerspective" in s.style,
        y = !!s && "OTransition" in s.style;
    window && window.L_DISABLE_3D, d && window.opera;
    let w = !!window && ("devicePixelRatio" in window && window.devicePixelRatio > 1);
    if (!w && window && "matchMedia" in window) {
        let t = window.matchMedia("(min-resolution:144dpi)");
        w = t && t.matches
    }
    const b = window && !window.L_NO_TOUCH && !o && (u || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch);

    function x(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }

    function T(t, e, i) { // An element.
        var a = document.createElement(t);
        return a.className = e, i && i.appendChild(a), a
    }

    function M(t) {
        for (var e = {
                x: 0,
                y: 0
            }; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e.x += t.offsetLeft, e.y += t.offsetTop, t = t.offsetParent;
        return e
    }

    function L(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
            if (t[i] in e) return t[i];
        return !1
    }
    L(["transition", "webkitTransition", "OTransition", "MozTransition", "msTransition"]), L(["transformProperty", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);

    function E(t, e) {
        (function(t, e) {
            return t.className.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
        })(t, e) || (t.className += (t.className ? " " : "") + e)
    }

    function D(t, e) {
        t.className = t.className.replace(/(\S+)\s*/g, (function(t, i) {
            return i === e ? "" : t
        })).replace(/^\s+/, "")
    }
    class S extends Error {
        constructor(t, e) {
            super(), this.name = "TLError", this.message = t || "error", this.message_key = this.message, this.detail = e || ""
        }
    }
    const N = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };

    function A(t) {
        N[t.toLowerCase()] && (t = N[t.toLowerCase()]);
        t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, i, a) {
            return e + e + i + i + a + a
        }));
        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return e ? {
            r: parseInt(e[1], 16),
            g: parseInt(e[2], 16),
            b: parseInt(e[3], 16)
        } : null
    }

    function C(t, e) {
        var i;
        for (i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
    }

    function I(t) {
        for (var e = Array.prototype.slice.call(arguments, 1), i = 0, a = e.length; i < a; i++) C(t, e[i] || {});
        return t
    }
    const j = [];

    function O(t) {
        j.forEach(e => {
            try {
                e(t)
            } catch (t) {
                console && console.log && console.log("Error handling trace", t)
            }
        })
    }

    function z(t, e) {
        for (t = String(t), e = e || 2; t.length < e;) t = "0" + t;
        return t
    }
    const R = (P = 0, H = "_tl_id", function(t) {
        return t[H] = t[H] || ++P, t[H]
    });
    var P, H;

    function q(t) {
        return t && "function" == typeof t.replace ? t.replace(/^\s+|\s+$/g, "") : ""
    }

    function F(t, ...e) {
        for (let a of e)
            for (var i of Object.getOwnPropertyNames(a.prototype)) t.prototype[i] = a.prototype[i]
    }

    function $(t) {
        t = (t = q(t)).toLowerCase();
        for (var e = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;", i = 0, a = e.length; i < a; i++) t = t.replace(new RegExp(e.charAt(i), "g"), "aaaaaeeeeeiiiiooooouuuunc------".charAt(i));
        return t = (t = t.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")).replace(/^([0-9])/, "_$1")
    }

    function B(t, e) {
        var i = function() {
                var t;
                return "abcdefghijklmnopqurstuvwxyz".substr((t = 32, Math.floor(Math.random() * t)), 1)
            },
            a = function(t) {
                for (var e = "", a = 0; a < t; a++) e += i();
                return e
            };
        return e ? e + "-" + a(t) : "tl-" + a(t)
    }

    function U(t) {
        return t == parseFloat(t) ? !(t % 2) : void 0
    }

    function W(t, e, i, a) {
        for (var s = a || 0, n = 0; n < e.length; n++) e[n].data[i] == t && (s = n);
        return s
    }

    function G(t) {
        return t ? t = (t = t.replace(/<a\b[^>]*>/i, "")).replace(/<\/a>/i, "") : t
    }

    function Z(t) {
        return (t = t.replace(/(<[^>]*>)+/g, "")).replace('"', "'")
    }

    function Y(t, e, i) {
        var a = function(t, e, i) {
            i || (i = "");
            return e && e.length > 30 && (e = e.substring(0, 30) + "…"), i + "<a class='tl-makelink' href='" + t + "' onclick='void(0)'>" + e + "</a>"
        };
        return t.replace(/\b(?:https?|ftp):\/\/([a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|])/gim, (function(t, e, i, s) {
            if (i > 0) {
                var n = s[i - 1];
                if ('"' == n || "'" == n || "=" == n) return t
            }
            return a(t, e)
        })).replace(/(^|[^\/>])(www\.[\S]+(\b|$))/gim, (function(t, e, i, s, n) {
            return a("http://" + i, i, e)
        })).replace(/([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gim, (function(t, e, i, s) {
            return a("mailto:" + e, e)
        }))
    }

    function V(t) {
        return t.replace(/(.*)www.dropbox.com\/(.*)/, "$1dl.dropboxusercontent.com/$2")
    }
    const J = t => {
            var e = {
                w: 0,
                h: 0
            };
            return t.w > t.h && t.h > 0 ? (e.h = t.h, e.w = t.h) : (e.w = t.w, e.h = t.w), e
        },
        X = t => null !== t.w && "" !== t.w ? Math.round(t.w / 16 * 9) : null !== t.h && "" !== t.h ? Math.round(t.h / 9 * 16) : 0;
    let K = (tt = (Q = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ").length, {
        encode: function(t) {
            if ("number" != typeof t || t !== parseInt(t)) throw '"encode" only accepts integers.';
            for (var e = ""; t;) {
                var i = t % tt;
                t = Math.floor(t / tt), e = Q[i].toString() + e
            }
            return e
        },
        decode: function(t) {
            if ("string" != typeof t) throw '"decode" only accepts strings.';
            for (var e = 0; t;) {
                var i = Q.indexOf(t[0]);
                if (i < 0) throw '"decode" can\'t find "' + t[0] + '" in the alphabet: "' + Q + '"';
                var a = t.length - 1;
                e += i * Math.pow(tt, a), t = t.substring(1)
            }
            return e
        }
    });
    var Q, tt;

    function et(t) {
        if ("string" == typeof t) {
            let a = t.match(/^\s*(\d+h)?(\d+m)?(\d+s)?\s*/i);
            if (a) {
                var e = parseInt(a[1]) || 0,
                    i = parseInt(a[2]) || 0;
                return (parseInt(a[3]) || 0) + 60 * i + 60 * e * 60
            }
        } else if ("number" == typeof t) return t;
        return 0
    }

    function it(t) {
        return (new DOMParser).parseFromString(t, "text/html").body.textContent || ""
    }
    const at = [.42, 0, 1, 1];

    function st(t) {}

    function nt(t) {
        return new st(at).get(t)
    }

    function ot(t) {
        return 1 == t ? 1 : 1 - Math.pow(2, -10 * t)
    }

    function rt(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    }
    let lt = function() {};
    lt.extend = function(t) {
        var e = function() {
                this.initialize && this.initialize.apply(this, arguments)
            },
            i = function() {};
        i.prototype = this.prototype;
        var a = new i;
        for (var s in a.constructor = e, e.prototype = a, e.superclass = this.prototype, this) this.hasOwnProperty(s) && "prototype" !== s && "superclass" !== s && (e[s] = this[s]);
        return t.statics && (I(e, t.statics), delete t.statics), t.includes && (I.apply(null, [a].concat(t.includes)), delete t.includes), t.options && a.options && (t.options = I({}, a.options, t.options)), I(a, t), e.extend = lt.extend, e.include = function(t) {
            I(this.prototype, t)
        }, e
    };
    class ht {
        on(t, e, i) {
            if (!e) throw new S("No callback function provided");
            var a = this._tl_events = this._tl_events || {};
            return a[t] = a[t] || [], a[t].push({
                action: e,
                context: i || this
            }), this
        }
        addEventListener(t, e, i) {
            return this.on(t, e, i)
        }
        hasEventListeners(t) {
            var e = "_tl_events";
            return e in this && t in this[e] && this[e][t].length > 0
        }
        removeEventListener(t, e, i) {
            if (!this.hasEventListeners(t)) return this;
            for (var a = 0, s = this._tl_events, n = s[t].length; a < n; a++)
                if (s[t][a].action === e && (!i || s[t][a].context === i)) return s[t].splice(a, 1), this;
            return this
        }
        off(t, e, i) {
            return this.removeEventListener(t, e, i)
        }
        fire(t, e) {
            if (!this.hasEventListeners(t)) return this;
            for (var i = C({
                    type: t,
                    target: this
                }, e), a = this._tl_events[t].slice(), s = 0, n = a.length; s < n; s++) a[s].action ? a[s].action.call(a[s].context || this, i) : O(`no action defined for ${t} listener`);
            return this
        }
    }

    function dt(t, e) {
        return ct(t, e)
    }
    const ct = function() {
        var t = document,
            e = window,
            i = e.performance,
            a = i && (i.now || i.webkitNow || i.msNow || i.mozNow),
            s = a ? function() {
                return a.call(i)
            } : function() {
                return +new Date
            },
            n = t.documentElement,
            o = !1,
            r = /^rgb\(|#/,
            l = /^([+\-])=([\d\.]+)/,
            h = /^(?:[\+\-]=?)?\d+(?:\.\d+)?(%|in|cm|mm|em|ex|pt|pc|px)$/,
            d = /rotate\(((?:[+\-]=)?([\-\d\.]+))deg\)/,
            c = /scale\(((?:[+\-]=)?([\d\.]+))\)/,
            u = /skew\(((?:[+\-]=)?([\-\d\.]+))deg, ?((?:[+\-]=)?([\-\d\.]+))deg\)/,
            m = /translate\(((?:[+\-]=)?([\-\d\.]+))px, ?((?:[+\-]=)?([\-\d\.]+))px\)/,
            p = {
                lineHeight: 1,
                zoom: 1,
                zIndex: 1,
                opacity: 1,
                transform: 1
            },
            _ = function() {
                var e, i = t.createElement("a").style,
                    a = ["webkitTransform", "MozTransform", "OTransform", "msTransform", "Transform"];
                for (e = 0; e < a.length; e++)
                    if (a[e] in i) return a[e]
            }(),
            f = void 0 !== t.createElement("a").style.opacity,
            g = t.defaultView && t.defaultView.getComputedStyle ? function(e, i) {
                i = M(i = "transform" == i ? _ : i);
                var a = null,
                    s = t.defaultView.getComputedStyle(e, "");
                return s && (a = s[i]), e.style[i] || a
            } : n.currentStyle ? function(t, e) {
                if ("opacity" == (e = M(e))) {
                    var i = 100;
                    try {
                        i = t.filters["DXImageTransform.Microsoft.Alpha"].opacity
                    } catch (e) {
                        try {
                            i = t.filters("alpha").opacity
                        } catch (t) {}
                    }
                    return i / 100
                }
                var a = t.currentStyle ? t.currentStyle[e] : null;
                return t.style[e] || a
            } : function(t, e) {
                return t.style[M(e)]
            },
            v = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                e.setTimeout((function() {
                    t(+new Date)
                }), 17)
            },
            y = [];

        function w(t) {
            var e, i = y.length;
            for (a && t > 1e12 && (t = s()), o && (t = s()), e = i; e--;) y[e](t);
            y.length && v(w)
        }

        function b(t) {
            var e, i = function(t, e, i) {
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (i = 0; i < t.length; ++i)
                    if (t[i] === e) return i
            }(y, t);
            i >= 0 && (e = y.slice(i + 1), y.length = i, y = y.concat(e))
        }

        function x(t, e) {
            var i, a = {};
            return (i = t.match(d)) && (a.rotate = A(i[1], e ? e.rotate : null)), (i = t.match(c)) && (a.scale = A(i[1], e ? e.scale : null)), (i = t.match(u)) && (a.skewx = A(i[1], e ? e.skewx : null), a.skewy = A(i[3], e ? e.skewy : null)), (i = t.match(m)) && (a.translatex = A(i[1], e ? e.translatex : null), a.translatey = A(i[3], e ? e.translatey : null)), a
        }

        function k(t) {
            var e = "";
            return "rotate" in t && (e += "rotate(" + t.rotate + "deg) "), "scale" in t && (e += "scale(" + t.scale + ") "), "translatex" in t && (e += "translate(" + t.translatex + "px," + t.translatey + "px) "), "skewx" in t && (e += "skew(" + t.skewx + "deg," + t.skewy + "deg)"), e
        }

        function T(t) {
            var e, i, a, s = t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            return (s ? (e = s[1], i = s[2], a = s[3], "#" + (1 << 24 | e << 16 | i << 8 | a).toString(16).slice(1)) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
        }

        function M(t) {
            return t.replace(/-(.)/g, (function(t, e) {
                return e.toUpperCase()
            }))
        }

        function L(t) {
            return "function" == typeof t
        }

        function E(t) {
            return Math.sin(t * Math.PI / 2)
        }

        function D(t, e, i, a, n, o) {
            a = L(a) ? a : C.easings[a] || E;
            var r, l = t || 1e3,
                h = this,
                d = o - n,
                c = s(),
                u = 0,
                m = 0;
            return r = function t(s) {
                var r = s - c;
                if (r > l || u) return o = isFinite(o) ? o : 1, u ? m && e(o) : e(o), b(t), i && i.apply(h);
                isFinite(o) ? e(d * a(r / l) + n) : e(a(r / l))
            }, 1 === y.push(r) && v(w), {
                stop: function(t) {
                    u = 1, m = t, t || (i = null)
                }
            }
        }

        function S(t, e) {
            var i, a, s = t.length,
                n = [];
            for (i = 0; i < s; ++i) n[i] = [t[i][0], t[i][1]];
            for (a = 1; a < s; ++a)
                for (i = 0; i < s - a; ++i) n[i][0] = (1 - e) * n[i][0] + e * n[parseInt(i + 1, 10)][0], n[i][1] = (1 - e) * n[i][1] + e * n[parseInt(i + 1, 10)][1];
            return [n[0][0], n[0][1]]
        }

        function N(t, e, i, a, s, n, o) {
            if ("transform" == s) {
                for (var r in o = {}, i[n][s]) o[r] = r in a[n][s] ? Math.round(1e3 * ((a[n][s][r] - i[n][s][r]) * t + i[n][s][r])) / 1e3 : i[n][s][r];
                return o
            }
            return "string" == typeof i[n][s] ? function(t, e, i) {
                var a, s, n, o, r = [];
                for (a = 0; a < 6; a++) n = Math.min(15, parseInt(e.charAt(a), 16)), o = Math.min(15, parseInt(i.charAt(a), 16)), s = (s = Math.floor((o - n) * t + n)) > 15 ? 15 : s < 0 ? 0 : s, r[a] = s.toString(16);
                return "#" + r.join("")
            }(t, i[n][s], a[n][s]) : (o = Math.round(1e3 * ((a[n][s] - i[n][s]) * t + i[n][s])) / 1e3, s in p || (o += e[n][s] || "px"), o)
        }

        function A(t, e, i, a, s) {
            return (i = l.exec(t)) ? (s = parseFloat(i[2])) && e + ("+" == i[1] ? 1 : -1) * s : parseFloat(t)
        }

        function C(t, e) {
            var i, a, s, n = t ? n = isFinite(t.length) ? t : [t] : [],
                o = e.complete,
                l = e.duration,
                d = e.easing,
                c = e.bezier,
                u = [],
                m = [],
                p = [],
                v = [];
            for (c && (a = e.left, s = e.top, delete e.right, delete e.bottom, delete e.left, delete e.top), i = n.length; i--;) {
                if (u[i] = {}, m[i] = {}, p[i] = {}, c) {
                    var y = g(n[i], "left"),
                        w = g(n[i], "top"),
                        b = [A(L(a) ? a(n[i]) : a || 0, parseFloat(y)), A(L(s) ? s(n[i]) : s || 0, parseFloat(w))];
                    v[i] = L(c) ? c(n[i], b) : c, v[i].push(b), v[i].unshift([parseInt(y, 10), parseInt(w, 10)])
                }
                for (var E in e) {
                    switch (E) {
                        case "complete":
                        case "duration":
                        case "easing":
                        case "bezier":
                            continue
                    }
                    var C, I = g(n[i], E),
                        j = L(e[E]) ? e[E](n[i]) : e[E];
                    "string" != typeof j || !r.test(j) || r.test(I) ? (u[i][E] = "transform" == E ? x(I) : "string" == typeof j && r.test(j) ? T(I).slice(1) : parseFloat(I), m[i][E] = "transform" == E ? x(j, u[i][E]) : "string" == typeof j && "#" == j.charAt(0) ? T(j).slice(1) : A(j, parseFloat(I)), "string" == typeof j && (C = j.match(h)) && (p[i][E] = C[1])) : delete e[E]
                }
            }
            return D.apply(n, [l, function(t, a, s) {
                for (i = n.length; i--;)
                    for (var o in c && (s = S(v[i], t), n[i].style.left = s[0] + "px", n[i].style.top = s[1] + "px"), e) a = N(t, p, u, m, o, i), "transform" == o ? n[i].style[_] = k(a) : "opacity" != o || f ? n[i].style[M(o)] = a : n[i].style.filter = "alpha(opacity=" + 100 * a + ")"
            }, o, d])
        }
        return v((function(t) {
            o = t > 1e12 != s() > 1e12
        })), C.tween = D, C.getStyle = g, C.bezier = S, C.transform = _, C.parseTransform = x, C.formatTransform = k, C.easings = {}, C
    }();
    class ut {
        show(t) {
            t || (this._el.container.style.display = "block")
        }
        hide(t) {
            this._el.container.style.display = "none"
        }
        addTo(t) {
            t.appendChild(this._el.container), this.onAdd()
        }
        removeFrom(t) {
            t.removeChild(this._el.container), this.onRemove()
        }
        animatePosition(t, e) {
            var i = {
                duration: this.options.duration,
                easing: this.options.ease
            };
            for (var a in t) t.hasOwnProperty(a) && (i[a] = t[a] + "px");
            this.animator && this.animator.stop(), this.animator = dt(e, i)
        }
        onLoaded() {
            this.fire("loaded", this.data)
        }
        onAdd() {
            this.fire("added", this.data)
        }
        onRemove() {
            this.fire("removed", this.data)
        }
        setPosition(t, e) {
            for (var i in t) t.hasOwnProperty(i) && (e ? e.style[i] = t[i] + "px" : this._el.container.style[i] = t[i] + "px")
        }
        getPosition() {
            return M(this._el.container)
        }
    }
    class mt {
        constructor(t, e, i) {
            this._el = {
                drag: t,
                move: t
            }, this.mousedrag = {
                down: "mousedown",
                up: "mouseup",
                leave: "mouseleave",
                move: "mousemove"
            }, this.touchdrag = {
                down: "touchstart",
                up: "touchend",
                leave: "mouseleave",
                move: "touchmove"
            }, i && (this._el.move = i), this.options = {
                enable: {
                    x: !0,
                    y: !0
                },
                constraint: {
                    top: !1,
                    bottom: !1,
                    left: !1,
                    right: !1
                },
                momentum_multiplier: 2e3,
                duration: 1e3,
                ease: rt
            }, this.animator = null, this.dragevent = this.mousedrag, b && (this.dragevent = this.touchdrag), this.data = {
                sliding: !1,
                direction: "none",
                pagex: {
                    start: 0,
                    end: 0
                },
                pagey: {
                    start: 0,
                    end: 0
                },
                pos: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                },
                new_pos: {
                    x: 0,
                    y: 0
                },
                new_pos_parent: {
                    x: 0,
                    y: 0
                },
                time: {
                    start: 0,
                    end: 0
                },
                touch: !1
            }, C(this.options, e)
        }
        enable(t) {
            this.data.pos.start = 0, this._el.move.style.left = this.data.pos.start.x + "px", this._el.move.style.top = this.data.pos.start.y + "px", this._el.move.style.position = "absolute"
        }
        disable() {
            _t.removeListener(this._el.drag, this.dragevent.down, this._onDragStart, this), _t.removeListener(this._el.drag, this.dragevent.up, this._onDragEnd, this)
        }
        stopMomentum() {
            this.animator && this.animator.stop()
        }
        updateConstraint(t) {
            this.options.constraint = t
        }
        _onDragStart(t) {
            b ? t.originalEvent ? (this.data.pagex.start = t.originalEvent.touches[0].screenX, this.data.pagey.start = t.originalEvent.touches[0].screenY) : (this.data.pagex.start = t.targetTouches[0].screenX, this.data.pagey.start = t.targetTouches[0].screenY) : (this.data.pagex.start = t.pageX, this.data.pagey.start = t.pageY), this.options.enable.x && (this._el.move.style.left = this.data.pagex.start - this._el.move.offsetWidth / 2 + "px"), this.options.enable.y && (this._el.move.style.top = this.data.pagey.start - this._el.move.offsetHeight / 2 + "px"), this.data.pos.start = M(this._el.drag), this.data.time.start = (new Date).getTime(), this.fire("dragstart", this.data), _t.addListener(this._el.drag, this.dragevent.move, this._onDragMove, this), _t.addListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this)
        }
        _onDragEnd(t) {
            this.data.sliding = !1, _t.removeListener(this._el.drag, this.dragevent.move, this._onDragMove, this), _t.removeListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this), this.fire("dragend", this.data), this._momentum()
        }
        _onDragMove(t) {
            t.preventDefault(), this.data.sliding = !0, b ? t.originalEvent ? (this.data.pagex.end = t.originalEvent.touches[0].screenX, this.data.pagey.end = t.originalEvent.touches[0].screenY) : (this.data.pagex.end = t.targetTouches[0].screenX, this.data.pagey.end = t.targetTouches[0].screenY) : (this.data.pagex.end = t.pageX, this.data.pagey.end = t.pageY), this.data.pos.end = M(this._el.drag), this.data.new_pos.x = -(this.data.pagex.start - this.data.pagex.end - this.data.pos.start.x), this.data.new_pos.y = -(this.data.pagey.start - this.data.pagey.end - this.data.pos.start.y), this.options.enable.x && (this._el.move.style.left = this.data.new_pos.x + "px"), this.options.enable.y && (this._el.move.style.top = this.data.new_pos.y + "px"), this.fire("dragmove", this.data)
        }
        _momentum() {
            var t = {
                    x: 0,
                    y: 0,
                    time: 0
                },
                e = {
                    x: 0,
                    y: 0,
                    time: 0
                },
                i = !1;
            t.time = 10 * ((new Date).getTime() - this.data.time.start), e.time = 10 * ((new Date).getTime() - this.data.time.start), e.x = this.options.momentum_multiplier * (Math.abs(this.data.pagex.end) - Math.abs(this.data.pagex.start)), e.y = this.options.momentum_multiplier * (Math.abs(this.data.pagey.end) - Math.abs(this.data.pagey.start)), t.x = Math.round(e.x / e.time), t.y = Math.round(e.y / e.time), this.data.new_pos.x = Math.min(this.data.pos.end.x + t.x), this.data.new_pos.y = Math.min(this.data.pos.end.y + t.y), this.options.enable.x ? this.data.new_pos.x < 0 && (this.data.new_pos.x = 0) : this.data.new_pos.x = this.data.pos.start.x, this.options.enable.y ? this.data.new_pos.y < 0 && (this.data.new_pos.y = 0) : this.data.new_pos.y = this.data.pos.start.y, e.time < 3e3 && (i = !0), Math.abs(e.x) > 1e4 && (this.data.direction = "left", e.x > 0 && (this.data.direction = "right")), Math.abs(e.y) > 1e4 && (this.data.direction = "up", e.y > 0 && (this.data.direction = "down")), this._animateMomentum(), i && this.fire("swipe_" + this.data.direction, this.data)
        }
        _animateMomentum() {
            var t = {
                    x: this.data.new_pos.x,
                    y: this.data.new_pos.y
                },
                e = {
                    duration: this.options.duration,
                    easing: ot
                };
            this.options.enable.y && ((this.options.constraint.top || this.options.constraint.bottom) && (t.y > this.options.constraint.bottom ? t.y = this.options.constraint.bottom : t.y < this.options.constraint.top && (t.y = this.options.constraint.top)), e.top = Math.floor(t.y) + "px"), this.options.enable.x && ((this.options.constraint.left || this.options.constraint.right) && (t.x > this.options.constraint.left ? t.x = this.options.constraint.left : t.x < this.options.constraint.right && (t.x = this.options.constraint.right)), e.left = Math.floor(t.x) + "px"), this.animator = dt(this._el.move, e), this.fire("momentum", this.data)
        }
    }
    F(ht);
    var pt, _t = {
            addListener: function(t, e, i, a) {
                var s = R(i),
                    n = "_tl_" + e + s;
                if (!t[n]) {
                    var o = function(e) {
                        return i.call(a || t, e || _t._getEvent())
                    };
                    if (b && "dblclick" === e && this.addDoubleTapListener) this.addDoubleTapListener(t, o, s);
                    else if ("addEventListener" in t)
                        if ("mousewheel" === e) t.addEventListener("DOMMouseScroll", o, !1), t.addEventListener(e, o, !1);
                        else if ("mouseenter" === e || "mouseleave" === e) {
                        var r = o,
                            l = "mouseenter" === e ? "mouseover" : "mouseout";
                        o = function(e) {
                            if (_t._checkMouse(t, e)) return r(e)
                        }, t.addEventListener(l, o, !1)
                    } else t.addEventListener(e, o, !1);
                    else "attachEvent" in t && t.attachEvent("on" + e, o);
                    t[n] = o
                }
            },
            removeListener: function(t, e, i) {
                var a = R(i),
                    s = "_tl_" + e + a,
                    n = t[s];
                n && (b && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, a) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", n, !1), t.removeEventListener(e, n, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", n, !1) : t.removeEventListener(e, n, !1) : "detachEvent" in t && t.detachEvent("on" + e, n), t[s] = null)
            },
            _checkMouse: function(t, e) {
                var i = e.relatedTarget;
                if (!i) return !0;
                try {
                    for (; i && i !== t;) i = i.parentNode
                } catch (t) {
                    return !1
                }
                return i !== t
            },
            _getEvent: function() {
                var t = window.event;
                if (!t)
                    for (var e = arguments.callee.caller; e && (!(t = e.arguments[0]) || window.Event !== t.constructor);) e = e.caller;
                return t
            },
            stopPropagation: function(t) {
                t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
            },
            disableClickPropagation: function(t) {
                _t.addListener(t, mt.START, _t.stopPropagation), _t.addListener(t, "click", _t.stopPropagation), _t.addListener(t, "dblclick", _t.stopPropagation)
            },
            preventDefault: function(t) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            },
            stop: function(t) {
                _t.preventDefault(t), _t.stopPropagation(t)
            },
            getWheelDelta: function(t) {
                var e = 0;
                return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
            }
        },
        ft = function() {
            var t, e, i, a, s, n = [],
                o = n.slice,
                r = n.filter,
                l = window.document,
                h = {},
                d = {},
                c = {
                    "column-count": 1,
                    columns: 1,
                    "font-weight": 1,
                    "line-height": 1,
                    opacity: 1,
                    "z-index": 1,
                    zoom: 1
                },
                u = /^\s*<(\w+|!)[^>]*>/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                _ = /^(?:body|html)$/i,
                f = /([A-Z])/g,
                g = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                v = l.createElement("table"),
                y = l.createElement("tr"),
                w = {
                    tr: l.createElement("tbody"),
                    tbody: v,
                    thead: v,
                    tfoot: v,
                    td: y,
                    th: y,
                    "*": l.createElement("div")
                },
                b = /complete|loaded|interactive/,
                x = /^[\w-]*$/,
                k = {},
                T = k.toString,
                M = {},
                L = l.createElement("div"),
                E = {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    for: "htmlFor",
                    class: "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                D = Array.isArray || function(t) {
                    return t instanceof Array
                };

            function S(t) {
                return null == t ? String(t) : k[T.call(t)] || "object"
            }

            function N(t) {
                return "function" == S(t)
            }

            function A(t) {
                return null != t && t == t.window
            }

            function C(t) {
                return null != t && t.nodeType == t.DOCUMENT_NODE
            }

            function I(t) {
                return "object" == S(t)
            }

            function j(t) {
                return I(t) && !A(t) && Object.getPrototypeOf(t) == Object.prototype
            }

            function O(t) {
                return "number" == typeof t.length
            }

            function z(t) {
                return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }

            function R(t) {
                return t in d ? d[t] : d[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
            }

            function P(t, e) {
                return "number" != typeof e || c[z(t)] ? e : e + "px"
            }

            function H(t) {
                return "children" in t ? o.call(t.children) : e.map(t.childNodes, (function(t) {
                    if (1 == t.nodeType) return t
                }))
            }

            function q(e, i, a) {
                for (t in i) a && (j(i[t]) || D(i[t])) ? (j(i[t]) && !j(e[t]) && (e[t] = {}), D(i[t]) && !D(e[t]) && (e[t] = []), q(e[t], i[t], a)) : void 0 !== i[t] && (e[t] = i[t])
            }

            function F(t, i) {
                return null == i ? e(t) : e(t).filter(i)
            }

            function $(t, e, i, a) {
                return N(e) ? e.call(t, i, a) : e
            }

            function B(t, e, i) {
                null == i ? t.removeAttribute(e) : t.setAttribute(e, i)
            }

            function U(t, e) {
                var i = t.className,
                    a = i && void 0 !== i.baseVal;
                if (void 0 === e) return a ? i.baseVal : i;
                a ? i.baseVal = e : t.className = e
            }

            function W(t) {
                var i;
                try {
                    return t ? "true" == t || "false" != t && ("null" == t ? null : /^0/.test(t) || isNaN(i = Number(t)) ? /^[\[\{]/.test(t) ? e.parseJSON(t) : t : i) : t
                } catch (e) {
                    return t
                }
            }

            function G(t, e) {
                for (var i in e(t), t.childNodes) G(t.childNodes[i], e)
            }
            return M.matches = function(t, e) {
                if (!e || !t || 1 !== t.nodeType) return !1;
                var i = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                if (i) return i.call(t, e);
                var a, s = t.parentNode,
                    n = !s;
                return n && (s = L).appendChild(t), a = ~M.qsa(s, e).indexOf(t), n && L.removeChild(t), a
            }, a = function(t) {
                return t.replace(/-+(.)?/g, (function(t, e) {
                    return e ? e.toUpperCase() : ""
                }))
            }, s = function(t) {
                return r.call(t, (function(e, i) {
                    return t.indexOf(e) == i
                }))
            }, M.fragment = function(t, i, a) {
                var s, n, r;
                return m.test(t) && (s = e(l.createElement(RegExp.$1))), s || (t.replace && (t = t.replace(p, "<$1></$2>")), void 0 === i && (i = u.test(t) && RegExp.$1), i in w || (i = "*"), (r = w[i]).innerHTML = "" + t, s = e.each(o.call(r.childNodes), (function() {
                    r.removeChild(this)
                }))), j(a) && (n = e(s), e.each(a, (function(t, e) {
                    g.indexOf(t) > -1 ? n[t](e) : n.attr(t, e)
                }))), s
            }, M.Z = function(t, i) {
                return (t = t || []).__proto__ = e.fn, t.selector = i || "", t
            }, M.isZ = function(t) {
                return t instanceof M.Z
            }, M.init = function(t, i) {
                var a, s;
                if (!t) return M.Z();
                if ("string" == typeof t)
                    if ("<" == (t = t.trim())[0] && u.test(t)) a = M.fragment(t, RegExp.$1, i), t = null;
                    else {
                        if (void 0 !== i) return e(i).find(t);
                        a = M.qsa(l, t)
                    }
                else {
                    if (N(t)) return e(l).ready(t);
                    if (M.isZ(t)) return t;
                    if (D(t)) s = t, a = r.call(s, (function(t) {
                        return null != t
                    }));
                    else if (I(t)) a = [t], t = null;
                    else if (u.test(t)) a = M.fragment(t.trim(), RegExp.$1, i), t = null;
                    else {
                        if (void 0 !== i) return e(i).find(t);
                        a = M.qsa(l, t)
                    }
                }
                return M.Z(a, t)
            }, (e = function(t, e) {
                return M.init(t, e)
            }).extend = function(t) {
                var e, i = o.call(arguments, 1);
                return "boolean" == typeof t && (e = t, t = i.shift()), i.forEach((function(i) {
                    q(t, i, e)
                })), t
            }, M.qsa = function(t, e) {
                var i, a = "#" == e[0],
                    s = !a && "." == e[0],
                    n = a || s ? e.slice(1) : e,
                    r = x.test(n);
                return C(t) && r && a ? (i = t.getElementById(n)) ? [i] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(r && !a ? s ? t.getElementsByClassName(n) : t.getElementsByTagName(e) : t.querySelectorAll(e))
            }, e.contains = function(t, e) {
                return t !== e && t.contains(e)
            }, e.type = S, e.isFunction = N, e.isWindow = A, e.isArray = D, e.isPlainObject = j, e.isEmptyObject = function(t) {
                var e;
                for (e in t) return !1;
                return !0
            }, e.inArray = function(t, e, i) {
                return n.indexOf.call(e, t, i)
            }, e.camelCase = a, e.trim = function(t) {
                return null == t ? "" : String.prototype.trim.call(t)
            }, e.uuid = 0, e.support = {}, e.expr = {}, e.map = function(t, i) {
                var a, s, n, o, r = [];
                if (O(t))
                    for (s = 0; s < t.length; s++) null != (a = i(t[s], s)) && r.push(a);
                else
                    for (n in t) null != (a = i(t[n], n)) && r.push(a);
                return (o = r).length > 0 ? e.fn.concat.apply([], o) : o
            }, e.each = function(t, e) {
                var i, a;
                if (O(t)) {
                    for (i = 0; i < t.length; i++)
                        if (!1 === e.call(t[i], i, t[i])) return t
                } else
                    for (a in t)
                        if (!1 === e.call(t[a], a, t[a])) return t;
                return t
            }, e.grep = function(t, e) {
                return r.call(t, e)
            }, window.JSON && (e.parseJSON = JSON.parse), e.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function(t, e) {
                k["[object " + e + "]"] = e.toLowerCase()
            })), e.fn = {
                forEach: n.forEach,
                reduce: n.reduce,
                push: n.push,
                sort: n.sort,
                indexOf: n.indexOf,
                concat: n.concat,
                map: function(t) {
                    return e(e.map(this, (function(e, i) {
                        return t.call(e, i, e)
                    })))
                },
                slice: function() {
                    return e(o.apply(this, arguments))
                },
                ready: function(t) {
                    return b.test(l.readyState) && l.body ? t(e) : l.addEventListener("DOMContentLoaded", (function() {
                        t(e)
                    }), !1), this
                },
                get: function(t) {
                    return void 0 === t ? o.call(this) : this[t >= 0 ? t : t + this.length]
                },
                toArray: function() {
                    return this.get()
                },
                size: function() {
                    return this.length
                },
                remove: function() {
                    return this.each((function() {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    }))
                },
                each: function(t) {
                    return n.every.call(this, (function(e, i) {
                        return !1 !== t.call(e, i, e)
                    })), this
                },
                filter: function(t) {
                    return N(t) ? this.not(this.not(t)) : e(r.call(this, (function(e) {
                        return M.matches(e, t)
                    })))
                },
                add: function(t, i) {
                    return e(s(this.concat(e(t, i))))
                },
                is: function(t) {
                    return this.length > 0 && M.matches(this[0], t)
                },
                not: function(t) {
                    var i = [];
                    if (N(t) && void 0 !== t.call) this.each((function(e) {
                        t.call(this, e) || i.push(this)
                    }));
                    else {
                        var a = "string" == typeof t ? this.filter(t) : O(t) && N(t.item) ? o.call(t) : e(t);
                        this.forEach((function(t) {
                            a.indexOf(t) < 0 && i.push(t)
                        }))
                    }
                    return e(i)
                },
                has: function(t) {
                    return this.filter((function() {
                        return I(t) ? e.contains(this, t) : e(this).find(t).size()
                    }))
                },
                eq: function(t) {
                    return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
                },
                first: function() {
                    var t = this[0];
                    return t && !I(t) ? t : e(t)
                },
                last: function() {
                    var t = this[this.length - 1];
                    return t && !I(t) ? t : e(t)
                },
                find: function(t) {
                    var i = this;
                    return "object" == typeof t ? e(t).filter((function() {
                        var t = this;
                        return n.some.call(i, (function(i) {
                            return e.contains(i, t)
                        }))
                    })) : 1 == this.length ? e(M.qsa(this[0], t)) : this.map((function() {
                        return M.qsa(this, t)
                    }))
                },
                closest: function(t, i) {
                    var a = this[0],
                        s = !1;
                    for ("object" == typeof t && (s = e(t)); a && !(s ? s.indexOf(a) >= 0 : M.matches(a, t));) a = a !== i && !C(a) && a.parentNode;
                    return e(a)
                },
                parents: function(t) {
                    for (var i = [], a = this; a.length > 0;) a = e.map(a, (function(t) {
                        if ((t = t.parentNode) && !C(t) && i.indexOf(t) < 0) return i.push(t), t
                    }));
                    return F(i, t)
                },
                parent: function(t) {
                    return F(s(this.pluck("parentNode")), t)
                },
                children: function(t) {
                    return F(this.map((function() {
                        return H(this)
                    })), t)
                },
                contents: function() {
                    return this.map((function() {
                        return o.call(this.childNodes)
                    }))
                },
                siblings: function(t) {
                    return F(this.map((function(t, e) {
                        return r.call(H(e.parentNode), (function(t) {
                            return t !== e
                        }))
                    })), t)
                },
                empty: function() {
                    return this.each((function() {
                        this.innerHTML = ""
                    }))
                },
                pluck: function(t) {
                    return e.map(this, (function(e) {
                        return e[t]
                    }))
                },
                show: function() {
                    return this.each((function() {
                        var t, e, i;
                        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, h[t] || (e = l.createElement(t), l.body.appendChild(e), i = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == i && (i = "block"), h[t] = i), h[t]))
                    }))
                },
                replaceWith: function(t) {
                    return this.before(t).remove()
                },
                wrap: function(t) {
                    var i = N(t);
                    if (this[0] && !i) var a = e(t).get(0),
                        s = a.parentNode || this.length > 1;
                    return this.each((function(n) {
                        e(this).wrapAll(i ? t.call(this, n) : s ? a.cloneNode(!0) : a)
                    }))
                },
                wrapAll: function(t) {
                    if (this[0]) {
                        var i;
                        for (e(this[0]).before(t = e(t));
                            (i = t.children()).length;) t = i.first();
                        e(t).append(this)
                    }
                    return this
                },
                wrapInner: function(t) {
                    var i = N(t);
                    return this.each((function(a) {
                        var s = e(this),
                            n = s.contents(),
                            o = i ? t.call(this, a) : t;
                        n.length ? n.wrapAll(o) : s.append(o)
                    }))
                },
                unwrap: function() {
                    return this.parent().each((function() {
                        e(this).replaceWith(e(this).children())
                    })), this
                },
                clone: function() {
                    return this.map((function() {
                        return this.cloneNode(!0)
                    }))
                },
                hide: function() {
                    return this.css("display", "none")
                },
                toggle: function(t) {
                    return this.each((function() {
                        var i = e(this);
                        (void 0 === t ? "none" == i.css("display") : t) ? i.show(): i.hide()
                    }))
                },
                prev: function(t) {
                    return e(this.pluck("previousElementSibling")).filter(t || "*")
                },
                next: function(t) {
                    return e(this.pluck("nextElementSibling")).filter(t || "*")
                },
                html: function(t) {
                    return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null : this.each((function(i) {
                        var a = this.innerHTML;
                        e(this).empty().append($(this, t, i, a))
                    }))
                },
                text: function(t) {
                    return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null : this.each((function() {
                        this.textContent = void 0 === t ? "" : "" + t
                    }))
                },
                attr: function(e, i) {
                    var a;
                    return "string" == typeof e && void 0 === i ? 0 == this.length || 1 !== this[0].nodeType ? void 0 : "value" == e && "INPUT" == this[0].nodeName ? this.val() : !(a = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : a : this.each((function(a) {
                        if (1 === this.nodeType)
                            if (I(e))
                                for (t in e) B(this, t, e[t]);
                            else B(this, e, $(this, i, a, this.getAttribute(e)))
                    }))
                },
                removeAttr: function(t) {
                    return this.each((function() {
                        1 === this.nodeType && B(this, t)
                    }))
                },
                prop: function(t, e) {
                    return t = E[t] || t, void 0 === e ? this[0] && this[0][t] : this.each((function(i) {
                        this[t] = $(this, e, i, this[t])
                    }))
                },
                data: function(t, e) {
                    var i = this.attr("data-" + t.replace(f, "-$1").toLowerCase(), e);
                    return null !== i ? W(i) : void 0
                },
                val: function(t) {
                    return 0 === arguments.length ? this[0] && (this[0].multiple ? e(this[0]).find("option").filter((function() {
                        return this.selected
                    })).pluck("value") : this[0].value) : this.each((function(e) {
                        this.value = $(this, t, e, this.value)
                    }))
                },
                offset: function(t) {
                    if (t) return this.each((function(i) {
                        var a = e(this),
                            s = $(this, t, i, a.offset()),
                            n = a.offsetParent().offset(),
                            o = {
                                top: s.top - n.top,
                                left: s.left - n.left
                            };
                        "static" == a.css("position") && (o.position = "relative"), a.css(o)
                    }));
                    if (0 == this.length) return null;
                    var i = this[0].getBoundingClientRect();
                    return {
                        left: i.left + window.pageXOffset,
                        top: i.top + window.pageYOffset,
                        width: Math.round(i.width),
                        height: Math.round(i.height)
                    }
                },
                css: function(i, s) {
                    if (arguments.length < 2) {
                        var n = this[0],
                            o = getComputedStyle(n, "");
                        if (!n) return;
                        if ("string" == typeof i) return n.style[a(i)] || o.getPropertyValue(i);
                        if (D(i)) {
                            var r = {};
                            return e.each(D(i) ? i : [i], (function(t, e) {
                                r[e] = n.style[a(e)] || o.getPropertyValue(e)
                            })), r
                        }
                    }
                    var l = "";
                    if ("string" == S(i)) s || 0 === s ? l = z(i) + ":" + P(i, s) : this.each((function() {
                        this.style.removeProperty(z(i))
                    }));
                    else
                        for (t in i) i[t] || 0 === i[t] ? l += z(t) + ":" + P(t, i[t]) + ";" : this.each((function() {
                            this.style.removeProperty(z(t))
                        }));
                    return this.each((function() {
                        this.style.cssText += ";" + l
                    }))
                },
                index: function(t) {
                    return t ? this.indexOf(e(t)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function(t) {
                    return !!t && n.some.call(this, (function(t) {
                        return this.test(U(t))
                    }), R(t))
                },
                addClass: function(t) {
                    return t ? this.each((function(a) {
                        i = [];
                        var s = U(this);
                        $(this, t, a, s).split(/\s+/g).forEach((function(t) {
                            e(this).hasClass(t) || i.push(t)
                        }), this), i.length && U(this, s + (s ? " " : "") + i.join(" "))
                    })) : this
                },
                removeClass: function(t) {
                    return this.each((function(e) {
                        if (void 0 === t) return U(this, "");
                        i = U(this), $(this, t, e, i).split(/\s+/g).forEach((function(t) {
                            i = i.replace(R(t), " ")
                        })), U(this, i.trim())
                    }))
                },
                toggleClass: function(t, i) {
                    return t ? this.each((function(a) {
                        var s = e(this);
                        $(this, t, a, U(this)).split(/\s+/g).forEach((function(t) {
                            (void 0 === i ? !s.hasClass(t) : i) ? s.addClass(t): s.removeClass(t)
                        }))
                    })) : this
                },
                scrollTop: function(t) {
                    if (this.length) {
                        var e = "scrollTop" in this[0];
                        return void 0 === t ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                            this.scrollTop = t
                        } : function() {
                            this.scrollTo(this.scrollX, t)
                        })
                    }
                },
                scrollLeft: function(t) {
                    if (this.length) {
                        var e = "scrollLeft" in this[0];
                        return void 0 === t ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
                            this.scrollLeft = t
                        } : function() {
                            this.scrollTo(t, this.scrollY)
                        })
                    }
                },
                position: function() {
                    if (this.length) {
                        var t = this[0],
                            i = this.offsetParent(),
                            a = this.offset(),
                            s = _.test(i[0].nodeName) ? {
                                top: 0,
                                left: 0
                            } : i.offset();
                        return a.top -= parseFloat(e(t).css("margin-top")) || 0, a.left -= parseFloat(e(t).css("margin-left")) || 0, s.top += parseFloat(e(i[0]).css("border-top-width")) || 0, s.left += parseFloat(e(i[0]).css("border-left-width")) || 0, {
                            top: a.top - s.top,
                            left: a.left - s.left
                        }
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var t = this.offsetParent || l.body; t && !_.test(t.nodeName) && "static" == e(t).css("position");) t = t.offsetParent;
                        return t
                    }))
                }
            }, e.fn.detach = e.fn.remove, ["width", "height"].forEach((function(t) {
                var i = t.replace(/./, (function(t) {
                    return t[0].toUpperCase()
                }));
                e.fn[t] = function(a) {
                    var s, n = this[0];
                    return void 0 === a ? A(n) ? n["inner" + i] : C(n) ? n.documentElement["scroll" + i] : (s = this.offset()) && s[t] : this.each((function(i) {
                        (n = e(this)).css(t, $(this, a, i, n[t]()))
                    }))
                }
            })), ["after", "prepend", "before", "append"].forEach((function(t, i) {
                var a = i % 2;
                e.fn[t] = function() {
                    var t, s, n = e.map(arguments, (function(e) {
                            return "object" == (t = S(e)) || "array" == t || null == e ? e : M.fragment(e)
                        })),
                        o = this.length > 1;
                    return n.length < 1 ? this : this.each((function(t, r) {
                        s = a ? r : r.parentNode, r = 0 == i ? r.nextSibling : 1 == i ? r.firstChild : 2 == i ? r : null, n.forEach((function(t) {
                            if (o) t = t.cloneNode(!0);
                            else if (!s) return e(t).remove();
                            G(s.insertBefore(t, r), (function(t) {
                                null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                            }))
                        }))
                    }))
                }, e.fn[a ? t + "To" : "insert" + (i ? "Before" : "After")] = function(i) {
                    return e(i)[t](this), this
                }
            })), M.Z.prototype = e.fn, M.uniq = s, M.deserializeValue = W, e.zepto = M, e
        }();
    window.Zepto = ft, void 0 === window.$ && (window.$ = ft),
        function(t) {
            t.zepto.qsa;
            var e = 1,
                i = Array.prototype.slice,
                a = t.isFunction,
                s = function(t) {
                    return "string" == typeof t
                },
                n = {},
                o = {},
                r = "onfocusin" in window,
                l = {
                    focus: "focusin",
                    blur: "focusout"
                },
                h = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                };

            function d(t) {
                return t._zid || (t._zid = e++)
            }

            function c(t, e, i, a) {
                if ((e = u(e)).ns) var s = (o = e.ns, new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
                var o;
                return (n[d(t)] || []).filter((function(t) {
                    return t && (!e.e || t.e == e.e) && (!e.ns || s.test(t.ns)) && (!i || d(t.fn) === d(i)) && (!a || t.sel == a)
                }))
            }

            function u(t) {
                var e = ("" + t).split(".");
                return {
                    e: e[0],
                    ns: e.slice(1).sort().join(" ")
                }
            }

            function m(t, e) {
                return t.del && !r && t.e in l || !!e
            }

            function p(t) {
                return h[t] || r && l[t] || t
            }

            function _(e, i, a, s, o, r, l) {
                var c = d(e),
                    _ = n[c] || (n[c] = []);
                i.split(/\s/).forEach((function(i) {
                    if ("ready" == i) return t(document).ready(a);
                    var n = u(i);
                    n.fn = a, n.sel = o, n.e in h && (a = function(e) {
                        var i = e.relatedTarget;
                        if (!i || i !== this && !t.contains(this, i)) return n.fn.apply(this, arguments)
                    }), n.del = r;
                    var d = r || a;
                    n.proxy = function(t) {
                        if (!(t = b(t)).isImmediatePropagationStopped()) {
                            t.data = s;
                            var i = d.apply(e, null == t._args ? [t] : [t].concat(t._args));
                            return !1 === i && (t.preventDefault(), t.stopPropagation()), i
                        }
                    }, n.i = _.length, _.push(n), "addEventListener" in e && e.addEventListener(p(n.e), n.proxy, m(n, l))
                }))
            }

            function f(t, e, i, a, s) {
                var o = d(t);
                (e || "").split(/\s/).forEach((function(e) {
                    c(t, e, i, a).forEach((function(e) {
                        delete n[o][e.i], "removeEventListener" in t && t.removeEventListener(p(e.e), e.proxy, m(e, s))
                    }))
                }))
            }
            o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents", t.event = {
                add: _,
                remove: f
            }, t.proxy = function(e, i) {
                if (a(e)) {
                    var n = function() {
                        return e.apply(i, arguments)
                    };
                    return n._zid = d(e), n
                }
                if (s(i)) return t.proxy(e[i], e);
                throw new TypeError("expected function")
            }, t.fn.bind = function(t, e, i) {
                return this.on(t, e, i)
            }, t.fn.unbind = function(t, e) {
                return this.off(t, e)
            }, t.fn.one = function(t, e, i, a) {
                return this.on(t, e, i, a, 1)
            };
            var g = function() {
                    return !0
                },
                v = function() {
                    return !1
                },
                y = /^([A-Z]|returnValue$|layer[XY]$)/,
                w = {
                    preventDefault: "isDefaultPrevented",
                    stopImmediatePropagation: "isImmediatePropagationStopped",
                    stopPropagation: "isPropagationStopped"
                };

            function b(e, i) {
                return !i && e.isDefaultPrevented || (i || (i = e), t.each(w, (function(t, a) {
                    var s = i[t];
                    e[t] = function() {
                        return this[a] = g, s && s.apply(i, arguments)
                    }, e[a] = v
                })), (void 0 !== i.defaultPrevented ? i.defaultPrevented : "returnValue" in i ? !1 === i.returnValue : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = g)), e
            }

            function x(t) {
                var e, i = {
                    originalEvent: t
                };
                for (e in t) y.test(e) || void 0 === t[e] || (i[e] = t[e]);
                return b(i, t)
            }
            t.fn.delegate = function(t, e, i) {
                return this.on(e, t, i)
            }, t.fn.undelegate = function(t, e, i) {
                return this.off(e, t, i)
            }, t.fn.live = function(e, i) {
                return t(document.body).delegate(this.selector, e, i), this
            }, t.fn.die = function(e, i) {
                return t(document.body).undelegate(this.selector, e, i), this
            }, t.fn.on = function(e, n, o, r, l) {
                var h, d, c = this;
                return e && !s(e) ? (t.each(e, (function(t, e) {
                    c.on(t, n, o, e, l)
                })), c) : (s(n) || a(r) || !1 === r || (r = o, o = n, n = void 0), (a(o) || !1 === o) && (r = o, o = void 0), !1 === r && (r = v), c.each((function(a, s) {
                    l && (h = function(t) {
                        return f(s, t.type, r), r.apply(this, arguments)
                    }), n && (d = function(e) {
                        var a, o = t(e.target).closest(n, s).get(0);
                        if (o && o !== s) return a = t.extend(x(e), {
                            currentTarget: o,
                            liveFired: s
                        }), (h || r).apply(o, [a].concat(i.call(arguments, 1)))
                    }), _(s, e, r, o, n, d || h)
                })))
            }, t.fn.off = function(e, i, n) {
                var o = this;
                return e && !s(e) ? (t.each(e, (function(t, e) {
                    o.off(t, i, e)
                })), o) : (s(i) || a(n) || !1 === n || (n = i, i = void 0), !1 === n && (n = v), o.each((function() {
                    f(this, e, n, i)
                })))
            }, t.fn.trigger = function(e, i) {
                return (e = s(e) || t.isPlainObject(e) ? t.Event(e) : b(e))._args = i, this.each((function() {
                    "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, i)
                }))
            }, t.fn.triggerHandler = function(e, i) {
                var a, n;
                return this.each((function(o, r) {
                    (a = x(s(e) ? t.Event(e) : e))._args = i, a.target = r, t.each(c(r, e.type || e), (function(t, e) {
                        if (n = e.proxy(a), a.isImmediatePropagationStopped()) return !1
                    }))
                })), n
            }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach((function(e) {
                t.fn[e] = function(t) {
                    return t ? this.bind(e, t) : this.trigger(e)
                }
            })), ["focus", "blur"].forEach((function(e) {
                t.fn[e] = function(t) {
                    return t ? this.bind(e, t) : this.each((function() {
                        try {
                            this[e]()
                        } catch (t) {}
                    })), this
                }
            })), t.Event = function(t, e) {
                s(t) || (t = (e = t).type);
                var i = document.createEvent(o[t] || "Events"),
                    a = !0;
                if (e)
                    for (var n in e) "bubbles" == n ? a = !!e[n] : i[n] = e[n];
                return i.initEvent(t, a, !0), b(i)
            }
        }(ft),
        function(t) {
            var e, i, a = 0,
                s = window.document,
                n = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                o = /^(?:text|application)\/javascript/i,
                r = /^(?:text|application)\/xml/i,
                l = /^\s*$/;

            function h(e, i, a, n) {
                if (e.global) return function(e, i, a) {
                    var s = t.Event(i);
                    return t(e).trigger(s, a), !s.isDefaultPrevented()
                }(i || s, a, n)
            }

            function d(t, e) {
                var i = e.context;
                if (!1 === e.beforeSend.call(i, t, e) || !1 === h(e, i, "ajaxBeforeSend", [t, e])) return !1;
                h(e, i, "ajaxSend", [t, e])
            }

            function c(t, e, i, a) {
                var s = i.context;
                i.success.call(s, t, "success", e), a && a.resolveWith(s, [t, "success", e]), h(i, s, "ajaxSuccess", [e, i, t]), m("success", e, i)
            }

            function u(t, e, i, a, s) {
                var n = a.context;
                a.error.call(n, i, e, t), s && s.rejectWith(n, [i, e, t]), h(a, n, "ajaxError", [i, a, t || e]), m(e, i, a)
            }

            function m(e, i, a) {
                var s = a.context;
                a.complete.call(s, i, e), h(a, s, "ajaxComplete", [i, a]),
                    function(e) {
                        e.global && !--t.active && h(e, null, "ajaxStop")
                    }(a)
            }

            function p() {}

            function _(t, e) {
                return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
            }

            function f(e, i, a, s) {
                var n = !t.isFunction(i);
                return {
                    url: e,
                    data: n ? i : void 0,
                    success: n ? t.isFunction(a) ? a : void 0 : i,
                    dataType: n && s || a
                }
            }
            t.active = 0, t.ajaxJSONP = function(e, i) {
                if (!("type" in e)) return t.ajax(e);
                var n, o, r = e.jsonpCallback,
                    l = (t.isFunction(r) ? r() : r) || "jsonp" + ++a,
                    h = s.createElement("script"),
                    m = window[l],
                    p = function(e) {
                        t(h).triggerHandler("error", e || "abort")
                    },
                    _ = {
                        abort: p
                    };
                return i && i.promise(_), t(h).on("load error", (function(a, s) {
                    clearTimeout(o), t(h).off().remove(), "error" != a.type && n ? c(n[0], _, e, i) : u(null, s || "error", _, e, i), window[l] = m, n && t.isFunction(m) && m(n[0]), m = n = void 0
                })), !1 === d(_, e) ? (p("abort"), _) : (window[l] = function() {
                    n = arguments
                }, h.src = e.url.replace(/\?(.+)=\?/, "?$1=" + l), s.head.appendChild(h), e.timeout > 0 && (o = setTimeout((function() {
                    p("timeout")
                }), e.timeout)), _)
            }, t.ajaxSettings = {
                type: "GET",
                beforeSend: p,
                success: p,
                error: p,
                complete: p,
                context: null,
                global: !0,
                xhr: function() {
                    return new window.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: "application/json",
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0
            }, t.ajax = function(a) {
                var s = t.extend({}, a || {}),
                    n = t.Deferred && t.Deferred();
                for (e in t.ajaxSettings) void 0 === s[e] && (s[e] = t.ajaxSettings[e]);
                ! function(e) {
                    e.global && 0 == t.active++ && h(e, null, "ajaxStart")
                }(s), s.crossDomain || (s.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(s.url) && RegExp.$2 != window.location.host), s.url || (s.url = window.location.toString()),
                    function(e) {
                        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = _(e.url, e.data), e.data = void 0)
                    }(s), !1 === s.cache && (s.url = _(s.url, "_=" + Date.now()));
                var m = s.dataType,
                    f = /\?.+=\?/.test(s.url);
                if ("jsonp" == m || f) return f || (s.url = _(s.url, s.jsonp ? s.jsonp + "=?" : !1 === s.jsonp ? "" : "callback=?")), t.ajaxJSONP(s, n);
                var g, v = s.accepts[m],
                    y = {},
                    w = function(t, e) {
                        y[t.toLowerCase()] = [t, e]
                    },
                    b = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : window.location.protocol,
                    x = s.xhr(),
                    k = x.setRequestHeader;
                if (n && n.promise(x), s.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", v || "*/*"), (v = s.mimeType || v) && (v.indexOf(",") > -1 && (v = v.split(",", 2)[0]), x.overrideMimeType && x.overrideMimeType(v)), (s.contentType || !1 !== s.contentType && s.data && "GET" != s.type.toUpperCase()) && w("Content-Type", s.contentType || "application/x-www-form-urlencoded"), s.headers)
                    for (i in s.headers) w(i, s.headers[i]);
                if (x.setRequestHeader = w, x.onreadystatechange = function() {
                        if (4 == x.readyState) {
                            x.onreadystatechange = p, clearTimeout(g);
                            var e, i = !1;
                            if (x.status >= 200 && x.status < 300 || 304 == x.status || 0 == x.status && "file:" == b) {
                                m = m || function(t) {
                                    return t && (t = t.split(";", 2)[0]), t && ("text/html" == t ? "html" : "application/json" == t ? "json" : o.test(t) ? "script" : r.test(t) && "xml") || "text"
                                }(s.mimeType || x.getResponseHeader("content-type")), e = x.responseText;
                                try {
                                    "script" == m ? (0, eval)(e) : "xml" == m ? e = x.responseXML : "json" == m && (e = l.test(e) ? null : t.parseJSON(e))
                                } catch (t) {
                                    i = t
                                }
                                i ? u(i, "parsererror", x, s, n) : c(e, x, s, n)
                            } else u(x.statusText || null, x.status ? "error" : "abort", x, s, n)
                        }
                    }, !1 === d(x, s)) return x.abort(), u(null, "abort", x, s, n), x;
                if (s.xhrFields)
                    for (i in s.xhrFields) x[i] = s.xhrFields[i];
                var T = !("async" in s) || s.async;
                for (i in x.open(s.type, s.url, T, s.username, s.password), y) k.apply(x, y[i]);
                return s.timeout > 0 && (g = setTimeout((function() {
                    x.onreadystatechange = p, x.abort(), u(null, "timeout", x, s, n)
                }), s.timeout)), x.send(s.data ? s.data : null), x
            }, t.get = function(e, i, a, s) {
                return t.ajax(f.apply(null, arguments))
            }, t.post = function(e, i, a, s) {
                var n = f.apply(null, arguments);
                return n.type = "POST", t.ajax(n)
            }, t.getJSON = function(e, i, a) {
                var s = f.apply(null, arguments);
                return s.dataType = "json", t.ajax(s)
            }, t.fetchJSON = function(t) {
                var e = new XMLHttpRequest;
                return new Promise((function(i, a) {
                    e.onreadystatechange = function() {
                        try {
                            if (4 !== e.readyState) return;
                            if (e.status >= 200 && e.status < 300) {
                                var s = JSON.parse(e.responseText);
                                i(s)
                            } else a({
                                status: e.status,
                                statusText: e.statusText
                            })
                        } catch (e) {
                            a({
                                status: 400,
                                statusText: `Error fetching JSON from ${t}: ${e}`
                            })
                        }
                    }, e.open("GET", t, !0), e.send()
                }))
            }, t.fn.load = function(e, i, a) {
                if (!this.length) return this;
                var s, o = this,
                    r = e.split(/\s/),
                    l = f(e, i, a),
                    h = l.success;
                return r.length > 1 && (l.url = r[0], s = r[1]), l.success = function(e) {
                    o.html(s ? t("<div>").html(e.replace(n, "")).find(s) : e), h && h.apply(o, arguments)
                }, t.ajax(l), this
            };
            var g = encodeURIComponent;
            t.param = function(e, i) {
                var a = [];
                return a.add = function(t, e) {
                        this.push(g(t) + "=" + g(e))
                    },
                    function e(i, a, s, n) {
                        var o, r = t.isArray(a),
                            l = t.isPlainObject(a);
                        t.each(a, (function(a, h) {
                            o = t.type(h), n && (a = s ? n : n + "[" + (l || "object" == o || "array" == o ? a : "") + "]"), !n && r ? i.add(h.name, h.value) : "array" == o || !s && "object" == o ? e(i, h, s, a) : i.add(a, h)
                        }))
                    }(a, e, i), a.join("&").replace(/%20/g, "+")
            }
        }(ft), (pt = ft).fn.serializeArray = function() {
            var t, e = [];
            return pt([].slice.call(this.get(0).elements)).each((function() {
                var i = (t = pt(this)).attr("type");
                "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
                    name: t.attr("name"),
                    value: t.val()
                })
            })), e
        }, pt.fn.serialize = function() {
            var t = [];
            return this.serializeArray().forEach((function(e) {
                t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
            })), t.join("&")
        }, pt.fn.submit = function(t) {
            if (t) this.bind("submit", t);
            else if (this.length) {
                var e = pt.Event("submit");
                this.eq(0).trigger(e), e.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        },
        function(t) {
            "__proto__" in {} || t.extend(t.zepto, {
                Z: function(e, i) {
                    return e = e || [], t.extend(e, t.fn), e.selector = i || "", e.__Z = !0, e
                },
                isZ: function(e) {
                    return "array" === t.type(e) && "__Z" in e
                }
            });
            try {
                getComputedStyle(void 0)
            } catch (t) {
                var e = getComputedStyle;
                window.getComputedStyle = function(t, i) {
                    try {
                        return e(t, i)
                    } catch (t) {
                        return null
                    }
                }
            }
        }(ft);
    const gt = ft.getJSON, // JSON OBJECT!!! EVERYTHING I NEED
        vt = ft.ajax,
        yt = ft.fetchJSON,
        wt = [
            ["millisecond", 1, function(t) {}],
            ["second", 1e3, function(t) {
                t.setMilliseconds(0)
            }],
            ["minute", 6e4, function(t) {
                t.setSeconds(0)
            }],
            ["hour", 36e5, function(t) {
                t.setMinutes(0)
            }],
            ["day", 864e5, function(t) {
                t.setHours(0)
            }],
            ["month", 2592e6, function(t) {
                t.setDate(1)
            }],
            ["year", 31536e6, function(t) {
                t.setMonth(0)
            }],
            ["decade", 31536e7, function(t) {
                var e = t.getFullYear();
                t.setFullYear(e - e % 10)
            }],
            ["century", 31536e8, function(t) {
                var e = t.getFullYear();
                t.setFullYear(e - e % 100)
            }],
            ["millennium", 31536e9, function(t) {
                var e = t.getFullYear();
                t.setFullYear(e - e % 1e3)
            }]
        ],
        bt = ["millisecond", "second", "minute", "hour", "day", "month", "year"],
        xt = /^([\+-]?\d+?)(-\d{2}?)?(-\d{2}?)?$/,
        kt = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    const Tt = {
            base: {
                millisecond: "time_short",
                second: "time",
                minute: "time_no_seconds_small_date",
                hour: "time_no_seconds_small_date",
                day: "full",
                month: "month",
                year: "year",
                decade: "year",
                century: "year",
                millennium: "year",
                age: "fallback",
                epoch: "fallback",
                era: "fallback",
                eon: "fallback",
                eon2: "fallback"
            },
            short: {
                millisecond: "time_short",
                second: "time_short",
                minute: "time_no_seconds_short",
                hour: "time_no_minutes_short",
                day: "full_short",
                month: "month_short",
                year: "year",
                decade: "year",
                century: "year",
                millennium: "year",
                age: "fallback",
                epoch: "fallback",
                era: "fallback",
                eon: "fallback",
                eon2: "fallback"
            }
        },
        Mt = lt.extend({
            initialize: function(t, e, i) {
                "number" == typeof t ? this.data = {
                    format: "yyyy mmmm",
                    date_obj: new Date(t)
                } : Date == t.constructor ? this.data = {
                    format: "yyyy mmmm",
                    date_obj: t
                } : (this.data = JSON.parse(JSON.stringify(t)), this._createDateObj()), this._setFormat(e, i)
            },
            setDateFormat: function(t) {
                this.data.format = t
            },
            getDisplayDate: function(t, e) {
                if (this.data.display_date) return this.data.display_date;
                t || (t = At.fallback), t.constructor != At && (O("First argument to getDisplayDate must be type Language"), t = At.fallback);
                var i = e || this.data.format;
                return t.formatDate(this.data.date_obj, i)
            },
            getMillisecond: function() {
                return this.getTime()
            },
            getTime: function() {
                return this.data.date_obj.getTime()
            },
            isBefore: function(t) {
                if (!this.data.date_obj.constructor == t.data.date_obj.constructor) throw new S("date_compare_err");
                return "isBefore" in this.data.date_obj ? this.data.date_obj.isBefore(t.data.date_obj) : this.data.date_obj < t.data.date_obj
            },
            isAfter: function(t) {
                if (!this.data.date_obj.constructor == t.data.date_obj.constructor) throw new S("date_compare_err");
                return "isAfter" in this.data.date_obj ? this.data.date_obj.isAfter(t.data.date_obj) : this.data.date_obj > t.data.date_obj
            },
            floor: function(t) {
                for (var e = new Date(this.data.date_obj.getTime()), i = 0; i < wt.length; i++)
                    if (wt[i][2](e), wt[i][0] == t) return new Mt(e);
                throw new S("invalid_scale_err", t)
            },
            _getDateData: function() {
                var t = {
                    year: 0,
                    month: 1,
                    day: 1,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0
                };
                for (var e in C(t, this.data), bt) {
                    if (!q(t[bt[e]]).match(/^-?\d*$/)) throw new S("invalid_date_err", bt[e] + " = '" + t[bt[e]] + "'");
                    var i = parseInt(t[bt[e]]);
                    isNaN(i) && (i = 4 == e || 5 == e ? 1 : 0), t[bt[e]] = i
                }
                return t.month > 0 && t.month <= 12 && (t.month = t.month - 1), t
            },
            _createDateObj: function() {
                var t = this._getDateData();
                this.data.date_obj = new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond), this.data.date_obj.getFullYear() != t.year && this.data.date_obj.setFullYear(t.year)
            },
            findBestFormat: function(t) {
                for (var e = bt, i = 0; i < e.length; i++)
                    if (this.data[e[i]]) return t ? t in Tt || (t = "short") : t = "base", Tt[t][e[i]];
                return ""
            },
            _setFormat: function(t, e) {
                t ? this.data.format = t : this.data.format || (this.data.format = this.findBestFormat()), e ? this.data.format_short = e : this.data.format_short || (this.data.format_short = this.findBestFormat(!0))
            }
        });

    function Lt(t) {
        if (t.match(xt)) {
            var e = t.match(xt).slice(1),
                i = {
                    year: e[0].replace("+", "")
                };
            return e[1] && (i.month = e[1].replace("-", "")), e[2] && (i.day = e[2].replace("-", "")), i
        }
        if (t.match(kt)) return cls.parseISODate(t);
        if (t.match(/^\-?\d+$/)) return {
            year: t
        };
        var a = {};
        if (t.match(/\d+\/\d+\/\d+/)) {
            var s = t.match(/\d+\/\d+\/\d+/)[0];
            t = q(t.replace(s, ""));
            var n = s.split("/");
            a.month = n[0], a.day = n[1], a.year = n[2]
        }
        if (t.match(/\d+\/\d+/)) {
            s = t.match(/\d+\/\d+/)[0];
            t = q(t.replace(s, ""));
            n = s.split("/");
            a.month = n[0], a.year = n[1]
        }
        if (t.match(":")) {
            var o = t.split(":");
            if (a.hour = o[0], a.minute = o[1], o[2]) {
                let t = o[2].split(".");
                a.second = t[0], a.millisecond = t[1]
            }
        }
        return a
    }
    const Et = lt.extend({
        initialize: function(t) {
            if (this.year = parseInt(t), isNaN(this.year)) throw new S("invalid_year_err", t)
        },
        isBefore: function(t) {
            return this.year < t.year
        },
        isAfter: function(t) {
            return this.year > t.year
        },
        getTime: function() {
            return this.year
        }
    });

    function Dt(t) {
        return function(e) {
            var i = e.getTime();
            return new Et(Math.floor(i / t) * t)
        }
    }
    const St = [
            ["year", 1, new Dt(1)],
            ["decade", 10, new Dt(10)],
            ["century", 100, new Dt(100)],
            ["millennium", 1e3, new Dt(1e3)],
            ["age", 1e6, new Dt(1e6)],
            ["epoch", 1e7, new Dt(1e7)],
            ["era", 1e8, new Dt(1e8)],
            ["eon", 1e9, new Dt(1e9)]
        ],
        Nt = Mt.extend({
            initialize: function(t, e, i) {
                Et == t.constructor ? this.data = {
                    date_obj: t
                } : (this.data = JSON.parse(JSON.stringify(t)), this._createDateObj()), this._setFormat(e, i)
            },
            _createDateObj: function() {
                var t = this._getDateData();
                this.data.date_obj = new Et(t.year)
            },
            floor: function(t) {
                for (var e = 0; e < St.length; e++)
                    if (St[e][0] == t) {
                        var i = St[e][2](this.data.date_obj);
                        return new Nt(i)
                    } throw new S("invalid_scale_err", t)
            }
        });
    class At {
        constructor(t, e) {
            for (let t in jt.en) this[t] = jt.en[t];
            if (t && "string" == typeof t && "en" != t) {
                var i = t;
                if (!(i in jt)) {
                    console.log(`Expected language ${i} to be cached. Did you call the constructor directly?`);
                    var a = Ct(i, e);
                    yt(a).then(t => {
                        jt[i] = t
                    }).catch(t => {
                        console.log(`Error loading language [${a}] ${t.statusText} [${t.status}]`)
                    })
                }
                C(this, jt[i])
            }
        }
        mergeData(t) {
            for (k in jt.en) t[k] && ("object" == typeof this[k] ? C(t[k], this[k]) : this[k] = t[k])
        }
        formatBigYear(t, e) {
            var i = t.year,
                a = this.bigdateformats[e] || this.bigdateformats.fallback;
            if (a) {
                for (var s = 0; s < a.length; s++) {
                    var n = a[s];
                    if (Math.abs(i / n[0]) > 1) return It(Math.abs(i / n[0]), n[1])
                }
                return i.toString()
            }
            return O("Language file dateformats missing cosmological. Falling back."), It(i, e)
        }
        _(t) {
            return this.messages[t] || At.fallback.messages[t] || t
        }
        formatDate(t, e) {
            return t.constructor == Date ? this.formatJSDate(t, e) : t.constructor == Et ? this.formatBigYear(t, e) : t.data && t.data.date_obj ? this.formatDate(t.data.date_obj, e) : (O("Unfamiliar date presented for formatting"), t.toString())
        }
        formatJSDate(t, e) {
            var i = this,
                a = function(t, e) {
                    var a = i.period_labels[t];
                    if (a) t = e < 12 ? a[0] : a[1];
                    return "<span class='tl-timeaxis-timesuffix'>" + t + "</span>"
                };
            e || (e = "full");
            var s = this.dateformats[e] || At.fallback.dateformats[e];
            s || (s = e);
            var n = t.getDate(),
                o = t.getDay(),
                r = t.getMonth(),
                l = t.getFullYear(),
                h = t.getHours(),
                d = t.getMinutes(),
                c = t.getSeconds(),
                u = t.getMilliseconds(),
                m = t.getTimezoneOffset(),
                p = {
                    d: n,
                    dd: z(n),
                    ddd: this.date.day_abbr[o],
                    dddd: this.date.day[o],
                    m: r + 1,
                    mm: z(r + 1),
                    mmm: this.date.month_abbr[r],
                    mmmm: this.date.month[r],
                    yy: String(l).slice(2),
                    yyyy: l < 0 && this.has_negative_year_modifier() ? Math.abs(l) : l,
                    h: h % 12 || 12,
                    hh: z(h % 12 || 12),
                    H: h,
                    HH: z(h),
                    M: d,
                    MM: z(d),
                    s: c,
                    ss: z(c),
                    l: z(u, 3),
                    L: z(u > 99 ? Math.round(u / 10) : u),
                    t: a("t", h),
                    tt: a("tt", h),
                    T: a("T", h),
                    TT: a("TT", h),
                    Z: (String(t).match(/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g) || [""]).pop().replace(/[^-+\dA-Z]/g, ""),
                    o: (m > 0 ? "-" : "+") + z(100 * Math.floor(Math.abs(m) / 60) + Math.abs(m) % 60, 4),
                    S: ["th", "st", "nd", "rd"][n % 10 > 3 ? 0 : (n % 100 - n % 10 != 10) * n % 10]
                },
                _ = s.replace(At.DATE_FORMAT_TOKENS, (function(t) {
                    return t in p ? p[t] : t.slice(1, t.length - 1)
                }));
            return this._applyEra(_, l)
        }
        has_negative_year_modifier() {
            return Boolean(this.era_labels.negative_year.prefix || this.era_labels.negative_year.suffix)
        }
        _applyEra(t, e) {
            var i = e < 0 ? this.era_labels.negative_year : this.era_labels.positive_year,
                a = "";
            return i.prefix && (a += "<span>" + i.prefix + "</span> "), a += t, i.suffix && (a += " <span>" + i.suffix + "</span>"), a
        }
    }

    function Ct(t, e) {
        if (/\.json$/.test(t)) var i = t;
        else {
            var a = "/locale/" + t + ".json";
            /\/$/.test(e) && (a = a.substr(1));
            i = e + a
        }
        return i
    }

    function It(t, e) {
        if (e.match(/%(\.(\d+))?f/)) {
            var i = e.match(/%(\.(\d+))?f/),
                a = i[0];
            return i[2] && (t = t.toFixed(i[2])), e.replace(a, t)
        }
        return e
    }
    At.fallback = {
        messages: {}
    }, At.DATE_FORMAT_TOKENS = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
    var jt = {
        en: {
            name: "English (built-in)",
            lang: "en",
            api: {
                wikipedia: "en"
            },
            messages: {
                loading: "Loading",
                wikipedia: "From Wikipedia, the free encyclopedia",
                error: "Error",
                contract_timeline: "Contract Timeline",
                return_to_title: "Return to Title",
                loading_content: "Loading Content",
                expand_timeline: "Expand Timeline",
                loading_timeline: "Loading Timeline... ",
                swipe_to_navigate: "Swipe to Navigate<br><span class='tl-button'>OK</span>",
                unknown_read_err: "An unexpected error occurred trying to read your spreadsheet data",
                invalid_url_err: "Unable to read Timeline data. Make sure your URL is for a Google Spreadsheet or a Timeline JSON file.",
                invalid_url_share_required: "Because of unexpected changes to Google's data access API, the creator of this timeline must enable 'anyone with the url can read' access for this spreadsheet. See timeline.knightlab.com for more information.",
                network_err: "Unable to read your Google Spreadsheet. Make sure you have published it to the web.",
                empty_feed_err: "No data entries found",
                missing_start_date_err: "Missing start_date",
                invalid_data_format_err: "Header row has been modified.",
                invalid_start_time_without_date: "Invalid configuration: time cannot be used without date.",
                invalid_end_time_without_date: "Invalid configuration: end time cannot be used without end date.",
                date_compare_err: "Can't compare timeline date objects on different scales",
                invalid_scale_err: "Invalid scale",
                invalid_date_err: "Invalid date: month, day and year must be numbers.",
                invalid_separator_error: "Invalid time: misuse of : or . as separator.",
                invalid_hour_err: "Invalid time (hour)",
                invalid_minute_err: "Invalid time (minute)",
                invalid_second_err: "Invalid time (second)",
                invalid_fractional_err: "Invalid time (fractional seconds)",
                invalid_second_fractional_err: "Invalid time (seconds and fractional seconds)",
                invalid_year_err: "Invalid year",
                flickr_notfound_err: "Photo not found or private",
                flickr_invalidurl_err: "Invalid Flickr URL",
                imgur_invalidurl_err: "Invalid Imgur URL",
                twitter_invalidurl_err: "Invalid Twitter URL",
                twitter_load_err: "Unable to load Tweet",
                twitterembed_invalidurl_err: "Invalid Twitter Embed url",
                wikipedia_load_err: "Unable to load Wikipedia entry",
                youtube_invalidurl_err: "Invalid YouTube URL",
                spotify_invalid_url: "Invalid Spotify URL",
                template_value_err: "No value provided for variable",
                invalid_rgb_err: "Invalid RGB argument",
                time_scale_scale_err: "Don't know how to get date from time for scale",
                axis_helper_no_options_err: "Axis helper must be configured with options",
                axis_helper_scale_err: "No AxisHelper available for scale",
                invalid_integer_option: "Invalid option value—must be a whole number.",
                instagram_bad_request: "Invalid or private Instagram URL"
            },
            date: {
                month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                month_abbr: ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
                day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                day_abbr: ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."]
            },
            era_labels: {
                positive_year: {
                    prefix: "",
                    suffix: ""
                },
                negative_year: {
                    prefix: "",
                    suffix: "BCE"
                }
            },
            period_labels: {
                t: ["a", "p"],
                tt: ["am", "pm"],
                T: ["A", "P"],
                TT: ["AM", "PM"]
            },
            dateformats: {
                year: "yyyy",
                month_short: "mmm",
                month: "mmmm yyyy",
                full_short: "mmm d",
                full: "mmmm d',' yyyy",
                time: "h:MM:ss TT' <small>'mmmm d',' yyyy'</small>'",
                time_short: "h:MM:ss TT",
                time_no_seconds_short: "h:MM TT",
                time_no_minutes_short: "h TT",
                time_no_seconds_small_date: "h:MM TT' <small>'mmmm d',' yyyy'</small>'",
                time_milliseconds: "l",
                full_long: "mmm d',' yyyy 'at' h:MM TT",
                full_long_small_date: "h:MM TT' <small>mmm d',' yyyy'</small>'"
            },
            bigdateformats: {
                fallback: [
                    [1e9, "%.2f billion years ago"],
                    [1e6, "%.1f million years ago"],
                    [1e3, "%.1f thousand years ago"],
                    [1, "%f years ago"]
                ],
                compact: [
                    [1e9, "%.2f bya"],
                    [1e6, "%.1f mya"],
                    [1e3, "%.1f kya"],
                    [1, "%f years ago"]
                ],
                verbose: [
                    [1e9, "%.2f billion years ago"],
                    [1e6, "%.1f million years ago"],
                    [1e3, "%.1f thousand years ago"],
                    [1, "%f years ago"]
                ]
            }
        }
    };
    let Ot = new At;
    At.fallback = Ot;
    class zt { // Language
        setLanguage(t) {
            this.language = t
        }
        getLanguage() {
            if (this.language) {
                if ("object" == typeof this.language) return this.language;
                O(`I18NMixins.getLanguage: this.language should be object, but is ${typeof this.language}`)
            }
            return Ot
        }
        _(t) {
            return this.getLanguage()._(t)
        }
    }
    class Rt { // Message
        constructor(t, e, i) {
            i && this.setLanguage(i), this._el = {
                parent: {},
                container: {},
                message_container: {},
                loading_icon: {},
                message: {}
            }, this.options = {
                width: 600,
                height: 600,
                message_class: "tl-message",
                message_icon_class: "tl-loading-icon"
            }, this.container = t, C(this.options, e), this._el.container = T("div", this.options.message_class), t && (t.appendChild(this._el.container), this._el.parent = t), this.animator = {}, this._initLayout(), this._initEvents()
        }
        updateMessage(t) {
            this._el.message.innerHTML = t || this._("loading"), !this._el.parent.atributes && this.container.attributes && (this.container.appendChild(this._el.container), this._el.parent = this.container)
        }
        updateDisplay(t, e) {}
        _onMouseClick() {
            this.fire("clicked", this.options)
        }
        _onRemove() {
            this._el.parent = {}
        }
        _initLayout() {
            this._el.message_container = T("div", "tl-message-container", this._el.container), this._el.loading_icon = T("div", this.options.message_icon_class, this._el.message_container), this._el.message = T("div", "tl-message-content", this._el.message_container), this.updateMessage()
        }
        _initEvents() {
            _t.addListener(this._el.container, "click", this._onMouseClick, this), _t.addListener(this, "removed", this._onRemove, this)
        }
    }

    function Pt(t, e) {
        e = e || "start_date";
        t.sort((function(t, i) {
            return t[e].isBefore(i[e]) ? -1 : t[e].isAfter(i[e]) ? 1 : 0
        }))
    }

    function Ht(t) {
        var e = {
                hour: null,
                minute: null,
                second: null,
                millisecond: null
            },
            i = null,
            a = t.match(/(\s*[AaPp]\.?[Mm]\.?\s*)$/);
        a && (i = q(a[0]), t = q(t.substring(0, t.lastIndexOf(i))));
        var s = [],
            n = t.match(/^\s*(\d{1,2})(\d{2})\s*$/);
        if (n ? s = n.slice(1) : 1 == (s = t.split(":")).length && (s = t.split(".")), s.length > 4) throw new S("invalid_separator_error");
        let o = s[0];
        if (e.hour = parseInt(o), i && "p" == i.toLowerCase()[0] && 12 != e.hour ? e.hour += 12 : i && "a" == i.toLowerCase()[0] && 12 == e.hour && (e.hour = 0), isNaN(e.hour) || e.hour < 0 || e.hour > 23) throw new S("invalid_hour_err", o);
        if (s.length > 1) {
            let t = s[1];
            if (e.minute = parseInt(t), isNaN(e.minute)) throw new S("invalid_minute_err", t)
        }
        if (s.length > 2) {
            var r = s[2].split(/[\.,]/);
            if ((s = r.concat(s.slice(3))).length > 2) throw new S("invalid_second_fractional_err");
            if (e.second = parseInt(s[0]), isNaN(e.second)) throw new S("invalid_second_err", s[0]);
            if (2 == s.length) {
                var l = parseInt(s[1]);
                if (isNaN(l)) throw new S("invalid_fractional_err", s[1]);
                e.millisecond = 100 * l
            }
        }
        return e
    }
    F(Rt, zt, ht, ut);
    const qt = new RegExp("(^-?\\d+$|^$)");

    function Ft(t) {
        try {
            return Object.keys(t).forEach(e => {
                let i = t[e];
                if (i && i.match && !i.match(qt)) throw `invalid value ${i} for ${e}`
            }), !0
        } catch (t) {
            return !1
        }
    }
    const $t = {
        human: Mt,
        cosmological: Nt
    };
    var Bt = i(0),
        Ut = i.n(Bt);
    const Wt = {
            text: ["headline", "text"],
            media: ["caption", "credit"]
        },
        Gt = {
            start_date: ["display_date"],
            end_date: ["display_date"],
            slide: ["display_date", "group"],
            date: ["display_date"]
        }
        //  ,
        // Dt = {
        //     event_types: ["event_types"]
        // };

    function Zt(t, e, i) {
        Object.keys(i).forEach(a => {
            var s = "slide" == a ? t : t[a];
            s && i[a].forEach(t => {
                void 0 !== s[t] && (s[t] = e(s[t]))
            })
        })
    }

    function Yt(t) {
        return Ut.a.sanitize(t, {
            ADD_TAGS: ["iframe"],
            ADD_ATTR: ["frameborder", "target"]
        })
    }
    Ut.a.addHook("afterSanitizeAttributes", (function(t) {
        if ("A" == t.nodeName && "href" in t) {
            "target" in t.attributes || t.setAttribute("target", "_blank");
            let e = t.attributes.rel;
            e ? -1 == e.value.indexOf("noopener") && t.setAttribute("rel", `noopener ${e.value}`) : t.setAttribute("rel", "noopener")
        }
    }));
    class Vt { // TimelineConfig
        constructor(t) {
            // If it doesnt already come contained with this infomration;
            if (this.title = "", this.scale = "", this.events = [], this.eras = [], this.event_dict = {}, this.displayed_ids = [], this.selected_types = [], this.messages = {
                    errors: [],
                    warnings: []
                }, "object" == typeof t && t.events) {
                if (this.scale = t.scale, this.events = [], this._ensureValidScale(t.events), t.title) {
                    var e = this._assignID(t.title);
                    this._tidyFields(t.title), this.title = t.title, this.event_dict[e] = this.title
                }
                for (var i = 0; i < t.events.length; i++) try {
                    this.addEvent(t.events[i], !0)
                } catch (t) {
                    this.logError(t)
                }
                t.eras && t.eras.forEach((t, e) => {
                    try {
                        this.addEra(t)
                    } catch (t) {
                        this.logError("Era " + e + ": " + t)
                    }
                }), Pt(this.events), Pt(this.eras)
            }
            // otherwise do nothing.
        }
        logError(t) {
            O(`logError: ${t}`), this.messages.errors.push(t)
        }
        getErrors(t) {
            return t ? this.messages.errors.join(t) : this.messages.errors
        }
        validate() {
            void 0 !== this.events && void 0 !== this.events.length && 0 != this.events.length || this.logError("Timeline configuration has no events.");
            for (var t = 0; t < this.eras.length; t++) {
                var e;
                if (void 0 === this.eras[t].start_date || void 0 === this.eras[t].end_date) e = this.eras[t].headline ? this.eras[t].headline : "era " + (t + 1), this.logError("All eras must have start and end dates. [" + e + "]")
            }
        }
        isValid() {
            return 0 == this.messages.errors.length
        }
        addEvent(t, e) {
            var i = this._assignID(t);
            return void 0 === t.start_date ? (O("Missing start date, skipping event"), console.log(t), null) : (this._processDates(t), this._tidyFields(t), this.events.push(t), this.event_dict[i] = t, this.displayed_ids.push(i), e || Pt(this.events), i)
        }        

        addEra(t) {
            var e = this._assignID(t);
            if (void 0 === t.start_date) throw new S("missing_start_date_err", e);
            this._processDates(t), this._tidyFields(t), this.eras.push({
                start_date: t.start_date,
                end_date: t.end_date,
                headline: t.text.headline
            })
        }

        _emptyDisplayedSlides() {
            this.displayed_ids.empty(); // Empties the displayed slides, saving all data in events in the process.
        }
    
        _removeDisplayedSlideIndex(index) {
            
            delete this.displayed_ids[index]
        }
        _assignID(t) {
            var e = t.unique_id;
            return q(e) || (e = t.text ? $(t.text.headline) : null), t.unique_id = function(t, e) {
                if (e || (e = B(6)), !(e in t)) return e;
                var i = e.match(/^(.+)(-\d+)?$/)[1],
                    a = [];
                for (let e in t) e.match(/^(.+?)(-\d+)?$/)[1] == i && a.push(e);
                e = i + "-" + (a.length + 1);
                for (var s = a.length; - 1 != a.indexOf(e); s++) e = i + "-" + s;
                return e
            }(this.event_dict, e), t.unique_id
        }
        _makeUniqueIdentifiers(t, e) {
            for (var i = [t], a = 0; a < e.length; a++) q(e[a].unique_id) && (e[a].unique_id = $(e[a].unique_id), -1 == i.indexOf(e[a].unique_id) ? i.push(e[a].unique_id) : e[a].unique_id = "");
            if (i.length != e.length + 1)
                for (a = 0; a < e.length; a++)
                    if (!e[a].unique_id) {
                        var s = e[a].text ? $(e[a].text.headline) : null;
                        s || (s = B(6)), -1 != i.indexOf(s) && (s = s + "-" + a), i.push(s), e[a].unique_id = s
                    }
        }
        _ensureValidScale(t) {
            if (!this.scale) {
                this.scale = "human";
                for (var e = 0; e < t.length; e++) {
                    if ("cosmological" == t[e].scale) {
                        this.scale = "cosmological";
                        break
                    }
                    if (t[e].start_date && void 0 !== t[e].start_date.year) {
                        var i = new Nt(t[e].start_date).data.date_obj.year;
                        if (i < -271820 || i > 275759) {
                            this.scale = "cosmological";
                            break
                        }
                    }
                }
                O(`Determining scale dynamically: ${this.scale}`)
            }
            $t[this.scale] || this.logError("Don't know how to process dates on scale " + this.scale)
        }
        _processDates(t) {
            var e = $t[this.scale];
            if (!(t.start_date instanceof e)) {
                var i = t.start_date;
                if (t.start_date = new e(i), void 0 !== t.end_date && !(t.end_date instanceof e)) {
                    var a = t.end_date,
                        s = !0;
                    for (let t in i) s = s && i[t] == a[t];
                    s ? (O("End date same as start date is redundant; dropping end date"), delete t.end_date) : t.end_date = new e(a)
                }
            }
        }
        getEarliestDate() {
            var t = this.events[0].start_date;
            return this.eras && this.eras.length > 0 && this.eras[0].start_date.isBefore(t) ? this.eras[0].start_date : t
        }
        getLatestDate() {
            for (var t = [], e = 0; e < this.events.length; e++) this.events[e].end_date ? t.push({
                date: this.events[e].end_date
            }) : t.push({
                date: this.events[e].start_date
            });
            for (e = 0; e < this.eras.length; e++) this.eras[e].end_date ? t.push({
                date: this.eras[e].end_date
            }) : t.push({
                date: this.eras[e].start_date
            });
            return Pt(t, "date"), t.slice(-1)[0].date
        }
        _tidyFields(t) {
            function e(t, e, i) {
                i || (i = ""), t.hasOwnProperty(e) || (t[e] = i)
            }
            t.group && (t.group = q(t.group)), t.text || (t.text = {}), e(t.text, "text"), e(t.text, "headline"), Zt(t, Yt, Wt), Zt(t, it, Gt, Dt)
        }
    }
    async function Jt(t) {
        return new Promise((e, i) => {
            if (t.data) {
                var a = Xt(Kt(t.data, t), t);
                a.useMemoryStore = !0, e(a)
            } else t.url && window.fetch(t.url, {
                mode: "cors"
            }).then((function(t) {
                if (200 == t.status) return t.text ? t.text() : t;
                "application/json" == t.headers.get("content-type") ? t.text().then(t => {
                    i(JSON.parse(t))
                }) : i({
                    status_code: t.status,
                    message: `Error fetching CSV: [${t.status} ${t.statusText}]`
                })
            })).then((function(i) {
                if (i) {
                    var a = function(t, e) {
                        let i = Xt(Kt(t, e)),
                            a = [];
                        return i.records.forEach(t => {
                            let e = {};
                            i.fields.forEach((i, a) => e[i] = t[a]), a.push(e)
                        }), a
                    }(i, t);
                    a.useMemoryStore = !0, e(a)
                }
            })).catch(t => {
                i({
                    status_code: 500,
                    message: `Error fetching CSV: ${t}`
                })
            })
        })
    }

    function Xt(t, e) {
        return !0 !== (e = e || {}).noHeaderRow && t.length > 0 ? {
            fields: t[0].map((t, e) => t && t.trim ? t.trim() : `untitled${e}`),
            records: t.slice(1)
        } : {
            records: t
        }
    }

    function Kt(t, e) {
        (!e || e && !e.lineterminator) && (t = function(t, e) {
            if (e && !e.lineterminator) return t.replace(/(\r\n|\n|\r)/gm, "\n");
            return t
        }(t, e));
        var i = function(t) {
            var e = {
                delimiter: ",",
                doublequote: !0,
                lineterminator: "\n",
                quotechar: '"',
                skipinitialspace: !0,
                skipinitialrows: 0
            };
            for (var i in t) "trim" === i ? e.skipinitialspace = t.trim : e[i.toLowerCase()] = t[i];
            return e
        }(e);
        t = function(t, e) {
            return null == t ? "" : (e = e || "\n", t.charAt(t.length - e.length) !== e ? t : t.substring(0, t.length - e.length))
        }(t, i.lineterminator);
        var a, s, n = "",
            o = !1,
            r = !1,
            l = "",
            h = [],
            d = [];
        for (s = function(t) {
                return !0 !== r && ("" === t ? t = null : !0 === i.skipinitialspace && (t = t.trim())), t
            }, a = 0; a < t.length; a += 1) n = t.charAt(a), !1 !== o || n !== i.delimiter && n !== i.lineterminator ? n !== i.quotechar ? l += n : o ? t.charAt(a + 1) === i.quotechar ? (l += i.quotechar, a += 1) : o = !1 : (o = !0, r = !0) : (l = s(l), h.push(l), n === i.lineterminator && (d.push(h), h = []), l = "", r = !1);
        return l = s(l), h.push(l), d.push(h), i.skipinitialrows && (d = d.slice(i.skipinitialrows)), d
    }

    function Qt(t) {
        if (t) return t.replace(/[\s,]+/g, "")
    }

    function te(t) {
        let e = {
            key: null,
            worksheet: 0
        };
        var i = /\bkey=([-_A-Za-z0-9]+)&?/i,
            a = /docs.google.com\/spreadsheets(.*?)\/d\//;
        if (t.match(i)) e.key = t.match(i)[1];
        else if (t.match(a)) {
            var s = t.search(a) + t.match(a)[0].length,
                n = t.substr(s);
            e.key = n.split("/")[0], t.match(/\?gid=(\d+)/) && (e.worksheet = t.match(/\?gid=(\d+)/)[1])
        } else t.match(/^\b[-_A-Za-z0-9]+$/) && (e.key = t);
        return e.key ? e : null
    }
    async function ee(t, e) {
        let i = [];
        t = function(t) {
            if ((t = t.trim()).match(/^[a-zA-Z0-9-_]+$/)) return `https://docs.google.com/spreadsheets/d/${t}/pub?output=csv`;
            if (t.startsWith("https://docs.google.com/spreadsheets/")) {
                if (t.match(/\/pub\?output=csv$/)) return t;
                let e = new URL(t),
                    i = new URLSearchParams(e.search);
                i.set("output", "csv"), i.get("gid") && i.set("single", "true"), e.search = `?${i.toString()}`;
                let a = e.pathname.substr(0, e.pathname.lastIndexOf("/"));
                return e.pathname = `${a}/pub`, e.toString()
            }
            throw new S("invalid_url_err", t)
        }(t);
        await Jt({
            url: `${e}${t}`
        }).then(t => {
            i = t
            console.log("CSV - " + i) // prints the csv
        }).catch(t => {
            if ("response_not_csv" == t.proxy_err_code) throw new S("Timeline could not read the data for your timeline. Make sure you have published it to the web.");
            throw new S(t.message)
        });
        let a = {
            events: [],
            errors: [],
            warnings: [],
            eras: []
        };
        return i.forEach((t, e) => {
            try {
                if (! function(t) {
                        var e = [];
                        if (Object.keys) e = Object.keys(t);
                        else
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
                        for (var a = 0; a < e.length; a++) {
                            var s = e[a];
                            if (null != t[s] && "string" != typeof t[s]) return !1;
                            if (0 != q(t[s]).length) return !1
                        }
                        return !0
                    }(t)) {
                    ! function(t, e) {
                        var i = "event";
                        void 0 !== t.type && (i = t.type, delete t.type);
                        "title" == i ? e.title ? (e.warnings.push("Multiple title slides detected."), e.events.push(t)) : e.title = t : "era" == i ? e.eras.push(t) : e.events.push(t)
                    }(function(t) {
                        let e = {};
                        Object.keys(t).forEach(i => {
                            e[i] = q(t[i])
                        });
                        var i, a = {
                            media: {
                                caption: e["Media Caption"] || "",
                                credit: e["Media Credit"] || "",
                                url: e.Media || "",
                                thumbnail: e["Media Thumbnail"] || ""
                            },
                            text: {
                                headline: e.Headline || "",
                                text: e.Text || ""
                            },
                            display_date: e["Display Date"] || "",
                            group: e.Group || e.Tag || "",
                            background: (i = e.Background, "string" != typeof i ? "" : i.match(/^(https?:)?\/\/?/) ? {
                                url: i
                            } : {
                                color: i
                            }),
                            type: e.Type || "",
                            event_types: e["Event Types"] || ""
                        };
                        if (Object.keys(e).includes("Start Date") || Object.keys(e).includes("End Date")) e["Start Date"] && (a.start_date = Lt(e["Start Date"])), e["End Date"] && (a.end_date = Lt(e["End Date"]));
                        else {
                            if (e.Year && (a.start_date = {
                                    year: Qt(e.Year),
                                    month: Qt(e.Month) || "",
                                    day: Qt(e.Day) || ""
                                }), e["End Year"] && (a.end_date = {
                                    year: Qt(e["End Year"]) || "",
                                    month: Qt(e["End Month"]) || "",
                                    day: Qt(e["End Day"]) || ""
                                }), e.Time) {
                                if (!a.start_date) throw new S("invalid_start_time_without_date");
                                C(a.start_date, Ht(e.Time))
                            }
                            if (e["End Time"]) {
                                if (!a.end_date) throw new S("invalid_end_time_without_date");
                                C(a.end_date, Ht(e["End Time"]))
                            }
                            if (a.start_date && !Ft(a.start_date)) throw new S("invalid_date_err");
                            if (a.end_date && !Ft(a.end_date)) throw new S("invalid_date_err")
                        }
                        return a
                    }(t), a)
                }
            } catch (i) {
                if (i.constructor == S) a.errors.push(i);
                else {
                    i.message && (i = i.message);
                    let s = t.Headline || e;
                    a.errors.push(i + `[${s}]`)
                }
            }
        }), a
    }
    async function ie(t, e) {
        let i = null,
            a = {};
        if ("function" == typeof e ? i = e : "object" == typeof e && (a = e, i = e.callback, "function" == typeof a.callback && (i = a.callback)), !i) throw new S("Second argument to makeConfig must be either a function or an object which includes a 'callback' property with a 'function' type value");
        var s, n;
        if (te(t)) {
            try {
                n = await async function(t, e) {
                    if (!e.sheets_proxy) throw new S("Proxy option must be set to read data from Google");
                    var i = await ee(t, e.sheets_proxy);
                    console.log(i)
                    if (i) return i
                }(t, a)
            } catch (t) {
                return s = new Vt, "NetworkError" == t.name ? s.logError(new S("network_err")) : "TLError" == t.name ? s.logError(t) : s.logError(new S("unknown_read_err", t.name)), void i(s)
            }
            if (s = new Vt(n), n.errors)
                for (var o = 0; o < n.errors.length; o++) s.logError(n.errors[o]);
            i(s)
        } else vt({
            url: t,
            dataType: "json",
            success: function(t) {
                try {
                    s = new Vt(t) // Creating a new Timeline, with the valid information input.s
                } catch (t) {
                    (s = new Vt).logError(t)
                }
                i(s)
            },
            error: function(t, e, a) {
                if (s = new Vt, "parsererror" == e) a = new S("invalid_url_err");
                else a = new S("unknown_read_err", e);
                s.logError(a), i(s)
            }
        })
    }
    class ae {
        constructor(t) {
            if (!t) throw new S("axis_helper_no_options_err");
            this.scale = t.scale, this.minor = t.minor, this.major = t.major
        }
        getPixelsPerTick(t) {
            return t * this.minor.factor
        }
        getMajorTicks(t) {
            return this._getTicks(t, this.major)
        }
        getMinorTicks(t) {
            return this._getTicks(t, this.minor)
        }
        _getTicks(t, e) {
            for (var i = t._scaled_padding * e.factor, a = t._earliest - i, s = t._latest + i, n = [], o = a; o < s; o += e.factor) n.push(t.getDateFromTime(o).floor(e.name));
            return {
                name: e.name,
                ticks: n
            }
        }
    }
    var se = {},
        ne = function(t, e) {
            se[t] = [];
            for (var i = 0; i < e.length - 1; i++) {
                var a = e[i],
                    s = e[i + 1];
                se[t].push(new ae({
                    scale: a[3],
                    minor: {
                        name: a[0],
                        factor: a[1]
                    },
                    major: {
                        name: s[0],
                        factor: s[1]
                    }
                }))
            }
        };
    ne("human", wt), ne("cosmological", St);
    const oe = {
        millisecond: "time_milliseconds",
        second: "time_short",
        minute: "time_no_seconds_short",
        hour: "time_no_minutes_short",
        day: "full_short",
        month: "month_short",
        year: "year",
        decade: "year",
        century: "year",
        millennium: "year",
        age: "compact",
        epoch: "compact",
        era: "compact",
        eon: "compact",
        eon2: "compact"
    };
    class re {
        constructor(t, e) {
            var i = t.events;
            this._scale = t.scale, e = C({
                display_width: 500,
                screen_multiplier: 3,
                max_rows: null
            }, e), this._display_width = e.display_width, this._screen_multiplier = e.screen_multiplier, this._pixel_width = this._screen_multiplier * this._display_width, this._group_labels = void 0, this._positions = [], this._pixels_per_milli = 0, this._earliest = t.getEarliestDate().getTime(), this._latest = t.getLatestDate().getTime(), this._span_in_millis = this._latest - this._earliest, this._span_in_millis <= 0 && (this._span_in_millis = this._computeDefaultSpan(t)), this._average = this._span_in_millis / i.length, this._pixels_per_milli = this.getPixelWidth() / this._span_in_millis, this._axis_helper = function(t, e) {
                "number" != typeof e && (e = 100);
                var i = t.getScale(),
                    a = se[i];
                if (!a) throw new S("axis_helper_scale_err", i);
                for (var s = null, n = 0; n < a.length; n++) {
                    var o = a[n],
                        r = o.getPixelsPerTick(t._pixels_per_milli);
                    if (r > e) return null == s || Math.abs(e - r) < Math.abs(e - r) ? o : s;
                    s = o
                }
                return a[a.length - 1]
            }(this), this._scaled_padding = 1 / this.getPixelsPerTick() * (this._display_width / 2), this._computePositionInfo(i, e.max_rows)
        }
        _computeDefaultSpan(t) {
            if ("human" == t.scale) {
                for (var e = {}, i = 0; i < t.events.length; i++) {
                    var a = t.events[i].start_date.findBestFormat();
                    e[a] = e[a] ? e[a] + 1 : 1
                }
                for (i = wt.length - 1; i >= 0; i--)
                    if (e.hasOwnProperty(wt[i][0])) {
                        var s = wt[wt.length - 1];
                        return wt[i + 1] && (s = wt[i + 1]), s[1]
                    } return 31536e6
            }
            return 2e5
        }
        getGroupLabels() {
            return this._group_labels || []
        }
        getScale() {
            return this._scale
        }
        getNumberOfRows() {
            return this._number_of_rows
        }
        getPixelWidth() {
            return this._pixel_width
        }
        getPosition(t) {
            return (t - this._earliest) * this._pixels_per_milli
        }
        getPositionInfo(t) {
            return this._positions[t]
        }
        getPixelsPerTick() {
            return this._axis_helper.getPixelsPerTick(this._pixels_per_milli)
        }
        getTicks() {
            return {
                major: this._axis_helper.getMajorTicks(this),
                minor: this._axis_helper.getMinorTicks(this)
            }
        }
        getDateFromTime(t) {
            if ("human" == this._scale) return new Mt(t);
            if ("cosmological" == this._scale) return new Nt(new Et(t));
            throw new S("time_scale_scale_err", this._scale)
        }
        getMajorScale() {
            return this._axis_helper.major.name
        }
        getMinorScale() {
            return this._axis_helper.minor.name
        }
        _assessGroups(t) {
            for (var e = [], i = !1, a = 0; a < t.length; a++) t[a].group && (e.indexOf(t[a].group) < 0 ? e.push(t[a].group) : i = !0);
            return e.length && i && e.push(""), e
        }
        _computeRowInfo(t, e) {
            for (var i = [], a = 0, s = 0; s < t.length; s++) {
                var n = t[s],
                    o = [];
                delete n.row;
                for (var r = 0; r < i.length; r++)
                    if (o.push(i[r].end - n.start), o[r] <= 0) {
                        n.row = r, i[r] = n;
                        break
                    } if (void 0 === n.row)
                    if (null === e) n.row = i.length, i.push(n);
                    else if (e > 0) n.row = i.length, i.push(n), e--;
                else {
                    var l = Math.min.apply(null, o),
                        h = o.indexOf(l);
                    n.row = h, n.end > i[h].end && (i[h] = n), a++
                }
            }
            return {
                n_rows: i.length,
                n_overlaps: a
            }
        }
        _computePositionInfo(t, e, i) {
            i = i || 100;
            for (var a = [], s = !1, n = 0; n < t.length; n++) {
                var o = {
                    start: this.getPosition(t[n].start_date.getTime())
                };
                if (this._positions.push(o), void 0 !== t[n].end_date) {
                    var r = this.getPosition(t[n].end_date.getTime());
                    o.width = r - o.start, o.width > i ? o.end = o.start + o.width : o.end = o.start + i
                } else o.width = i, o.end = o.start + i;
                t[n].group ? a.indexOf(t[n].group) < 0 && a.push(t[n].group) : s = !0
            }
            if (a.length) {
                s && a.push("");
                var l = [];
                for (n = 0; n < a.length; n++) l[n] = {
                    label: a[n],
                    idx: n,
                    positions: [],
                    n_rows: 1,
                    n_overlaps: 0
                };
                for (n = 0; n < this._positions.length; n++) {
                    (o = this._positions[n]).group = a.indexOf(t[n].group || ""), o.row = 0;
                    for (var h = (u = l[o.group]).positions.length - 1; h >= 0; h--) u.positions[h].end > o.start && u.n_overlaps++;
                    u.positions.push(o)
                }
                for (var d = a.length;;) {
                    var c = Math.max(0, e - d);
                    if (!c) break;
                    if (l.sort((function(t, e) {
                            return t.n_overlaps > e.n_overlaps ? -1 : t.n_overlaps < e.n_overlaps ? 1 : t.idx - e.idx
                        })), !l[0].n_overlaps) break;
                    for (d = 0, n = 0; n < l.length; n++) {
                        var u;
                        if ((u = l[n]).n_overlaps && c) {
                            var m = this._computeRowInfo(u.positions, u.n_rows + 1);
                            u.n_rows = m.n_rows, u.n_overlaps = m.n_overlaps, c--
                        }
                        d += u.n_rows
                    }
                }
                this._number_of_rows = d, this._group_labels = [], l.sort((function(t, e) {
                    return t.idx - e.idx
                }));
                n = 0;
                for (var p = 0; n < l.length; n++) {
                    this._group_labels.push({
                        label: l[n].label,
                        rows: l[n].n_rows
                    });
                    for (h = 0; h < l[n].positions.length; h++) {
                        (o = l[n].positions[h]).row += p
                    }
                    p += l[n].n_rows
                }
            } else {
                var _ = this._computeRowInfo(this._positions, e);
                this._number_of_rows = _.n_rows
            }
        }
        getAxisTickDateFormat(t) {
            return "cosmological" == this._scale ? "compact" : oe[t]
        }
    }
    class le { // TimeGroup
        constructor(t) {
            this._el = {
                parent: {},
                container: {},
                message: {}
            }, this.options = {
                width: 600,
                height: 600
            }, this.data = {
                label: "",
                rows: 1
            }, this._el.container = T("div", "tl-timegroup"), C(this.data, t), this.animator = {}, this._initLayout(), this._initEvents()
        }
        updateDisplay(t, e) {}
        setRowPosition(t, e) {
            this.options.height = e * this.data.rows, this.setPosition({
                top: t
            }), this._el.container.style.height = this.options.height + "px"
        }
        setAlternateRowColor(t, e) {
            var i = "tl-timegroup";
            t && (i += " tl-timegroup-alternate"), e && (i += " tl-timegroup-hidden"), this._el.container.className = i
        }
        _onMouseClick() {
            this.fire("clicked", this.options)
        }
        _initLayout() {
            this._el.message = T("div", "tl-timegroup-message", this._el.container), this._el.message.innerHTML = this.data.label
        }
        _initEvents() {
            _t.addListener(this._el.container, "click", this._onMouseClick, this)
        }
        _updateDisplay(t, e, i) {}
    }
    F(le, ht, ut);
    class he { // Create Eras
        constructor(t, e, i, a) {
            this.start_date = t, this.end_date = e, this.headline = i, this._el = {
                container: {},
                background: {},
                content_container: {},
                content: {},
                text: {}
            }, this._text = {}, this._state = {
                loaded: !1
            }, this.options = {
                duration: 1e3,
                ease: nt,
                width: 600,
                height: 600,
                marker_width_min: 100
            }, this.active = !1, this.animator = {}, this.has_end_date = !1, C(this.options, a), this._initLayout(), this._initEvents()
        }
        show() {}
        hide() {}
        setActive(t) {}
        addTo(t) {
            t.appendChild(this._el.container)
        }
        removeFrom(t) {
            t.removeChild(this._el.container)
        }
        updateDisplay(t, e) {
            this._updateDisplay(t, e)
        }
        getLeft() {
            return this._el.container.style.left.slice(0, -2)
        }
        getTime() {
            return this.start_date.getTime()
        }
        getEndTime() {
            return !!this.end_date && this.end_date.getTime()
        }
        setHeight(t) {
            var e = 1;
            this._el.content_container.style.height = t + "px", this._el.content.className = "tl-timeera-content", l ? ((e = Math.floor(t / 14)) < 1 && (e = 1), this._text.className = "tl-headline", this._text.style.webkitLineClamp = e) : (e = t / 12, this._text.className = e > 1 ? "tl-headline tl-headline-fadeout" : "tl-headline", this._text.style.height = 12 * e + "px")
        }
        setWidth(t) {
            this.end_date && (this._el.container.style.width = t + "px", t > this.options.marker_width_min ? (this._el.content_container.style.width = t + "px", this._el.content_container.className = "tl-timeera-content-container tl-timeera-content-container-long") : (this._el.content_container.style.width = this.options.marker_width_min + "px", this._el.content_container.className = "tl-timeera-content-container"))
        }
        setClass(t) {
            this._el.container.className = t
        }
        setRowPosition(t, e) {
            this.setPosition({
                top: t
            }), e < 56 && D(this._el.content_container, "tl-timeera-content-container-small")
        }
        setColor(t) {
            this._el.container.className = "tl-timeera tl-timeera-color" + t
        }
        _initLayout() {
            this._el.container = T("div", "tl-timeera"), this.end_date && (this.has_end_date = !0, this._el.container.className = "tl-timeera tl-timeera-with-end"), this._el.content_container = T("div", "tl-timeera-content-container", this._el.container), this._el.background = T("div", "tl-timeera-background", this._el.content_container), this._el.content = T("div", "tl-timeera-content", this._el.content_container), this._el.text = T("div", "tl-timeera-text", this._el.content), this._text = T("h2", "tl-headline", this._el.text), this.headline && "" != this.headline && (this._text.innerHTML = G(this.headline)), this.onLoaded()
        }
        _initEvents() {}
        _updateDisplay(t, e, i) {
            t && (this.options.width = t), e && (this.options.height = e)
        }
    }
    F(he, ht, ut);
    class de { // TimeAxis Creation
        constructor(t, e, i) {
            i && this.setLanguage(i), this._el = {
                container: {},
                content_container: {},
                major: {},
                minor: {}
            }, this._text = {}, this._state = {
                loaded: !1
            }, this.data = {}, this.options = {
                duration: 1e3,
                ease: nt,
                width: 600,
                height: 600
            }, this.active = !1, this.animator = {}, this.axis_helper = {}, this.minor_ticks = [], this.major_ticks = [], this._el.container = "object" == typeof t ? t : x(t), C(this.options, e), this._initLayout(), this._initEvents()
        }
        show() {}
        hide() {}
        addTo(t) {
            t.appendChild(this._el.container)
        }
        removeFrom(t) {
            t.removeChild(this._el.container)
        }
        updateDisplay(t, e) {
            this._updateDisplay(t, e)
        }
        getLeft() {
            return this._el.container.style.left.slice(0, -2)
        }
        drawTicks(t, e) {
            var i = t.getTicks();
            this._el.major.className = "tl-timeaxis-major", this._el.minor.className = "tl-timeaxis-minor", this._el.major.style.opacity = 0, this._el.minor.style.opacity = 0, this.major_ticks = this._createTickElements(i.major.ticks, this._el.major, t.getAxisTickDateFormat(i.major.name)), this.minor_ticks = this._createTickElements(i.minor.ticks, this._el.minor, t.getAxisTickDateFormat(i.minor.name), i.major.ticks), this.positionTicks(t, e, !0), this._el.major.className = "tl-timeaxis-major tl-animate-opacity tl-timeaxis-animate-opacity", this._el.minor.className = "tl-timeaxis-minor tl-animate-opacity tl-timeaxis-animate-opacity", this._el.major.style.opacity = 1, this._el.minor.style.opacity = 1
        }
        _createTickElements(t, e, i, a) {
            e.innerHTML = "";
            var s = {};
            if (s[new Date(-1, 13, -30).getTime()] = !0, a)
                for (var n = 0; n < a.length; n++) s[a[n].getTime()] = !0;
            var o = [];
            for (n = 0; n < t.length; n++) {
                var r = t[n];
                if (!(r.getTime() in s)) {
                    var l = T("div", "tl-timeaxis-tick", e),
                        h = T("span", "tl-timeaxis-tick-text tl-animate-opacity", l);
                    let t = r.getDisplayDate(this.getLanguage(), i);
                    h.innerHTML = t, o.push({
                        tick: l,
                        tick_text: h,
                        display_date: t,
                        date: r
                    })
                }
            }
            return o
        }
        positionTicks(t, e, i) {
            i ? (this._el.major.className = "tl-timeaxis-major", this._el.minor.className = "tl-timeaxis-minor") : (this._el.major.className = "tl-timeaxis-major tl-timeaxis-animate", this._el.minor.className = "tl-timeaxis-minor tl-timeaxis-animate"), this._positionTickArray(this.major_ticks, t, e), this._positionTickArray(this.minor_ticks, t, e)
        }
        _positionTickArray(t, e, i) {
            if (t[1] && t[0]) {
                var a = 1;
                e.getPosition(t[1].date.getMillisecond()) - e.getPosition(t[0].date.getMillisecond()) < i && (a = Math.round(i / e.getPixelsPerTick()));
                for (var s = 1, n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.tick.style.left = e.getPosition(o.date.getMillisecond()) + "px", o.tick_text.innerHTML = o.display_date, a > 1 ? s >= a ? (s = 1, o.tick_text.style.opacity = 1, o.tick.className = "tl-timeaxis-tick") : (s++, o.tick_text.style.opacity = 0, o.tick.className = "tl-timeaxis-tick tl-timeaxis-tick-hidden") : (o.tick_text.style.opacity = 1, o.tick.className = "tl-timeaxis-tick")
                }
            }
        }
        _initLayout() {
            this._el.content_container = T("div", "tl-timeaxis-content-container", this._el.container), this._el.major = T("div", "tl-timeaxis-major", this._el.content_container), this._el.minor = T("div", "tl-timeaxis-minor", this._el.content_container), this.onLoaded()
        }
        _initEvents() {}
        _updateDisplay(t, e, i) {
            t && (this.options.width = t), e && (this.options.height = e)
        }
    }
    F(de, ht, ut, zt);
    class ce { // Text
        constructor(t, e, i) {
            this._el = {
                    container: {},
                    content_container: {},
                    content: {},
                    headline: {},
                    date: {}
                }, this.options = {
                    title: !1
                }, this.data = {
                    unique_id: "",
                    headline: "headline",
                    text: "text"
                },
                function(t, e) {
                    t.data = I({}, t.data, e), "" === t.data.unique_id && (t.data.unique_id = B(6))
                }(this, t), C(this.options, e), this._el.container = T("div", "tl-text"), this._el.container.id = this.data.unique_id, this._initLayout(), i && i.appendChild(this._el.container)
        }
        show() {}
        hide() {}
        addTo(t) {
            t.appendChild(this._el.container)
        }
        removeFrom(t) {
            t.removeChild(this._el.container)
        }
        headlineHeight() {
            return this._el.headline.offsetHeight + 40
        }
        addDateText(t) {
            this._el.date.innerHTML = t
        }
        onLoaded() {
            this.fire("loaded", this.data)
        }
        onAdd() {
            this.fire("added", this.data)
        }
        onRemove() {
            this.fire("removed", this.data)
        }
        _initLayout() {
            if (this._el.content_container = T("div", "tl-text-content-container", this._el.container), this._el.date = T("h3", "tl-headline-date", this._el.content_container), "" != this.data.headline) {
                var t = "tl-headline";
                this.options.title && (t = "tl-headline tl-headline-title"), this._el.headline = T("h2", t, this._el.content_container), this._el.headline.innerHTML = this.data.headline
            }
            if ("" != this.data.text) {
                var e = "";
                e += (i = 1 == this.options.autolink ? Y(this.data.text) : this.data.text).match(/<p>[\s\S]*?<\/p>/) ? i : "<p>" + i + "</p>", this._el.content = T("div", "tl-text-content", this._el.content_container), this._el.content.innerHTML = e
            }
            var i;
            this.onLoaded()
        }
    }


    // START OF MEDIA TYPES
    F(ce, ht);
    class ue { // Media Types
        constructor(t, e, i) {
            i && this.setLanguage(i), this._el = {
                container: {},
                content_container: {},
                content: {},
                content_item: {},
                content_link: {},
                caption: null,
                credit: null,
                parent: {},
                link: null
            }, this.player = null, this.timer = null, this.load_timer = null, this.message = null, this.media_id = null, this._state = {
                loaded: !1,
                show_meta: !1,
                media_loaded: !1
            }, this.data = {
                unique_id: null,
                url: null,
                credit: null,
                caption: null,
                credit_alternate: null,
                caption_alternate: null,
                link: null,
                link_target: null
            }, this.options = {
                api_key_flickr: "bd3a7c45ddd52f3101825d41563a6125",
                api_key_googlemaps: "AIzaSyB9dW8e_iRrATFa8g24qB6BDBGdkrLDZYI",
                api_key_embedly: "",
                credit_height: 0,
                caption_height: 0,
                background: 0
            }, this.animator = {}, C(this.options, e), C(this.data, t), this.options.background || (this._el.container = T("div", "tl-media"), this.data.unique_id && (this._el.container.id = this.data.unique_id), this._initLayout())
        }
        loadMedia() {
            var t = this;
            if (!this._state.loaded) try {
                this.load_timer = setTimeout((function() {
                    t.loadingMessage(), t._loadMedia(), t._updateDisplay()
                }), 1200)
            } catch (t) {
                trace("Error loading media for ", this._media), trace(t)
            }
        }
        _updateMessage(t) {
            this.message && this.message.updateMessage(t)
        }
        loadingMessage() {
            this._updateMessage(this._("loading") + " " + this.options.media_name)
        }
        errorMessage(t) {
            t = t ? this._("error") + ": " + t : this._("error"), this._updateMessage(t)
        }
        updateMediaDisplay(t) {
            this._state.loaded && !this.options.background && (this._el.content_item.style.maxHeight = d ? this.options.height / 2 + "px" : this.options.height - this.options.credit_height - this.options.caption_height - 30 + "px", this._el.container.style.maxWidth = this.options.width + "px", p && (this._el.content_item.offsetWidth, this._el.content_item.offsetHeight), this._updateMediaDisplay(t), this._state.media_loaded && (this._el.credit && (this._el.credit.style.width = this._el.content_item.offsetWidth + "px"), this._el.caption && (this._el.caption.style.width = this._el.content_item.offsetWidth + "px")))
        }
        _loadMedia() {
            this.onLoaded()
        }
        _updateMediaDisplay(t) {
            p && (this._el.content_item.style.maxWidth = this.options.width + "px", this._el.content_item.style.width = "auto")
        }
        _getMeta() {}
        _getImageURL(t, e) {
            return ""
        }
        show() {}
        hide() {}
        addTo(t) {
            t.appendChild(this._el.container), this.onAdd()
        }
        removeFrom(t) {
            t.removeChild(this._el.container), this.onRemove()
        }
        getImageURL(t, e) {
            return this._getImageURL(t, e)
        }
        updateDisplay(t, e, i) {
            this._updateDisplay(t, e, i)
        }
        stopMedia() {
            this._stopMedia()
        }
        loadErrorDisplay(t) {
            try {
                this._el.content.removeChild(this._el.content_item)
            } catch (t) {}
            this._el.content_item = T("div", "tl-media-item tl-media-loaderror", this._el.content), this._el.content_item.innerHTML = "<div class='tl-icon-" + this.options.media_type + "'></div><p>" + t + "</p>", this.onLoaded(!0)
        }
        onLoaded(t) {
            this._state.loaded = !0, this.fire("loaded", this.data), this.message && this.message.hide(), t || this.options.background || this.showMeta(), this.updateDisplay()
        }
        onMediaLoaded(t) {
            this._state.media_loaded = !0, this.fire("media_loaded", this.data), this._el.credit && (this._el.credit.style.width = this._el.content_item.offsetWidth + "px"), this._el.caption && (this._el.caption.style.width = this._el.content_item.offsetWidth + "px")
        }
        showMeta(t, e) {
            this._state.show_meta = !0, this.data.credit && "" != this.data.credit && (this._el.credit = T("div", "tl-credit", this._el.content_container), this._el.credit.innerHTML = 1 == this.options.autolink ? Y(this.data.credit) : this.data.credit, this.options.credit_height = this._el.credit.offsetHeight), this.data.caption && "" != this.data.caption && (this._el.caption = T("div", "tl-caption", this._el.content_container), this._el.caption.innerHTML = 1 == this.options.autolink ? Y(this.data.caption) : this.data.caption, this.options.caption_height = this._el.caption.offsetHeight), this.data.caption && this.data.credit || this.getMeta()
        }
        getMeta() {
            this._getMeta()
        }
        updateMeta() {
            !this.data.credit && this.data.credit_alternate && (this._el.credit = T("div", "tl-credit", this._el.content_container), this._el.credit.innerHTML = this.data.credit_alternate, this.options.credit_height = this._el.credit.offsetHeight), !this.data.caption && this.data.caption_alternate && (this._el.caption = T("div", "tl-caption", this._el.content_container), this._el.caption.innerHTML = this.data.caption_alternate, this.options.caption_height = this._el.caption.offsetHeight), this.updateDisplay()
        }
        onAdd() {
            this.fire("added", this.data)
        }
        onRemove() {
            this.fire("removed", this.data)
        }
        _initLayout() {
            this.message = new Rt(this._el.container, this.options, this.getLanguage()), this._el.content_container = T("div", "tl-media-content-container", this._el.container), this.data.link && "" != this.data.link ? (this._el.link = T("a", "tl-media-link", this._el.content_container), this._el.link.href = this.data.link, this.data.link_target && "" != this.data.link_target ? this._el.link.target = this.data.link_target : this._el.link.target = "_blank", "_blank" == this._el.link.target && this._el.link.setAttribute("rel", "noopener"), this._el.content = T("div", "tl-media-content", this._el.link)) : this._el.content = T("div", "tl-media-content", this._el.content_container)
        }
        _updateDisplay(t, e, i) {
            t && (this.options.width = t), e && (this.options.height = e), i && (this.options.layout = i), this._el.credit && (this.options.credit_height = this._el.credit.offsetHeight), this._el.caption && (this.options.caption_height = this._el.caption.offsetHeight + 5), this.updateMediaDisplay(this.options.layout)
        }
        domCreate(...t) {
            return T(...t)
        }
        _stopMedia() {}
    }
    F(ue, ht, zt);
    class me extends ue {
        _loadMedia() {
            this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded()
        }
        createMedia() {
            var t = this,
                e = "tl-media-item tl-media-image tl-media-shadow";
            (this.data.url.match(/.png(\?.*)?$/) || this.data.url.match(/.svg(\?.*)?$/)) && (e = "tl-media-item tl-media-image"), this._el.content_item = this.domCreate("img", e, this._el.content), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = Z(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = Z(this.data.caption)), this._el.content_item.addEventListener("load", (function(e) {
                t.onMediaLoaded()
            })), this._el.content_item.src = this.getImageURL()
        }
        getImageURL(t, e) {
            return V(this.data.url)
        }
        _updateMediaDisplay(t) {
            p && (this._el.content_item.style.width = "auto")
        }
    }

    function pe(t, e, i, a) {
        fe.js(t, e, i, a)
    }

    function _e(t, e, i, a) {
        fe.css(t, e, i, a)
    }
    let fe = new class {
        constructor(t) {
            this.doc = t, this.pending = {}, this.queue = {
                css: [],
                js: []
            }, this.styleSheets = t.styleSheets, this.env = this.getEnv(), this.head = this.doc.head || this.doc.getElementsByTagName("head")[0], this.pollCount = 0
        }
        createNode(t, e) {
            var i, a = this.doc.createElement(t);
            for (i in e) e.hasOwnProperty(i) && a.setAttribute(i, e[i]);
            return a
        }
        finish(t) {
            var e, i, a = this.pending[t];
            a && (e = a.callback, (i = a.urls).shift(), this.pollCount = 0, i.length || (e && e.call(a.context, a.obj), this.pending[t] = null, this.queue[t].length && this.load(t)))
        }
        getEnv() {
            var t = navigator.userAgent,
                e = {
                    async: !0 === this.doc.createElement("script").async
                };
            return (e.webkit = /AppleWebKit\//.test(t)) || (e.ie = /MSIE/.test(t)) || (e.opera = /Opera/.test(t)) || (e.gecko = /Gecko\//.test(t)) || (e.unknown = !0), e
        }
        load(t, e, i, a, s) {
            var n, o, r, l, h, d, c = function() {
                    this.finish(t)
                }.bind(this),
                u = "css" === t,
                m = [];
            if (e)
                if (e = "string" == typeof e ? [e] : e.concat(), u || this.env.async || this.env.gecko || this.env.opera) this.queue[t].push({
                    urls: e,
                    callback: i,
                    obj: a,
                    context: s
                });
                else
                    for (n = 0, o = e.length; n < o; ++n) this.queue[t].push({
                        urls: [e[n]],
                        callback: n === o - 1 ? i : null,
                        obj: a,
                        context: s
                    });
            if (!this.pending[t] && (l = this.pending[t] = this.queue[t].shift())) {
                for (n = 0, o = (h = l.urls).length; n < o; ++n) d = h[n], u ? r = this.env.gecko ? this.createNode("style") : this.createNode("link", {
                    href: d,
                    rel: "stylesheet"
                }) : (r = this.createNode("script", {
                    src: d
                })).async = !1, r.className = "lazyload", r.setAttribute("charset", "utf-8"), this.env.ie && !u ? r.onreadystatechange = function() {
                    /loaded|complete/.test(r.readyState) && (r.onreadystatechange = null, c())
                } : u && (this.env.gecko || this.env.webkit) ? this.env.webkit ? (l.urls[n] = r.href, this.pollWebKit()) : (r.innerHTML = '@import "' + d + '";', this.pollGecko(r)) : r.onload = r.onerror = c, m.push(r);
                for (n = 0, o = m.length; n < o; ++n) this.head.appendChild(m[n])
            }
        }
        pollGecko(t) {
            var e;
            try {
                e = !!t.sheet.cssRules
            } catch (a) {
                if (this.pollCount += 1, this.pollCount < 200) {
                    var i = this;
                    setTimeout((function() {
                        i.pollGecko(t)
                    }), 50)
                } else e && this.finish("css");
                return
            }
            this.finish("css")
        }
        pollWebKit() {
            var t, e = this.pending.css;
            if (e) {
                for (t = this.styleSheets.length; --t >= 0;)
                    if (this.styleSheets[t].href === e.urls[0]) {
                        this.finish("css");
                        break
                    } this.pollCount += 1, e && (this.pollCount < 200 ? setTimeout(this.pollWebKit.bind(this), 50) : this.finish("css"))
            }
        }
        css(t, e, i, a) {
            this.load("css", t, e, i, a)
        }
        js(t, e, i, a) {
            this.load("js", t, e, i, a)
        }
    }(document);
    class ge extends ue {
        _loadMedia() {
            var t, e = this;
            this.youtube_loaded = !1, this._el.content_item = this.domCreate("div", "tl-media-item tl-media-youtube tl-media-shadow", this._el.content), this._el.content_item.id = B(7), t = function(t) {
                var e, i, a, s = [];
                (e = t.toString()).match("&#038;") ? e = e.replace("&#038;", "&") : e.match("&#38;") ? e = e.replace("&#38;", "&") : e.match("&amp;") && (e = e.replace("&amp;", "&")), a = e.slice(e.indexOf("?") + 1).split("&");
                for (var n = 0; n < a.length; n++) i = a[n].split("="), s.push(i[0]), s[i[0]] = i[1];
                return s
            }(this.data.url), this.media_id = {}, this.data.url.match("v=") ? this.media_id.id = t.v : this.data.url.match("/embed/") ? this.media_id.id = this.data.url.split("embed/")[1].split(/[?&]/)[0] : this.data.url.match(/v\/|v=|youtu\.be\//) ? this.media_id.id = this.data.url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0] : O("YOUTUBE IN URL BUT NOT A VALID VIDEO"), this.data.url.match("start=") ? this.media_id.start = et(this.data.url.split("start=")[1]) : this.data.url.match("t=") && (this.media_id.start = et(this.data.url.split("t=")[1])), this.data.url.match("end=") && (this.media_id.end = et(this.data.url.split("end=")[1])), this.media_id.hd = Boolean(void 0 !== t.hd), pe("https://www.youtube.com/iframe_api", (function() {
                e.createMedia()
            }))
        }
        _updateMediaDisplay() {
            this._el.content_item.style.height = X({
                w: this.options.width
            }) + "px", this._el.content_item.style.width = this.options.width + "px"
        }
        _stopMedia() {
            if (this.youtube_loaded) try {
                this.player.getPlayerState() == YT.PlayerState.PLAYING && this.player.pauseVideo()
            } catch (t) {
                O(t)
            }
        }
        createMedia() {
            var t = this;
            clearTimeout(this.timer), "undefined" != typeof YT && void 0 !== YT.Player ? this.player = new YT.Player(this._el.content_item.id, {
                playerVars: {
                    enablejsapi: 1,
                    color: "white",
                    controls: 1,
                    start: this.media_id.start,
                    end: this.media_id.end,
                    fs: 1
                },
                videoId: this.media_id.id,
                events: {
                    onReady: function() {
                        t.onPlayerReady(), t.onLoaded()
                    },
                    onStateChange: t.onStateChange
                }
            }) : this.timer = setTimeout((function() {
                t.createMedia()
            }), 1e3)
        }
        onPlayerReady(t) {
            this.youtube_loaded = !0, this._el.content_item = document.getElementById(this._el.content_item.id), this.onMediaLoaded()
        }
        onStateChange(t) {
            t.data == YT.PlayerState.ENDED && (t.target.seekTo(0), t.target.pauseVideo())
        }
    }
    class ve extends ue {
        _loadMedia() {
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-map tl-media-shadow", this._el.content), this.media_id = this.data.url, this.mapframe = this.domCreate("iframe", "", this._el.content_item), this.mapframe.width = "100%", this.mapframe.height = "100%", this.mapframe.frameBorder = "0", this.mapframe.src = this.makeGoogleMapsEmbedURL(this.media_id, this.options.api_key_googlemaps), this.onLoaded()
        }
        _updateMediaDisplay() {
            if (this._state.loaded) {
                var t = J({
                    w: this._el.content_item.offsetWidth
                });
                this._el.content_item.style.height = t.h + "px"
            }
        }
        makeGoogleMapsEmbedURL(t, e) {
            var i = !1;
            var a = {
                    view: ["center"],
                    place: ["q", "center"],
                    directions: ["origin", "destination", "center"],
                    search: ["q", "center"],
                    streetview: ["fov", "heading", "pitch"]
                },
                s = /(https:\/\/.+google.+?\/maps)/,
                n = /@([-\d.]+),([-\d.]+)/,
                o = /([\w\W]+)/,
                r = /,((?:[-\d.]+[zmayht],?)*)/,
                l = {
                    view: new RegExp(s.source + "/" + n.source + r.source),
                    place: new RegExp(s.source + "/place/" + o.source + "/" + n.source + r.source),
                    directions: new RegExp(s.source + "/dir/" + o.source + "/" + o.source + "/" + n.source + r.source),
                    search: new RegExp(s.source + "/search/" + o.source + "/" + n.source + r.source)
                };
            return function(t) {
                function s(e, s) {
                    if ("z" == e.slice(-1)) s.zoom = e;
                    else if ("m" == e.slice(-1)) s.zoom = 14, s.maptype = "satellite";
                    else if ("t" == e.slice(-1)) {
                        if (i = !0, "place" == n) var o = t.match(l.place)[3] + "," + t.match(l.place)[4];
                        else {
                            o = s.center;
                            delete s.center
                        }(s = {}).location = o, streetview_params = e.split(",");
                        for (let t in a.streetview) {
                            var r = parseInt(t) + 1;
                            "pitch" == a.streetview[t] && "90t" == streetview_params[r] ? s[a.streetview[t]] = 0 : s[a.streetview[t]] = streetview_params[r].slice(0, -1)
                        }
                    }
                    return s
                }
                let n = "view";
                return t.match(l.place) ? n = "place" : t.match(l.directions) ? n = "directions" : t.match(l.search) && (n = "search"),
                    function(t, n) {
                        var o = {},
                            r = n[1],
                            l = n[n.length - 1];
                        for (let e in a[t]) {
                            var h = parseInt(e) + 2;
                            "center" == a[t][e] ? o[a[t][e]] = n[h] + "," + n[++h] : o[a[t][e]] = n[h]
                        }
                        return (o = s(l, o)).key = e, 1 == i && (t = "streetview"), r + "/embed/v1/" + t + function(t) {
                            var e = [];
                            for (var i in t) t.hasOwnProperty(i) && e.push(i + "=" + t[i]);
                            return "?" + e.join("&")
                        }(o)
                    }(n, t.match(l[n]))
            }(t)
        }
    }
    class ye extends ue {
        constructor(t, e, i) {
            super(t, e, i), this.blockquote = Ut.a.sanitize(this.data.url)
        }
        _loadMedia() {
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-blockquote", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this._el.content_item.innerHTML = this.blockquote, this.onLoaded()
        }
        updateMediaDisplay() {}
    }
    class we extends ue {
        _loadMedia() {
            var t, e = this;
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-wikipedia", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this.media_id = this.data.url.split("wiki/")[1].split("#")[0].replace("_", " "), this.media_id = this.media_id.replace(" ", "%20"), t = "https://" + this.data.url.split("//")[1].split(".wikipedia")[0] + ".wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&redirects=&titles=" + this.media_id + "&exintro=1&format=json&callback=?", vt({
                type: "GET",
                url: t,
                dataType: "json",
                success: function(t) {
                    e.createMedia(t)
                },
                error: function(t, i) {
                    var a = "";
                    a += e._("wikipedia_load_err") + "<br/>" + e.media_id + "<br/>" + i, e.loadErrorDisplay(a)
                }
            })
        }
        createMedia(t) {
            var e = "";
            if (t.query) {
                var i = "";
                (e = {
                    entry: {},
                    title: "",
                    text: "",
                    extract: "",
                    paragraphs: 1,
                    page_image: "",
                    text_array: []
                }).entry = function(t, e) {
                    if (void 0 !== t) {
                        var i = 0;
                        for (var a in t) {
                            if (e === i) return t[a];
                            i++
                        }
                        return ""
                    }
                    return ""
                }(t.query.pages, 0), e.extract = e.entry.extract, e.title = e.entry.title, e.page_image = e.entry.thumbnail, e.extract.match("<p>") ? e.text_array = e.extract.split("<p>") : e.text_array.push(e.extract);
                for (var a = 0; a < e.text_array.length; a++) a + 1 <= e.paragraphs && a + 1 < e.text_array.length && (e.text += "<p>" + e.text_array[a + 1]);
                i += "<span class='tl-icon-wikipedia'></span>", i += "<div class='tl-wikipedia-title'><h4><a href='" + this.data.url + "' target='_blank' rel='noopener'>" + e.title + "</a></h4>", i += "<span class='tl-wikipedia-source'>" + this._("wikipedia") + "</span></div>", e.page_image, i += e.text, e.extract.match("REDIRECT") || (this._el.content_item.innerHTML = i, this.onLoaded())
            }
        }
        updateMediaDisplay() {}
    }
    class be extends ue {
        _loadMedia() {
            var t, e = this;
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-soundcloud tl-media-shadow", this._el.content), this.media_id = this.data.url, t = "https://soundcloud.com/oembed?url=" + this.media_id + "&format=js&callback=?", gt(t, (function(t) {
                pe("https://w.soundcloud.com/player/api.js", (function() {
                    e.createMedia(t)
                }))
            }))
        }
        createMedia(t) {
            this._el.content_item.innerHTML = t.html, self.widget = SC.Widget(this._el.content_item.querySelector("iframe")), this.soundCloudCreated = !0, this.onLoaded()
        }
        _stopMedia() {
            this.soundCloudCreated && self.widget.pause()
        }
    }
    class xe extends ue {
        _loadMedia() {
            var t, e = this;
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-vimeo tl-media-shadow", this._el.content), this.media_id = this.data.url.split(/video\/|\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
            var i = null;
            this.data.url.match(/#t=([^&]+).*/) && (i = this.data.url.match(/#t=([^&]+).*/)[1]), t = "https://player.vimeo.com/video/" + this.media_id + "?api=1&title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff", i && (t = t += "&amp;#t=" + i), this.player = this.domCreate("iframe", "", this._el.content_item), this.player.addEventListener("load", (function(t) {
                e.onMediaLoaded()
            })), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = t, this.player.setAttribute("allowfullscreen", ""), this.player.setAttribute("webkitallowfullscreen", ""), this.player.setAttribute("mozallowfullscreen", ""), this.onLoaded()
        }
        _updateMediaDisplay() {
            this._el.content_item.style.height = X({
                w: this._el.content_item.offsetWidth
            }) + "px"
        }
        _stopMedia() {
            try {
                this.player.contentWindow.postMessage(JSON.stringify({
                    method: "pause"
                }), "https://player.vimeo.com")
            } catch (t) {
                O(t)
            }
        }
    }
    class ke extends ue {
        _loadMedia() {
            var t;
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-dailymotion", this._el.content), this.data.url.match("video") ? this.media_id = this.data.url.split("video/")[1].split(/[?&]/)[0] : this.media_id = this.data.url.split("embed/")[1].split(/[?&]/)[0], t = "https://www.dailymotion.com/embed/video/" + this.media_id + "?api=postMessage", this._el.content_item.innerHTML = "<iframe autostart='false' frameborder='0' width='100%' height='100%' src='" + t + "'></iframe>", this.onLoaded()
        }
        _updateMediaDisplay() {
            this._state.loaded && (this._el.content_item.style.height = X({
                w: this._el.content_item.offsetWidth
            }) + "px")
        }
        _stopMedia() {
            this._state.loaded && this._el.content_item.querySelector("iframe").contentWindow.postMessage('{"command":"pause","parameters":[]}', "*")
        }
    }
    class Te extends ue {
        _loadMedia() {
            var t;
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-vine tl-media-shadow", this._el.content), this.media_id = this.data.url.split("vine.co/v/")[1], t = "https://vine.co/v/" + this.media_id + "/embed/simple", this._el.content_item.innerHTML = "<iframe frameborder='0' width='100%' height='100%' src='" + t + "'></iframe><script async src='https://platform.vine.co/static/scripts/embed.js' charset='utf-8'><\/script>", this.onLoaded()
        }
        _updateMediaDisplay() {
            var t = J({
                w: this._el.content_item.offsetWidth,
                h: this.options.height
            });
            this._el.content_item.style.height = t.h + "px"
        }
        _stopMedia() {
            this._el.content_item.querySelector("iframe").contentWindow.postMessage("pause", "*")
        }
    }
    class Me extends ue {
        _loadMedia() {
            var t, e = this;
            if (this._el.content_item = this.domCreate("div", "tl-media-twitter", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this.data.url.match("^(https?:)?/*(www.)?twitter.com")) this.data.url.match("status/") ? this.media_id = this.data.url.split("status/")[1] : this.data.url.match("statuses/") ? this.media_id = this.data.url.split("statuses/")[1] : this.media_id = "";
            else if (this.data.url.match("<blockquote class=['\"]twitter-tweet['\"]")) {
                var i = this.data.url.match(/(status|statuses)\/(\d+)/);
                if (!(i && i.length > 2)) return void e.loadErrorDisplay(e._("twitterembed_invalidurl_err"));
                this.media_id = i[2]
            }
            t = "https://api.twitter.com/1/statuses/oembed.json?id=" + this.media_id + "&omit_script=true&include_entities=true&callback=?", vt({
                type: "GET",
                url: t,
                dataType: "json",
                success: function(t) {
                    e.createMedia(t)
                },
                error: function(t, i) {
                    var a = "";
                    a += e._("twitter_load_err") + "<br/>" + e.media_id + "<br/>" + i, e.loadErrorDisplay(a)
                }
            })
        }
        createMedia(t) {
            var e, i, a, s = "",
                n = "",
                o = "",
                r = this;
            n = t.html.split("</p>&mdash;")[0] + "</p></blockquote>", e = t.author_url.split("twitter.com/")[1], i = (o = t.html.split("</p>&mdash;")[1].split('<a href="')[1]).split('">')[0], a = o.split('">')[1].split("</a>")[0], (n = n.replace(/<a href/gi, '<a target="_blank" rel="noopener" href')).includes("pic.twitter.com") ? (pe("https://platform.twitter.com/widgets.js", (function() {
                twttr.widgets.createTweet(r.media_id, r._el.content_item, {
                    conversation: "none",
                    linkColor: "#cc0000",
                    theme: "light"
                })
            })), this.onLoaded()) : (s += n, s += "<div class='vcard'>", s += "<a href='" + i + "' class='twitter-date' rel='noopener' target='_blank'>" + a + "</a>", s += "<img src='' class='tl-media-item tl-media-image'></a>", s += "<div class='author'>", s += "<a class='screen-name url' href='" + t.author_url + "' rel='noopener' target='_blank'>", s += "<span class='avatar'></span>", s += "<span class='fn'>" + t.author_name + " <span class='tl-icon-twitter'></span></span>", s += "<span class='nickname'>@" + e + "<span class='thumbnail-inline'></span></span>", s += "</a>", s += "</div>", s += "</div>", this._el.content_item.innerHTML = s, this.onLoaded())
        }
        updateMediaDisplay() {}
        _updateMediaDisplay() {}
    }
    class Le extends ue {
        _loadMedia() {
            var t, e = this;
            this._el.content_item = this.domCreate("div", "tl-media-twitter", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text";
            var i, a, s, n, o, r, l = this.data.url.match(/(status|statuses)\/(\d+)/);
            l && l.length > 2 ? (this.media_id = l[2], t = "https://api.twitter.com/1/statuses/oembed.json?id=" + this.media_id + "&omit_script=true&include_entities=true&callback=?", window.twttr = (i = document, a = "script", s = "twitter-wjs", o = i.getElementsByTagName(a)[0], r = window.twttr || {}, i.getElementById(s) || ((n = i.createElement(a)).id = s, n.src = "https://platform.twitter.com/widgets.js", o.parentNode.insertBefore(n, o), r._e = [], r.ready = function(t) {
                r._e.push(t)
            }), r), vt({
                type: "GET",
                url: t,
                dataType: "json",
                success(t) {
                    e.createMedia(t)
                },
                error: function(t, i) {
                    var a = "";
                    a += e._("twitter_load_err") + "<br/>" + e.media_id + "<br/>" + i, e.loadErrorDisplay(a)
                }
            })) : e.loadErrorDisplay(e._("twitterembed_invalidurl_err"))
        }
        createMedia(t) {
            var e, i, a, s = "",
                n = "",
                o = "";
            n = t.html.split("</p>&mdash;")[0] + "</p></blockquote>", e = t.author_url.split("twitter.com/")[1], i = (o = t.html.split("</p>&mdash;")[1].split('<a href="')[1]).split('">')[0], a = o.split('">')[1].split("</a>")[0], n = n.replace(/<a href/gi, '<a target="_blank" rel="noopener" href');
            let r = this.media_id;
            n.includes("pic.twitter.com") ? (twttr.ready((function(t) {
                s = document.getElementsByClassName("tl-media-twitter")[0];
                var e = String(r);
                twttr.widgets.createTweet(e, s, {
                    conversation: "none",
                    linkColor: "#cc0000",
                    theme: "light"
                }).then((function(t) {
                    this.onLoaded()
                }))
            })), this._el.content_item.innerHTML = s, this.onLoaded()) : (s += n, s += "<div class='vcard'>", s += "<a href='" + i + "' class='twitter-date' rel='noopener' target='_blank'>" + a + "</a>", s += "<div class='author'>", s += "<a class='screen-name url' href='" + t.author_url + "' rel='noopener' target='_blank'>", s += "<span class='avatar'></span>", s += "<span class='fn'>" + t.author_name + " <span class='tl-icon-twitter'></span></span>", s += "<span class='nickname'>@" + e + "<span class='thumbnail-inline'></span></span>", s += "</a>", s += "</div>", s += "</div>", this._el.content_item.innerHTML = s, this.onLoaded())
        }
        updateMediaDisplay() {}
        _updateMediaDisplay() {}
    }
    class Ee extends ue {
        _loadMedia() {
            var t, e = this;
            try {
                this.establishMediaID(), t = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + this.options.api_key_flickr + "&photo_id=" + this.media_id + "&format=json&jsoncallback=?", gt(t, (function(t) {
                    "ok" == t.stat ? (e.sizes = t.sizes.size, e.options.background || e.createMedia(), e.onLoaded()) : e.loadErrorDisplay(e._("flickr_notfound_err"))
                }))
            } catch (t) {
                e.loadErrorDisplay(e._(t.message_key))
            }
        }
        establishMediaID() {
            if (this.data.url.match(/flic.kr\/.+/i)) {
                var t = this.data.url.split("/").slice(-1)[0];
                this.media_id = K.decode(t)
            } else {
                var e = this.data.url.indexOf("flickr.com/photos/");
                if (-1 == e) throw new S("flickr_invalidurl_err");
                var i = e + "flickr.com/photos/".length;
                this.media_id = this.data.url.substr(i).split("/")[1]
            }
        }
        createMedia() {
            var t = this;
            this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.url, this._el.content_link.target = "_blank", this._el.content_link.setAttribute("rel", "noopener"), this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-flickr tl-media-shadow", this._el.content_link), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = Z(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = Z(this.data.caption)), this._el.content_item.addEventListener("load", (function(e) {
                t.onMediaLoaded()
            })), this._el.content_item.src = this.getImageURL(this.options.width, this.options.height)
        }
        getImageURL(t, e) {
            for (var i = this.size_label(e), a = this.sizes[this.sizes.length - 2].source, s = 0; s < this.sizes.length; s++) this.sizes[s].label == i && (a = this.sizes[s].source);
            return a
        }
        _getMeta() {
            var t, e = this;
            t = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + this.options.api_key_flickr + "&photo_id=" + this.media_id + "&format=json&jsoncallback=?", gt(t, (function(t) {
                e.data.credit_alternate = "<a href='" + e.data.url + "' target='_blank' rel='noopener'>" + t.photo.owner.realname + "</a>", e.data.caption_alternate = t.photo.title._content + " " + t.photo.description._content, e.updateMeta()
            }))
        }
        size_label(t) {
            return t <= 75 ? t <= 0 ? "Large" : "Thumbnail" : t <= 180 ? "Small" : t <= 240 ? "Small 320" : t <= 375 ? "Medium" : t <= 480 ? "Medium 640" : "Large"
        }
    }
    class De extends ue {
        _loadMedia() {
            var t = this;
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-documentcloud tl-media-shadow", this._el.content), this._el.content_item.id = B(7), this.data.url.match(/\.html$/) ? this.data.url = this._transformURL(this.data.url) : this.data.url.match(/.(json|js)$/) || O("DOCUMENT CLOUD IN URL BUT INVALID SUFFIX"), pe(["https://assets.documentcloud.org/viewer/loader.js", "https://assets.documentcloud.org/viewer/viewer.js"], (function() {
                t.createMedia()
            }))
        }
        _transformURL(t) {
            return t.replace(/(.*)\.html$/, "$1.js")
        }
        _updateMediaDisplay() {
            this._el.content_item.style.height = this.options.height + "px"
        }
        createMedia() {
            DV.load(this.data.url, {
                container: "#" + this._el.content_item.id,
                showSidebar: !1
            }), this.onLoaded()
        }
    }
    const Se = "https://graph.facebook.com/v8.0/instagram_oembed?access_token=704270473831239|830b21071290df4f81a35c56abbea096&fields=html,thumbnail_url,author_name&url=";

    function Ne(t) {
        this.oembed_response = t, this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.url, this._el.content_link.target = "_blank", this._el.content_link.setAttribute("rel", "noopener"), this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-instagram tl-media-shadow", this._el.content_link), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = Z(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = Z(this.data.caption)), this._el.content_item.addEventListener("load", function(t) {
            this.onMediaLoaded()
        }.bind(this)), this._el.content_item.src = t.thumbnail_url, this.onLoaded()
    }

    function Ae(t) {
        let e = `${t.statusText} [${t.status}]`;
        400 == t.status && (e = this._("instagram_bad_request")), this.loadErrorDisplay(e)
    }
    class Ce extends ue {
        _loadMedia() {
            this.media_id = this.data.url.split("/p/")[1].split("/")[0], this.options.background || this.createMedia()
        }
        createMedia() {
            this.oembed_response = null;
            let t = `${Se}${this.data.url}`;
            try {
                vt({
                    url: t,
                    dataType: "json",
                    success: Ne,
                    error: Ae,
                    context: this
                })
            } catch (e) {
                console.log(`Instagram: error fetching ${t}`), console.log(e)
            }
        }
        getImageURL() {
            if (this.oembed_response && this.oembed_response.thumbnail_url) return this.oembed_response.thumbnail_url;
            yt(`${Se}${this.data.url}`).then(t => t.thumbnail_url).catch(t => {
                O(`Instagram getImageURL Error: ${t.status} ${t.statusText}`)
            })
        }
        _getMeta() {
            this.oembed_response && this.oembed_response.author_name && (this.data.credit_alternate = `Instagram: <a href="https://instagram.com/${this.oembed_response.author_name}" target="_blank">@${this.oembed_response.author_name}</a>`), this.updateMeta()
        }
        sizes(t) {
            return t <= 150 ? "t" : t <= 306 ? "m" : "l"
        }
    }
    class Ie extends ue {
        _loadMedia() {
            this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-profile tl-media-shadow", this._el.content), this._el.content_item.src = this.data.url, this.onLoaded()
        }
        _updateMediaDisplay(t) {
            p && (this._el.content_item.style.maxWidth = this.options.width / 2 - 40 + "px")
        }
    }
    class je extends ue {
        _loadMedia() {
            var t;
            if (this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe", this._el.content), this.data.url.match(/open\?id=([^&]+)/)) t = "https://drive.google.com/file/d/" + this.data.url.match(/open\?id=([^&]+)/)[1] + "/preview";
            else if (this.data.url.match(/file\/d\/([^/]*)\/?/)) {
                t = "https://drive.google.com/file/d/" + this.data.url.match(/file\/d\/([^/]*)\/?/)[1] + "/preview"
            } else t = this.data.url;
            this._el.content_item.innerHTML = "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + t + "'></iframe>", this.onLoaded()
        }
        _updateMediaDisplay() {
            this._el.content_item.style.height = this.options.height + "px"
        }
    }
    class Oe extends ue {
        _loadMedia() {
            var t, e;
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-spotify", this._el.content), this.media_id = (e = this.data.url).match(/^spotify:/) ? e : `spotify${(e=new URL(e)).pathname.replace(/\/$/,"").replace(/\//g,":")}`, this.media_id ? (t = "https://embed.spotify.com/?uri=" + this.media_id + "&theme=white&view=coverart", this.player = this.domCreate("iframe", "tl-media-shadow", this._el.content_item), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = t, this.onLoaded()) : this.loadErrorDisplay(this._("spotify_invalid_url"))
        }
        _updateMediaDisplay(t) {
            var e = this.options.height,
                i = 0,
                a = 0;
            e = d ? this.options.height / 2 : this.options.height - this.options.credit_height - this.options.caption_height - 30, this._el.content_item.style.maxHeight = "none", O(e), O(this.options.width), e > this.options.width ? (O("height is greater"), i = this.options.width + 80 + "px", a = this.options.width + "px") : (O("width is greater"), O(this.options.width), i = e + "px", a = e - 80 + "px"), this.player.style.width = a, this.player.style.height = i, this._el.credit && (this._el.credit.style.width = a), this._el.caption && (this._el.caption.style.width = a)
        }
        _stopMedia() {}
    }
    class ze extends ue {
        constructor(t, e, i) {
            super(t, e, i), this.iframe = Ut.a.sanitize(this.data.url, {
                ADD_TAGS: ["iframe"],
                ADD_ATTR: ["frameborder"]
            })
        }
        _loadMedia() {
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe", this._el.content), this._el.content_item.innerHTML = this.iframe, this.onLoaded()
        }
        _updateMediaDisplay() {
            this._el.content_item.style.height = this.options.height + "px"
        }
    }
    class Re extends ue {
        _loadMedia() {
            try {
                var t = this;
                if (this.data.url.match("<blockquote class=['\"]imgur-embed-pub['\"]")) {
                    var e = this.data.url.match(/(imgur\.com)\/(\w+)/);
                    this.media_id = e[2], this.data.url = "http://imgur.com/gallery/" + this.media_id
                } else this.data.url && (this.media_id = this.data.url.split("/").slice(-1)[0]);
                pe(["https://s.imgur.com/min/embed.js"], (function() {
                    t.createMedia()
                }))
            } catch (t) {
                this.loadErrorDisplay(this._("imgur_invalidurl_err"))
            }
        }
        createMedia() {
            var t = this,
                e = "https://api.imgur.com/oembed.json?url=" + this.data.url;
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-image tl-media-imgur", this._el.content), vt({
                type: "GET",
                url: e,
                dataType: "json",
                success: function(e) {
                    try {
                        t._el.content_item.innerHTML = e.html, setInterval((function() {
                            null == document.querySelector("blockquote.imgur-embed-pub") ? clearInterval() : (imgurEmbed.createIframe(), document.getElementById("imageElement").removeAttribute("style"), document.getElementById("image").removeAttribute("style"))
                        }), 2e3)
                    } catch (t) {
                        O("Error processing imgur ajax response")
                    }
                },
                error: function(e, i, a) {
                    "parsererror" == i ? t.loadErrorDisplay(t._("imgur_invalidurl_err")) : t.loadErrorDisplay(t._("unknown_read_err", i))
                }
            }), this.onLoaded()
        }
        _updateMediaDisplay() {
            this._el.content_item.style.width = this.options.width + "px", this._el.content_item.style.height = X({
                w: this.options.width
            }) + "px"
        }
    }
    class Pe extends ue {
        _loadMedia() {
            var t = V(this.data.url);
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe", this._el.content);
            var e = "";
            e = r || _ || t.match(/dl.dropboxusercontent.com/) ? "<iframe class='doc' frameborder='0' width='100%' height='100%' src='//docs.google.com/viewer?url=" + t + "&amp;embedded=true'></iframe>" : "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + t + "'></iframe>", this._el.content_item.innerHTML = e, this.onLoaded()
        }
        _updateMediaDisplay() {
            this._el.content_item.style.height = this.options.height + "px"
        }
    }
    class He extends ue {
        _loadMedia() {
            this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded()
        }
        createMedia() {
            var t = V(this.data.url),
                e = this;
            this._el.content_item = this.domCreate("audio", "tl-media-item tl-media-audio tl-media-shadow", this._el.content), this._el.content_item.controls = !0, this._el.source_item = this.domCreate("source", "", this._el.content_item), this._el.content_item.addEventListener("load", (function(t) {
                e.onMediaLoaded()
            })), this._el.source_item.src = t, this._el.source_item.type = this._getType(this.data.url, this.data.mediatype.match_str), this._el.content_item.innerHTML += "Your browser doesn't support HTML5 audio with " + this._el.source_item.type, this.player_element = this._el.content_item
        }
        _updateMediaDisplay(t) {
            p && (this._el.content_item.style.width = "auto")
        }
        _stopMedia() {
            this.player_element && this.player_element.pause()
        }
        _getType(t, e) {
            var i = "audio/";
            switch (t.match(e)[1]) {
                case "mp3":
                    i += "mpeg";
                    break;
                case "wav":
                    i += "wav";
                    break;
                case "m4a":
                    i += "mp4";
                    break;
                default:
                    i = "audio"
            }
            return i
        }
    }
    class qe extends ue {
        _loadMedia() {
            this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded()
        }
        createMedia() {
            var t = V(this.data.url),
                e = this;
            this._el.content_item = this.domCreate("video", "tl-media-item tl-media-video tl-media-shadow", this._el.content), this._el.content_item.controls = !0, this._el.source_item = this.domCreate("source", "", this._el.content_item), this._el.content_item.addEventListener("load", (function(t) {
                e.onMediaLoaded()
            })), this._el.source_item.src = t, this._el.source_item.type = this._getType(this.data.url, this.data.mediatype.match_str), this._el.content_item.innerHTML += "Your browser doesn't support HTML5 video with " + this._el.source_item.type, this.player_element = this._el.content_item
        }
        _updateMediaDisplay(t) {
            p && (this._el.content_item.style.width = "auto")
        }
        _stopMedia() {
            this.player_element && this.player_element.pause()
        }
        _getType(t, e) {
            var i = "video/";
            switch (t.match(e)[1]) {
                case "mp4":
                    i += "mp4";
                    break;
                case "webm":
                    i += "webm";
                    break;
                default:
                    i = "video"
            }
            return i
        }
    }
    class Fe extends ue {
        _loadMedia() {
            var t, e = this;
            this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-wistia tl-media-shadow", this._el.content), this.media_id = this.data.url.split(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/medias\/(.*)/)[3], O(`Wistia: media_id: ${this.media_id}`), t = "https://fast.wistia.com/embed/iframe/" + this.media_id + "?version=v1&controlsVisibleOnLoad=true&playerColor=aae3d8", this.player = this.domCreate("iframe", "", this._el.content_item), this.player.addEventListener("load", (function(t) {
                e.onMediaLoaded()
            })), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = t, this.player.setAttribute("allowfullscreen", ""), this.player.setAttribute("webkitallowfullscreen", ""), this.player.setAttribute("mozallowfullscreen", ""), this.onLoaded()
        }
        _updateMediaDisplay() {
            this._el.content_item.style.height = X({
                w: this._el.content_item.offsetWidth
            }) + "px"
        }
        _stopMedia() {
            try {
                this.player.contentWindow.postMessage(JSON.stringify({
                    method: "pause"
                }), "https://player.vimeo.com")
            } catch (t) {
                O(t)
            }
        }
    }

    function $e(t, e) {
        var i = [{
            type: "youtube",
            name: "YouTube",
            match_str: "^(https?:)?/*(www.)?youtube|youtu.be",
            cls: ge
        }, {
            type: "vimeo",
            name: "Vimeo",
            match_str: "^(https?:)?/*(player.)?vimeo.com",
            cls: xe
        }, {
            type: "dailymotion",
            name: "DailyMotion",
            match_str: "^(https?:)?/*(www.)?dailymotion.com",
            cls: ke
        }, {
            type: "vine",
            name: "Vine",
            match_str: "^(https?:)?/*(www.)?vine.co",
            cls: Te
        }, {
            type: "soundcloud",
            name: "SoundCloud",
            match_str: "^(https?:)?/*(player.)?soundcloud.com",
            cls: be
        }, {
            type: "twitter",
            name: "Twitter",
            match_str: "^(https?:)?/*(www.)?twitter.com",
            cls: Me
        }, {
            type: "twitterembed",
            name: "TwitterEmbed",
            match_str: "<blockquote class=['\"]twitter-tweet['\"]",
            cls: Le
        }, {
            type: "googlemaps",
            name: "Google Map",
            match_str: /google.+?\/maps\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/search\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/place\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/dir\/([\w\W]+)\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)/,
            cls: ve
        }, {
            type: "flickr",
            name: "Flickr",
            match_str: "^(https?:)?/*(www.)?flickr.com/photos",
            cls: Ee
        }, {
            type: "flickr",
            name: "Flickr",
            match_str: "^(https?://)?flic.kr/.*",
            cls: Ee
        }, {
            type: "instagram",
            name: "Instagram",
            match_str: /^(https?:)?\/*(www.)?(instagr.am|^(https?:)?\/*(www.)?instagram.com)\/p\//,
            cls: Ce
        }, {
            type: "profile",
            name: "Profile",
            match_str: /^(https?:)?\/*(www.)?instagr.am\/[a-zA-Z0-9]{2,}|^(https?:)?\/*(www.)?instagram.com\/[a-zA-Z0-9]{2,}/,
            cls: Ie
        }, {
            type: "documentcloud",
            name: "Document Cloud",
            match_str: /documentcloud.org\//,
            cls: De
        }, {
            type: "image",
            name: "Image",
            match_str: /(jpg|jpeg|png|gif|svg|webp)(\?.*)?$/i,
            cls: me
        }, {
            type: "imgur",
            name: "Imgur",
            match_str: /^.*imgur.com\/.+$|<blockquote class=['\"]imgur-embed-pub['\"]/i,
            cls: Re
        }, {
            type: "googledocs",
            name: "Google Doc",
            match_str: "^(https?:)?/*[^.]*.google.com/[^/]*/d/[^/]*/[^/]*?usp=sharing|^(https?:)?/*drive.google.com/open?id=[^&]*&authuser=0|^(https?:)?//*drive.google.com/open\\?id=[^&]*|^(https?:)?/*[^.]*.googledrive.com/host/[^/]*/",
            cls: je
        }, {
            type: "pdf",
            name: "PDF",
            match_str: /^.*\.pdf(\?.*)?(\#.*)?/,
            cls: Pe
        }, {
            type: "wikipedia",
            name: "Wikipedia",
            match_str: "^(https?:)?/*(www.)?wikipedia.org|^(https?:)?/*([a-z][a-z].)?wikipedia.org",
            cls: we
        }, {
            type: "spotify",
            name: "spotify",
            match_str: "spotify",
            cls: Oe
        }, {
            type: "iframe",
            name: "iFrame",
            match_str: "iframe",
            cls: ze
        }, {
            type: "blockquote",
            name: "Quote",
            match_str: "blockquote",
            cls: ye
        }, {
            type: "video",
            name: "Video",
            match_str: /(mp4|webm)(\?.*)?$/i,
            cls: qe
        }, {
            type: "wistia",
            name: "Wistia",
            match_str: /https?:\/\/(.+)?(wistia\.com|wi\.st)\/.*/i,
            cls: Fe
        }, {
            type: "audio",
            name: "Audio",
            match_str: /(mp3|wav|m4a)(\?.*)?$/i,
            cls: He
        }, {
            type: "imageblank",
            name: "Imageblank",
            match_str: "",
            cls: me
        }];
        if (e) {
            if (t instanceof Array) return !1;
            for (var a = 0; a < i.length; a++) switch (i[a].type) {
                case "flickr":
                case "image":
                case "instagram":
                    if (t.url.match(i[a].match_str)) return i[a]
            }
        } else
            for (a = 0; a < i.length; a++)
                if (t.url.match(i[a].match_str)) return i[a];
        return !1
    }
    class Be {
        constructor(t, e) {
            this._el = {
                container: {},
                content_container: {},
                media_container: {},
                timespan: {},
                line_left: {},
                line_right: {},
                content: {},
                text: {},
                media: {}
            }, this._text = {}, this._state = {
                loaded: !1
            }, this.data = {
                unique_id: "",
                background: null,
                date: {
                    year: 0,
                    month: 0,
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0,
                    thumbnail: "",
                    format: ""
                },
                text: {
                    headline: "",
                    text: ""
                },
                media: null
            }, this.options = {
                duration: 1e3,
                ease: nt,
                width: 600,
                height: 600,
                marker_width_min: 100
            }, this.active = !1, this.animator = {}, this.has_end_date = !1, C(this.options, e), C(this.data, t), this._initLayout(), this._initEvents()
        }
        show() {}
        hide() {}
        setActive(t) {
            this.active = t, this.active && this.has_end_date ? this._el.container.className = "tl-timemarker tl-timemarker-with-end tl-timemarker-active" : this.active ? this._el.container.className = "tl-timemarker tl-timemarker-active" : this.has_end_date ? this._el.container.className = "tl-timemarker tl-timemarker-with-end" : this._el.container.className = "tl-timemarker"
        }
        addTo(t) {
            t.appendChild(this._el.container)
        }
        removeFrom(t) {
            t.removeChild(this._el.container)
        }
        updateDisplay(t, e) {
            this._updateDisplay(t, e)
        }
        loadMedia() {
            this._media && !this._state.loaded && (this._media.loadMedia(), this._state.loaded = !0)
        }
        stopMedia() {
            this._media && this._state.loaded && this._media.stopMedia()
        }
        getLeft() {
            return this._el.container.style.left.slice(0, -2)
        }
        getTime() {
            return this.data.start_date.getTime()
        }
        getEndTime() {
            return !!this.data.end_date && this.data.end_date.getTime()
        }
        setHeight(t) {
            var e = 1;
            this._el.content_container.style.height = t + "px", this._el.timespan_content.style.height = t + "px", this._el.content.className = t <= 30 ? "tl-timemarker-content tl-timemarker-content-small" : "tl-timemarker-content", t <= 56 ? E(this._el.content_container, "tl-timemarker-content-container-small") : D(this._el.content_container, "tl-timemarker-content-container-small"), l ? ((e = Math.floor(t / 14)) < 1 && (e = 1), this._text.className = "tl-headline", this._text.style.webkitLineClamp = e) : (e = t / 12, this._text.className = e > 1 ? "tl-headline tl-headline-fadeout" : "tl-headline", this._text.style.height = 12 * e + "px")
        }
        setWidth(t) {
            this.data.end_date && (this._el.container.style.width = t + "px", t > this.options.marker_width_min ? (this._el.content_container.style.width = t + "px", this._el.content_container.className = "tl-timemarker-content-container tl-timemarker-content-container-long") : (this._el.content_container.style.width = this.options.marker_width_min + "px", this._el.content_container.className = "tl-timemarker-content-container"))
        }
        setClass(t) {
            this._el.container.className = t
        }
        setRowPosition(t, e) {
            this.setPosition({
                top: t
            }), this._el.timespan.style.height = e + "px"
        }
        _onMarkerClick(t) {
            this.fire("markerclick", {
                unique_id: this.data.unique_id
            })
        }
        _initLayout() {
            if (this._el.container = T("div", "tl-timemarker"), this.data.unique_id && (this._el.container.id = this.data.unique_id + "-marker"), this.data.end_date && (this.has_end_date = !0, this._el.container.className = "tl-timemarker tl-timemarker-with-end"), this._el.timespan = T("div", "tl-timemarker-timespan", this._el.container), this._el.timespan_content = T("div", "tl-timemarker-timespan-content", this._el.timespan), this._el.content_container = T("div", "tl-timemarker-content-container", this._el.container), this._el.content = T("div", "tl-timemarker-content", this._el.content_container), this._el.line_left = T("div", "tl-timemarker-line-left", this._el.timespan), this._el.line_right = T("div", "tl-timemarker-line-right", this._el.timespan), this.data.media) {
                this._el.media_container = T("div", "tl-timemarker-media-container", this._el.content);
                var t = {
                        url: this.data.media.thumbnail
                    },
                    e = this.data.media.thumbnail ? $e(t, !0) : null;
                if (e) {
                    var i = new e.cls(t);
                    i.on("loaded", function() {
                        this._el.media = T("img", "tl-timemarker-media", this._el.media_container), this._el.media.src = i.getImageURL()
                    }.bind(this)), i.loadMedia()
                } else {
                    var a = $e(this.data.media).type;
                    this._el.media = T("span", "tl-icon-" + a, this._el.media_container)
                }
            }
            this._el.text = T("div", "tl-timemarker-text", this._el.content), this._text = T("h2", "tl-headline", this._el.text), this.data.text.headline && "" != this.data.text.headline ? this._text.innerHTML = G(this.data.text.headline) : this.data.text.text && "" != this.data.text.text ? this._text.innerHTML = G(this.data.text.text) : this.data.media && this.data.media.caption && "" != this.data.media.caption && (this._text.innerHTML = G(this.data.media.caption)), this.onLoaded()
        }
        _initEvents() {
            _t.addListener(this._el.container, "click", this._onMarkerClick, this)
        }
        _updateDisplay(t, e, i) {
            t && (this.options.width = t), e && (this.options.height = e)
        }
    }
    F(Be, ht, ut);
    class Ue {
        constructor(t, e, i) {
            this._el = {
                drag: t,
                move: t
            }, this.mousedrag = {
                down: "mousedown",
                up: "mouseup",
                leave: "mouseleave",
                move: "mousemove"
            }, this.touchdrag = {
                down: "touchstart",
                up: "touchend",
                leave: "mouseleave",
                move: "touchmove"
            }, e && (this._el.move = e), this.options = {
                snap: !1,
                enable: {
                    x: !0,
                    y: !0
                },
                constraint: {
                    top: !1,
                    bottom: !1,
                    left: 0,
                    right: !1
                },
                momentum_multiplier: 2e3,
                duration: 1e3,
                ease: rt
            }, this.animator = null, this.dragevent = this.mousedrag, b && (this.dragevent = this.touchdrag), this.data = {
                sliding: !1,
                direction: "none",
                pagex: {
                    start: 0,
                    end: 0
                },
                pagey: {
                    start: 0,
                    end: 0
                },
                pos: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                },
                new_pos: {
                    x: 0,
                    y: 0
                },
                new_pos_parent: {
                    x: 0,
                    y: 0
                },
                time: {
                    start: 0,
                    end: 0
                },
                touch: !1
            }, C(this.options, i)
        }
        enable(t) {
            _t.addListener(this._el.drag, this.dragevent.down, this._onDragStart, this), _t.addListener(this._el.drag, this.dragevent.up, this._onDragEnd, this), this.data.pos.start = 0, this._el.move.style.left = this.data.pos.start.x + "px", this._el.move.style.top = this.data.pos.start.y + "px", this._el.move.style.position = "absolute"
        }
        disable() {
            _t.removeListener(this._el.drag, this.dragevent.down, this._onDragStart, this), _t.removeListener(this._el.drag, this.dragevent.up, this._onDragEnd, this)
        }
        stopMomentum() {
            this.animator && this.animator.stop()
        }
        updateConstraint(t) {
            this.options.constraint = t
        }
        _onDragStart(t) {
            this.animator && this.animator.stop(), b ? t.originalEvent ? (this.data.pagex.start = t.originalEvent.touches[0].screenX, this.data.pagey.start = t.originalEvent.touches[0].screenY) : (this.data.pagex.start = t.targetTouches[0].screenX, this.data.pagey.start = t.targetTouches[0].screenY) : (this.data.pagex.start = t.pageX, this.data.pagey.start = t.pageY), this.options.enable.x, this.options.enable.y, this.data.pos.start = {
                x: this._el.move.offsetLeft,
                y: this._el.move.offsetTop
            }, this.data.time.start = (new Date).getTime(), this.fire("dragstart", this.data), _t.addListener(this._el.drag, this.dragevent.move, this._onDragMove, this), _t.addListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this)
        }
        _onDragEnd(t) {
            this.data.sliding = !1, _t.removeListener(this._el.drag, this.dragevent.move, this._onDragMove, this), _t.removeListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this), this.fire("dragend", this.data), this._momentum()
        }
        _onDragMove(t) {
            var e = {
                x: 0,
                y: 0
            };
            this.data.sliding = !0, b ? t.originalEvent ? (this.data.pagex.end = t.originalEvent.touches[0].screenX, this.data.pagey.end = t.originalEvent.touches[0].screenY) : (this.data.pagex.end = t.targetTouches[0].screenX, this.data.pagey.end = t.targetTouches[0].screenY) : (this.data.pagex.end = t.pageX, this.data.pagey.end = t.pageY), e.x = this.data.pagex.start - this.data.pagex.end, e.y = this.data.pagey.start - this.data.pagey.end, this.data.pos.end = {
                x: this._el.drag.offsetLeft,
                y: this._el.drag.offsetTop
            }, this.data.new_pos.x = -(e.x - this.data.pos.start.x), this.data.new_pos.y = -(e.y - this.data.pos.start.y), this.options.enable.x && Math.abs(e.x) > Math.abs(e.y) && (t.preventDefault(), this._el.move.style.left = this.data.new_pos.x + "px"), this.options.enable.y && Math.abs(e.y) > Math.abs(e.y) && (t.preventDefault(), this._el.move.style.top = this.data.new_pos.y + "px"), this.fire("dragmove", this.data)
        }
        _momentum() {
            var t = {
                    x: 0,
                    y: 0,
                    time: 0
                },
                e = {
                    x: 0,
                    y: 0,
                    time: 0
                },
                i = {
                    x: !1,
                    y: !1
                },
                a = !1;
            this.data.direction = null, t.time = 10 * ((new Date).getTime() - this.data.time.start), e.time = 10 * ((new Date).getTime() - this.data.time.start), e.x = this.options.momentum_multiplier * (Math.abs(this.data.pagex.end) - Math.abs(this.data.pagex.start)), e.y = this.options.momentum_multiplier * (Math.abs(this.data.pagey.end) - Math.abs(this.data.pagey.start)), t.x = Math.round(e.x / e.time), t.y = Math.round(e.y / e.time), this.data.new_pos.x = Math.min(this.data.new_pos.x + t.x), this.data.new_pos.y = Math.min(this.data.new_pos.y + t.y), this.options.enable.x ? this.options.constraint.left && this.data.new_pos.x > this.options.constraint.left && (this.data.new_pos.x = this.options.constraint.left) : this.data.new_pos.x = this.data.pos.start.x, this.options.enable.y ? this.data.new_pos.y < 0 && (this.data.new_pos.y = 0) : this.data.new_pos.y = this.data.pos.start.y, e.time < 2e3 && (a = !0), this.options.enable.x && this.options.enable.y ? Math.abs(e.x) > Math.abs(e.y) ? i.x = !0 : i.y = !0 : this.options.enable.x ? Math.abs(e.x) > Math.abs(e.y) && (i.x = !0) : Math.abs(e.y) > Math.abs(e.x) && (i.y = !0), i.x && (Math.abs(e.x) > this._el.drag.offsetWidth / 2 && (a = !0), Math.abs(e.x) > 1e4 && (this.data.direction = "left", e.x > 0 && (this.data.direction = "right"))), i.y && (Math.abs(e.y) > this._el.drag.offsetHeight / 2 && (a = !0), Math.abs(e.y) > 1e4 && (this.data.direction = "up", e.y > 0 && (this.data.direction = "down"))), e.time < 1e3 || this._animateMomentum(), a && this.data.direction ? this.fire("swipe_" + this.data.direction, this.data) : this.data.direction ? this.fire("swipe_nodirection", this.data) : this.options.snap && (this.animator.stop(), this.animator = dt(this._el.move, {
                top: this.data.pos.start.y,
                left: this.data.pos.start.x,
                duration: this.options.duration,
                easing: ot
            }))
        }
        _animateMomentum() {
            var t = {
                    x: this.data.new_pos.x,
                    y: this.data.new_pos.y
                },
                e = {
                    duration: this.options.duration,
                    easing: ot
                };
            this.options.enable.y && ((this.options.constraint.top || this.options.constraint.bottom) && (t.y > this.options.constraint.bottom ? t.y = this.options.constraint.bottom : t.y < this.options.constraint.top && (t.y = this.options.constraint.top)), e.top = Math.floor(t.y) + "px"), this.options.enable.x && (this.options.constraint.left && t.x >= this.options.constraint.left && (t.x = this.options.constraint.left), this.options.constraint.right && t.x < this.options.constraint.right && (t.x = this.options.constraint.right), e.left = Math.floor(t.x) + "px"), this.animator = dt(this._el.move, e), this.fire("momentum", this.data)
        }
    }

    // END OF EXTRA TYPES.

    F(Ue, ht);
    class We { // TimeNav
        constructor(t, e, i, a) {
            this.language = a, this._el = {
                parent: {},
                container: {},
                slider: {},
                slider_background: {},
                line: {},
                marker_container_mask: {},
                marker_container: {},
                marker_item_container: {},
                timeaxis: {},
                timeaxis_background: {},
                attribution: {}
            }, this.collapsed = !1, this._el.container = "object" == typeof t ? t : x(t), this.config = e, this.options = {
                width: 600,
                height: 600,
                duration: 1e3,
                ease: rt,
                has_groups: !1,
                optimal_tick_width: 50,
                scale_factor: 2,
                marker_padding: 5,
                timenav_height_min: 150,
                marker_height_min: 30,
                marker_width_min: 100,
                zoom_sequence: [.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
            }
            this.animator = null
            this.ready = !1
            this._markers = []
            this._eras = []
            this.has_eras = !1
            this._groups = []
            this._calculated_row_height = 100
            this.current_id = ""
            this.timescale = {}
            this.timeaxis = {}
            this.max_rows = 6
            this.animate_css = !1
            this._swipable
            C(this.options, i)
        }
        init() {
            this._initLayout(), this._initEvents(), this._initData(), this.updateDisplay(), this._onLoaded()
        }
        positionMarkers(t) {
            for (var e = 0; e < this._markers.length; e++) {
                var i = this.timescale.getPositionInfo(e);
                t ? this._markers[e].setClass("tl-timemarker tl-timemarker-fast") : this._markers[e].setClass("tl-timemarker"), this._markers[e].setPosition({
                    left: i.start
                }), this._markers[e].setWidth(i.width)
            }
        }
        updateDisplay(t, e, i) {
            let a = !1;
            t && (0 == this.options.width && t > 0 && (a = !0), this.options.width = t), e && e != this.options.height && (this.options.height = e, this.timescale = this._getTimeScale()), this._assignRowsToMarkers(), this._el.slider_background.style.width = this.timescale.getPixelWidth() + this.options.width + "px", this._el.slider_background.style.left = -this.options.width / 2 + "px", this._el.slider.style.width = this.timescale.getPixelWidth() + this.options.width + "px", this._swipable.updateConstraint({
                top: !1,
                bottom: !1,
                left: this.options.width / 2,
                right: -(this.timescale.getPixelWidth() - this.options.width / 2)
            }), a && this._drawTimeline(), this.goToId(this.current_id, !0)
        }
        _getTimeScale() {
            var t = 0;
            try {
                t = parseInt(this.options.marker_height_min)
            } catch (e) {
                O("Invalid value for marker_height_min option."), t = 30
            }
            return 0 == t && (O("marker_height_min option must not be zero."), t = 30), this.max_rows = Math.round((this.options.height - this._el.timeaxis_background.offsetHeight - this.options.marker_padding) / t), this.max_rows < 1 && (this.max_rows = 1), new re(this.config, {
                display_width: this._el.container.offsetWidth,
                screen_multiplier: this.options.scale_factor,
                max_rows: this.max_rows
            })
        }
        _updateTimeScale(t) {
            this.options.scale_factor = t, this._updateDrawTimeline()
        }
        zoomIn() {
            var t = function(t, e, i) {
                for (var a = 0; a < t.length; a++)
                    if (e < t[a]) return t[a];
                return i || e
            }(this.options.zoom_sequence, this.options.scale_factor);
            this.setZoomFactor(t)
        }
        zoomOut() {
            var t = function(t, e, i) {
                for (var a = t.length - 1; a >= 0; a--)
                    if (e > t[a]) return t[a];
                return i || e
            }(this.options.zoom_sequence, this.options.scale_factor);
            this.setZoomFactor(t)
        }
        setZoom(t) {
            var e = this.options.zoom_sequence[t];
            "number" == typeof e ? this.setZoomFactor(e) : console.warn("Invalid zoom level. Please use an index number between 0 and " + (this.options.zoom_sequence.length - 1))
        }
        setZoomFactor(t) {
            t <= this.options.zoom_sequence[0] ? this.fire("zoomtoggle", {
                zoom: "out",
                show: !1
            }) : this.fire("zoomtoggle", {
                zoom: "out",
                show: !0
            }), t >= this.options.zoom_sequence[this.options.zoom_sequence.length - 1] ? this.fire("zoomtoggle", {
                zoom: "in",
                show: !1
            }) : this.fire("zoomtoggle", {
                zoom: "in",
                show: !0
            }), 0 == t && (console.warn("Zoom factor must be greater than zero. Using 0.1"), t = .1), this.options.scale_factor = t, this.goToId(this.current_id, !this._updateDrawTimeline(!0), !0)
        }
        _createGroups() {
            this._groups = [];
            var t = this.timescale.getGroupLabels();
            if (t) {
                this.options.has_groups = !0;
                for (var e = 0; e < t.length; e++) this._createGroup(t[e])
            }
        }
        _createGroup(t) {
            var e = new le(t);
            this._addGroup(e), this._groups.push(e)
        }
        _addGroup(t) {
            t.addTo(this._el.container)
        }
        _positionGroups() {
            if (this.options.has_groups)
                for (var t = this.options.height - this._el.timeaxis_background.offsetHeight, e = Math.floor(t / this.timescale.getNumberOfRows() - this.options.marker_padding), i = (this.timescale.getGroupLabels(), 0), a = 0; i < this._groups.length; i++) {
                    var s = Math.floor(a * (e + this.options.marker_padding)),
                        n = !1;
                    s > t - this.options.marker_padding && (n = !0), this._groups[i].setRowPosition(s, this._calculated_row_height + this.options.marker_padding / 2), this._groups[i].setAlternateRowColor(U(i), n), a += this._groups[i].data.rows
                }
        }
        _addMarker(t) {
            t.addTo(this._el.marker_item_container), t.on("markerclick", this._onMarkerClick, this), t.on("added", this._onMarkerAdded, this)
        }
        _createMarker(t, e) {
            var i = new Be(t, this.options);
            this._addMarker(i), e < 0 ? this._markers.push(i) : this._markers.splice(e, 0, i)
        }
        _createMarkers(t) {
            for (var e = 0; e < t.length; e++) this._createMarker(t[e], -1)
        }
        _removeMarker(t) {
            t.removeFrom(this._el.marker_item_container)
        }
        _destroyMarker(t) {
            this._removeMarker(this._markers[t]), this._markers.splice(t, 1)
        }
        _calculateMarkerHeight(t) {
            return t / this.timescale.getNumberOfRows() - this.options.marker_padding
        }
        _calculateRowHeight(t) {
            return t / this.timescale.getNumberOfRows()
        }
        _calculateAvailableHeight() {
            return this.options.height - this._el.timeaxis_background.offsetHeight - this.options.marker_padding
        }
        _calculateMinimumTimeNavHeight() {
            return this.timescale.getNumberOfRows() * this.options.marker_height_min + this._el.timeaxis_background.offsetHeight + this.options.marker_padding
        }
        getMinimumHeight() {
            return this._calculateMinimumTimeNavHeight()
        }
        _assignRowsToMarkers() {
            var t = this._calculateAvailableHeight(),
                e = this._calculateMarkerHeight(t);
            this._positionGroups(), this._calculated_row_height = this._calculateRowHeight(t);
            for (var i = 0; i < this._markers.length; i++) {
                this._markers[i].setHeight(e);
                var a = this.timescale.getPositionInfo(i).row,
                    s = Math.floor(a * (e + this.options.marker_padding)) + this.options.marker_padding,
                    n = t - s + this.options.marker_padding;
                this._markers[i].setRowPosition(s, n)
            }
        }
        _resetMarkersActive() {
            for (var t = 0; t < this._markers.length; t++) this._markers[t].setActive(!1)
        }
        _findMarkerIndex(t) {
            var e = -1;
            return ("string" == typeof t || t instanceof String) && (e = W(t, this._markers, "unique_id", e)), e
        }
        _createEras(t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e],
                    a = new he(i.start_date, i.end_date, i.headline, this.options);
                this._eras.push(a), a.addTo(this._el.marker_item_container), a.on("added", this._onEraAdded, this)
            }
        }
        _positionEras(t) {
            for (var e = 0, i = 0; i < this._eras.length; i++) {
                var a = {
                    start: 0,
                    end: 0,
                    width: 0
                };
                a.start = this.timescale.getPosition(this._eras[i].start_date.getTime()), a.end = this.timescale.getPosition(this._eras[i].end_date.getTime()), a.width = a.end - a.start, t ? this._eras[i].setClass("tl-timeera tl-timeera-fast") : this._eras[i].setClass("tl-timeera"), this._eras[i].setPosition({
                    left: a.start
                }), this._eras[i].setWidth(a.width), ++e > 5 && (e = 0), this._eras[i].setColor(e)
            }
        }
        createMarker(t, e) {
            this._createMarker(t, e)
        }
        createMarkers(t) {
            this._createMarkers(t)
        }
        destroyMarker(t) {
            this._destroyMarker(t)
        }
        destroyMarkerId(t) {
            this.destroyMarker(this._findMarkerIndex(t))
        }
        goTo(t, e, i) {
            var a = this.options.ease,
                s = this.options.duration,
                n = t < 0 ? 0 : t;
            this._resetMarkersActive(), t >= 0 && t < this._markers.length && this._markers[t].setActive(!0), this.animator && this.animator.stop(), e ? (this._el.slider.className = "tl-timenav-slider", this._el.slider.style.left = -this._markers[n].getLeft() + this.options.width / 2 + "px") : i ? (this._el.slider.className = "tl-timenav-slider tl-timenav-slider-animate", this.animate_css = !0, this._el.slider.style.left = -this._markers[n].getLeft() + this.options.width / 2 + "px") : (this._el.slider.className = "tl-timenav-slider", this.animator = dt(this._el.slider, {
                left: -this._markers[n].getLeft() + this.options.width / 2 + "px",
                duration: s,
                easing: a
            })), t >= 0 && t < this._markers.length ? this.current_id = this._markers[t].data.unique_id : this.current_id = ""
        }
        goToId(t, e, i) {
            this.goTo(this._findMarkerIndex(t), e, i)
        }
        _onLoaded() {
            this.ready = !0, this.fire("loaded", this.config)
        }
        _onMarkerAdded(t) {
            this.fire("dateAdded", this.config)
        }
        _onEraAdded(t) {
            this.fire("eraAdded", this.config)
        }
        _onMarkerRemoved(t) {
            this.fire("dateRemoved", this.config)
        }
        _onMarkerClick(t) {
            this.goToId(t.unique_id), this.fire("change", {
                unique_id: t.unique_id
            })
        }
        _onMouseScroll(t) {
            var e = 0,
                i = 0,
                a = {
                    right: -(this.timescale.getPixelWidth() - this.options.width / 2),
                    left: this.options.width / 2
                };
            t || (t = window.event), t.originalEvent && (t = t.originalEvent), void 0 !== t.wheelDeltaX && (e = t.wheelDeltaY / 6, e = Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY) ? t.wheelDeltaX / 6 : 0), e && (t.preventDefault && t.preventDefault(), t.returnValue = !1), (i = parseInt(this._el.slider.style.left.replace("px", "")) + e) > a.left ? i = a.left : i < a.right && (i = a.right), this.animate_css && (this._el.slider.className = "tl-timenav-slider", this.animate_css = !1), this._el.slider.style.left = i + "px"
        }
        _onDragMove(t) {
            this.animate_css && (this._el.slider.className = "tl-timenav-slider", this.animate_css = !1)
        }
        _drawTimeline(t) {
            this.timescale = this._getTimeScale(), this.timeaxis.drawTicks(this.timescale, this.options.optimal_tick_width), this.positionMarkers(t), this._assignRowsToMarkers(), this._createGroups(), this._positionGroups(), this.has_eras && this._positionEras(t)
        }
        _updateDrawTimeline(t) {
            var e = !1;
            if (t) {
                var i = new re(this.config, {
                    display_width: this._el.container.offsetWidth,
                    screen_multiplier: this.options.scale_factor,
                    max_rows: this.max_rows
                });
                this.timescale.getMajorScale() == i.getMajorScale() && this.timescale.getMinorScale() == i.getMinorScale() && (e = !0)
            } else e = !0;
            return e ? (this.timescale = this._getTimeScale(), this.timeaxis.positionTicks(this.timescale, this.options.optimal_tick_width), this.positionMarkers(), this._assignRowsToMarkers(), this._positionGroups(), this.has_eras && this._positionEras(), this.updateDisplay()) : this._drawTimeline(!0), e
        }
        _initLayout() {
            this._el.attribution = T("div", "tl-attribution", this._el.container), this._el.line = T("div", "tl-timenav-line", this._el.container), this._el.slider = T("div", "tl-timenav-slider", this._el.container), this._el.slider_background = T("div", "tl-timenav-slider-background", this._el.slider), this._el.marker_container_mask = T("div", "tl-timenav-container-mask", this._el.slider), this._el.marker_container = T("div", "tl-timenav-container", this._el.marker_container_mask), this._el.marker_item_container = T("div", "tl-timenav-item-container", this._el.marker_container), this._el.timeaxis = T("div", "tl-timeaxis", this._el.slider), this._el.timeaxis_background = T("div", "tl-timeaxis-background", this._el.container), this._el.attribution.innerHTML = "<a href='http://timeline.knightlab.com' target='_blank' rel='noopener'><span class='tl-knightlab-logo'></span>TimelineJS</a>", this.timeaxis = new de(this._el.timeaxis, this.options, this.language), this._swipable = new Ue(this._el.slider_background, this._el.slider, {
                enable: {
                    x: !0,
                    y: !1
                },
                constraint: {
                    top: !1,
                    bottom: !1,
                    left: this.options.width / 2,
                    right: !1
                },
                snap: !1
            }), this._swipable.enable()
        }
        _initEvents() {
            this._swipable.on("dragmove", this._onDragMove, this), _t.addListener(this._el.container, "mousewheel", this._onMouseScroll, this), _t.addListener(this._el.container, "DOMMouseScroll", this._onMouseScroll, this)
        }
        _initData() {
            this._createMarkers(this.config.events), this.config.eras && this.config.eras.length > 0 && (this.has_eras = !0, this._createEras(this.config.eras)), this._drawTimeline()
        }
    }
    F(We, ht, ut);
    class Ge { // Slide, contains some data.
        constructor(t, e, i, a) {
            a && this.setLanguage(a), this._el = {
                container: {},
                scroll_container: {},
                background: {},
                content_container: {},
                content: {}
            }, this._media = null, this._mediaclass = {}, this._text = {}, this._background_media = null, this._state = {
                loaded: !1
            }, this.has = {
                headline: !1,
                text: !1,
                media: !1,
                title: !1,
                background: {
                    image: !1,
                    color: !1,
                    color_value: ""
                }
            }, this.has.title = i, this.data = {
                unique_id: null,
                background: null,
                start_date: null,
                end_date: null,
                location: null,
                text: null,
                media: null,
                autolink: !0
            }, this.options = {
                duration: 1e3,
                slide_padding_lr: 40,
                ease: nt,
                width: 600,
                height: 600,
                skinny_size: 650,
                media_name: ""
            }, this.active = !1, this.animator = {}, C(this.options, e), C(this.data, t), this._initLayout(), this._initEvents()
        }
        show() {
            this.animator = dt(this._el.slider_container, {
                left: -this._el.container.offsetWidth * n + "px",
                duration: this.options.duration,
                easing: this.options.ease
            })
        }
        hide() {}
        setActive(t) {
            this.active = t, this.active ? (this.data.background && this.fire("background_change", this.has.background), this.loadMedia()) : this.stopMedia()
        }
        addTo(t) {
            t.appendChild(this._el.container)
        }
        removeFrom(t) {
            t.removeChild(this._el.container)
        }
        updateDisplay(t, e, i) {
            var a, s = this.options.slide_padding_lr,
                n = this.options.slide_padding_lr;
            this.options.width = t || this._el.container.offsetWidth, a = this.options.width - 2 * this.options.slide_padding_lr, d && this.options.width <= this.options.skinny_size ? (s = 0, n = 0, a = this.options.width) : "landscape" == i || this.options.width <= this.options.skinny_size && (s = 50, n = 50, a = this.options.width - s - n), this._el.content.style.paddingLeft = s + "px", this._el.content.style.paddingRight = n + "px", this._el.content.style.width = a + "px", this.options.height = e || this._el.container.offsetHeight, this._media && (!this.has.text && this.has.headline ? this._media.updateDisplay(a, this.options.height - this._text.headlineHeight(), i) : this.has.text || this.has.headline ? this.options.width <= this.options.skinny_size ? this._media.updateDisplay(a, this.options.height, i) : this._media.updateDisplay(a / 2, this.options.height, i) : this._media.updateDisplay(a, this.options.height, i)), this._updateBackgroundDisplay()
        }
        loadMedia() {
            var t = this;
            this._media && !this._state.loaded && (this._media.loadMedia(), this._state.loaded = !0), this._background_media && !this._background_media._state.loaded && (this._background_media.on("loaded", (function() {
                t._updateBackgroundDisplay()
            })), this._background_media.loadMedia())
        }
        stopMedia() {
            this._media && this._state.loaded && this._media.stopMedia()
        }
        getBackground() {
            return this.has.background
        }
        scrollToTop() {
            this._el.container.scrollTop = 0
        }
        getFormattedDate() {
            if (q(this.data.display_date).length > 0) return this.data.display_date;
            var t = "";
            return this.has.title || (this.data.end_date && (t = " &mdash; " + this.data.end_date.getDisplayDate(this.getLanguage())), this.data.start_date && (t = this.data.start_date.getDisplayDate(this.getLanguage()) + t)), t
        }
        _initLayout() {
            if (this._el.container = T("div", "tl-slide"), this.has.title && (this._el.container.className = "tl-slide tl-slide-titleslide"), this.data.unique_id && (this._el.container.id = this.data.unique_id), this._el.scroll_container = T("div", "tl-slide-scrollable-container", this._el.container), this._el.content_container = T("div", "tl-slide-content-container", this._el.scroll_container), this._el.content = T("div", "tl-slide-content", this._el.content_container), this._el.background = T("div", "tl-slide-background", this._el.container), this.data.background) {
                if (this.data.background.url) {
                    var t = $e(this.data.background, !0);
                    t && (this._background_media = new t.cls(this.data.background, {
                        background: 1
                    }), this.has.background.image = !0, this._el.container.className += " tl-full-image-background", this.has.background.color_value = "#000", this._el.background.style.display = "block")
                }
                this.data.background.color && (this.has.background.color = !0, this._el.container.className += " tl-full-color-background", this.has.background.color_value = this.data.background.color), this.data.background.text_background && (this._el.container.className += " tl-text-background")
            }
            this.data.media && this.data.media.url && "" != this.data.media.url && (this.has.media = !0), this.data.text && this.data.text.text && (this.has.text = !0), this.data.text && this.data.text.headline && (this.has.headline = !0), this.has.media && (this.data.media.mediatype = $e(this.data.media), this.options.media_name = this.data.media.mediatype.name, this.options.media_type = this.data.media.mediatype.type, this.options.autolink = this.data.autolink, this._media = new this.data.media.mediatype.cls(this.data.media, this.options, this.getLanguage())), (this.has.text || this.has.headline) && (this._text = new ce(this.data.text, {
                title: this.has.title,
                language: this.options.language,
                autolink: this.data.autolink
            }), this._text.addDateText(this.getFormattedDate())), this.has.text || this.has.headline || !this.has.media ? this.has.headline && this.has.media && !this.has.text ? (E(this._el.container, "tl-slide-media-only"), this._text.addTo(this._el.content), this._media.addTo(this._el.content)) : this.has.text && this.has.media ? (this._media.addTo(this._el.content), this._text.addTo(this._el.content)) : (this.has.text || this.has.headline) && (E(this._el.container, "tl-slide-text-only"), this._text.addTo(this._el.content)) : (E(this._el.container, "tl-slide-media-only"), this._media.addTo(this._el.content)), this.onLoaded()
        }
        _initEvents() {}
        _updateBackgroundDisplay() {
            this._background_media && this._background_media._state.loaded && (this._el.background.style.backgroundImage = "url('" + this._background_media.getImageURL(this.options.width, this.options.height) + "')")
        }
    }
    F(Ge, zt, ht, ut);
    class Ze { // Next or Previous Slide.
        constructor(t, e, i) {
            this._el = {
                container: {},
                content_container: {},
                icon: {},
                title: {},
                description: {}
            }, this.mediatype = {}, this.data = {
                title: "Navigation",
                description: "Description",
                date: "Date"
            }, this.options = {
                direction: "previous"
            }, this.animator = null, C(this.options, e), C(this.data, t), this._el.container = T("div", "tl-slidenav-" + this.options.direction), d && this._el.container.setAttribute("ontouchstart", " "), this._initLayout(), this._initEvents(), i && i.appendChild(this._el.container)
        }
        update(t) {
            var e = {
                title: "",
                description: "",
                date: t.getFormattedDate()
            };
            t.data.text && t.data.text.headline && (e.title = t.data.text.headline), this._update(e)
        }
        setColor(t) {
            this._el.content_container.className = t ? "tl-slidenav-content-container tl-slidenav-inverted" : "tl-slidenav-content-container"
        }
        _onMouseClick() {
            this.fire("clicked", this.options)
        }
        _update(t) {
            this.data = C(this.data, t), this._el.title.innerHTML = G(this.data.title), this._el.description.innerHTML = G(this.data.date)
        }
        _initLayout() {
            this._el.content_container = T("div", "tl-slidenav-content-container", this._el.container), this._el.icon = T("div", "tl-slidenav-icon", this._el.content_container), this._el.title = T("div", "tl-slidenav-title", this._el.content_container), this._el.description = T("div", "tl-slidenav-description", this._el.content_container), this._el.icon.innerHTML = "&nbsp;", this._update()
        }
        _initEvents() {
            _t.addListener(this._el.container, "click", this._onMouseClick, this)
        }
    }
    F(Ze, ut, ht);
    class Ye { // StorySlider
        constructor(t, e, i, a) {
            a && this.setLanguage(a), this._el = {
                container: {},
                background: {},
                slider_container_mask: {},
                slider_container: {},
                slider_item_container: {}
            }, this._nav = {}, this._nav.previous = {}, this._nav.next = {}, this.slide_spacing = 0, this._slides = [], this._swipable, this.preloadTimer, this._message, this.current_id = "", this.data = {}, this.options = {
                id: "",
                layout: "portrait",
                width: 600,
                height: 600,
                default_bg_color: {
                    r: 255,
                    g: 255,
                    b: 255
                },
                slide_padding_lr: 40,
                start_at_slide: 1,
                slide_default_fade: "0%",
                duration: 1e3,
                ease: rt,
                dragging: !0,
                trackResize: !0
            }, "object" == typeof t ? (this._el.container = t, this.options.id = B(6, "tl")) : (this.options.id = t, this._el.container = x(t)), this._el.container.id || (this._el.container.id = this.options.id), this.animator = null, C(this.options, i), C(this.data, e)
        }
        init() {
            this._initLayout(), this._initEvents(), this._initData(), this.updateDisplay(), this.goTo(this.options.start_at_slide), this._onLoaded()
        }
        _addSlide(t) {
            t.addTo(this._el.slider_item_container), t.on("added", this._onSlideAdded, this), t.on("background_change", this._onBackgroundChange, this)
        }
        _createSlide(t, e, i) {
            var a = new Ge(t, this.options, e, this.getLanguage());
            this._addSlide(a), i < 0 ? this._slides.push(a) : this._slides.splice(i, 0, a)
        }
        _createSlides(t) {
            for (var e = 0; e < t.length; e++) "" == t[e].unique_id && (t[e].unique_id = B(6, "tl-slide")), this._createSlide(t[e], !1, -1)
        }
        _removeSlide(t) {
            t.removeFrom(this._el.slider_item_container), t.off("added", this._onSlideRemoved, this), t.off("background_change", this._onBackgroundChange)
        }
        _destroySlide(t) {
            this._removeSlide(this._slides[t])
            this._slides.splice(t, 1)
        }
        _findSlideIndex(t) {
            var e = t;
            return ("string" == typeof t || t instanceof String) && (e = W(t, this._slides, "unique_id")), e
        }
        updateDisplay(t, e, i, a) {
            var s, n;
            n = void 0 === a ? this.options.layout : a, this.options.layout = n, this.options.width = t || this._el.container.offsetWidth, this.options.height = e || this._el.container.offsetHeight, this.slide_spacing = 2 * this.options.width, s = this.options.height / 2, this._nav.next.setPosition({
                top: s
            }), this._nav.previous.setPosition({
                top: s
            });
            for (var o = 0; o < this._slides.length; o++) this._slides[o].updateDisplay(this.options.width, this.options.height, n), this._slides[o].setPosition({
                left: this.slide_spacing * o,
                top: 0
            });
            this.goToId(this.current_id, !0, !0)
        }
        createSlide(t, e) {
            this._createSlide(t, !1, e)
        }
        createSlides(t) {
            this._createSlides(t)
        }
        destroySlide(t) {
            this._destroySlide(t)
        }
        destroySlideId(t) {
            this.destroySlide(this._findSlideIndex(t))
        }
        goTo(t, e, i) {
            t = parseInt(t), isNaN(t) && (t = 0);
            var a = this;
            this.changeBackground({
                color_value: "",
                image: !1
            }), this.preloadTimer && clearTimeout(this.preloadTimer);
            for (var s = 0; s < this._slides.length; s++) this._slides[s].setActive(!1);
            t < this._slides.length && t >= 0 && (this.current_id = this._slides[t].data.unique_id, this.animator && this.animator.stop(), this._swipable && this._swipable.stopMomentum(), e ? (this._el.slider_container.style.left = -this.slide_spacing * t + "px", this._onSlideChange(i)) : this.animator = dt(this._el.slider_container, {
                left: -this.slide_spacing * t + "px",
                duration: this.options.duration,
                easing: this.options.ease,
                complete: this._onSlideChange(i)
            }), this._slides[t].setActive(!0), this._slides[t + 1] ? (this.showNav(this._nav.next, !0), this._nav.next.update(this._slides[t + 1])) : this.showNav(this._nav.next, !1), this._slides[t - 1] ? (this.showNav(this._nav.previous, !0), this._nav.previous.update(this._slides[t - 1])) : this.showNav(this._nav.previous, !1), this.preloadTimer = setTimeout((function() {
                a.preloadSlides(t)
            }), this.options.duration))
        }
        goToId(t, e, i) {
            this.goTo(this._findSlideIndex(t), e, i)
        }
        preloadSlides(t) {
            this._slides[t + 1] && (this._slides[t + 1].loadMedia(), this._slides[t + 1].scrollToTop())
            this._slides[t + 2] && (this._slides[t + 2].loadMedia(), this._slides[t + 2].scrollToTop())
            this._slides[t - 1] && (this._slides[t - 1].loadMedia(), this._slides[t - 1].scrollToTop())
            this._slides[t - 2] && (this._slides[t - 2].loadMedia(), this._slides[t - 2].scrollToTop())
        }
        next() {
            var t = this._findSlideIndex(this.current_id);
            t + 1 < this._slides.length ? this.goTo(t + 1) : this.goTo(t)
        }
        previous() {
            var t = this._findSlideIndex(this.current_id);
            t - 1 >= 0 ? this.goTo(t - 1) : this.goTo(t)
        }
        showNav(t, e) {
            this.options.width <= 500 && d || (e ? t.show() : t.hide())
        }
        changeBackground(t) {
            var e = {
                r: 256,
                g: 256,
                b: 256
            };
            t.color_value && "" != t.color_value ? (e = A(t.color_value)) || (O("Invalid color value " + t.color_value), e = this.options.default_bg_color) : (e = this.options.default_bg_color, t.color_value = "rgb(" + e.r + " , " + e.g + ", " + e.b + ")"), e.r, e.g, e.b, this._el.background.style.backgroundImage = "none", t.color_value ? this._el.background.style.backgroundColor = t.color_value : this._el.background.style.backgroundColor = "transparent", e.r < 255 || e.g < 255 || e.b < 255 || t.image ? (this._nav.next.setColor(!0), this._nav.previous.setColor(!0)) : (this._nav.next.setColor(!1), this._nav.previous.setColor(!1))
        }
        _updateDrawSlides() {
            for (var t = this.options.layout, e = 0; e < this._slides.length; e++) this._slides[e].updateDisplay(this.options.width, this.options.height, t), this._slides[e].setPosition({
                left: this.slide_spacing * e,
                top: 0
            });
            this.goToId(this.current_id, !0, !1)
        }
        _initLayout() {
            E(this._el.container, "tl-storyslider"), this._el.slider_container_mask = T("div", "tl-slider-container-mask", this._el.container), this._el.background = T("div", "tl-slider-background tl-animate", this._el.container), this._el.slider_container = T("div", "tl-slider-container tlanimate", this._el.slider_container_mask), this._el.slider_item_container = T("div", "tl-slider-item-container", this._el.slider_container), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this._nav.previous = new Ze({
                title: "Previous",
                description: "description"
            }, {
                direction: "previous"
            }), this._nav.next = new Ze({
                title: "Next",
                description: "description"
            }, {
                direction: "next"
            }), this._nav.next.addTo(this._el.container), this._nav.previous.addTo(this._el.container), this._el.slider_container.style.left = "0px", b && (this._swipable = new Ue(this._el.slider_container_mask, this._el.slider_container, {
                enable: {
                    x: !0,
                    y: !1
                },
                snap: !0
            }), this._swipable.enable(), this._message = new Rt(this._el.container, {
                message_class: "tl-message-full",
                message_icon_class: "tl-icon-swipe-left"
            }, this.getLanguage()), this._message.updateMessage(this._("swipe_to_navigate")), this._message.addTo(this._el.container))
        }
        _initEvents() {
            this._nav.next.on("clicked", this._onNavigation, this), this._nav.previous.on("clicked", this._onNavigation, this), this._message && this._message.on("clicked", this._onMessageClick, this), this._swipable && (this._swipable.on("swipe_left", this._onNavigation, this), this._swipable.on("swipe_right", this._onNavigation, this), this._swipable.on("swipe_nodirection", this._onSwipeNoDirection, this))
        }
        _initData() {
            this.data.title && this._createSlide(this.data.title, !0, -1)
            this._createSlides(this.data.events)
        }
        _onBackgroundChange(t) {
            var e = this._findSlideIndex(this.current_id),
                i = this._slides[e].getBackground();
            this.changeBackground(t), this.fire("colorchange", i)
        }
        _onMessageClick(t) {
            this._message.hide()
        }
        _onSwipeNoDirection(t) {
            this.goToId(this.current_id)
        }
        _onNavigation(t) {
            "next" == t.direction || "left" == t.direction ? this.next() : "previous" != t.direction && "right" != t.direction || this.previous(), this.fire("nav_" + t.direction, this.data)
        }
        _onSlideAdded(t) {
            O("slideadded"), this.fire("slideAdded", this.data)
        }
        _onSlideRemoved(t) {
            this.fire("slideRemoved", this.data)
        }
        _onSlideChange(t) {
            t || this.fire("change", {
                unique_id: this.current_id
            })
        }
        _onMouseClick(t) {}
        _fireMouseEvent(t) {
            if (this._loaded) {
                var e = t.type;
                e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e) && ("contextmenu" === e && _t.preventDefault(t), this.fire(e, {
                    latlng: "something",
                    layerPoint: "something else"
                }))
            }
        }
        _onLoaded() {
            this.fire("loaded", this.data)
        }
    }
    F(Ye, zt, ht);
    class Ve { // Menubar
        constructor(t, e, i) {
            this._el = {
                parent: {},
                container: {},
                button_backtostart: {},
                button_zoomin: {},
                button_zoomout: {},
                selected_types: {},
                arrow: {},
                line: {},
                coverbar: {},
                grip: {}
            }, this.collapsed = !1, this._el.container = "object" == typeof t ? t : x(t), e && (this._el.parent = e), this.options = {
                width: 600,
                height: 600,
                duration: 1e3,
                ease: rt,
                menubar_default_y: 0
            }, this.animator = {}, C(this.options, i), this._initLayout(), this._initEvents()
        }
        show(t) {
            this.options.duration
        }
        hide(t) {}
        toogleZoomIn(t) {
            t ? D(this._el.button_zoomin, "tl-menubar-button-inactive") : E(this._el.button_zoomin, "tl-menubar-button-inactive")
        }
        toogleZoomOut(t) {
            t ? D(this._el.button_zoomout, "tl-menubar-button-inactive") : E(this._el.button_zoomout, "tl-menubar-button-inactive")
        }
        setSticky(t) {
            this.options.menubar_default_y = t
        }
        setColor(t) {
            this._el.container.className = t ? "tl-menubar tl-menubar-inverted" : "tl-menubar"
        }
        updateDisplay(t, e, i, a) {
            this._updateDisplay(t, e, i, a)
        }
        _onButtonZoomIn(t) {
            this.fire("zoom_in", t)
        }
        _onButtonZoomOut(t) {
            this.fire("zoom_out", t)
        }
        _onButtonBackToStart(t) {
            this.fire("back_to_start", t)
        }
        _onSelectedTypes(t) {
            this.fire("selected_types", t)
        }
        _initLayout() {
            this._el.button_zoomin = T("span", "tl-menubar-button", this._el.container), this._el.button_zoomout = T("span", "tl-menubar-button", this._el.container), this._el.button_backtostart = T("span", "tl-menubar-button", this._el.container), d && this._el.container.setAttribute("ontouchstart", " "), this._el.button_backtostart.innerHTML = "<span class='tl-icon-goback'></span>", this._el.button_zoomin.innerHTML = "<span class='tl-icon-zoom-in'></span>", this._el.button_zoomout.innerHTML = "<span class='tl-icon-zoom-out'>", this._el.menu_selectedtypes = "<span class='tl-icon-selected-types'>"
        }
        _initEvents() {
            _t.addListener(this._el.button_backtostart, "click", this._onButtonBackToStart, this), _t.addListener(this._el.button_zoomin, "click", this._onButtonZoomIn, this), _t.addListener(this._el.button_zoomout, "click", this._onButtonZoomOut, this)
        }
        _updateDisplay(t, e, i) {
            t && (this.options.width = t), e && (this.options.height = e)
        }
    }
    F(Ve, ut, ht);
    let Je = null;
    if (document) {
        let t = document.getElementsByTagName("script");
        t && t.length > 0 && (Je = t[t.length - 1].src)
    }
    class Xe { // Timeline
        constructor(t, e, i) {
            if (i || (i = {}), this.ready = !1, this._el = {
                    container: x(t),
                    storyslider: {},
                    timenav: {},
                    menubar: {}
                }, i.lang && !i.language && (i.language = i.lang), this.language = Ot, this._storyslider = {}, this._timenav = {}, this._menubar = {}, this._loaded = {
                    storyslider: !1,
                    timenav: !1
                }, this.config = null, this.options = {
                    script_path: "https://cdn.jsdelivr.com/EmmetSp/timeline-webserver@master/js/",
                    height: this._el.container.offsetHeight,
                    width: this._el.container.offsetWidth,
                    debug: !1,
                    font: "default",
                    is_embed: !1,
                    is_full_embed: !1,
                    hash_bookmark: !1,
                    default_bg_color: {
                        r: 255,
                        g: 255,
                        b: 255
                    },
                    scale_factor: 2,
                    layout: "landscape",
                    timenav_position: "bottom",
                    optimal_tick_width: 60,
                    base_class: "tl-timeline",
                    timenav_height: null,
                    timenav_height_percentage: 25,
                    timenav_mobile_height_percentage: 40,
                    timenav_height_min: 175,
                    marker_height_min: 30,
                    marker_width_min: 100,
                    marker_padding: 5,
                    start_at_slide: 0,
                    start_at_end: !1,
                    menubar_height: 0,
                    skinny_size: 650,
                    medium_size: 800,
                    use_bc: !1,
                    duration: 1e3,
                    ease: rt,
                    dragging: !0,
                    trackResize: !0,
                    map_type: "stamen:toner-lite",
                    slide_padding_lr: 100,
                    slide_default_fade: "0%",
                    zoom_sequence: [.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
                    language: "en",
                    ga_property_id: null,
                    track_events: ["back_to_start", "nav_next", "nav_previous", "zoom_in", "zoom_out", "selected_types"],
                    theme: null,
                    sheets_proxy: "https://sheets-proxy.knightlab.com/proxy/",
                    soundcite: !1
                }, this.animator_timenav = null, this.animator_storyslider = null, this.animator_menubar = null, this.message = new Rt(this._el.container, {
                    message_class: "tl-message-full"
                }), "string" == typeof i.default_bg_color) {
                var a = A(i.default_bg_color);
                a ? i.default_bg_color = a : (delete i.default_bg_color, O("Invalid default background color. Ignoring."))
            }
            var s, n;
            C(this.options, i), this.options.script_path || (this.options.script_path = this.determineScriptPath()), i.soundcite && this.on("ready", () => {
                O("Loading Soundcite resources "), _e("https://cdn.knightlab.com/libs/soundcite/latest/css/player.css"), pe("https://cdn.knightlab.com/libs/soundcite/latest/js/soundcite.min.js")
            }), this._loadStyles(), document.addEventListener("keydown", (s = this, function(t) {
                if (s.config) {
                    var e = t.key,
                        i = s._getSlideIndex(self.current_id),
                        a = s.config.events.length - 1,
                        n = s.config.title ? a + 1 : a;
                    "ArrowLeft" == e ? 0 != i && s.goToPrev() : "ArrowRight" == e && i != n && s.goToNext()
                }
            })), window.addEventListener("resize", function(t) {
                this.updateDisplay()
            }.bind(this)), this.options.debug && (n = console.log, j.push(n)), E(this._el.container, "tl-timeline"), this.options.is_embed && E(this._el.container, "tl-timeline-embed"), this.options.is_full_embed && E(this._el.container, "tl-timeline-full-embed"), this._loadLanguage(e)
        }

        _loadStyles() {
            let t = null,
                e = null;
            if (this.options.font && (0 == this.options.font.indexOf("http") || this.options.font.match(/\.css$/))) t = this.options.font;
            else if (this.options.font) {
                let e = "../css/fonts/font." + this.options.font.toLowerCase() + ".css";
                t = new URL(e, this.options.script_path).toString()
            }
            if (t && _e(t), this.options.theme && (0 == this.options.theme.indexOf("http") || this.options.theme.match(/\.css$/))) e = this.options.theme;
            else if (this.options.theme) {
                let t = "../css/themes/timeline.theme." + this.options.theme.toLowerCase() + ".css";
                e = new URL(t, this.options.script_path).toString()
            }
            e && _e(e)
        }

        _loadLanguage(t) {
            try {
                var e = this.options.language,
                    i = this.options.script_path;
                (async function(t, e) {
                    var i = Ct(t, e);
                    try {
                        if (!jt[t]) {
                            let e = await yt(i);
                            jt[t] = e
                        }
                        return new At(t, e)
                    } catch (t) {
                        return console.log(`Error loading language [${i}] ${t.statusText}`), null
                    }
                })(e, i).then(i => {
                    i ? (this.language = i, this.message.setLanguage(this.language), this.options.language = this.language, this.showMessage(this._("loading_timeline"))) : this.showMessage(`Error loading ${e}`), this._initData(t)
                })
            } catch (t) {
                this.showMessage(this._translateError(t))
            }
        }

        _initData(t) {
            "string" == typeof t ? ie(t, {
                callback: function(t) {
                    this.setConfig(t)
                }.bind(this),
                sheets_proxy: this.options.sheets_proxy
            }) : Vt == t.constructor ? this.setConfig(t) : this.setConfig(new Vt(t))
        }

        _translateError(t) {
            return t.hasOwnProperty("stack") && O(t.stack), t.message_key ? this._(t.message_key) + (t.detail ? " [" + t.detail + "]" : "") : t
        }

        showMessage(t) {
            this.message ? this.message.updateMessage(t) : (O("No message display available."), O(t))
        }
        
        determineScriptPath() {
            let t = null;
            if (Je) t = Je;
            else {
                let e = document.getElementById("timeline-script-tag");
                e && (t = e.src)
            }
            if (!t) {
                let e = document.getElementsByTagName("script");
                for (let i = e.length - 1; i >= 0; i--)
                    if (e[i].src) {
                        t = e[i].src;
                        break
                    }
            }
            return t ? t.substr(0, t.lastIndexOf("/") + 1) : ""
        }

        getSelectedTypes() {
            
        }

        setConfig(t) {
            if (this.config = t, this.config.isValid() && (this.config.validate(), this._validateOptions()), this.config.isValid()) try {
                "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", this._onDataLoaded.bind(this)) : this._onDataLoaded()
            } catch (t) {
                this.showMessage("<strong>" + this._("error") + ":</strong> " + this._translateError(t))
            } else {
                for (var e = [], i = 0, a = this.config.getErrors(); i < a.length; i++) e.push(this._translateError(a[i]));
                this.showMessage("<strong>" + this._("error") + ":</strong> " + e.join("<br>"))
            }
        }

        _onDataLoaded() { // Initializes data loaded.
            this.fire("dataloaded"), this._initLayout(), this._initEvents(), this._initAnalytics(), this.message && this.message.hide();
            new IntersectionObserver(((t, e) => {
                t.reduce((t, e) => t || e.isIntersecting, !1) && this.updateDisplay()
            }).bind(this)).observe(this._el.container), this.ready = !0, this.fire("ready")
        }

        _initLayout() {
            this.message.removeFrom(this._el.container), this._el.container.innerHTML = "", "top" == this.options.timenav_position ? (this._el.timenav = T("div", "tl-timenav", this._el.container), this._el.storyslider = T("div", "tl-storyslider", this._el.container)) : (this._el.storyslider = T("div", "tl-storyslider", this._el.container), this._el.timenav = T("div", "tl-timenav", this._el.container)), this._el.menubar = T("div", "tl-menubar", this._el.container), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this.options.timenav_height = this._calculateTimeNavHeight(this.options.timenav_height), this._timenav = new We(this._el.timenav, this.config, this.options, this.language), this._timenav.on("loaded", this._onTimeNavLoaded, this), this._timenav.options.height = this.options.timenav_height, this._timenav.init(), this.options.initial_zoom && this.setZoom(this.options.initial_zoom), this._storyslider = new Ye(this._el.storyslider, this.config, this.options, this.language), this._storyslider.on("loaded", this._onStorySliderLoaded, this), this._storyslider.init(), this._menubar = new Ve(this._el.menubar, this._el.container, this.options), "portrait" == this.options.layout ? this.options.storyslider_height = this.options.height - this.options.timenav_height - 1 : this.options.storyslider_height = this.options.height - 1, this._updateDisplay(this._timenav.options.height, !0, 2e3)
        }

        _initEvents() {
            this._timenav.on("change", this._onTimeNavChange, this), this._timenav.on("zoomtoggle", this._onZoomToggle, this), this._storyslider.on("change", this._onSlideChange, this), this._storyslider.on("colorchange", this._onColorChange, this), this._storyslider.on("nav_next", this._onStorySliderNext, this), this._storyslider.on("nav_previous", this._onStorySliderPrevious, this), this._menubar.on("zoom_in", this._onZoomIn, this), this._menubar.on("zoom_out", this._onZoomOut, this), this._menubar.on("back_to_start", this._onBackToStart, this), this._menubar.on("selected_types", this._onSelectedTypes, this)
        }

        _onColorChange(t) {
            this.fire("color_change", {
                unique_id: this.current_id
            }, this)
        }

        _onSlideChange(t) {
            this.current_id != t.unique_id && (this.current_id = t.unique_id, this._timenav.goToId(this.current_id), this._onChange(t))
        }

        _onTimeNavChange(t) {
            this.current_id != t.unique_id && (this.current_id = t.unique_id, this._storyslider.goToId(this.current_id), this._onChange(t))
        }
        
        _onZoomToggle(t) {
            "in" == t.zoom ? this._menubar.toogleZoomIn(t.show) : "out" == t.zoom && this._menubar.toogleZoomOut(t.show)
        }

        _onChange(t) {
            this.fire("change", {
                unique_id: this.current_id
            }, this), this.options.hash_bookmark && this.current_id && this._updateHashBookmark(this.current_id)
        }

        _onBackToStart(t) {
            this._storyslider.goTo(0), this.fire("back_to_start", {
                unique_id: this.current_id
            }, this)
        }

        _onZoomIn(t) {
            this._timenav.zoomIn(), this.fire("zoom_in", {
                zoom_level: this._timenav.options.scale_factor
            }, this)
        }

        _onZoomOut(t) {
            this._timenav.zoomOut(), this.fire("zoom_out", {
                zoom_level: this._timenav.options.scale_factor
            }, this)
        }

        _onSelectedTypes(t) {
            this._storyslider.goTo(0), this.fire("selected_types", {
                types: selected_types
            }, this)
        }

        _onTimeNavLoaded() {
            this._loaded.timenav = !0, this._onLoaded()
        }

        _onStorySliderLoaded() {
            this._loaded.storyslider = !0, this._onLoaded()
        }

        _onStorySliderNext(t) {
            this.fire("nav_next", t)
        }

        _onStorySliderPrevious(t) {
            this.fire("nav_previous", t)
        }

        _updateSelectedEvents(t) { // refreshes the displayed_events list.
            this.updateFilteredEvents()
        }

        _updateDisplay(t, e, i) {
            var a, s = this.options.duration,
                n = this.options.base_class,
                o = 0;
            i && (s = i), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this.options.width <= this.options.skinny_size ? (n += " tl-skinny", this.options.layout = "portrait") : this.options.width <= this.options.medium_size ? (n += " tl-medium", this.options.layout = "landscape") : this.options.layout = "landscape", b && (this.options.layout = (a = "portrait", window.innerWidth > window.innerHeight && (a = "landscape"), Math.abs(window.orientation), a)), d ? (n += " tl-mobile", this.options.timenav_height = this._calculateTimeNavHeight(t, this.options.timenav_mobile_height_percentage)) : this.options.timenav_height = this._calculateTimeNavHeight(t), "portrait" == this.options.layout ? n += " tl-layout-portrait" : n += " tl-layout-landscape", this.options.storyslider_height = this.options.height - this.options.timenav_height, o = "top" == this.options.timenav_position ? Math.ceil(this.options.timenav_height) / 2 - this._el.menubar.offsetHeight / 2 - 19.5 : Math.round(this.options.storyslider_height + 1 + Math.ceil(this.options.timenav_height) / 2 - this._el.menubar.offsetHeight / 2 - 17.5), e ? (this._el.timenav.style.height = Math.ceil(this.options.timenav_height) + "px", this.animator_storyslider && this.animator_storyslider.stop(), this.animator_storyslider = dt(this._el.storyslider, {
                height: this.options.storyslider_height + "px",
                duration: s / 2,
                easing: ot
            }), this.animator_menubar && this.animator_menubar.stop(), this.animator_menubar = dt(this._el.menubar, {
                top: o + "px",
                duration: s / 2,
                easing: ot
            })) : (this._el.timenav.style.height = Math.ceil(this.options.timenav_height) + "px", this._el.storyslider.style.height = this.options.storyslider_height + "px", this._el.menubar.style.top = o + "px"), this.message && this.message.updateDisplay(this.options.width, this.options.height), this._timenav.updateDisplay(this.options.width, this.options.timenav_height, e), this._storyslider.updateDisplay(this.options.width, this.options.storyslider_height, e, this.options.layout), "rtl" == this.options.language.direction && (n += " tl-rtl"), this._el.container.className = n
        }
        _calculateTimeNavHeight(t, e) {
            var i = 0;
            return t ? i = t : (this.options.timenav_height_percentage || e) && (i = e ? Math.round(this.options.height / 100 * e) : Math.round(this.options.height / 100 * this.options.timenav_height_percentage)), this._timenav.ready && this.options.timenav_height_min < this._timenav.getMinimumHeight() && (this.options.timenav_height_min = this._timenav.getMinimumHeight()), i < this.options.timenav_height_min && (i = this.options.timenav_height_min), i -= 2 * this.options.marker_padding
        }
        _validateOptions() {
            for (var t = ["timenav_height", "timenav_height_min", "marker_height_min", "marker_width_min", "marker_padding", "start_at_slide", "slide_padding_lr"], e = 0; e < t.length; e++) {
                var i = t[e],
                    a = this.options[i];
                let s = !0;
                "number" == typeof a ? s = a == parseInt(a) : "string" == typeof a && (s = a.match(/^\s*(\-?\d+)?\s*$/)), s || this.config.logError({
                    message_key: "invalid_integer_option",
                    detail: i
                })
            }
        }
        _getSlideIndex(t) {
            if (this.config) {
                if (this.config.title && this.config.title.unique_id == t) return 0;
                for (var e = 0; e < this.config.events.length; e++)
                    if (t == this.config.events[e].unique_id) return this.config.title ? e + 1 : e
            }
            return -1
        }
        _getEventIndex(t) {
            for (var e = 0; e < this.config.events.length; e++)
                if (t == this.config.events[e].unique_id) return e;
            return -1
        }
        _onLoaded() {
            if (this._loaded.storyslider && this._loaded.timenav && (this.fire("loaded", this.config), null != (t = this.options.start_at_end) && (1 == t || "true" == String(t).toLowerCase() || 1 == Number(t)) || this.options.start_at_slide > this.config.events.length ? this.goToEnd() : this.goTo(this.options.start_at_slide), this.options.hash_bookmark)) {
                "" != window.location.hash ? this.goToId(window.location.hash.replace("#event-", "")) : this._updateHashBookmark(this.current_id);
                let t = this;
                window.addEventListener("hashchange", (function() {
                    0 == window.location.hash.indexOf("#event-") && t.goToId(window.location.hash.replace("#event-", ""))
                }), !1)
            }
            var t
        }
        _updateHashBookmark(t) {
            if (t) {
                var e = "#event-" + t.toString();
                window.history.replaceState(null, "Browsing TimelineJS", e), this.fire("hash_updated", {
                    unique_id: this.current_id,
                    hashbookmark: "#event-" + t.toString()
                }, this)
            }
        }
        zoomIn() { // Zoom in
            this._timenav.zoomIn()
        }
        zoomOut() { // Zoom out
            this._timenav.zoomOut()
        }
        setZoom(t) { // Set zoom
            this._timenav.setZoom(t)
        }
        goToId(t) { // Go to given unique-id
            this.current_id != t && (this.current_id = t, this._timenav.goToId(this.current_id), this._storyslider.goToId(this.current_id, !1, !0), this.fire("change", {
                unique_id: this.current_id
            }, this))
        }
        goTo(t) { // Go to a given index
            this.config.title ? 0 == t ? this.goToId(this.config.title.unique_id) : this.goToId(this.config.events[t - 1].unique_id) : this.goToId(this.config.events[t].unique_id)
        }
        goToStart() { // Go to the start of the slideshow
            this.goTo(0)
        }
        goToEnd() { // Go th the end of the slideshow
            var t = this.config.events.length - 1;
            this.goTo(this.config.title ? t + 1 : t)
        }
        goToPrev() { // Go the the previous slide
            this.goTo(this._getSlideIndex(this.current_id) - 1)
        }
        goToNext() { // Go to the next slide
            this.goTo(this._getSlideIndex(this.current_id) + 1)
        }
        add(t) { // Adds an Event
            var e = this.config.addEvent(t),
                i = this._getEventIndex(e),
                a = this.config.events[i];
            this._storyslider.createSlide(a, this.config.title ? i + 1 : i), this._storyslider._updateDrawSlides(), this._timenav.createMarker(a, i), this._timenav._updateDrawTimeline(!1), this.fire("added", {
                unique_id: e
            })
        }

        remove(t) { // Removes a slide based off it's input event unique-id.
            if (t >= 0 && t < this.config.events.length) { // Checks if it's inside array
                
                this.config.events[t].unique_id == this.current_id && (t < this.config.events.length - 1 ? this.goTo(t + 1) : this.goTo(t - 1));
                var e = this.config.events.splice(t, 1); // the output event from input number.
                delete this.config.event_dict[e[0].unique_id];
                this._storyslider.destroySlide(this.config.title ? t + 1 : t); // Removes slide at ID.
                this._storyslider._updateDrawSlides(); // Updates StorySlider
                this._timenav.destroyMarker(t); // Removes marker in timenav.
                this._timenav._updateDrawTimeline(!1); // Updates timenav
                this.fire("removed", {
                    unique_id: e[0].unique_id
                })
            }
        }
        
        removeId(t) { // Removes an event at the given index.
            this.remove(this._getEventIndex(t))
        }

        updateFilteredEvents() { // updateFilteredEvents, this is run whenever we want to refresh to whatever the user has input.
            selected_types = this.config.getSelectedTypes()

            for (var i = 0; i > this.config.events.length; i++) {
                var temp_event = this.config.events[i]
                for (var x = 0; x < temp_event.event_types; x++) {
                    temp_type = temp_event[x]
                    if (selected_types.contains(temp_type)) { // If the event contains the type, the code will run.
                        
                        break;
                    } else { // If the event doesn't contain the type, this code will run
                        if (x == temp_event.event_type.length) {
                            var t = this._getSlideIndex(temp_event);
                            
                            this._storyslider.destroySlide(this.config.title ? t + 1 : t);
                            this._storyslider._updateDrawSlides();
                            this._timenav.destroyMarker(t);
                            this._timenav._updateDrawTimeline(!1);
                        }
                    }
                    this.add(this.config.events[i])
                    
                }

            }
            
            this.goToStart();
        }

        getData(t) {
            if (this.config.title) {
                if (0 == t) return this.config.title;
                if (t > 0 && t <= this.config.events.length) return this.config.events[t - 1]
            } else if (t >= 0 && t < this.config.events.length) return this.config.events[t];
            return null
        }
        getDataById(t) {
            return this.getData(this._getSlideIndex(t))
        }
        getSlide(t) {
            return t >= 0 && t < this._storyslider._slides.length ? this._storyslider._slides[t] : null
        }
        getSlideById(t) {
            return this.getSlide(this._getSlideIndex(t))
        }
        getCurrentSlide() {
            return this.getSlideById(this.current_id)
        }
        updateDisplay() {
            this.ready ? this._updateDisplay() : O("updateDisplay called but timeline is not in ready state")
        }
        _initGoogleAnalytics() {
            var t, e, i, a, s, n;
            t = window, e = document, i = "script", a = "ga", t.GoogleAnalyticsObject = a, t.ga = t.ga || function() {
                (t.ga.q = t.ga.q || []).push(arguments)
            }, t.ga.l = 1 * new Date, s = e.createElement(i), n = e.getElementsByTagName(i)[0], s.async = 1, s.src = "//www.google-analytics.com/analytics.js", n.parentNode.insertBefore(s, n), ga("create", this.options.ga_property_id, "auto"), ga("set", "anonymizeIp", !0)
        }
        _initAnalytics() {
            if (null !== this.options.ga_property_id) {
                this._initGoogleAnalytics(), ga("send", "pageview");
                var t = this.options.track_events;
                for (let i = 0; i < t.length; i++) {
                    var e = t[i];
                    this.addEventListener(e, (function(t) {
                        ga("send", "event", t.type, "clicked")
                    }))
                }
            }
        }
    }
    F(Xe, zt, ht)
}]);
//# sourceMappingURL=timeline.js.map
