import{j as e,Y as i,a as n}from"./app-d9LnZCcb.js";import{L as c}from"./Layout-BgMsYwAx.js";import{m as a,R as x}from"./proxy-Br3E_dDt.js";import{c as s}from"./createLucideIcon-C9qvPkJM.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=s("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=s("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=s("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=s("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=s("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),u=({project:t})=>e.jsx(c,{children:e.jsxs("div",{className:"min-h-screen bg-gray-950 text-white",children:[e.jsx(i,{title:t.title}),e.jsxs("div",{className:"container mx-auto px-4 py-16",children:[e.jsx(a.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},className:"mb-12",children:e.jsxs(n,{href:"/projects",className:`\r
              inline-flex items-center gap-2 \r
              text-gray-400 hover:text-white \r
              transition-colors\r
            `,children:[e.jsx(o,{className:"w-5 h-5"}),"Back to Projects"]})}),e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx(a.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},className:"bg-white/5 border border-white/10 rounded-2xl overflow-hidden",children:e.jsxs("div",{className:"h-[600px] overflow-hidden relative",children:[t.image?e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center",children:e.jsx("span",{className:"text-8xl font-bold text-gray-600",children:t.title.charAt(0)})}),t.featured&&e.jsxs("div",{className:"absolute top-6 right-6 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center",children:[e.jsx(x,{className:"w-5 h-5 mr-2"}),"Featured Project"]})]})}),e.jsxs(a.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:.3,duration:.5},className:"mt-12 space-y-12",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",children:t.title}),e.jsxs("div",{className:"flex items-center gap-2 text-gray-400",children:[e.jsx(y,{className:"w-5 h-5"}),e.jsx("span",{className:"text-lg",children:"Project Highlights"})]})]}),t.live_url&&e.jsxs("a",{href:t.live_url,target:"_blank",rel:"noopener noreferrer",className:`\r
                    flex items-center gap-2 \r
                    px-6 py-3 rounded-lg \r
                    bg-blue-600 text-white \r
                    hover:bg-blue-700 \r
                    transition-colors\r
                  `,children:[e.jsx(m,{className:"w-5 h-5"}),"Visit Live Site"]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(h,{className:"w-6 h-6 text-blue-500"}),e.jsx("h2",{className:"text-2xl font-semibold text-white",children:"Project Overview"})]}),e.jsx("p",{className:"text-xl text-gray-300 leading-relaxed",children:t.description})]}),t.technologies&&t.technologies.length>0&&e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(d,{className:"w-6 h-6 text-blue-500"}),e.jsx("h2",{className:"text-2xl font-semibold text-white",children:"Technology Stack"})]}),e.jsx("div",{className:"flex flex-wrap gap-3",children:t.technologies.map((l,r)=>e.jsx("span",{className:`\r
                        px-4 py-2 \r
                        bg-white/10 text-gray-300 \r
                        rounded-full text-sm\r
                        hover:bg-blue-500/20 \r
                        transition-colors\r
                      `,children:l},r))})]})]})]})]})]})});export{u as default};
