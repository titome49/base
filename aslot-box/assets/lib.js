/* ASLOT « Box & Conteneurs » — bibliothèque partagée par toutes les scènes.
   Personnages SVG, parc de box, téléphone, titres. Tout est déterministe :
   les scènes appellent ces fonctions de façon synchrone avant de construire leur timeline. */
(function () {
  var C = {
    cream: "#F1EFE8",
    circle: "#E9E4D8",
    ink: "#35422D",
    olive: "#4A5C3D",
    hl: "#E7DAC3",
    phone: "#1F2A1D",
    lightGreen: "#DDE5D3",
    free: "#FFFFFF",
    rented: "#DDE5D3",
    soon: "#CDD6DE",
    out: "#E6C994",
    line: "#D8D1C1",
    grey: "#CFC9BB",
  };

  /* ---------- Personnages ---------- */
  var PEOPLE = {
    lea: {
      skin: "#E8B996", skinShade: "#D9A27E", hair: "#7B4A2D", hairStyle: "long",
      top: "#F7F2E8", jacket: "#C9673F", jacketShade: "#B5592F", rolled: true,
      pants: "#4C6587", pantsShade: "#40587A", shoes: "#FFFFFF", shoeLine: "#D8D1C1",
      earrings: true,
    },
    marc: {
      skin: "#D9A57E", skinShade: "#C69069", hair: "#4B3526", hairStyle: "short", beard: true,
      top: "#4A5C3D", jacket: "#4A5C3D", jacketShade: "#3E4F33", zip: true, rolled: false,
      pants: "#3B4148", pantsShade: "#30363C", shoes: "#6B4A2E", shoeLine: "#5A3D25",
      badge: true,
    },
    sophie: {
      skin: "#F0C7A8", skinShade: "#E0B08E", hair: "#3B2A22", hairStyle: "bun",
      top: "#FFFFFF", jacket: "#56636F", jacketShade: "#4A5662", rolled: false,
      pants: "#56636F", pantsShade: "#4A5662", shoes: "#2F3439", shoeLine: "#24282C",
      glasses: true,
    },
  };

  function person(id, who) {
    var p = PEOPLE[who];
    var s = "";
    s += '<svg id="' + id + '" class="person" viewBox="0 0 200 420" width="200" height="420" overflow="visible">';
    s += '<ellipse cx="100" cy="412" rx="62" ry="7" fill="#35422D" opacity="0.10"/>';
    s += '<g id="' + id + '-body">';
    // hair behind (long)
    if (p.hairStyle === "long")
      s += '<path d="M56 74 Q54 30 100 28 Q146 30 144 74 L150 176 Q126 190 100 186 Q74 190 50 176 Z" fill="' + p.hair + '"/>';
    // legs
    s += '<g id="' + id + '-legL" style="transform-origin:90px 250px">' +
      '<rect x="78" y="244" width="24" height="146" rx="11" fill="' + p.pantsShade + '"/>' +
      '<path d="M70 394 Q70 382 84 382 L102 382 L104 404 L72 404 Q70 404 70 398 Z" fill="' + p.shoes + '" stroke="' + p.shoeLine + '" stroke-width="2"/></g>';
    s += '<g id="' + id + '-legR" style="transform-origin:110px 250px">' +
      '<rect x="98" y="244" width="24" height="146" rx="11" fill="' + p.pants + '"/>' +
      '<path d="M96 382 L116 382 Q130 382 130 394 L130 398 Q130 404 126 404 L96 404 Z" fill="' + p.shoes + '" stroke="' + p.shoeLine + '" stroke-width="2"/></g>';
    // arm behind (left)
    s += '<g id="' + id + '-armL" style="transform-origin:72px 154px">' +
      '<rect x="58" y="146" width="22" height="' + (p.rolled ? 64 : 98) + '" rx="11" fill="' + p.jacketShade + '"/>' +
      (p.rolled ? '<rect x="60" y="200" width="18" height="48" rx="9" fill="' + p.skinShade + '"/>' : '') +
      '<circle cx="69" cy="252" r="11" fill="' + p.skinShade + '"/></g>';
    // torso
    s += '<rect x="62" y="136" width="76" height="124" rx="28" fill="' + p.top + '"/>';
    if (p.zip) {
      s += '<rect x="62" y="136" width="76" height="124" rx="28" fill="' + p.jacket + '"/>' +
        '<line x1="100" y1="146" x2="100" y2="256" stroke="#2F3B27" stroke-width="3"/>' +
        '<path d="M84 140 L100 160 L116 140" fill="none" stroke="#2F3B27" stroke-width="3" stroke-linejoin="round"/>' +
        '<rect x="70" y="214" width="20" height="16" rx="4" fill="#3E4F33"/><rect x="110" y="214" width="20" height="16" rx="4" fill="#3E4F33"/>';
    } else {
      // open cardigan / blazer : two panels
      s += '<path d="M62 164 Q62 136 90 136 L92 136 L88 260 L74 260 Q62 260 62 240 Z" fill="' + p.jacket + '"/>' +
        '<path d="M138 164 Q138 136 110 136 L108 136 L112 260 L126 260 Q138 260 138 240 Z" fill="' + p.jacket + '"/>';
    }
    if (p.badge) {
      s += '<path d="M86 140 L100 196 L114 140" fill="none" stroke="#E7DAC3" stroke-width="3"/>' +
        '<rect x="88" y="194" width="24" height="32" rx="4" fill="#FFFFFF"/><rect x="88" y="194" width="24" height="9" rx="3" fill="#E7DAC3"/>' +
        '<rect x="93" y="210" width="14" height="3" rx="1.5" fill="#CFC9BB"/><rect x="93" y="216" width="10" height="3" rx="1.5" fill="#CFC9BB"/>';
    }
    // neck + head
    s += '<rect x="90" y="104" width="20" height="40" rx="8" fill="' + p.skinShade + '"/>';
    s += '<g id="' + id + '-head" style="transform-origin:100px 118px">';
    s += '<circle cx="60" cy="78" r="9" fill="' + p.skinShade + '"/><circle cx="140" cy="78" r="9" fill="' + p.skinShade + '"/>';
    if (p.earrings) s += '<circle cx="60" cy="90" r="3.5" fill="#D9B45A"/><circle cx="140" cy="90" r="3.5" fill="#D9B45A"/>';
    s += '<ellipse cx="100" cy="74" rx="40" ry="44" fill="' + p.skin + '"/>';
    if (p.beard) s += '<path d="M60 78 Q62 124 100 126 Q138 124 140 78 Q132 104 100 106 Q68 104 60 78 Z" fill="' + p.hair + '"/>';
    // hair front
    if (p.hairStyle === "long")
      s += '<path d="M58 70 Q56 26 102 26 Q144 28 142 72 Q128 46 98 44 Q80 52 58 70 Z" fill="' + p.hair + '"/>';
    if (p.hairStyle === "short")
      s += '<path d="M60 66 Q58 26 100 26 Q142 26 140 66 Q134 44 112 42 Q90 50 66 50 Q62 56 60 66 Z" fill="' + p.hair + '"/>';
    if (p.hairStyle === "bun")
      s += '<circle cx="100" cy="22" r="18" fill="' + p.hair + '"/>' +
        '<path d="M60 70 Q58 30 100 30 Q142 30 140 70 Q130 46 100 44 Q72 46 60 70 Z" fill="' + p.hair + '"/>';
    // brows
    s += '<g id="' + id + '-brows"><rect x="78" y="58" width="16" height="4" rx="2" fill="' + p.hair + '"/>' +
      '<rect x="106" y="58" width="16" height="4" rx="2" fill="' + p.hair + '"/></g>';
    // eyes
    s += '<g id="' + id + '-eyes" style="transform-origin:100px 72px">' +
      '<ellipse cx="86" cy="72" rx="4.6" ry="5.6" fill="#2A2622"/><ellipse cx="114" cy="72" rx="4.6" ry="5.6" fill="#2A2622"/>' +
      '<circle cx="87.6" cy="70" r="1.4" fill="#fff"/><circle cx="115.6" cy="70" r="1.4" fill="#fff"/></g>';
    if (p.glasses)
      s += '<g fill="none" stroke="#2A2622" stroke-width="2.6"><circle cx="86" cy="72" r="11"/><circle cx="114" cy="72" r="11"/><line x1="97" y1="72" x2="103" y2="72"/></g>';
    // cheeks
    s += '<circle cx="76" cy="88" r="6" fill="#E88A74" opacity="0.28"/><circle cx="124" cy="88" r="6" fill="#E88A74" opacity="0.28"/>';
    // mouths
    var mc = p.beard ? "#6E3B30" : "#7A3A30";
    s += '<path id="' + id + '-m-smile" d="M90 94 Q100 102 110 94" fill="none" stroke="' + mc + '" stroke-width="3.2" stroke-linecap="round"/>';
    s += '<path id="' + id + '-m-big" d="M87 91 Q100 110 113 91 Z" fill="' + mc + '" opacity="0"/>';
    s += '<ellipse id="' + id + '-m-o" cx="100" cy="97" rx="5" ry="6" fill="' + mc + '" opacity="0"/>';
    s += '<path id="' + id + '-m-flat" d="M92 97 L108 96" fill="none" stroke="' + mc + '" stroke-width="3.2" stroke-linecap="round" opacity="0"/>';
    s += "</g>";
    // front arm (right)
    s += '<g id="' + id + '-armR" style="transform-origin:128px 154px">' +
      '<rect x="120" y="146" width="22" height="' + (p.rolled ? 64 : 98) + '" rx="11" fill="' + p.jacket + '"/>' +
      (p.rolled ? '<rect x="122" y="200" width="18" height="48" rx="9" fill="' + p.skin + '"/>' : '') +
      '<circle cx="131" cy="252" r="11" fill="' + p.skin + '"/></g>';
    s += "</g></svg>";
    return s;
  }

  var ORIGINS = { legL: "90 250", legR: "110 250", armL: "72 154", armR: "128 154", head: "100 118", eyes: "100 72", body: "100 410", brows: "100 60" };
  function rig(id) {
    Object.keys(ORIGINS).forEach(function (k) {
      var el = document.getElementById(id + "-" + k);
      if (el) gsap.set(el, { svgOrigin: ORIGINS[k] });
    });
  }
  function mount(hostId, id, who) {
    document.getElementById(hostId).outerHTML = person(id, who);
    rig(id);
  }
  var MOUTHS = ["smile", "big", "o", "flat"];
  function mood(tl, id, m, t) {
    // a take: brows lift, mouth swaps on a short cross, never a snap
    MOUTHS.forEach(function (k) {
      tl.to("#" + id + "-m-" + k, { opacity: k === m ? 1 : 0, duration: 0.12, ease: "none" }, t);
    });
    var by = m === "big" ? -5 : m === "o" ? -7 : m === "flat" ? 2 : 0;
    tl.to("#" + id + "-brows", { y: by, duration: 0.2, ease: "back.out(2)" }, t - 0.04);
  }
  function blink(tl, id, t) {
    tl.to("#" + id + "-eyes", { scaleY: 0.1, duration: 0.06, ease: "power2.in" }, t)
      .to("#" + id + "-eyes", { scaleY: 1, duration: 0.09, ease: "power2.out" }, t + 0.07);
  }
  function walk(tl, id, t, dur, step, opts) {
    opts = opts || {};
    step = step || 0.3;
    var n = Math.max(1, Math.round(dur / step));
    var sel = function (k) { return "#" + id + "-" + k; };
    tl.fromTo(sel("legL"), { rotation: -16 }, { rotation: 16, duration: step, ease: "sine.inOut", repeat: n - 1, yoyo: true }, t);
    tl.fromTo(sel("legR"), { rotation: 16 }, { rotation: -16, duration: step, ease: "sine.inOut", repeat: n - 1, yoyo: true }, t);
    tl.fromTo(sel("armL"), { rotation: 14 }, { rotation: -14, duration: step, ease: "sine.inOut", repeat: n - 1, yoyo: true }, t + 0.03);
    if (opts.holdR === undefined)
      tl.fromTo(sel("armR"), { rotation: -12 }, { rotation: 12, duration: step, ease: "sine.inOut", repeat: n - 1, yoyo: true }, t + 0.05);
    else tl.fromTo(sel("armR"), { rotation: opts.holdR }, { rotation: opts.holdR, duration: 0.01 }, t);
    tl.fromTo(sel("body"), { y: 0 }, { y: -6, duration: step / 2, ease: "sine.inOut", repeat: n * 2 - 1, yoyo: true }, t);
    var end = t + n * step;
    tl.to([sel("legL"), sel("legR"), sel("armL")].concat(opts.holdR === undefined ? [sel("armR")] : []), { rotation: 0, duration: 0.2, ease: "power2.out" }, end);
    return end;
  }
  function jump(tl, id, t) {
    var b = "#" + id + "-body";
    tl.to(b, { scaleY: 0.92, scaleX: 1.05, y: 10, duration: 0.14, ease: "power2.in" }, t)
      .to(b, { scaleY: 1.06, scaleX: 0.97, y: -46, duration: 0.24, ease: "power2.out" }, t + 0.14)
      .to(b, { scaleY: 1, scaleX: 1, y: 0, duration: 0.22, ease: "power2.in" }, t + 0.38)
      .to(b, { scaleY: 0.95, scaleX: 1.03, duration: 0.07, ease: "power1.out" }, t + 0.6)
      .to(b, { scaleY: 1, scaleX: 1, duration: 0.16, ease: "back.out(2)" }, t + 0.67);
    tl.to(["#" + id + "-armL", "#" + id + "-armR"], { rotation: function (i) { return i ? -150 : 150; }, duration: 0.2, ease: "back.out(1.6)" }, t + 0.12)
      .to(["#" + id + "-armL", "#" + id + "-armR"], { rotation: 0, duration: 0.3, ease: "power2.inOut" }, t + 0.7);
  }

  /* ---------- Parc de box ---------- */
  // geometry shared by every scene that shows the park (stage box 940 x 520)
  var PARK = { w: 940, rows: [] };
  (function () {
    var x, i;
    var r = [];
    for (i = 0; i < 8; i++) r.push({ id: "s" + (i + 1), size: "S", x: i * 120, y: 0, w: 100, h: 80 });
    for (i = 0; i < 6; i++) r.push({ id: "m" + (i + 1), size: "M", x: i * 160, y: 108, w: 140, h: 100 });
    for (i = 0; i < 4; i++) r.push({ id: "l" + (i + 1), size: "L", x: i * 240, y: 236, w: 220, h: 118 });
    for (i = 0; i < 5; i++) r.push({ id: "c" + (i + 1), size: "C", x: i * 192, y: 382, w: 172, h: 96 });
    PARK.tiles = r;
  })();
  // default states: index by tile id
  var STATES = {
    s1: "rented", s2: "free", s3: "rented", s4: "rented", s5: "out", s6: "rented", s7: "free", s8: "rented",
    m1: "rented", m2: "rented", m3: "free", m4: "soon", m5: "rented", m6: "free",
    l1: "free", l2: "rented", l3: "rented", l4: "soon",
    c1: "rented", c2: "rented", c3: "rented", c4: "free", c5: "rented",
  };
  function tileLabel(t) {
    if (t.size === "C") return "C" + t.id.slice(1);
    return t.size + t.id.slice(1);
  }
  function park(prefix, opts) {
    opts = opts || {};
    var states = opts.states || STATES;
    var s = '<div class="park" id="' + prefix + '-park">';
    PARK.tiles.forEach(function (t) {
      var st = opts.blank ? "free" : states[t.id];
      s += '<div class="tile tile-' + t.size + ' st-' + st + '" id="' + prefix + "-" + t.id + '" style="left:' + t.x + "px;top:" + t.y + "px;width:" + t.w + "px;height:" + t.h + 'px">';
      if (t.size === "C") s += '<i class="ribs"></i>';
      s += '<span class="tl">' + tileLabel(t) + "</span></div>";
    });
    s += "</div>";
    return s;
  }
  function legend(prefix) {
    return '<div class="legend" id="' + prefix + '-legend">' +
      '<span class="lg" id="' + prefix + '-lg1"><i class="dot st-free"></i>Libre</span>' +
      '<span class="lg" id="' + prefix + '-lg2"><i class="dot st-rented"></i>Loué</span>' +
      '<span class="lg" id="' + prefix + '-lg3"><i class="dot st-soon"></i>Bientôt loué</span>' +
      '<span class="lg" id="' + prefix + '-lg4"><i class="dot st-out"></i>Hors service</span></div>';
  }
  function stateColor(st) {
    return { free: C.free, rented: C.rented, soon: C.soon, out: C.out }[st];
  }
  function tileIds(prefix) {
    return PARK.tiles.map(function (t) { return "#" + prefix + "-" + t.id; });
  }

  /* ---------- Titres ---------- */
  function title(prefix, label, l1, l2) {
    return '<div class="ttl" id="' + prefix + '-ttl">' +
      '<div class="ttl-label" id="' + prefix + '-lab">' + label + "</div>" +
      '<div class="ttl-mask"><div class="ttl-l1" id="' + prefix + '-tl1">' + l1 + "</div></div>" +
      '<div class="ttl-mask"><div class="ttl-l2" id="' + prefix + '-tl2"><i class="ttl-mark" id="' + prefix + '-mark"></i><span>' + l2 + "</span></div></div></div>";
  }
  function titleIn(tl, prefix, t) {
    tl.fromTo("#" + prefix + "-lab", { opacity: 0, letterSpacing: "0.5em" }, { opacity: 1, letterSpacing: "0.28em", duration: 0.5, ease: "expo.out" }, t);
    tl.fromTo("#" + prefix + "-tl1", { yPercent: 110 }, { yPercent: 0, duration: 0.7, ease: "expo.out" }, t + 0.12);
    tl.fromTo("#" + prefix + "-tl2", { yPercent: 110 }, { yPercent: 0, duration: 0.7, ease: "expo.out" }, t + 0.26);
    tl.fromTo("#" + prefix + "-mark", { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power3.inOut" }, t + 0.6);
  }
  function titleOut(tl, prefix, t) {
    tl.to("#" + prefix + "-tl1", { yPercent: -110, duration: 0.35, ease: "power3.in" }, t);
    tl.to("#" + prefix + "-tl2", { yPercent: -110, duration: 0.35, ease: "power3.in" }, t + 0.06);
    tl.to("#" + prefix + "-lab", { opacity: 0, duration: 0.25, ease: "power2.in" }, t);
  }

  /* ---------- Téléphone ---------- */
  function phone(prefix, inner) {
    return '<div class="phone" id="' + prefix + '-phone"><div class="screen" id="' + prefix + '-screen">' +
      '<div class="notch"></div>' + (inner || "") + "</div></div>";
  }
  function bars(n, w) {
    var s = "";
    for (var i = 0; i < n; i++) s += '<i class="bar" style="width:' + (w ? w[i % w.length] : 70) + '%"></i>';
    return s;
  }

  window.AS = {
    C: C, person: person, rig: rig, mount: mount, mood: mood, blink: blink, walk: walk, jump: jump,
    PARK: PARK, STATES: STATES, park: park, legend: legend, stateColor: stateColor, tileIds: tileIds,
    title: title, titleIn: titleIn, titleOut: titleOut, phone: phone, bars: bars,
  };
})();
