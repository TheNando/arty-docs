(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,n){t.exports=n(41)},27:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(17),o=n.n(c),i=(n(27),n(7)),s=n(8),u=n(11),l=n(9),m=n(12),h=n(44),p=n(45),f=n(33),d=n(43),v=n(5),b=n.n(v),g=n(10),k=n(42),y=n(46),j=n(18),w=n.n(j),O=/\[(.*)\]/,E=/\((.*)\)/,x=/^- \[/,C="access_token=7bdae34da0d3a3425e9c3350bab96cdfe4f0dfdd",N="https://github.com/api/v3/repos/TheNando/arty-docs/contents/docs/",A="".concat(N,"index.md?").concat(C),T={mdToCategories:function(t){return t.trim().split("\n").reduce(function(t,e){var n,a;return x.test(e)?(a=(a=e.match(O)||[])[1]||"",n="/"+(n=e.match(E)||[])[1],t[t.length]={name:a,link:n,items:[]}):(a=(a=e.match(O)||[])[1]||"",n="/"+(n=e.match(E)||[])[1],t[t.length-1].items.push({name:a,link:n})),t},[])},getPageContent:function(){var t=Object(g.a)(b.a.mark(function t(e,n){var a,r,c;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=new w.a.Converter,t.prev=1,r="".concat(e?e+"/":"").concat(n),c="".concat(N).concat(r,"?").concat(C),t.next=6,fetch(c).then(function(t){return t.json()}).then(function(t){return{content:{__html:a.makeHtml(atob(t.content))}}});case 6:return t.abrupt("return",t.sent);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{content:{__html:'\n            <h1 class="error-number">404</h1>\n            <h2 class="error-msg">\n              No file found at path\n              <strong>'.concat(e?e+"/":"").concat(n,"</strong>\n            </h2>\n          ")}});case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,n){return t.apply(this,arguments)}}(),getTableOfContents:function(){return fetch(A).then(function(t){return t.json()}).then(function(t){return T.mdToCategories(atob(t.content))})}},_=T,I=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={categories:[]},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=Object(g.a)(b.a.mark(function t(){var e;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.getTableOfContents();case 2:e=t.sent,this.setState({categories:e});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.categories,e=this.props.location.pathname;return r.a.createElement("nav",{id:"nav",className:"hxNav"},r.a.createElement("div",{className:"nav-title"},"Arty"),r.a.createElement("div",{className:"nav-subtitle"},"A React/Typescript Stack"),t.map(function(t){return r.a.createElement(r.a.Fragment,{key:t.name},r.a.createElement(y.a,{className:"nav-category",isActive:function(n){return encodeURI(e)===t.link},to:t.link},t.name),t.items.map(function(t){return r.a.createElement(y.a,{key:t.name,className:"nav-item",isActive:function(n){return encodeURI(e)===t.link},to:t.link},t.name)}))}))}}]),e}(a.Component),M=Object(k.a)(I),R=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={content:{__html:""}},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){this.setContent()}},{key:"componentDidUpdate",value:function(t){this.props.location!==t.location&&this.setContent()}},{key:"setContent",value:function(){var t=Object(g.a)(b.a.mark(function t(){var e,n,a,r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params,n=e.category,a=e.page,t.next=3,_.getPageContent(n,a);case 3:r=t.sent,this.setState(r);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.content;return r.a.createElement("main",{role:"main",id:"content",className:"hxBox hxLg markdown",dangerouslySetInnerHTML:t})}}]),e}(a.Component),S=Object(k.a)(R),B=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{id:"stage"},r.a.createElement(M,null),r.a.createElement(p.a,null,r.a.createElement(f.a,{exact:!0,path:"/:category?/:page",component:S}),r.a.createElement(d.a,{to:"/README.md"}))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(35),n(39),n(40);o.a.render(r.a.createElement(B,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.149b0320.chunk.js.map