
const to_node = function (array) {

    var fragment = document.createDocumentFragment();
    array.forEach(item => fragment.appendChild(item.cloneNode()));
    return fragment.childNodes;

}
const set = function (array) {

    return array.reduce( (_, __) => { if ( !_.includes(__) ) _.push(__); return _ }, []);

}

$.prototype.flex = function() {
    $(this).css("display", "flex");
}

HTMLElement.prototype.hide = function () {

    this.style.display = "none";

}
HTMLElement.prototype.show = function () {

    this.style.display = "block";

}
HTMLElement.prototype.flex = function () {

    this.style.display = "flex";

}
HTMLElement.prototype.is_hide = function () {

    return this.style.display === "none";

}
HTMLElement.prototype.is_show = function () {

    return this.style.display !== "none";

}
HTMLElement.prototype.is_flex = function () {

    return this.style.display === "flex";

}
HTMLElement.prototype.html = function (_) {

    if ( _ === undefined ) return this.innerHTML;

    if ( typeof(_) === "object" && _ ) return this.innerHTML = _.innerHTML;
    
    return this.innerHTML = _;

}
HTMLElement.prototype.txt = function (_) {

    if ( _ === undefined ) return this.innerText;

    if ( typeof(_) === "object" && _ ) return this.innerText = _.innerText;
    
    return this.innerText = _;

}
HTMLElement.prototype.find = function (_) {

    return this.querySelectorAll(_);

}
HTMLElement.prototype.has_class = function (cls, parent=true) {

    let same = false;

    cls.split(" ").forEach( _ => {

        if ( parent ) {

            if ( this.closest(`.${_}`) !== null || this.classList.contains(_) ) same = true;

        }
        else {

            if ( this.classList.contains(_) ) same = true;

        }
    });

    return same;

}
HTMLElement.prototype.add_class = function (cls) {

    if ( !cls ) return;
    cls = cls.trim().replace(/\s+/, " ").split(" ");
    cls.forEach(c => this.classList.add(c));

}
HTMLElement.prototype.remove_class = function (cls) {

    if ( !cls ) return;
    cls = cls.trim().replace(/\s+/, " ").split(" ");
    cls.forEach(c => this.classList.remove(c));

}
HTMLElement.prototype.attr = function (_, __) {

    if ( !this && !_ ) return;
    if ( __ ) this.setAttribute(_, __);
    return this.getAttribute(_);

}
HTMLElement.prototype.data = function (_, __) {

    if ( !this && !_ && !__ ) return;
    if ( __ ) this.setAttribute(`data-${_}`, __);
    return this.getAttribute(`data-${_}`);

}
HTMLElement.prototype.parent = function () {

    if ( !this ) return;
    return this.parentElement;

}
HTMLElement.prototype.parents = function (_) {

    if ( !this ) return;
    if ( _ ) return this.closest(_);

    let el = [];
    let cur = this.parentElement;
    while ( cur ) { el.push(cur); cur = cur.parentElement; }
    return to_node(el);

}
HTMLElement.prototype.child = function (_) {

    if ( !this ) return;
    if ( _ ) return this.find(_);
    return this.childNodes;

}

NodeList.prototype.hide = function() { this.forEach( e => e.hide()); }
NodeList.prototype.show = function() { this.forEach( e => e.show()); }
NodeList.prototype.flex = function() { this.forEach( e => e.flex()); }
NodeList.prototype.is_hide = function(_) { let res; this.forEach( e => res = e.is_hide(_)); return res; }
NodeList.prototype.is_show = function(_) { let res; this.forEach( e => res = e.is_show(_)); return res; }
NodeList.prototype.is_flex = function(_) { let res; this.forEach( e => res = e.is_flex(_)); return res; }
NodeList.prototype.html = function(_) { let res=""; this.forEach( e => res += e.html(_)); return res; }
NodeList.prototype.txt = function(_) { let res=""; this.forEach( e => res += e.txt(_)); return res; }
NodeList.prototype.find = function(_) { let res = []; this.forEach( i => res.push(...i.find(_)) );return to_node(set(res)); }
NodeList.prototype.has_class = function(_) { let res; this.forEach( e => res = e.has_class(_)); return res; }
NodeList.prototype.add_class = function(_) { this.forEach( e => e.add_class(_)); }
NodeList.prototype.remove_class = function(_) { this.forEach( e => e.remove_class(_)); }
NodeList.prototype.attr = function(_, __) { let res; this.forEach( e => res = e.attr(_, __)); return res; }
NodeList.prototype.data = function(_, __) { let res; this.forEach( e => res = e.data(_, __)); return res; }
