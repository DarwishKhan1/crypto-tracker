(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{40:function(e,c,t){},45:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),s=t(16),r=t.n(s),i=t(3),d=t(4),l=t.n(d),o=(t(40),t(5)),j=t.n(o),h=t(7),p=t.p+"static/media/cryptocurrency.ed95197c.png",b=t(0),u=function(e){var c=Object(a.useState)([]),t=Object(i.a)(c,2),n=t[0],s=t[1];Object(a.useEffect)(Object(h.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere.herokuapp.com/",e.next=3,l.a.get("".concat("https://cors-anywhere.herokuapp.com/","https://newsdata.io/api/1/news?apikey=pub_10641ef12fac3db0c06611e0f5de105b3a95&language=en&q=bitcoin"));case 3:c=e.sent,s(c.data.results);case 5:case"end":return e.stop()}}),e)}))),[]);var r=function(){var e=Object(h.a)(j.a.mark((function e(c){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere.herokuapp.com/",e.next=3,l.a.get("".concat("https://cors-anywhere.herokuapp.com/","https://newsdata.io/api/1/news?apikey=pub_10641ef12fac3db0c06611e0f5de105b3a95&language=en&q=").concat(c));case 3:t=e.sent,s(t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between mt-4 mr-3 mb-4",children:[Object(b.jsx)("div",{className:"chip",onClick:function(){return r("bitcoin")},children:"Bitcoin"}),Object(b.jsx)("div",{className:"chip",onClick:function(){return r("ethereum")},children:"Ethereum"}),Object(b.jsx)("div",{className:"chip",onClick:function(){return r("cardano")},children:"Cardano"})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-between mr-3 mb-4",children:[Object(b.jsx)("div",{className:"chip",onClick:function(){return r("ripple")},children:"Ripple"}),Object(b.jsx)("div",{className:"chip",onClick:function(){return r("dogecoin")},children:"Dogecoin"}),Object(b.jsx)("div",{className:"chip",onClick:function(){return r("polkadot")},children:"Polkadot"})]}),Object(b.jsx)("div",{className:"mt-5 pt-3",children:n.map((function(e){return Object(b.jsx)("a",{className:"card py-2",style:{cursor:"pointer"},href:e.link,target:"_blank",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-8",children:[Object(b.jsx)("h6",{children:e.title}),Object(b.jsx)("p",{className:"text-muted",children:e.description&&e.description.length>100?e.description.slice(0,98)+"...":e.description})]}),Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)("div",{className:"d-flex justify-content-end",children:Object(b.jsx)("img",{src:e.image_url?e.image_url:p,width:"120px",height:"100px",style:{borderRadius:"10px",marginTop:"20px"}})})})]})})}))})]})},x=t(17),O=t.n(x),m=function(e){var c=e.pointData,t=Object(a.useRef)(),n=Object(a.useState)(!1),s=Object(i.a)(n,2),r=s[0],d=s[1],l=c[0],o=c[c.length-1];return Object(a.useLayoutEffect)((function(){l>o&&d(!0)}),[l,o,r]),Object(a.useEffect)((function(){for(var e=[],a=0;a<168;a++)e[a]=a;var n=t.current.getContext("2d"),s=n.createLinearGradient(0,40,0,0);s.addColorStop(0,"rgba(0, 0, 0, 0)"),s.addColorStop(1,"rgb(36, 152, 4, 0.8)");var i=n.createLinearGradient(0,40,0,0);i.addColorStop(0,"rgba(0, 0, 0, 0)"),i.addColorStop(1,"rgba(240, 65, 53, 0.9)"),new O.a(n,{type:"line",data:{labels:e,datasets:[{data:c,backgroundColor:r?i:s,borderColor:r?"rgba(240, 65, 53, 0.733)":"rgba(59,172,7,0.65)",lineTension:.4}]},options:{legend:{display:!1},tooltips:{enabled:!1},elements:{point:{radius:0}},scales:{xAxes:[{display:!1,scaleLabel:{type:"linear",display:!0},ticks:{},gridLines:{display:!0}}],yAxes:[{ticks:{},display:!1,gridLines:{display:!0},title:{display:!1}}]}}}).update()}),[c,r]),Object(b.jsx)("div",{children:Object(b.jsx)("canvas",{id:"myChart",height:"40",width:"170",ref:t})})};var f=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),d=r[0],o=r[1],j=Object(a.useState)(!0),h=Object(i.a)(j,2),p=h[0],x=h[1];Object(a.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true").then((function(e){n(e.data),x(!1),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);var O=t.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));return!p&&Object(b.jsxs)("div",{className:"coin-app",children:[Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("h1",{children:"Cryptocurrencies Tracker"})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-8",children:[Object(b.jsxs)("div",{className:"coin-search",children:[Object(b.jsx)("h2",{className:"coin-text",children:"Search a currency"}),Object(b.jsx)("form",{children:Object(b.jsx)("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){o(e.target.value)}})})]}),Object(b.jsx)("div",{className:"mx-5",children:Object(b.jsxs)("table",{className:"table ",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Coin"}),Object(b.jsx)("th",{children:"Price"}),Object(b.jsx)("th",{children:"Volume"}),Object(b.jsx)("th",{children:"24hr"}),Object(b.jsx)("th",{children:"Market Cap"}),Object(b.jsx)("th",{children:"Last 7 days"})]})}),Object(b.jsx)("tbody",{children:O.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("div",{className:"coin",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)("img",{src:e.image})}),Object(b.jsxs)("div",{className:"col-md-8",children:[Object(b.jsx)("h1",{children:e.name}),Object(b.jsx)("p",{className:"coin-symbol",children:e.symbol})]})]})})}),Object(b.jsx)("td",{children:e.current_price}),Object(b.jsx)("td",{children:e.total_volume.toLocaleString()}),Object(b.jsx)("td",{children:e.price_change_percentage_24h<0?Object(b.jsxs)("p",{className:"coin-percent red",children:[e.price_change_percentage_24h.toFixed(2),"%"]}):Object(b.jsxs)("p",{className:"coin-percent green",children:[e.price_change_percentage_24h.toFixed(2),"%"]})}),Object(b.jsx)("td",{children:e.market_cap.toLocaleString()}),Object(b.jsx)("td",{children:Object(b.jsx)("div",{className:"coin-graph",children:Object(b.jsx)(m,{pointData:e.sparkline_in_7d.price})})})]})}))})]})})]}),Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)("div",{className:"news",children:Object(b.jsx)(u,{})})})]})]})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.665bda9e.chunk.js.map