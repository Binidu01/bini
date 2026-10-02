import{y as e}from"./index-kkU3f4ap.js";import{_ as t,f as n,i as r,m as i,n as a,o,p as s,r as c,u as l}from"./DocBlocks-9fQggHSQ.js";import{a as u,i as d,n as f,t as p}from"./DocVisuals-C-Aoi6oH.js";var m=e(),h=[{id:`basic-usage`,label:`Basic Usage`},{id:`combining-classes`,label:`Combining Classes`},{id:`using-clsx`,label:`Using clsx for Cleaner Code`},{id:`global-vs-local`,label:`Global vs Local Scope`},{id:`composing-classes`,label:`Composing Classes`},{id:`css-variables`,label:`CSS Variables in Modules`},{id:`animations`,label:`Animations`},{id:`media-queries`,label:`Media Queries`},{id:`complete-example`,label:`Complete Example`}];function g({title:e,rows:t}){return(0,m.jsx)(u,{children:(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`mb-3 text-[13px] font-semibold text-neutral-900 dark:text-neutral-100`,children:e}),t.map(([e,t])=>(0,m.jsxs)(`div`,{className:`mb-2 flex items-center gap-3 last:mb-0`,children:[(0,m.jsx)(`span`,{className:`${f} flex h-8 w-44 shrink-0 items-center px-3 font-mono text-[12px] text-neutral-800 dark:text-neutral-200`,children:e}),(0,m.jsx)(p,{}),(0,m.jsx)(`span`,{className:`${f} flex h-8 w-56 shrink-0 items-center px-3 font-mono text-[12px] text-neutral-800 dark:text-neutral-200`,children:t})]},e))]})})}function _(){let e=t()===`js`?`jsx`:`tsx`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`mb-12`,children:[(0,m.jsxs)(n,{className:`mb-4`,children:[`CSS Modules allow you to write component-scoped CSS without worrying about naming conflicts. Vite processes `,(0,m.jsx)(a,{children:`.module.css`}),` files automatically - no configuration needed.`]}),(0,m.jsxs)(c,{children:[(0,m.jsx)(`strong`,{children:`Zero Configuration:`}),` Vite handles CSS Modules natively. Any file ending in `,(0,m.jsx)(a,{children:`.module.css`}),` is automatically processed as a CSS Module.`]}),(0,m.jsxs)(n,{className:`mb-4`,children:[`Create a new project with CSS Modules using the `,(0,m.jsx)(a,{children:`--css-modules`}),` flag:`]}),(0,m.jsx)(l,{tabs:[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --css-modules`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --css-modules`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --css-modules`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --css-modules`}]}),(0,m.jsxs)(n,{className:`mb-4`,children:[`Or use the interactive prompt and select `,(0,m.jsx)(a,{children:`CSS Modules`}),` under the styling question:`]}),(0,m.jsx)(s,{lines:[{kind:`question`,text:`Select a styling solution:`},{kind:`option`,text:`Tailwind CSS`},{kind:`option`,text:`CSS Modules`,selected:!0},{kind:`option`,text:`None`},{kind:`blank`},{kind:`hint`,text:`↑↓ navigate • ⏎ select`}]}),(0,m.jsx)(n,{className:`mb-4`,children:`Or combine with TypeScript:`}),(0,m.jsx)(l,{tabs:[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --css-modules --typescript`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --css-modules --typescript`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --css-modules --typescript`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --css-modules --typescript`}]})]}),(0,m.jsxs)(i,{id:`basic-usage`,title:`Basic Usage`,children:[(0,m.jsxs)(n,{className:`mb-4`,children:[`Create a `,(0,m.jsx)(a,{children:`.module.css`}),` file next to your component and import it:`]}),(0,m.jsx)(d,{width:280,rows:[{n:`src`},{n:`app`,d:1},{n:`components`,d:2},{n:`Button.module.css`,d:3,dot:!0},{n:`Button.${e}`,d:3}]}),(0,m.jsx)(r,{filename:`src/app/components/Button.module.css`,lang:`text`,code:`/* src/app/components/Button.module.css */
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
}`}),(0,m.jsx)(r,{filename:`src/app/components/Button.${e}`,tsCode:`// src/app/components/Button.tsx
import styles from './Button.module.css'

type ButtonProps = {
  variant?: 'primary'
  children: React.ReactNode
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button className={\`\${styles.button} \${styles[variant]}\`}>
      {children}
    </button>
  )
}`,jsCode:`// src/app/components/Button.jsx
import styles from './Button.module.css'

export function Button({ variant = 'primary', children }) {
  return (
    <button className={\`\${styles.button} \${styles[variant]}\`}>
      {children}
    </button>
  )
}`}),(0,m.jsxs)(n,{className:`mt-4 mb-4`,children:[`Vite rewrites every class name so it is unique to this file. The same `,(0,m.jsx)(a,{children:`.button`}),` in another module never collides:`]}),(0,m.jsx)(g,{title:`What the browser receives`,rows:[[`.button`,`._button_1k2x9_1`],[`.primary`,`._primary_1k2x9_11`]]})]}),(0,m.jsxs)(i,{id:`combining-classes`,title:`Combining Classes`,children:[(0,m.jsx)(n,{className:`mb-4`,children:`Combine multiple CSS Module classes using template literals:`}),(0,m.jsx)(r,{filename:`src/app/components/Card.module.css`,lang:`text`,code:`/* src/app/components/Card.module.css */
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
}`}),(0,m.jsx)(r,{filename:`src/app/components/Card.${e}`,tsCode:`// src/app/components/Card.tsx
import styles from './Card.module.css'

type CardProps = {
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
}`,jsCode:`// src/app/components/Card.jsx
import styles from './Card.module.css'

export function Card({ featured, size = 'normal', children }) {
  return (
    <div className={\`\${styles.card} \${featured ? styles.featured : ''} \${size === 'large' ? styles.large : ''}\`}>
      {children}
    </div>
  )
}`}),(0,m.jsxs)(c,{children:[`Use the `,(0,m.jsx)(a,{children:`clsx`}),` or `,(0,m.jsx)(a,{children:`classnames`}),` library for cleaner conditional class composition.`]})]}),(0,m.jsxs)(i,{id:`using-clsx`,title:`Using clsx for Cleaner Code`,children:[(0,m.jsxs)(n,{className:`mb-4`,children:[`Install `,(0,m.jsx)(a,{children:`clsx`}),` for cleaner conditional classes:`]}),(0,m.jsx)(l,{tabs:[{id:`npm`,label:`npm`,command:`$ npm install clsx`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm add clsx`},{id:`yarn`,label:`yarn`,command:`$ yarn add clsx`},{id:`bun`,label:`bun`,command:`$ bun add clsx`}]}),(0,m.jsx)(r,{filename:`src/app/components/Card.${e}`,tsCode:`// src/app/components/Card.tsx
import clsx from 'clsx'
import styles from './Card.module.css'

type CardProps = {
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
}`,jsCode:`// src/app/components/Card.jsx
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
}`})]}),(0,m.jsxs)(i,{id:`global-vs-local`,title:`Global vs Local Scope`,children:[(0,m.jsxs)(n,{className:`mb-4`,children:[`CSS Modules are locally scoped by default. Use `,(0,m.jsx)(a,{children:`:global`}),` to target global selectors:`]}),(0,m.jsx)(g,{title:`Local vs :global`,rows:[[`.container`,`._container_8f3ab_1`],[`:global(.heading)`,`.heading`],[`:global(.dark)`,`.dark`]]}),(0,m.jsx)(r,{filename:`src/app/components/Container.module.css`,lang:`text`,code:`/* src/app/components/Container.module.css */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.container :global(.heading) {
  margin-bottom: 1rem;
}

:global(.dark) .container {
  background: #000;
}`}),(0,m.jsx)(r,{filename:`src/app/components/Container.${e}`,tsCode:`// src/app/components/Container.tsx
import styles from './Container.module.css'

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <h2 className="heading">Global class, styled from the module</h2>
      {children}
    </div>
  )
}`,jsCode:`// src/app/components/Container.jsx
import styles from './Container.module.css'

export function Container({ children }) {
  return (
    <div className={styles.container}>
      <h2 className="heading">Global class, styled from the module</h2>
      {children}
    </div>
  )
}`})]}),(0,m.jsxs)(i,{id:`composing-classes`,title:`Composing Classes`,children:[(0,m.jsxs)(n,{className:`mb-4`,children:[`Use `,(0,m.jsx)(a,{children:`composes`}),` to reuse styles from other classes:`]}),(0,m.jsx)(r,{filename:`src/app/components/Form.module.css`,lang:`text`,code:`/* src/app/components/Form.module.css */
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
}`}),(0,m.jsx)(r,{filename:`src/app/components/Form.${e}`,code:`import styles from './Form.module.css'

export function Form() {
  return (
    <form>
      <input className={styles.textInput} placeholder="Name" />
      <input className={styles.errorInput} placeholder="Email (invalid)" />
    </form>
  )
}`})]}),(0,m.jsxs)(i,{id:`css-variables`,title:`CSS Variables in Modules`,children:[(0,m.jsx)(n,{className:`mb-4`,children:`Use CSS variables for dynamic styling within modules:`}),(0,m.jsx)(r,{filename:`src/app/components/Progress.module.css`,lang:`text`,code:`/* src/app/components/Progress.module.css */
.progress {
  height: 0.5rem;
  overflow: hidden;
  border-radius: 9999px;
  background: #1e293b;
}

.bar {
  height: 100%;
  width: var(--progress);
  background: linear-gradient(to right, #06b6d4, #3b82f6);
  transition: width 0.3s ease;
}`}),(0,m.jsx)(r,{filename:`src/app/components/Progress.${e}`,tsCode:`// src/app/components/Progress.tsx
import styles from './Progress.module.css'

type ProgressProps = {
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
}`,jsCode:`// src/app/components/Progress.jsx
import styles from './Progress.module.css'

export function Progress({ value, max = 100 }) {
  const percentage = (value / max) * 100

  return (
    <div className={styles.progress}>
      <div
        className={styles.bar}
        style={{ '--progress': \`\${percentage}%\` }}
      />
    </div>
  )
}`})]}),(0,m.jsxs)(i,{id:`animations`,title:`Animations`,children:[(0,m.jsxs)(n,{className:`mb-4`,children:[`Define animations in CSS Modules. `,(0,m.jsx)(a,{children:`@keyframes`}),` names are scoped to the module too:`]}),(0,m.jsx)(r,{filename:`src/app/components/Spinner.module.css`,lang:`text`,code:`/* src/app/components/Spinner.module.css */
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
}`}),(0,m.jsx)(r,{filename:`src/app/components/Spinner.${e}`,code:`import styles from './Spinner.module.css'

export function Spinner() {
  return <div className={styles.spinner} />
}`})]}),(0,m.jsxs)(i,{id:`media-queries`,title:`Media Queries`,children:[(0,m.jsx)(n,{className:`mb-4`,children:`Write responsive styles with media queries:`}),(0,m.jsx)(r,{filename:`src/app/components/Grid.module.css`,lang:`text`,code:`/* src/app/components/Grid.module.css */
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
}`}),(0,m.jsx)(r,{filename:`src/app/components/Grid.${e}`,tsCode:`// src/app/components/Grid.tsx
import styles from './Grid.module.css'

export function Grid({ children }: { children: React.ReactNode }) {
  return <div className={styles.grid}>{children}</div>
}`,jsCode:`// src/app/components/Grid.jsx
import styles from './Grid.module.css'

export function Grid({ children }) {
  return <div className={styles.grid}>{children}</div>
}`})]}),(0,m.jsxs)(i,{id:`complete-example`,title:`Complete Example`,children:[(0,m.jsx)(n,{className:`mb-4`,children:`A full-featured modal component using CSS Modules:`}),(0,m.jsx)(d,{width:280,rows:[{n:`src`},{n:`app`,d:1},{n:`components`,d:2},{n:`Modal.module.css`,d:3,dot:!0},{n:`Modal.${e}`,d:3}]}),(0,m.jsx)(r,{filename:`src/app/components/Modal.module.css`,lang:`text`,code:`/* src/app/components/Modal.module.css */
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
  background: transparent;
  color: #94a3b8;
  border: none;
  cursor: pointer;
}

.close:hover {
  color: white;
}

.body {
  color: #94a3b8;
}`}),(0,m.jsx)(r,{filename:`src/app/components/Modal.${e}`,tsCode:`// src/app/components/Modal.tsx
import styles from './Modal.module.css'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.close} onClick={onClose}>✕</button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}`,jsCode:`// src/app/components/Modal.jsx
import styles from './Modal.module.css'

export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.close} onClick={onClose}>✕</button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}`})]})]})}function v(){return(0,m.jsx)(o,{title:`CSS Modules`,description:`Learn how to use CSS Modules in Bini.js for component-scoped styling.`,url:`https://bini.js.org/docs/css-modules`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/css-modules.tsx`,toc:h,prev:{to:`/docs/tailwind`,title:`Tailwind CSS`},next:{to:`/docs/platform-web`,title:`Web`},children:(0,m.jsx)(_,{})})}export{v as default};