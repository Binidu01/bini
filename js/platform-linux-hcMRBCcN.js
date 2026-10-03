import{u as e}from"./Layout-_JOt2pQa.js";import{y as t}from"./index-CIF88j6o.js";import{f as n,g as r,i,l as a,m as o,n as s,o as c,p as l,r as u,s as d,t as f,u as p}from"./DocBlocks-rQGAhDUT.js";import{a as m,i as h,n as g,r as _,t as v}from"./DocVisuals-DLW3KHGy.js";var y=t(),b=[{id:`linux-overview`,label:`Linux Overview`},{id:`requirements`,label:`Requirements`},{id:`native-linux`,label:`Linux`},{id:`windows`,label:`Windows`},{id:`macos`,label:`macOS`},{id:`development`,label:`Development`},{id:`building`,label:`Building`},{id:`code-signing`,label:`Code Signing`}],x=`mb-6 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400`,S=`font-medium text-neutral-900 dark:text-neutral-100`,C=[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest`}],w=[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --platform linux
$ cd my-app
$ npm install
$ npm run tauri:dev
$ npm run tauri:build`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --platform linux
$ cd my-app
$ pnpm install
$ pnpm tauri:dev
$ pnpm tauri:build`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --platform linux
$ cd my-app
$ yarn install
$ yarn tauri:dev
$ yarn tauri:build`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --platform linux
$ cd my-app
$ bun install
$ bun run tauri:dev
$ bun run tauri:build`}],T=[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --platform linux
$ cd my-app
$ npm install`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --platform linux
$ cd my-app
$ pnpm install`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --platform linux
$ cd my-app
$ yarn install`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --platform linux
$ cd my-app
$ bun install`}],E=[{id:`npm`,label:`npm`,command:`$ npm run deploy`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm deploy`},{id:`yarn`,label:`yarn`,command:`$ yarn deploy`},{id:`bun`,label:`bun`,command:`$ bun run deploy`}],D=[{id:`npm`,label:`npm`,command:`$ npm run tauri:dev`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm tauri:dev`},{id:`yarn`,label:`yarn`,command:`$ yarn tauri:dev`},{id:`bun`,label:`bun`,command:`$ bun run tauri:dev`}],O=[{id:`npm`,label:`npm`,command:`$ npm run tauri:build`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm tauri:build`},{id:`yarn`,label:`yarn`,command:`$ yarn tauri:build`},{id:`bun`,label:`bun`,command:`$ bun run tauri:build`}],k=[{id:`debian`,label:`Debian/Ubuntu`,command:`$ sudo apt update
$ sudo apt install -y libwebkit2gtk-4.1-dev build-essential curl wget file libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev`},{id:`fedora`,label:`Fedora`,command:`$ sudo dnf install webkit2gtk4.1-devel openssl-devel curl wget file libappindicator-gtk3-devel librsvg2-devel`},{id:`arch`,label:`Arch`,command:`$ sudo pacman -S webkit2gtk-4.1 base-devel curl wget file openssl appmenu-gtk-module libappindicator-gtk3 librsvg`}],A=`# .github/workflows/build-linux.yml
name: Build Linux App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-linux:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Install system dependencies
        run: |
          sudo apt update
          sudo apt install -y libwebkit2gtk-4.1-dev build-essential curl wget file libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable

      - name: Install dependencies
        run: npm install

      - name: Build Tauri app
        uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        with:
          tagName: app-v__VERSION__
          releaseName: 'App v__VERSION__'
          releaseDraft: true`,j=`# .github/workflows/build-linux.yml
name: Build Linux App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-linux:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Install system dependencies
        run: |
          sudo apt update
          sudo apt install -y libwebkit2gtk-4.1-dev build-essential curl wget file libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable

      - name: Install dependencies
        run: npm install

      - name: Build Tauri app
        uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          TAURI_SIGNING_PRIVATE_KEY: \${{ secrets.TAURI_SIGNING_PRIVATE_KEY }}
          TAURI_SIGNING_PRIVATE_KEY_PASSWORD: \${{ secrets.TAURI_SIGNING_PRIVATE_KEY_PASSWORD }}
        with:
          tagName: app-v__VERSION__
          releaseName: 'App v__VERSION__'
          releaseDraft: true`,M=`${g} flex h-12 shrink-0 items-center justify-center px-3 text-center text-[12px] leading-tight text-neutral-800 dark:text-neutral-200`;function N({os:e}){return(0,y.jsx)(m,{children:(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsxs)(`span`,{className:`${M} w-28`,children:[`Your `,e,` machine`]}),(0,y.jsx)(v,{}),(0,y.jsx)(`span`,{className:`${M} w-24`,children:`npm run deploy`}),(0,y.jsx)(v,{}),(0,y.jsx)(`span`,{className:`${M} w-40`,children:`GitHub Actions (ubuntu-latest)`}),(0,y.jsx)(v,{}),(0,y.jsx)(`span`,{className:`${M} w-32`,children:`linux-build artifact`})]})})}function P(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Create the Project`}),(0,y.jsx)(n,{className:`mb-4`,children:`Create a new Bini.js project targeting Linux and install its dependencies:`}),(0,y.jsx)(p,{tabs:T}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Or use the interactive prompt and select `,(0,y.jsx)(s,{children:`Linux Desktop`}),`:`]}),(0,y.jsx)(p,{tabs:C}),(0,y.jsx)(l,{lines:[{kind:`question`,text:`Select target platform:`},{kind:`option`,text:`Web Application`},{kind:`option`,text:`Windows Desktop`},{kind:`option`,text:`Linux Desktop`,selected:!0},{kind:`option`,text:`macOS Desktop`},{kind:`option`,text:`Android`},{kind:`option`,text:`iOS`},{kind:`blank`},{kind:`hint`,text:`↑↓ navigate • ⏎ select`}]})]})}function F(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Add the Build Workflow`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`The scaffold does not ship with a GitHub Actions workflow. You need to add one manually. Create the file `,(0,y.jsx)(s,{children:`.github/workflows/build-linux.yml`}),` inside your project with the following content:`]}),(0,y.jsx)(h,{width:300,rows:[{n:`.github`},{n:`workflows`,d:1},{n:`build-linux.yml`,d:2,dot:!0},{n:`src-tauri`},{n:`package.json`}]}),(0,y.jsx)(i,{filename:`.github/workflows/build-linux.yml`,lang:`yaml`,code:A}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Push to GitHub`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Run `,(0,y.jsx)(s,{children:`npm run deploy`}),` and choose `,(0,y.jsx)(s,{children:`Linux`}),`. This initializes the repo, commits, and pushes everything to GitHub in one step:`]}),(0,y.jsx)(p,{tabs:E}),(0,y.jsx)(n,{className:`mb-4`,children:`Once pushed, the workflow runs on a real Ubuntu runner and builds the AppImage.`}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Download the App`}),(0,y.jsx)(z,{})]})}function I(){return(0,y.jsxs)(o,{id:`native-linux`,title:`Linux`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`On Linux you can scaffold, develop, and build the app entirely on your own machine - no CI required.`}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 1: Install the tools`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Install Node.js `,(0,y.jsx)(s,{children:`20.19.0`}),` or higher, Rust via`,` `,(0,y.jsx)(d,{href:`https://rustup.rs/`,children:`rustup`}),`, and the WebKitGTK development libraries. Pick your distribution:`]}),(0,y.jsx)(p,{tabs:k}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 2: Create the project`}),(0,y.jsx)(P,{}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 3: Develop and build`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Run `,(0,y.jsx)(s,{children:`tauri:dev`}),` to open your app in a native window, then `,(0,y.jsx)(s,{children:`tauri:build`}),` to produce the AppImage:`]}),(0,y.jsx)(p,{tabs:w}),(0,y.jsxs)(u,{children:[(0,y.jsx)(`strong`,{children:`Tip:`}),` Use `,(0,y.jsx)(s,{children:`--sign`}),` during scaffold to set up signing keys.`]})]})}function L(){return(0,y.jsxs)(o,{id:`windows`,title:`Windows`,children:[(0,y.jsxs)(n,{className:`mb-4`,children:[`A native Linux `,(0,y.jsx)(s,{children:`.AppImage`}),` can be produced on Windows, but only through CI - Tauri relies on Linux-only toolchains (WebKitGTK, GTK 3, AppImage tooling). The Tauri team's own recommendation is to build Linux apps on an `,(0,y.jsx)(s,{children:`ubuntu-latest`}),` runner in CI.`]}),(0,y.jsx)(N,{os:`Windows`}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 1: Install the tools`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Install Node.js `,(0,y.jsx)(s,{children:`20.19.0`}),` or higher and Git for Windows -`,` `,(0,y.jsx)(d,{href:`https://git-scm.com/download/win`,children:`Download`}),`.`]}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 2: Create the project`}),(0,y.jsx)(P,{}),(0,y.jsx)(F,{}),(0,y.jsxs)(u,{children:[(0,y.jsx)(`strong`,{children:`Why not build locally?`}),` Tauri's Linux build needs WebKitGTK, GTK 3, and AppImage tooling, which do not exist on Windows. Cross-compiling from Windows to Linux is not supported. GitHub Actions on `,(0,y.jsx)(s,{children:`ubuntu-latest`}),` is the supported path.`]})]})}function R(){return(0,y.jsxs)(o,{id:`macos`,title:`macOS`,children:[(0,y.jsxs)(n,{className:`mb-4`,children:[`A native Linux `,(0,y.jsx)(s,{children:`.AppImage`}),` cannot be produced on macOS - Tauri relies on Linux-only toolchains (WebKitGTK, GTK 3, AppImage tooling). The Tauri team's own recommendation is to build Linux apps on an `,(0,y.jsx)(s,{children:`ubuntu-latest`}),` runner in CI.`]}),(0,y.jsx)(N,{os:`macOS`}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 1: Install the tools`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Install Node.js `,(0,y.jsx)(s,{children:`20.19.0`}),` or higher and Git. Git comes with the Xcode command line tools - run `,(0,y.jsx)(s,{children:`xcode-select --install`}),` if you do not have it yet.`]}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 2: Create the project`}),(0,y.jsx)(P,{}),(0,y.jsx)(F,{}),(0,y.jsxs)(u,{children:[(0,y.jsx)(`strong`,{children:`Why not build locally?`}),` Tauri's Linux build needs WebKitGTK, GTK 3, and AppImage tooling, which do not exist on macOS. Cross-compiling from macOS to Linux is experimental and unreliable. GitHub Actions on `,(0,y.jsx)(s,{children:`ubuntu-latest`}),` is the supported path.`]})]})}function z(){return(0,y.jsxs)(`ol`,{className:x,children:[(0,y.jsxs)(`li`,{children:[`Open your repository on GitHub and go to the `,(0,y.jsx)(`strong`,{className:S,children:`Actions`}),` `,`tab.`]}),(0,y.jsxs)(`li`,{children:[`Open the latest `,(0,y.jsx)(s,{children:`Build Linux App`}),` run.`]}),(0,y.jsxs)(`li`,{children:[`Under `,(0,y.jsx)(`strong`,{className:S,children:`Artifacts`}),`, download `,(0,y.jsx)(s,{children:`linux-build`}),`. Or, if a release was created, download the `,(0,y.jsx)(s,{children:`.AppImage`}),` from the Releases page.`]})]})}function B(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(o,{id:`linux-overview`,title:`Linux Overview`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`Bini.js allows you to build native Linux desktop applications using Tauri v2. Your React app is wrapped in a WebKitGTK binary, providing a native experience with full system access.`}),(0,y.jsxs)(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[(0,y.jsx)(_,{title:`Native Binary`,text:`Linux AppImage with optional signing`}),(0,y.jsx)(_,{title:`Package Formats`,text:`AppImage, .deb, and .rpm bundle support`}),(0,y.jsx)(_,{title:`Native APIs`,text:`Full access to Linux APIs via Tauri`})]}),(0,y.jsx)(u,{children:`Linux desktop apps are built using Tauri's WebKitGTK backend. Your app runs in a native window with full system access.`})]}),(0,y.jsxs)(o,{id:`requirements`,title:`Requirements`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`Building Linux desktop apps requires different tools depending on your operating system. See the section for your OS below.`}),(0,y.jsxs)(r,{children:[(0,y.jsxs)(`li`,{children:[(0,y.jsx)(`strong`,{className:S,children:`On Linux:`}),` Node.js, Rust, and the WebKitGTK / GTK 3 development libraries from your package manager - everything runs locally.`]}),(0,y.jsxs)(`li`,{children:[(0,y.jsx)(`strong`,{className:S,children:`On Windows or macOS:`}),` Node.js, Git, a GitHub account, and the ability to push a repo. The Linux build itself runs on GitHub Actions.`]})]}),(0,y.jsxs)(u,{children:[`You cannot produce a native Linux `,(0,y.jsx)(s,{children:`.AppImage`}),` directly from Windows or macOS. Tauri v2 has no supported local cross-compilation path for Linux. The recommended way is GitHub Actions on an `,(0,y.jsx)(s,{children:`ubuntu-latest`}),` runner, described in each section below.`]})]}),(0,y.jsx)(I,{}),(0,y.jsx)(L,{}),(0,y.jsx)(R,{}),(0,y.jsxs)(o,{id:`development`,title:`Development`,children:[(0,y.jsxs)(n,{className:`mb-4`,children:[`Running `,(0,y.jsx)(s,{children:`tauri:dev`}),` opens your app in a native Linux window. This requires a Linux machine with the requirements installed (see the Linux section):`]}),(0,y.jsx)(p,{tabs:D}),(0,y.jsx)(n,{className:`mb-4`,children:`This launches your app in a native Linux window with:`}),(0,y.jsxs)(r,{children:[(0,y.jsx)(`li`,{children:`Hot reload for frontend changes`}),(0,y.jsx)(`li`,{children:`Native window with system tray support`}),(0,y.jsx)(`li`,{children:`Access to Linux APIs`}),(0,y.jsx)(`li`,{children:`Devtools for debugging`})]})]}),(0,y.jsxs)(o,{id:`building`,title:`Building`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`Build a distributable Linux application. On Linux this runs locally; on Windows and macOS it runs in GitHub Actions (see those sections):`}),(0,y.jsx)(p,{tabs:O}),(0,y.jsxs)(n,{className:`mb-4`,children:[`The build outputs land in `,(0,y.jsx)(s,{children:`src-tauri/target/release/bundle/`}),`:`]}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Output Files`}),(0,y.jsx)(h,{width:340,rows:[{n:`src-tauri`},{n:`target`,d:1},{n:`release`,d:2},{n:`bundle`,d:3},{n:`appimage`,d:4},{n:`my-app_0.1.0_amd64.AppImage`,d:5,dot:!0},{n:`deb`,d:4},{n:`my-app_0.1.0_amd64.deb`,d:5},{n:`rpm`,d:4},{n:`my-app-0.1.0-1.x86_64.rpm`,d:5}]}),(0,y.jsxs)(r,{children:[(0,y.jsxs)(`li`,{children:[(0,y.jsx)(s,{children:`appimage/*.AppImage`}),` - Portable executable (recommended for distribution)`]}),(0,y.jsxs)(`li`,{children:[(0,y.jsx)(s,{children:`deb/*.deb`}),` - Debian/Ubuntu package`]}),(0,y.jsxs)(`li`,{children:[(0,y.jsx)(s,{children:`rpm/*.rpm`}),` - Fedora/RHEL package`]})]}),(0,y.jsx)(u,{children:`The build output is a native Linux binary that runs without any additional dependencies.`})]}),(0,y.jsxs)(o,{id:`code-signing`,title:`Code Signing`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`Bini.js supports signed AppImage and binary distribution via the Tauri updater signing key. Generate a signing key with the Tauri CLI:`}),(0,y.jsx)(i,{filename:`Terminal`,lang:`shell`,code:`$ npm run tauri signer generate -- -w ~/.tauri/my-app.key`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Store the private key contents and its password as GitHub secrets, and reference them in the workflow. The `,(0,y.jsx)(s,{children:`tauri-action`}),` step reads them from environment variables:`]}),(0,y.jsx)(a,{className:`mb-3`,children:(0,y.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,y.jsx)(f,{icon:e,size:18,className:`shrink-0 text-black dark:text-white`}),`GitHub Actions workflow with signing`]})}),(0,y.jsx)(i,{filename:`.github/workflows/build-linux.yml`,lang:`yaml`,code:j}),(0,y.jsx)(u,{children:`For production distribution, sign your AppImage and publish a checksum alongside it so users can verify integrity.`})]})]})}function V(){return(0,y.jsx)(c,{title:`Linux`,description:`Build native Linux desktop applications with Bini.js.`,url:`https://bini.js.org/docs/platform-linux`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/platform-linux.tsx`,toc:b,prev:{to:`/docs/platform-macos`,title:`macOS`},next:{to:`/docs/platform-android`,title:`Android`},children:(0,y.jsx)(B,{})})}export{V as default};