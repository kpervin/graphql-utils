(window.webpackJsonp=window.webpackJsonp||[]).push([[6,19],{523:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(517),l=a(94);t.default=function(){return i.a.createElement(c.a,{title:"Page Not Found"},i.a.createElement("main",{className:"container margin-vert--xl"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--6 col--offset-3"},i.a.createElement("h1",{className:"hero__title"},i.a.createElement(l.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),i.a.createElement("p",null,i.a.createElement(l.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),i.a.createElement("p",null,i.a.createElement(l.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},90:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(96),l=a(16),r=a(28),o=a(517),s=a(3),d=a(8),u=a(93),m=a(92),b=a(527),h=a(531),p=a(532),f=a(530),E=a(98),v=a(101),O=a(533),j=function(e){return i.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),i.a.createElement("g",{fill:"#7a7a7a"},i.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),i.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=a(535),k=a(94),C=a(73),N=a.n(C);var _=function e(t,a){return"link"===t.type?Object(m.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function I(e){var t,a,c,l=e.item,r=e.onItemClick,o=e.collapsible,m=e.activePath,b=Object(d.a)(e,["item","onItemClick","collapsible","activePath"]),h=l.items,p=l.label,f=_(l,m),E=(a=f,c=Object(n.useRef)(a),Object(n.useEffect)((function(){c.current=a}),[a]),c.current),v=Object(n.useState)((function(){return!!o&&(!f&&l.collapsed)})),O=v[0],j=v[1],g=Object(n.useRef)(null),k=Object(n.useState)(void 0),C=k[0],I=k[1],T=function(e){var t;void 0===e&&(e=!0),I(e?(null===(t=g.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){f&&!E&&O&&j(!1)}),[f,E,O]);var S=Object(n.useCallback)((function(e){e.preventDefault(),C||T(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[C]);return 0===h.length?null:i.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":O}),key:p},i.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&f},t[N.a.menuLinkText]=!o,t)),onClick:o?S:void 0,href:o?"#!":void 0},b),p),i.a.createElement("ul",{className:"menu__list",ref:g,style:{height:C},onTransitionEnd:function(){O||T(!1)}},h.map((function(e){return i.a.createElement(y,{tabIndex:O?"-1":"0",key:e.label,item:e,onItemClick:r,collapsible:o,activePath:m})}))))}function T(e){var t,a=e.item,n=e.onItemClick,c=e.activePath,l=(e.collapsible,Object(d.a)(e,["item","onItemClick","activePath","collapsible"])),r=a.href,o=a.label,m=_(a,c);return i.a.createElement("li",{className:"menu__list-item",key:o},i.a.createElement(E.a,Object(s.a)({className:Object(u.a)("menu__link",(t={"menu__link--active":m},t[N.a.menuLinkExternal]=!Object(v.a)(r),t)),to:r},Object(v.a)(r)&&{isNavLink:!0,exact:!0,onClick:n},l),o))}function y(e){switch(e.item.type){case"category":return i.a.createElement(I,e);case"link":default:return i.a.createElement(T,e)}}var S=function(e){var t,a,c=e.path,l=e.sidebar,r=e.sidebarCollapsible,o=void 0===r||r,s=e.onCollapse,d=e.isHidden,E=Object(n.useState)(!1),v=E[0],C=E[1],_=Object(m.useThemeConfig)(),I=_.navbar.hideOnScroll,T=_.hideableSidebar,S=Object(b.a)().isAnnouncementBarClosed,w=Object(f.a)().scrollY;Object(h.a)(v);var x=Object(p.a)();return Object(n.useEffect)((function(){x===p.b.desktop&&C(!1)}),[x]),i.a.createElement("div",{className:Object(u.a)(N.a.sidebar,(t={},t[N.a.sidebarWithHideableNavbar]=I,t[N.a.sidebarHidden]=d,t))},I&&i.a.createElement(O.a,{tabIndex:-1,className:N.a.sidebarLogo}),i.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",N.a.menu,(a={"menu--show":v},a[N.a.menuWithAnnouncementBar]=!S&&0===w,a))},i.a.createElement("button",{"aria-label":v?Object(k.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(k.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){C(!v)}},v?i.a.createElement("span",{className:Object(u.a)(N.a.sidebarMenuIcon,N.a.sidebarMenuCloseIcon)},"\xd7"):i.a.createElement(g.a,{className:N.a.sidebarMenuIcon,height:24,width:24})),i.a.createElement("ul",{className:"menu__list"},l.map((function(e){return i.a.createElement(y,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),C(!1)},collapsible:o,activePath:c})})))),T&&i.a.createElement("button",{type:"button",title:Object(k.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(u.a)("button button--secondary button--outline",N.a.collapseSidebarButton),onClick:s},i.a.createElement(j,{className:N.a.collapseSidebarButtonIcon})))},w=a(102),x=(a(75),a(76)),A=a.n(x),L=function(e){return function(t){var a,n=t.id,c=Object(d.a)(t,["id"]),l=Object(m.useThemeConfig)().navbar.hideOnScroll;return n?i.a.createElement(e,c,i.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",(a={},a[A.a.enhancedAnchor]=!l,a)),id:n}),c.children,i.a.createElement("a",{className:"hash-link",href:"#"+n,title:Object(k.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.a.createElement(e,c)}},P={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?i.a.createElement(w.a,e):i.a.createElement("code",e):t},a:function(e){return i.a.createElement(E.a,e)},pre:function(e){var t=e.children;return i.a.createElement(w.a,null==t?void 0:t.props)},h1:L("h1"),h2:L("h2"),h3:L("h3"),h4:L("h4"),h5:L("h5"),h6:L("h6")},B=a(523),M=a(23),R=a(77),H=a.n(R);function D(e){var t,a,r,s,d,b=e.currentDocRoute,h=e.versionMetadata,p=e.children,f=Object(l.default)(),E=f.siteConfig,v=f.isClient,O=h.pluginId,g=h.permalinkToSidebar,C=h.docsSidebars,N=h.version,_=g[b.path],I=C[_],T=Object(n.useState)(!1),y=T[0],w=T[1],x=Object(n.useState)(!1),A=x[0],L=x[1],B=Object(n.useCallback)((function(){A&&L(!1),w(!y)}),[A]);return i.a.createElement(o.a,{key:v,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:N,tag:Object(m.docVersionSearchTag)(O,N)}},i.a.createElement("div",{className:H.a.docPage},I&&i.a.createElement("div",{className:Object(u.a)(H.a.docSidebarContainer,(t={},t[H.a.docSidebarContainerHidden]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(H.a.docSidebarContainer)&&y&&L(!0)},role:"complementary"},i.a.createElement(S,{key:_,sidebar:I,path:b.path,sidebarCollapsible:null===(a=null===(r=E.themeConfig)||void 0===r?void 0:r.sidebarCollapsible)||void 0===a||a,onCollapse:B,isHidden:A}),A&&i.a.createElement("div",{className:H.a.collapsedDocSidebar,title:Object(k.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:B,onClick:B},i.a.createElement(j,{className:H.a.expandSidebarButtonIcon}))),i.a.createElement("main",{className:Object(u.a)(H.a.docMainContainer,(s={},s[H.a.docMainContainerEnhanced]=y,s))},i.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",H.a.docItemWrapper,(d={},d[H.a.docItemWrapperEnhanced]=y,d))},i.a.createElement(c.a,{components:P},p)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,c=t.find((function(e){return Object(M.matchPath)(n.pathname,e)}));return c?i.a.createElement(D,{currentDocRoute:c,versionMetadata:a},Object(r.a)(t)):i.a.createElement(B.default,e)}}}]);