import{n as e,s as t,t as n}from"./jsx-runtime-CYyajZpr.js";import{n as r}from"./chunk-OE4NN4TA-ZGuMkXT6.js";import{_ as i,n as a}from"./Layout-CMA5STUh.js";import{t as o}from"./arrow-left-CmlvgbGL.js";import{t as s}from"./arrow-right-Bkb2N5om.js";import{t as c}from"./DocSidebar-D95aINV0.js";import{t as l}from"./info-DwoDvoEv.js";import{t as u}from"./lightbulb-0h-vsbXQ.js";import{t as d}from"./triangle-alert-Dv6BP5n_.js";var f=t(e(),1),p=n();function m({code:e,filename:t}){let[n,r]=f.useState(!1);return(0,p.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,p.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,p.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,p.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,p.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,p.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,p.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,p.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,p.jsx)(`pre`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} p-4 overflow-x-auto`,children:(0,p.jsx)(`code`,{className:`text-sm font-mono text-slate-200`,children:e})})]})}function h({type:e,children:t}){let n={info:{bg:`bg-cyan-500/10`,border:`border-cyan-500/30`,color:`text-cyan-400`,icon:l},warning:{bg:`bg-amber-500/10`,border:`border-amber-500/30`,color:`text-amber-400`,icon:d},tip:{bg:`bg-purple-500/10`,border:`border-purple-500/30`,color:`text-purple-400`,icon:u}}[e],r=n.icon;return(0,p.jsxs)(`div`,{className:`p-4 rounded-lg ${n.bg} border ${n.border} my-6`,children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-2 mb-1`,children:[(0,p.jsx)(r,{className:`w-4 h-4 ${n.color}`}),(0,p.jsx)(`p`,{className:`text-sm font-medium ${n.color}`,children:e===`info`?`Note`:e===`warning`?`Warning`:`Tip`})]}),(0,p.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:t})]})}function g(){return(0,p.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,p.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,p.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,p.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,p.jsx)(a,{}),(0,p.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,p.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,p.jsx)(c,{children:(0,p.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,p.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,p.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:`CSS Modules`}),(0,p.jsx)(`p`,{className:`text-slate-400 text-sm mb-8`,children:`Learn how to use CSS Modules in Bini.js for component-scoped styling.`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,p.jsxs)(`p`,{className:`text-slate-300 mb-6`,children:[`CSS Modules allow you to write component-scoped CSS without worrying about naming conflicts. Vite processes `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`.module.css`}),` files automatically — no configuration needed.`]}),(0,p.jsxs)(h,{type:`info`,children:[(0,p.jsx)(`strong`,{children:`Zero Configuration:`}),` Vite handles CSS Modules natively. Any file ending in `,(0,p.jsx)(`code`,{children:`.module.css`}),` is automatically processed as a CSS Module.`]})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Usage`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create a `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`.module.css`}),` file and import it in your component:`]}),(0,p.jsx)(m,{code:`/* src/app/components/Button.module.css */
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
}

.secondary {
  background: transparent;
  color: white;
  border: 1px solid #334155;
}

.secondary:hover {
  background: #1e293b;
}`,filename:`Button.module.css`}),(0,p.jsx)(m,{code:`// src/app/components/Button.tsx
import styles from './Button.module.css'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button 
      className={\`\${styles.button} \${styles[variant]}\`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}`,filename:`Button.tsx`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Combining Classes`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Combine multiple CSS Module classes using template literals:`}),(0,p.jsx)(m,{code:`/* src/app/components/Card.module.css */
.card {
  background: #0a0a0a;
  border: 1px solid #1e293b;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.featured {
  border-color: #06b6d4;
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.1);
}

.large {
  padding: 2rem;
}`,filename:`Card.module.css`}),(0,p.jsx)(m,{code:`// src/app/components/Card.tsx
import styles from './Card.module.css'

interface CardProps {
  featured?: boolean
  size?: 'normal' | 'large'
  children: React.ReactNode
}

export function Card({ featured, size = 'normal', children }: CardProps) {
  return (
    <div className={\`\${styles.card} \${featured ? styles.featured : ''} \${size === 'large' ? styles.large : ''}\`}>
      {children}
    </div>
  )
}`,filename:`Card.tsx`}),(0,p.jsxs)(h,{type:`tip`,children:[`Use the `,(0,p.jsx)(`code`,{children:`clsx`}),` or `,(0,p.jsx)(`code`,{children:`classnames`}),` library for cleaner conditional class composition.`]})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Using clsx for Cleaner Code`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Install `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`clsx`}),` for cleaner conditional classes:`]}),(0,p.jsx)(m,{code:`npm install clsx`}),(0,p.jsx)(m,{code:`// src/app/components/Card.tsx
import clsx from 'clsx'
import styles from './Card.module.css'

interface CardProps {
  featured?: boolean
  size?: 'normal' | 'large'
  children: React.ReactNode
}

export function Card({ featured, size = 'normal', children }: CardProps) {
  return (
    <div className={clsx(
      styles.card,
      featured && styles.featured,
      size === 'large' && styles.large
    )}>
      {children}
    </div>
  )
}`,filename:`Card.tsx`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Global vs Local Scope`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`CSS Modules are locally scoped by default. Use `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`:global`}),` to target global selectors:`]}),(0,p.jsx)(m,{code:`/* src/app/components/Container.module.css */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Target global class */
.container :global(.heading) {
  margin-bottom: 1rem;
}

/* Global selector */
:global(.dark) .container {
  background: #000;
}`,filename:`Container.module.css`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Composing Classes`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`composes`}),` to reuse styles from other classes:`]}),(0,p.jsx)(m,{code:`/* src/app/components/Form.module.css */
.baseInput {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #334155;
  background: #0a0a0a;
  color: white;
  font-size: 1rem;
}

.baseInput:focus {
  outline: none;
  border-color: #06b6d4;
  box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.1);
}

.textInput {
  composes: baseInput;
}

.errorInput {
  composes: baseInput;
  border-color: #ef4444;
}

.errorInput:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.1);
}`,filename:`Form.module.css`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`CSS Variables in Modules`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Use CSS variables for dynamic styling within modules:`}),(0,p.jsx)(m,{code:`/* src/app/components/Progress.module.css */
.progress {
  width: 100%;
  height: 0.5rem;
  background: #1e293b;
  border-radius: 9999px;
  overflow: hidden;
}

.bar {
  height: 100%;
  width: var(--progress);
  background: linear-gradient(to right, #06b6d4, #3b82f6);
  transition: width 0.3s ease;
}`,filename:`Progress.module.css`}),(0,p.jsx)(m,{code:`// src/app/components/Progress.tsx
import styles from './Progress.module.css'

interface ProgressProps {
  value: number
  max?: number
}

export function Progress({ value, max = 100 }: ProgressProps) {
  const percentage = (value / max) * 100
  
  return (
    <div className={styles.progress}>
      <div 
        className={styles.bar} 
        style={{ '--progress': \`\${percentage}%\` } as React.CSSProperties}
      />
    </div>
  )
}`,filename:`Progress.tsx`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Animations`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Define animations in CSS Modules:`}),(0,p.jsx)(m,{code:`/* src/app/components/Spinner.module.css */
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
}

/* Pulse animation */
.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}`,filename:`Spinner.module.css`}),(0,p.jsx)(m,{code:`// src/app/components/Spinner.tsx
import styles from './Spinner.module.css'

export function Spinner() {
  return <div className={styles.spinner} />
}

export function LoadingPulse() {
  return (
    <div className={styles.pulse}>
      Loading...
    </div>
  )
}`,filename:`Spinner.tsx`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Media Queries`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Write responsive styles with media queries:`}),(0,p.jsx)(m,{code:`/* src/app/components/Grid.module.css */
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
}

.card {
  padding: 1rem;
}

@media (min-width: 768px) {
  .card {
    padding: 1.5rem;
  }
}`,filename:`Grid.module.css`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`A full-featured component using CSS Modules:`}),(0,p.jsx)(m,{code:`/* src/app/components/Modal.module.css */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s ease;
}

.modal {
  background: #0a0a0a;
  border: 1px solid #1e293b;
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideIn 0.3s ease;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
}

.close {
  composes: button from './Button.module.css';
  padding: 0.25rem 0.5rem;
  background: transparent;
  color: #94a3b8;
}

.close:hover {
  color: white;
}

.content {
  color: #94a3b8;
  line-height: 1.5;
}

.footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #1e293b;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}`,filename:`Modal.module.css`}),(0,p.jsx)(m,{code:`// src/app/components/Modal.tsx
import { useEffect } from 'react'
import styles from './Modal.module.css'
import buttonStyles from './Button.module.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.close} onClick={onClose}>
            ✕
          </button>
        </div>
        <div className={styles.content}>
          {children}
        </div>
        {footer && (
          <div className={styles.footer}>
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}`,filename:`Modal.tsx`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Best Practices`}),(0,p.jsxs)(`ul`,{className:`space-y-3 text-slate-300 mb-6`,children:[(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Use camelCase for class names`}),` — `,(0,p.jsx)(`code`,{children:`.myComponent`}),` not `,(0,p.jsx)(`code`,{children:`.my-component`}),`.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Keep modules close to components`}),` — Colocate `,(0,p.jsx)(`code`,{children:`.module.css`}),` with the component.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Use composes for shared styles`}),` — Avoid duplicating common patterns.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Use CSS variables for theming`}),` — Share values across modules.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Use clsx for conditional classes`}),` — Cleaner than template literals.`]})]})]})]}),(0,p.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.65},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,p.jsxs)(r,{to:`/docs/tailwind`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,p.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,p.jsx)(`div`,{className:`text-sm font-medium`,children:`Tailwind CSS`})]})]}),(0,p.jsxs)(r,{to:`/docs/static-export`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,p.jsx)(`div`,{className:`text-sm font-medium`,children:`Static Export`})]}),(0,p.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]})})})})]})}export{g as default};