import{n as e,t}from"./jsx-runtime-8V1sTRGR.js";e();var n=t();function r(){return(0,n.jsxs)(`div`,{className:`fixed inset-0 z-9999 bg-[#040a16] flex items-center justify-center overflow-hidden font-sans`,children:[(0,n.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        @keyframes beam-x {
          0%   { transform: translateX(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        @keyframes beam-y {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes grid-fade {
          0%   { opacity: 0; }
          30%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes glow-pulse {
          0%   { opacity: 0; transform: translateX(-50%) scale(0.7); }
          40%  { opacity: 1; transform: translateX(-50%) scale(1.1); }
          70%  { opacity: 0.8; transform: translateX(-50%) scale(1); }
          100% { opacity: 0; transform: translateX(-50%) scale(0.9); }
        }
        @keyframes corner-fade {
          0%,100% { opacity: 0; }
          20%,80% { opacity: 1; }
        }
        @keyframes logo-anim {
          0%   { opacity: 0; transform: scale(0.7); }
          30%  { opacity: 1; transform: scale(1.05); }
          60%  { opacity: 1; transform: scale(1); }
          100% { opacity: 1; transform: scale(1); }
        }

        .load-beam-h1 { animation: beam-x 2.4s ease 0.3s infinite; opacity: 0; }
        .load-beam-h2 { animation: beam-x 2.8s ease 0.7s infinite; opacity: 0; }
        .load-beam-v  { animation: beam-y 2.2s ease 0.5s infinite; opacity: 0; }
        .load-grid    { animation: grid-fade 3.2s ease infinite; }
        .load-glow    { animation: glow-pulse 3.2s ease infinite; }
        .load-corner  { animation: corner-fade 3.2s ease infinite; opacity: 0; }
        .load-logo    { animation: logo-anim 0.6s ease forwards; }
      `}),(0,n.jsx)(`div`,{className:`load-glow absolute top-1/2 left-1/2 w-225 h-150 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,150,255,0.22)_0%,rgba(0,80,200,0.09)_50%,transparent_70%)]`}),(0,n.jsx)(`div`,{className:`load-grid absolute inset-0 pointer-events-none`,children:(0,n.jsxs)(`svg`,{width:`100%`,height:`100%`,xmlns:`http://www.w3.org/2000/svg`,className:`absolute inset-0`,children:[(0,n.jsx)(`defs`,{children:(0,n.jsx)(`pattern`,{id:`load-grid`,width:`64`,height:`64`,patternUnits:`userSpaceOnUse`,children:(0,n.jsx)(`path`,{d:`M 64 0 L 0 0 0 64`,fill:`none`,stroke:`rgba(0,180,255,0.07)`,strokeWidth:`1`})})}),(0,n.jsx)(`rect`,{width:`100%`,height:`100%`,fill:`url(#load-grid)`})]})}),(0,n.jsx)(`div`,{className:`load-beam-h1 absolute top-2/5 left-0 w-full h-px pointer-events-none blur-xs bg-[linear-gradient(90deg,transparent,#00cfff,transparent)]`}),(0,n.jsx)(`div`,{className:`load-beam-h2 absolute top-3/5 left-0 w-full h-px pointer-events-none bg-[linear-gradient(90deg,transparent,rgba(0,120,255,0.8),transparent)]`}),(0,n.jsx)(`div`,{className:`load-beam-v absolute left-1/2 top-0 w-px h-full pointer-events-none blur-xs bg-[linear-gradient(180deg,transparent,#00cfff,transparent)]`}),(0,n.jsx)(`div`,{className:`load-corner absolute top-0 left-0 w-45 h-45 pointer-events-none`,children:(0,n.jsx)(`svg`,{width:`180`,height:`180`,viewBox:`0 0 180 180`,fill:`none`,children:(0,n.jsx)(`path`,{d:`M1 60 L1 1 L60 1`,stroke:`rgba(0,207,255,0.3)`,strokeWidth:`1`})})}),(0,n.jsx)(`div`,{className:`load-corner absolute top-0 right-0 w-45 h-45 pointer-events-none`,children:(0,n.jsx)(`svg`,{width:`180`,height:`180`,viewBox:`0 0 180 180`,fill:`none`,children:(0,n.jsx)(`path`,{d:`M179 60 L179 1 L120 1`,stroke:`rgba(0,207,255,0.3)`,strokeWidth:`1`})})}),(0,n.jsx)(`div`,{className:`load-corner absolute bottom-0 left-0 w-45 h-45 pointer-events-none`,children:(0,n.jsx)(`svg`,{width:`180`,height:`180`,viewBox:`0 0 180 180`,fill:`none`,children:(0,n.jsx)(`path`,{d:`M1 120 L1 179 L60 179`,stroke:`rgba(0,207,255,0.3)`,strokeWidth:`1`})})}),(0,n.jsx)(`div`,{className:`load-corner absolute bottom-0 right-0 w-45 h-45 pointer-events-none`,children:(0,n.jsx)(`svg`,{width:`180`,height:`180`,viewBox:`0 0 180 180`,fill:`none`,children:(0,n.jsx)(`path`,{d:`M179 120 L179 179 L120 179`,stroke:`rgba(0,207,255,0.3)`,strokeWidth:`1`})})}),(0,n.jsxs)(`div`,{className:`load-logo relative flex flex-col items-center gap-4`,children:[(0,n.jsxs)(`svg`,{width:`80`,height:`80`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 120 120`,fill:`none`,children:[(0,n.jsx)(`defs`,{children:(0,n.jsxs)(`linearGradient`,{id:`load-grad`,x1:`0`,y1:`0`,x2:`1`,y2:`1`,children:[(0,n.jsx)(`stop`,{offset:`0%`,stopColor:`#00CFFF`}),(0,n.jsx)(`stop`,{offset:`100%`,stopColor:`#0077FF`})]})}),(0,n.jsx)(`text`,{x:`50%`,y:`50%`,dominantBaseline:`middle`,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:`90`,fontWeight:`700`,fill:`url(#load-grad)`,children:`ß`})]}),(0,n.jsx)(`span`,{className:`text-xl sm:text-2xl font-semibold tracking-tight text-sky-100`,children:`Bini.js`})]})]})}export{r as default};