import{u as e}from"./Layout-C-Akp0Rm.js";import{y as t}from"./index-UfrPBTC9.js";import{f as n,g as r,i,l as a,m as o,n as s,o as c,p as l,r as u,s as d,t as f,u as p}from"./DocBlocks-7vLhiDQN.js";import{a as m,i as h,n as g,r as _,t as v}from"./DocVisuals-Ce2L0xWH.js";var y=t(),b=[{id:`ios-overview`,label:`iOS Overview`},{id:`requirements`,label:`Requirements`},{id:`macos`,label:`macOS`},{id:`windows`,label:`Windows`},{id:`linux`,label:`Linux`},{id:`development`,label:`Development`},{id:`building`,label:`Building`},{id:`code-signing`,label:`Code Signing`},{id:`deployment`,label:`Deployment`}],x=`mb-6 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400`,S=`font-medium text-neutral-900 dark:text-neutral-100`,C=`https://apps.apple.com/app/xcode/id497799835`,w=[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest`}],T=[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --platform ios
$ cd my-app
$ npm install
$ pod install --project-directory=src-tauri/gen/ios`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --platform ios
$ cd my-app
$ pnpm install
$ pod install --project-directory=src-tauri/gen/ios`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --platform ios
$ cd my-app
$ yarn install
$ pod install --project-directory=src-tauri/gen/ios`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --platform ios
$ cd my-app
$ bun install
$ pod install --project-directory=src-tauri/gen/ios`}],E=[{id:`npm`,label:`npm`,command:`$ npm run ios`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm ios`},{id:`yarn`,label:`yarn`,command:`$ yarn ios`},{id:`bun`,label:`bun`,command:`$ bun run ios`}],D=[{id:`npm`,label:`npm`,command:`$ npm run ios:build`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm ios:build`},{id:`yarn`,label:`yarn`,command:`$ yarn ios:build`},{id:`bun`,label:`bun`,command:`$ bun run ios:build`}],O=[{id:`npm`,label:`npm`,command:`$ npm run deploy`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm deploy`},{id:`yarn`,label:`yarn`,command:`$ yarn deploy`},{id:`bun`,label:`bun`,command:`$ bun run deploy`}],k=[{id:`rustup`,label:`rustup`,command:`$ rustup target add aarch64-apple-ios
$ rustup target add x86_64-apple-ios
$ rustup target add aarch64-apple-ios-sim`}],A=`# .github/workflows/build-ios.yml
name: Build iOS App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-ios:
    runs-on: macos-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable
        with:
          targets: aarch64-apple-ios,x86_64-apple-ios,aarch64-apple-ios-sim

      - name: Install CocoaPods
        run: sudo gem install cocoapods

      - name: Install dependencies
        run: npm install

      - name: Install pods
        run: pod install --project-directory=src-tauri/gen/ios

      - name: Build Tauri app
        uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        with:
          tagName: app-v__VERSION__
          releaseName: 'App v__VERSION__'
          releaseDraft: true`,j=`# .github/workflows/build-ios.yml
name: Build iOS App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-ios:
    runs-on: macos-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable
        with:
          targets: aarch64-apple-ios,x86_64-apple-ios,aarch64-apple-ios-sim

      - name: Install CocoaPods
        run: sudo gem install cocoapods

      - name: Install dependencies
        run: npm install

      - name: Install pods
        run: pod install --project-directory=src-tauri/gen/ios

      - name: Build Tauri app
        uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          APPLE_ID: \${{ secrets.APPLE_ID }}
          APPLE_PASSWORD: \${{ secrets.APPLE_PASSWORD }}
          APPLE_TEAM_ID: \${{ secrets.APPLE_TEAM_ID }}
        with:
          tagName: app-v__VERSION__
          releaseName: 'App v__VERSION__'
          releaseDraft: true`,M=`${g} flex h-12 shrink-0 items-center justify-center px-3 text-center text-[12px] leading-tight text-neutral-800 dark:text-neutral-200`;function N({os:e}){return(0,y.jsx)(m,{children:(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsxs)(`span`,{className:`${M} w-28`,children:[`Your `,e,` machine`]}),(0,y.jsx)(v,{}),(0,y.jsx)(`span`,{className:`${M} w-24`,children:`npm run deploy`}),(0,y.jsx)(v,{}),(0,y.jsx)(`span`,{className:`${M} w-40`,children:`GitHub Actions (macos-latest)`}),(0,y.jsx)(v,{}),(0,y.jsx)(`span`,{className:`${M} w-32`,children:`ios-build artifact`})]})})}function P(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Create the Project`}),(0,y.jsx)(n,{className:`mb-4`,children:`Create a new Bini.js project targeting iOS, install its dependencies, and install its pods:`}),(0,y.jsx)(p,{tabs:T}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Or use the interactive prompt and select `,(0,y.jsx)(s,{children:`iOS`}),`:`]}),(0,y.jsx)(p,{tabs:w}),(0,y.jsx)(l,{lines:[{kind:`question`,text:`Select target platform:`},{kind:`option`,text:`Web Application`},{kind:`option`,text:`Windows Desktop`},{kind:`option`,text:`Linux Desktop`},{kind:`option`,text:`macOS Desktop`},{kind:`option`,text:`Android`},{kind:`option`,text:`iOS`,selected:!0},{kind:`blank`},{kind:`hint`,text:`↑↓ navigate • ⏎ select`}]})]})}function F(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Add the Build Workflow`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`The scaffold does not ship with a GitHub Actions workflow. You need to add one manually. Create the file `,(0,y.jsx)(s,{children:`.github/workflows/build-ios.yml`}),` inside your project with the following content:`]}),(0,y.jsx)(h,{width:300,rows:[{n:`.github`},{n:`workflows`,d:1},{n:`build-ios.yml`,d:2,dot:!0},{n:`src-tauri`},{n:`package.json`}]}),(0,y.jsx)(i,{filename:`.github/workflows/build-ios.yml`,lang:`yaml`,code:A}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Push to GitHub`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Run `,(0,y.jsx)(s,{children:`npm run deploy`}),` and choose `,(0,y.jsx)(s,{children:`iOS`}),`. This initializes the repo, commits, and pushes everything to GitHub in one step:`]}),(0,y.jsx)(p,{tabs:O}),(0,y.jsx)(n,{className:`mb-4`,children:`Once pushed, the workflow runs on a real macOS runner and builds the iOS app bundle.`}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Download the App`}),(0,y.jsx)(z,{})]})}function I(){return(0,y.jsxs)(o,{id:`macos`,title:`macOS`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`On macOS you can scaffold, develop, and build the iOS app entirely on your own machine - no CI required.`}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 1: Install the tools`}),(0,y.jsxs)(r,{children:[(0,y.jsx)(`li`,{children:`macOS 11 (Big Sur) or higher`}),(0,y.jsxs)(`li`,{children:[`Node.js `,(0,y.jsx)(s,{children:`20.19.0`}),` or higher`]}),(0,y.jsxs)(`li`,{children:[`Xcode - `,(0,y.jsx)(d,{href:C,children:`Download from the Mac App Store`})]}),(0,y.jsxs)(`li`,{children:[`Xcode Command Line Tools - run `,(0,y.jsx)(s,{children:`xcode-select --install`})]}),(0,y.jsxs)(`li`,{children:[`CocoaPods - run `,(0,y.jsx)(s,{children:`sudo gem install cocoapods`})]}),(0,y.jsxs)(`li`,{children:[`Rust via `,(0,y.jsx)(d,{href:`https://rustup.rs/`,children:`rustup`}),`, then add the iOS targets (see Requirements)`]})]}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 2: Create the project`}),(0,y.jsx)(P,{}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 3: Develop and build`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Run `,(0,y.jsx)(s,{children:`ios`}),` to launch on the simulator or a connected device, then `,(0,y.jsx)(s,{children:`ios:build`}),` to produce the app bundle:`]}),(0,y.jsx)(p,{tabs:E}),(0,y.jsx)(p,{tabs:D}),(0,y.jsxs)(u,{children:[(0,y.jsx)(`strong`,{children:`Tip:`}),` Xcode handles signing automatically with your Apple ID for development builds.`]})]})}function L(){return(0,y.jsxs)(o,{id:`windows`,title:`Windows`,children:[(0,y.jsxs)(n,{className:`mb-4`,children:[`A native iOS `,(0,y.jsx)(s,{children:`.app`}),` cannot be produced on Windows - Tauri relies on Xcode, Apple's signing toolchain, and CocoaPods, none of which run on Windows. The Tauri team's own recommendation is to build iOS apps on a `,(0,y.jsx)(s,{children:`macos-latest`}),` runner in CI.`]}),(0,y.jsx)(N,{os:`Windows`}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 1: Install the tools`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Install Node.js `,(0,y.jsx)(s,{children:`20.19.0`}),` or higher and Git for Windows -`,` `,(0,y.jsx)(d,{href:`https://git-scm.com/download/win`,children:`Download`}),`.`]}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 2: Create the project`}),(0,y.jsx)(P,{}),(0,y.jsx)(F,{}),(0,y.jsxs)(u,{children:[(0,y.jsx)(`strong`,{children:`Why not build locally?`}),` Tauri's iOS build needs Xcode and Apple's signing toolchain, which do not exist on Windows. GitHub Actions on `,(0,y.jsx)(s,{children:`macos-latest`}),` is the supported path.`]})]})}function R(){return(0,y.jsxs)(o,{id:`linux`,title:`Linux`,children:[(0,y.jsxs)(n,{className:`mb-4`,children:[`A native iOS `,(0,y.jsx)(s,{children:`.app`}),` cannot be produced on Linux - Tauri relies on Xcode, Apple's signing toolchain, and CocoaPods, none of which run on Linux. The Tauri team's own recommendation is to build iOS apps on a `,(0,y.jsx)(s,{children:`macos-latest`}),` runner in CI.`]}),(0,y.jsx)(N,{os:`Linux`}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 1: Install the tools`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`Install Node.js `,(0,y.jsx)(s,{children:`20.19.0`}),` or higher and Git with your package manager, for example`,` `,(0,y.jsx)(s,{children:`sudo apt install git`}),` on Debian and Ubuntu.`]}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Step 2: Create the project`}),(0,y.jsx)(P,{}),(0,y.jsx)(F,{}),(0,y.jsxs)(u,{children:[(0,y.jsx)(`strong`,{children:`Why not build locally?`}),` Tauri's iOS build needs Xcode and Apple's signing toolchain, which do not exist on Linux. GitHub Actions on `,(0,y.jsx)(s,{children:`macos-latest`}),` is the supported path.`]})]})}function z(){return(0,y.jsxs)(`ol`,{className:x,children:[(0,y.jsxs)(`li`,{children:[`Open your repository on GitHub and go to the `,(0,y.jsx)(`strong`,{className:S,children:`Actions`}),` `,`tab.`]}),(0,y.jsxs)(`li`,{children:[`Open the latest `,(0,y.jsx)(s,{children:`Build iOS App`}),` run.`]}),(0,y.jsxs)(`li`,{children:[`Under `,(0,y.jsx)(`strong`,{className:S,children:`Artifacts`}),`, download `,(0,y.jsx)(s,{children:`ios-build`}),`. Or, if a release was created, download the `,(0,y.jsx)(s,{children:`.ipa`}),` from the Releases page.`]})]})}function B(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(o,{id:`ios-overview`,title:`iOS Overview`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`Bini.js allows you to build native iOS mobile applications using Tauri v2. Your React app runs inside a WKWebView with full access to native iOS APIs and features.`}),(0,y.jsxs)(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[(0,y.jsx)(_,{title:`Native iOS App`,text:`Real native WKWebView, not a wrapper`}),(0,y.jsx)(_,{title:`Code Signing`,text:`Xcode-managed automatic signing`}),(0,y.jsx)(_,{title:`Auto Plugin Wiring`,text:`bini-native wires iOS permissions`})]}),(0,y.jsx)(u,{children:`iOS apps are built using Tauri's iOS backend. Your app runs in a native WKWebView with full system access.`})]}),(0,y.jsxs)(o,{id:`requirements`,title:`Requirements`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`Building iOS apps requires different tools depending on your operating system. See the section for your OS below.`}),(0,y.jsxs)(r,{children:[(0,y.jsxs)(`li`,{children:[(0,y.jsx)(`strong`,{className:S,children:`On macOS:`}),` Xcode, Xcode Command Line Tools, CocoaPods, Node.js, and Rust with iOS targets - everything runs locally.`]}),(0,y.jsxs)(`li`,{children:[(0,y.jsx)(`strong`,{className:S,children:`On Windows or Linux:`}),` Node.js, Git, a GitHub account, and the ability to push a repo. The iOS build itself runs on GitHub Actions.`]})]}),(0,y.jsx)(n,{className:`mb-4`,children:`Add the required Rust targets with rustup:`}),(0,y.jsx)(p,{tabs:k}),(0,y.jsxs)(u,{children:[`You cannot produce a native iOS `,(0,y.jsx)(s,{children:`.app`}),` directly from Windows or Linux. Tauri v2 has no supported local cross-compilation path for iOS. The recommended way is GitHub Actions on a `,(0,y.jsx)(s,{children:`macos-latest`}),` runner, described in each section below.`]})]}),(0,y.jsx)(I,{}),(0,y.jsx)(L,{}),(0,y.jsx)(R,{}),(0,y.jsxs)(o,{id:`development`,title:`Development`,children:[(0,y.jsxs)(n,{className:`mb-4`,children:[`Running `,(0,y.jsx)(s,{children:`ios`}),` opens your app on the iOS Simulator or a connected device. This requires a Mac with Xcode installed (see the macOS section):`]}),(0,y.jsx)(p,{tabs:E}),(0,y.jsx)(n,{className:`mb-4`,children:`This launches your app with:`}),(0,y.jsxs)(r,{children:[(0,y.jsx)(`li`,{children:`Hot reload for frontend changes`}),(0,y.jsx)(`li`,{children:`Native iOS integration`}),(0,y.jsxs)(`li`,{children:[`Auto-wired native APIs via `,(0,y.jsx)(s,{children:`bini-native`})]}),(0,y.jsx)(`li`,{children:`Safari Web Inspector for debugging`})]}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Setting Up a Simulator`}),(0,y.jsxs)(`ol`,{className:x,children:[(0,y.jsx)(`li`,{children:`Open Xcode`}),(0,y.jsxs)(`li`,{children:[`Go to `,(0,y.jsx)(`strong`,{className:S,children:`Settings`}),` →`,` `,(0,y.jsx)(`strong`,{className:S,children:`Platforms`})]}),(0,y.jsx)(`li`,{children:`Download a simulator for your target iOS version`}),(0,y.jsxs)(`li`,{children:[`Run `,(0,y.jsx)(s,{children:`npm run ios`})]})]})]}),(0,y.jsxs)(o,{id:`building`,title:`Building`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`Build a distributable iOS app. On macOS this runs locally; on Windows and Linux it runs in GitHub Actions (see those sections):`}),(0,y.jsx)(p,{tabs:D}),(0,y.jsxs)(n,{className:`mb-4`,children:[`The build outputs land in `,(0,y.jsx)(s,{children:`src-tauri/gen/ios/`}),`:`]}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Output Files`}),(0,y.jsx)(h,{width:340,rows:[{n:`src-tauri`},{n:`gen`,d:1},{n:`ios`,d:2},{n:`build`,d:3},{n:`my-app.app`,d:4,dot:!0},{n:`my-app.ipa`,d:4}]}),(0,y.jsxs)(r,{children:[(0,y.jsxs)(`li`,{children:[(0,y.jsx)(s,{children:`my-app.app`}),` - iOS app bundle (for simulator/testing)`]}),(0,y.jsxs)(`li`,{children:[(0,y.jsx)(s,{children:`my-app.ipa`}),` - iOS App Store package (for distribution)`]})]}),(0,y.jsx)(u,{children:`The build output is a native iOS app that runs on iOS 13.0 and above.`})]}),(0,y.jsxs)(o,{id:`code-signing`,title:`Code Signing`,children:[(0,y.jsx)(n,{className:`mb-4`,children:`iOS code signing is managed by Xcode. For local development, Xcode uses automatic signing with your Apple ID - just open the project in Xcode and configure your team:`}),(0,y.jsx)(i,{filename:`Terminal`,lang:`shell`,code:`$ open src-tauri/gen/ios/MyApp.xcodeproj`}),(0,y.jsxs)(n,{className:`mb-4`,children:[`In Xcode, select the project → `,(0,y.jsx)(`strong`,{className:S,children:`Signing & Capabilities`}),` `,`→ choose your `,(0,y.jsx)(`strong`,{className:S,children:`Team`}),`. Xcode handles the rest.`]}),(0,y.jsxs)(n,{className:`mb-4`,children:[`For GitHub Actions, store your Apple ID, app-specific password, and team ID as secrets and reference them in the workflow. The `,(0,y.jsx)(s,{children:`tauri-action`}),` step reads them from environment variables:`]}),(0,y.jsx)(a,{className:`mb-3`,children:(0,y.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,y.jsx)(f,{icon:e,size:18,className:`shrink-0 text-black dark:text-white`}),`GitHub Actions workflow with signing`]})}),(0,y.jsx)(i,{filename:`.github/workflows/build-ios.yml`,lang:`yaml`,code:j}),(0,y.jsx)(u,{children:`For App Store distribution, you need an Apple Developer account and provisioning profiles. Development builds use Xcode's automatic signing.`})]}),(0,y.jsxs)(o,{id:`deployment`,title:`Deployment`,children:[(0,y.jsxs)(n,{className:`mb-4`,children:[(0,y.jsx)(s,{children:`npm run deploy`}),` pushes your project source to GitHub - it does `,(0,y.jsx)(`strong`,{children:`not`}),` `,`build a signed IPA or submit to App Store Connect:`]}),(0,y.jsx)(p,{tabs:O}),(0,y.jsx)(a,{className:`mt-6 mb-3`,children:`Deployment Flow`}),(0,y.jsxs)(`ol`,{className:x,children:[(0,y.jsxs)(`li`,{children:[`Build your app with `,(0,y.jsx)(s,{children:`npm run ios:build`})]}),(0,y.jsxs)(`li`,{children:[`Run `,(0,y.jsx)(s,{children:`npm run deploy`}),` to push source to GitHub`]}),(0,y.jsx)(`li`,{children:`Upload the IPA to App Store Connect manually`})]}),(0,y.jsx)(u,{children:`Store submission is manual. After building your app, upload it to App Store Connect for TestFlight or App Store distribution.`})]})]})}function V(){return(0,y.jsx)(c,{title:`iOS`,description:`Build native iOS mobile applications with Bini.js.`,url:`https://bini.js.org/docs/platform-ios`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/platform-ios.tsx`,toc:b,prev:{to:`/docs/platform-android`,title:`Android`},next:{to:`/docs/deploying`,title:`Deployment`},children:(0,y.jsx)(B,{})})}export{V as default};