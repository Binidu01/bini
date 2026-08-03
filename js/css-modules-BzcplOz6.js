import{c as e,i as t,n,t as r}from"./index-BJ21JKIc.js";import{n as i,v as a}from"./Layout-FK96wMry.js";import{t as o}from"./arrow-left-BHif1YL5.js";import{t as s}from"./arrow-right-BG3O81G6.js";import{n as c,r as l,t as u}from"./TableOfContents-DuPQnoEA.js";var d=e(t(),1),f=r(),p=[{id:`basic-usage`,label:`Basic Usage`},{id:`combining-classes`,label:`Combining Classes`},{id:`using-clsx`,label:`Using clsx for Cleaner Code`},{id:`global-vs-local`,label:`Global vs Local Scope`},{id:`composing-classes`,label:`Composing Classes`},{id:`css-variables`,label:`CSS Variables in Modules`},{id:`animations`,label:`Animations`},{id:`media-queries`,label:`Media Queries`},{id:`complete-example`,label:`Complete Example`}],m=`CSS Modules`,h=`https://bini.js.org/docs/css-modules`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/css-modules.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({children:e}){return(0,f.jsx)(`div`,{className:`p-4 rounded-lg bg-slate-900/50 border border-slate-800 my-6`,children:(0,f.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:e})})}function y(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(l,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to use CSS Modules in Bini.js for component-scoped styling.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})}),(0,f.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,f.jsxs)(`p`,{className:`text-slate-300 mb-6`,children:[`CSS Modules allow you to write component-scoped CSS without worrying about naming conflicts. Vite processes `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.module.css`}),` files automatically — no configuration needed.`]}),(0,f.jsxs)(v,{children:[(0,f.jsx)(`strong`,{children:`Zero Configuration:`}),` Vite handles CSS Modules natively. Any file ending in `,(0,f.jsx)(`code`,{children:`.module.css`}),` is automatically processed as a CSS Module.`]})]}),(0,f.jsxs)(a.section,{id:`basic-usage`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Usage`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create a `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.module.css`}),` file and import it in your component:`]}),(0,f.jsx)(_,{code:`/* src/app/components/Button.module.css */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.primary {
  background: #06b6d4;
  color: black;
  border: none;
}

.primary:hover {
  background: #0891b2;
}`,filename:`Button.module.css`}),(0,f.jsx)(_,{code:`// src/app/components/Button.tsx
import styles from './Button.module.css'

export function Button({ variant = 'primary', children }) {
  return (
    <button className={\`\${styles.button} \${styles[variant]}\`}>
      {children}
    </button>
  )
}`,filename:`Button.tsx`})]}),(0,f.jsxs)(a.section,{id:`combining-classes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Combining Classes`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Combine multiple CSS Module classes using template literals:`}),(0,f.jsx)(_,{code:`/* src/app/components/Card.module.css */
.card {
  background: #0a0a0a;
  border: 1px solid #1e293b;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.featured {
  border-color: #06b6d4;
}

.large {
  padding: 2rem;
}`,filename:`Card.module.css`}),(0,f.jsx)(_,{code:`// src/app/components/Card.tsx
import styles from './Card.module.css'

export function Card({ featured, size = 'normal', children }) {
  return (
    <div className={\`\${styles.card} \${featured ? styles.featured : ''} \${size === 'large' ? styles.large : ''}\`}>
      {children}
    </div>
  )
}`,filename:`Card.tsx`}),(0,f.jsxs)(v,{children:[`Use the `,(0,f.jsx)(`code`,{children:`clsx`}),` or `,(0,f.jsx)(`code`,{children:`classnames`}),` library for cleaner conditional class composition.`]})]}),(0,f.jsxs)(a.section,{id:`using-clsx`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Using clsx for Cleaner Code`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Install `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`clsx`}),` for cleaner conditional classes:`]}),(0,f.jsx)(_,{code:`npm install clsx`}),(0,f.jsx)(_,{code:`// src/app/components/Card.tsx
import clsx from 'clsx'
import styles from './Card.module.css'

export function Card({ featured, size = 'normal', children }) {
  return (
    <div className={clsx(
      styles.card,
      featured && styles.featured,
      size === 'large' && styles.large
    )}>
      {children}
    </div>
  )
}`,filename:`Card.tsx`})]}),(0,f.jsxs)(a.section,{id:`global-vs-local`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Global vs Local Scope`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`CSS Modules are locally scoped by default. Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`:global`}),` to target global selectors:`]}),(0,f.jsx)(_,{code:`/* src/app/components/Container.module.css */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.container :global(.heading) {
  margin-bottom: 1rem;
}

:global(.dark) .container {
  background: #000;
}`,filename:`Container.module.css`})]}),(0,f.jsxs)(a.section,{id:`composing-classes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Composing Classes`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`composes`}),` to reuse styles from other classes:`]}),(0,f.jsx)(_,{code:`/* src/app/components/Form.module.css */
.baseInput {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #334155;
  background: #0a0a0a;
  color: white;
}

.textInput {
  composes: baseInput;
}

.errorInput {
  composes: baseInput;
  border-color: #ef4444;
}`,filename:`Form.module.css`})]}),(0,f.jsxs)(a.section,{id:`css-variables`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`CSS Variables in Modules`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Use CSS variables for dynamic styling within modules:`}),(0,f.jsx)(_,{code:`/* src/app/components/Progress.module.css */
.bar {
  height: 100%;
  width: var(--progress);
  background: linear-gradient(to right, #06b6d4, #3b82f6);
  transition: width 0.3s ease;
}`,filename:`Progress.module.css`}),(0,f.jsx)(_,{code:`// src/app/components/Progress.tsx
import styles from './Progress.module.css'

export function Progress({ value, max = 100 }) {
  const percentage = (value / max) * 100
  
  return (
    <div className={styles.progress}>
      <div 
        className={styles.bar} 
        style={{ '--progress': \`\${percentage}%\` } as React.CSSProperties}
      />
    </div>
  )
}`,filename:`Progress.tsx`})]}),(0,f.jsxs)(a.section,{id:`animations`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Animations`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Define animations in CSS Modules:`}),(0,f.jsx)(_,{code:`/* src/app/components/Spinner.module.css */
.spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid #1e293b;
  border-top-color: #06b6d4;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}`,filename:`Spinner.module.css`}),(0,f.jsx)(_,{code:`// src/app/components/Spinner.tsx
import styles from './Spinner.module.css'

export function Spinner() {
  return <div className={styles.spinner} />
}`,filename:`Spinner.tsx`})]}),(0,f.jsxs)(a.section,{id:`media-queries`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Media Queries`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Write responsive styles with media queries:`}),(0,f.jsx)(_,{code:`/* src/app/components/Grid.module.css */
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,filename:`Grid.module.css`})]}),(0,f.jsxs)(a.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`A full-featured modal component using CSS Modules:`}),(0,f.jsx)(_,{code:`/* src/app/components/Modal.module.css */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: #0a0a0a;
  border: 1px solid #1e293b;
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 500px;
  width: 90%;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
}

.close {
  background: transparent;
  color: #94a3b8;
  border: none;
  cursor: pointer;
}

.close:hover {
  color: white;
}`,filename:`Modal.module.css`}),(0,f.jsx)(_,{code:`// src/app/components/Modal.tsx
import styles from './Modal.module.css'

export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.close} onClick={onClose}>✕</button>
        </div>
        <div className="text-slate-400">{children}</div>
      </div>
    </div>
  )
}`,filename:`Modal.tsx`})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/tailwind`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Tailwind CSS`})]})]}),(0,f.jsxs)(n,{to:`/docs/platform-web`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Web`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{y as default};