import{u as e}from"./Layout-C-Akp0Rm.js";import{y as t}from"./index-UfrPBTC9.js";import{f as n,g as r,i,l as a,m as o,n as s,o as c,p as l,r as u,s as d,t as f,u as p}from"./DocBlocks-7vLhiDQN.js";import{a as m,i as h,n as g,r as _,t as v}from"./DocVisuals-Ce2L0xWH.js";var y=t(),b=[{id:`windows-overview`,label:`Windows Overview`},{id:`requirements`,label:`Requirements`},{id:`native-windows`,label:`Windows`},{id:`macos`,label:`macOS`},{id:`linux`,label:`Linux`},{id:`development`,label:`Development`},{id:`building`,label:`Building`},{id:`code-signing`,label:`Code Signing`}],x=`mb-6 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400`,S=`font-medium text-neutral-900 dark:text-neutral-100`,C=[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest`}],w=[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --platform windows
$ cd my-app
$ npm install
$ npm run tauri:dev
$ npm run tauri:build`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --platform windows
$ cd my-app
$ pnpm install
$ pnpm tauri:dev
$ pnpm tauri:build`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --platform windows
$ cd my-app
$ yarn install
$ yarn tauri:dev
$ yarn tauri:build`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --platform windows
$ cd my-app
$ bun install
$ bun run tauri:dev
$ bun run tauri:build`}],T=[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --platform windows
$ cd my-app
$ npm install`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --platform windows
$ cd my-app
$ pnpm install`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --platform windows
$ cd my-app
$ yarn install`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --platform windows
$ cd my-app
$ bun install`}],E=[{id:`npm`,label:`npm`,command:`$ npm run deploy`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm deploy`},{id:`yarn`,label:`yarn`,command:`$ yarn deploy`},{id:`bun`,label:`bun`,command:`$ bun run deploy`}],D=[{id:`npm`,label:`npm`,command:`$ npm run tauri:dev`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm tauri:dev`},{id:`yarn`,label:`yarn`,command:`$ yarn tauri:dev`},{id:`bun`,label:`bun`,command:`$ bun run tauri:dev`}],O=[{id:`npm`,label:`npm`,command:`$ npm run tauri:build`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm tauri:build`},{id:`yarn`,label:`yarn`,command:`$ yarn tauri:build`},{id:`bun`,label:`bun`,command:`$ bun run tauri:build`}],k=`# .github/workflows/build-windows.yml
name: Build Windows App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-windows:
    runs-on: windows-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable
        with:
          targets: x86_64-pc-windows-msvc

      - name: Install dependencies
        run: npm install

      - name: Build Tauri app
        uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        with:
          tagName: app-v__VERSION__
          releaseName: 'App v__VERSION__'
          releaseDraft: true`,A=`# .github/workflows/build-windows.yml
name: Build Windows App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-windows:
    runs-on: windows-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable
        with:
          targets: x86_64-pc-windows-msvc

      - name: Install dependencies
        run: npm install

      - name: Build Tauri app
        uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        with:
          tagName: app-v__VERSION__
          releaseName: 'App v__VERSION__'
          releaseDraft: true`,j=`${g} flex h-12 shrink-0 items-center justify-center px-3 text-center text-[12px] leading-tight text-neutral-800 dark:text-neutral-200`;function M({os:e}){return(0,y.jsx)(m,{children:(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsxs)(`span`,{className:`${j} w-28`,children:[`Your `,e,` machine`]}),(0,y.jsx)(v,{}),(0,y.jsx)(`span`,{className:`${j} w-24`,children:`npm run deploy`}),(0,y.jsx)(v,{}),(0,y.jsx)(`span`,{className:`${j} w-40`,children:`GitHub Actions (windows-latest)`}),(0,y.jsx)(v,{}),(0,y.jsx)(`span`,{className:`${j} w-32`,children:`windows-build artifact`})]})})}function N(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Create the Project`}),(0,y.jsx)(n,{className:`mb-4`,children:`Create a new Bini.js project targeting Windows and install its dependencies:`}),(0,y.jsx)(p,{tabs:T}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Or use the interactive prompt and select `,(0,y.jsx)(s,{children:`Windows Desktop`}),`:`]}),(0,y.jsx)(p,{tabs:C}),(0,y.jsx)(l,{lines:[{kind:`question`,text:`Select target platform:`},{kind:`option`,text:`Web Application`},{kind:`option`,text:`Windows Desktop`,selected:!0},{kind:`option`,text:`Linux Desktop`},{kind:`option`,text:`macOS Desktop`},{kind:`option`,text:`Android`},{kind:`option`,text:`iOS`},{kind:`blank`},{kind:`hint`,text:`↑↓ navigate • ⏎ select`}]})]})}function P(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Add the Build Workflow`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`The scaffold does not ship with a GitHub Actions workflow. You need to add one manually. Create the file `,(0,y.jsx)(s,{children:`.github/workflows/build-windows.yml`}),` inside your project with the following content:`]}),(0,y.jsx)(h,{width:300,rows:[{n:`.github`},{n:`workflows`,d:1},{n:`build-windows.yml`,d:2,dot:!0},{n:`src-tauri`},{n:`package.json`}]}),(0,y.jsx)(i,{filename:`.github/workflows/build-windows.yml`,lang:`yaml`,code:k}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Push to GitHub`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Run `,(0,y.jsx)(s,{children:`npm run deploy`}),` and choose `,(0,y.jsx)(s,{children:`Windows`}),`. This initializes the repo, commits, and pushes everything to GitHub in one step:`]}),(0,y.jsx)(p,{tabs:E}),(0,y.jsx)(n,{className:`mb-4`,children:`Once pushed, the workflow runs on a real Windows runner and builds the installer.`}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Download the Installer`}),(0,y.jsx)(R,{})]})}function F(){return(0,y.jsxs)(o,{id:`native-windows`,title:`Windows`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`On Windows you can scaffold, develop, and build the app entirely on your own machine - no CI required.`}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 1: Install the tools`}),(0,y.jsxs)(r,{children:[(0,y.jsxs)(`li`,{children:[`Node.js`,` `,(0,y.jsx)(`strong`,{className:`font-medium text-neutral-900 dark:text-neutral-100`,children:`20.19.0`}),` `,`or higher`]}),(0,y.jsxs)(`li`,{children:[`Microsoft C++ Build Tools -`,` `,(0,y.jsx)(d,{href:`https://visualstudio.microsoft.com/visual-cpp-build-tools/`,children:`Download`}),` `,`(install the "Desktop development with C++" workload)`]}),(0,y.jsxs)(`li`,{children:[`Microsoft Edge WebView2 Runtime -`,` `,(0,y.jsx)(d,{href:`https://developer.microsoft.com/en-us/microsoft-edge/webview2/`,children:`Download`})]}),(0,y.jsxs)(`li`,{children:[`Rust via `,(0,y.jsx)(d,{href:`https://rustup.rs/`,children:`rustup`})]})]}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 2: Create the project`}),(0,y.jsx)(N,{}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 3: Develop and build`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Run `,(0,y.jsx)(s,{children:`tauri:dev`}),` to open your app in a native window, then `,(0,y.jsx)(s,{children:`tauri:build`}),` to produce the executable and installer:`]}),(0,y.jsx)(p,{tabs:w}),(0,y.jsxs)(u,{children:[(0,y.jsx)(`strong`,{children:`Tip:`}),` Use `,(0,y.jsx)(s,{children:`--sign`}),` during scaffold to set up Authenticode signing.`]})]})}function I(){return(0,y.jsxs)(o,{id:`macos`,title:`macOS`,children:[(0,y.jsxs)(n,{className:`mb-4`,children:[`A native Windows `,(0,y.jsx)(s,{children:`.exe`}),` cannot be produced on macOS - Tauri relies on Windows-only toolchains (MSVC, WebView2, WiX/NSIS). The Tauri team's own recommendation is to build Windows apps on a `,(0,y.jsx)(s,{children:`windows-latest`}),` runner in CI.`]}),(0,y.jsx)(M,{os:`macOS`}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 1: Install the tools`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Install Node.js `,(0,y.jsx)(s,{children:`20.19.0`}),` or higher and Git. Git comes with the Xcode command line tools - run `,(0,y.jsx)(s,{children:`xcode-select --install`}),` if you do not have it yet.`]}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 2: Create the project`}),(0,y.jsx)(N,{}),(0,y.jsx)(P,{}),(0,y.jsxs)(u,{children:[(0,y.jsx)(`strong`,{children:`Why not build locally?`}),` Tauri's Windows build needs MSVC and WebView2, which do not exist on macOS. Cross-compiling from macOS to Windows is technically possible but experimental and unreliable. GitHub Actions on `,(0,y.jsx)(s,{children:`windows-latest`}),` is the supported path.`]})]})}function L(){return(0,y.jsxs)(o,{id:`linux`,title:`Linux`,children:[(0,y.jsxs)(n,{className:`mb-4`,children:[`A native Windows `,(0,y.jsx)(s,{children:`.exe`}),` cannot be produced on Linux - Tauri relies on Windows-only toolchains (MSVC, WebView2, WiX/NSIS). The Tauri team's own recommendation is to build Windows apps on a `,(0,y.jsx)(s,{children:`windows-latest`}),` runner in CI.`]}),(0,y.jsx)(M,{os:`Linux`}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 1: Install the tools`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Install Node.js `,(0,y.jsx)(s,{children:`20.19.0`}),` or higher and Git with your package manager, for example`,` `,(0,y.jsx)(s,{children:`sudo apt install git`}),` on Debian and Ubuntu.`]}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 2: Create the project`}),(0,y.jsx)(N,{}),(0,y.jsx)(P,{}),(0,y.jsxs)(u,{children:[(0,y.jsx)(`strong`,{children:`Why not build locally?`}),` Tauri's Windows build needs MSVC and WebView2, which do not exist on Linux. Cross-compiling from Linux to Windows is technically possible but experimental and unreliable. GitHub Actions on `,(0,y.jsx)(s,{children:`windows-latest`}),` is the supported path.`]})]})}function R(){return(0,y.jsxs)(`ol`,{className:x,children:[(0,y.jsxs)(`li`,{children:[`Open your repository on GitHub and go to the `,(0,y.jsx)(`strong`,{className:S,children:`Actions`}),` `,`tab.`]}),(0,y.jsxs)(`li`,{children:[`Open the latest `,(0,y.jsx)(s,{children:`Build Windows App`}),` run.`]}),(0,y.jsxs)(`li`,{children:[`Under `,(0,y.jsx)(`strong`,{className:S,children:`Artifacts`}),`, download `,(0,y.jsx)(s,{children:`windows-build`}),`. Or, if a release was created, download the `,(0,y.jsx)(s,{children:`.exe`}),` / `,(0,y.jsx)(s,{children:`.msi`}),` from the Releases page.`]})]})}function z(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(o,{id:`windows-overview`,title:`Windows Overview`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`Bini.js allows you to build native Windows desktop applications using Tauri v2. Your React app is wrapped in a WebView2 binary, providing a native experience with full system access.`}),(0,y.jsxs)(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[(0,y.jsx)(_,{title:`Native Binary`,text:`Windows executable (.exe) with Authenticode signing`}),(0,y.jsx)(_,{title:`Code Signing`,text:`Authenticode signing support for trusted distribution`}),(0,y.jsx)(_,{title:`Native APIs`,text:`Full access to Windows APIs via Tauri`})]}),(0,y.jsx)(u,{children:`Windows desktop apps are built using Tauri's WebView2 backend. Your app runs in a native window with full system access.`})]}),(0,y.jsxs)(o,{id:`requirements`,title:`Requirements`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`Building Windows desktop apps requires different tools depending on your operating system. See the section for your OS below.`}),(0,y.jsxs)(r,{children:[(0,y.jsxs)(`li`,{children:[(0,y.jsx)(`strong`,{className:S,children:`On Windows:`}),` Node.js, Microsoft C++ Build Tools, the WebView2 Runtime, and Rust - everything runs locally.`]}),(0,y.jsxs)(`li`,{children:[(0,y.jsx)(`strong`,{className:S,children:`On macOS or Linux:`}),` Node.js, Git, a GitHub account, and the ability to push a repo. The Windows build itself runs on GitHub Actions.`]})]}),(0,y.jsxs)(u,{children:[`You cannot produce a native Windows `,(0,y.jsx)(s,{children:`.exe`}),` directly from macOS or Linux. Tauri v2 has no supported local cross-compilation path for Windows. The recommended way is GitHub Actions on a `,(0,y.jsx)(s,{children:`windows-latest`}),` runner, described in each section below.`]})]}),(0,y.jsx)(F,{}),(0,y.jsx)(I,{}),(0,y.jsx)(L,{}),(0,y.jsxs)(o,{id:`development`,title:`Development`,children:[(0,y.jsxs)(n,{className:`mb-4`,children:[`Running `,(0,y.jsx)(s,{children:`tauri:dev`}),` opens your app in a native Windows window. This requires a Windows machine with the requirements installed (see the Windows section):`]}),(0,y.jsx)(p,{tabs:D}),(0,y.jsx)(n,{className:`mb-4`,children:`This launches your app in a native Windows window with:`}),(0,y.jsxs)(r,{children:[(0,y.jsx)(`li`,{children:`Hot reload for frontend changes`}),(0,y.jsx)(`li`,{children:`Native window with system tray support`}),(0,y.jsx)(`li`,{children:`Access to Windows APIs`}),(0,y.jsx)(`li`,{children:`Devtools for debugging`})]})]}),(0,y.jsxs)(o,{id:`building`,title:`Building`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`Build a distributable Windows executable. On Windows this runs locally; on macOS and Linux it runs in GitHub Actions (see those sections):`}),(0,y.jsx)(p,{tabs:O}),(0,y.jsxs)(n,{className:`mb-4`,children:[`The build outputs land in `,(0,y.jsx)(s,{children:`src-tauri/target/release/bundle/`}),`:`]}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Output Files`}),(0,y.jsx)(h,{width:320,rows:[{n:`src-tauri`},{n:`target`,d:1},{n:`release`,d:2},{n:`bundle`,d:3},{n:`nsis`,d:4},{n:`my-app_0.1.0_x64-setup.exe`,d:5,dot:!0},{n:`msi`,d:4},{n:`my-app_0.1.0_x64_en-US.msi`,d:5}]}),(0,y.jsxs)(r,{children:[(0,y.jsxs)(`li`,{children:[(0,y.jsx)(s,{children:`nsis/*.exe`}),` - NSIS installer (recommended for distribution)`]}),(0,y.jsxs)(`li`,{children:[(0,y.jsx)(s,{children:`msi/*.msi`}),` - WiX MSI installer`]}),(0,y.jsxs)(`li`,{children:[(0,y.jsx)(s,{children:`release/my-app.exe`}),` - The raw executable (before bundling)`]})]}),(0,y.jsx)(u,{children:`The build output is a native Windows binary that runs without any additional dependencies.`})]}),(0,y.jsxs)(o,{id:`code-signing`,title:`Code Signing`,children:[(0,y.jsxs)(n,{className:`mb-4`,children:[`Bini.js supports Authenticode code signing for Windows binaries. Configure signing in`,` `,(0,y.jsx)(s,{children:`src-tauri/tauri.conf.json`}),`:`]}),(0,y.jsx)(i,{filename:`src-tauri/tauri.conf.json`,lang:`json`,code:`{
  "bundle": {
    "windows": {
      "certificateThumbprint": "YOUR_CERT_THUMBPRINT",
      "digestAlgorithm": "sha256",
      "timestampUrl": "http://timestamp.digicert.com"
    }
  }
}`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`For GitHub Actions, store the certificate and password as secrets and reference them in the workflow. The `,(0,y.jsx)(s,{children:`tauri-action`}),` step reads them from environment variables:`]}),(0,y.jsx)(a,{className:`mb-3`,children:(0,y.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,y.jsx)(f,{icon:e,size:18,className:`shrink-0 text-black dark:text-white`}),`GitHub Actions workflow with signing`]})}),(0,y.jsx)(i,{filename:`.github/workflows/build-windows.yml`,lang:`yaml`,code:A}),(0,y.jsx)(u,{children:`For production distribution, Authenticode signing is recommended to establish trust with Windows users.`})]})]})}function B(){return(0,y.jsx)(c,{title:`Windows`,description:`Build native Windows desktop applications with Bini.js.`,url:`https://bini.js.org/docs/platform-windows`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/platform-windows.tsx`,toc:b,prev:{to:`/docs/platform-web`,title:`Web`},next:{to:`/docs/platform-macos`,title:`macOS`},children:(0,y.jsx)(z,{})})}export{B as default};