(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"query",function(){return f});n(75);var a=n(7),r=n.n(a),o=n(0),l=n.n(o),i=n(152),c=n(150),s=n(155),u=n(195),p=n.n(u),m=n(159),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={selectedCTF:void 0,selectedProblemType:void 0,selectedAuthor:void 0},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.data,a=t.location,r=n.allSitePage.edges.filter(function(e){return 5===(e.node.path.match(/\//g)||[]).length}).map(function(e){var t=e.node;return new m.a(t.path)}),o=r.map(function(e){return e.author}).filter(function(e,t,n){return n.indexOf(e)===t}),u=r.map(function(e){return e.problemType}).filter(function(e,t,n){return n.indexOf(e)===t}),d=r.map(function(e){return e.ctfName}).filter(function(e,t,n){return n.indexOf(e)===t}),f=n.allSitePage.edges.filter(function(e){return 5!==(e.node.path.match(/\//g)||[]).length});return f.length>0&&(console.log("Some non writeup pages were skipped"),console.log(f)),this.state.selectedProblemType&&"All"!==this.state.selectedProblemType&&(console.log(this.state.selectedProblemType),r=r.filter(function(t){return t.problemType===e.state.selectedProblemType})),this.state.selectedCTF&&"All"!==this.state.selectedCTF&&(console.log(this.state.selectedCTF),r=r.filter(function(t){return t.ctfName===e.state.selectedCTF})),this.state.selectedAuthor&&"All"!==this.state.selectedAuthor&&(console.log(this.state.selectedAuthor),r=r.filter(function(t){return t.author===e.state.selectedAuthor})),l.a.createElement(i.a,{location:a},l.a.createElement(c.a,{title:"Writeups"}),l.a.createElement("div",{style:{margin:"24px auto 64px"}},l.a.createElement("h1",null,"Writeups"),l.a.createElement(s.Flex,{flexWrap:"wrap",mx:-2},l.a.createElement(s.Box,{m:2},l.a.createElement("div",{style:{fontSize:"0.66em",color:"grey"}},"Type"),l.a.createElement("select",{onChange:function(t){return e.setState({selectedProblemType:t.target.value})}},l.a.createElement("option",{value:void 0},"All"),u.map(function(e){return l.a.createElement("option",{value:e,key:e},e)}))),l.a.createElement(s.Box,{m:2},l.a.createElement("div",{style:{fontSize:"0.66em",color:"grey"}},"CTF"),l.a.createElement("select",{onChange:function(t){return e.setState({selectedCTF:t.target.value})}},l.a.createElement("option",{value:void 0},"All"),d.map(function(e){return l.a.createElement("option",{value:e,key:e},e)}))),l.a.createElement(s.Box,{m:2},l.a.createElement("div",{style:{fontSize:"0.66em",color:"grey"}},"Author"),l.a.createElement("select",{onChange:function(t){return e.setState({selectedAuthor:t.target.value})}},l.a.createElement("option",{value:void 0},"All"),o.map(function(e){return l.a.createElement("option",{value:e,key:e},e)})))),l.a.createElement(s.Flex,{flexWrap:"wrap",mx:-2,justifyContent:"center",alignItems:"center"},r.map(function(e,t){return l.a.createElement("a",{href:e.path,style:{color:"inherit",textDecoration:"none"}},l.a.createElement(s.Card,{className:p.a.card,style:{background:e.getBG()},p:3,m:3,bg:"#ffffff",borderRadius:4,boxShadow:"0 0 4px rgba(0, 0, 0, 0.16)"},l.a.createElement("p",null,e.problemName),l.a.createElement("p",null,e.problemType),l.a.createElement("p",null,e.ctfName),l.a.createElement("p",null,e.author)))}))))},t}(l.a.Component),f="4046874640"},150:function(e,t,n){"use strict";var a=n(151),r=n(0),o=n.n(r),l=n(4),i=n.n(l),c=n(153),s=n.n(c),u=n(149);function p(e){var t=e.description,n=e.lang,r=e.meta,l=e.keywords,i=e.title;return o.a.createElement(u.b,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:i},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:a}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:a})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=p;var m="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"ByteBandits",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-writeups-js-6e6eaf21d9320e2224ef.js.map