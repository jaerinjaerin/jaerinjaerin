This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Architecture

### Component Hierarchy

```
RootLayout (app/layout.tsx)
└── Page (app/page.tsx)
    ├── Navbar
    ├── Welcome
    ├── Dock
    └── WindowWrapper (HOC)
        ├── TerminalWindow
        ├── FinderWindow
        └── ...
```

### Sequence Diagrams

#### 1. Window Open Flow

```mermaid
sequenceDiagram
    participant User
    participant Dock
    participant Store as Zustand Store
    participant HOC as WindowWrapper
    participant GSAP

    User->>Dock: Click app icon
    Dock->>Dock: toggleApp(app.id)
    Dock->>Store: openWindow(windowKey)
    Store->>Store: isOpen = true
    Store->>Store: zIndex = nextZIndex++
    Store-->>HOC: State update
    HOC->>HOC: display: 'block'
    HOC->>GSAP: Animate (scale, opacity, y)
    GSAP-->>User: Window appears with animation
```

#### 2. Window Focus Flow

```mermaid
sequenceDiagram
    participant User
    participant HOC as WindowWrapper
    participant Draggable as GSAP Draggable
    participant Store as Zustand Store

    User->>HOC: Click/Drag window
    HOC->>Draggable: onPress event
    Draggable->>Store: focusWindow(windowKey)
    Store->>Store: zIndex = nextZIndex++
    Store-->>HOC: State update
    HOC->>HOC: Update style.zIndex
    HOC-->>User: Window brought to front
```

#### 3. Window Close Flow

```mermaid
sequenceDiagram
    participant User
    participant Controls as WindowControls
    participant Store as Zustand Store
    participant HOC as WindowWrapper

    User->>Controls: Click close button (X)
    Controls->>Store: closeWindow(windowKey)
    Store->>Store: isOpen = false
    Store->>Store: zIndex = INITIAL_Z_INDEX
    Store->>Store: data = null
    Store-->>HOC: State update
    HOC->>HOC: display: 'none'
    HOC-->>User: Window disappears
```

#### 4. Dock Hover Animation Flow

```mermaid
sequenceDiagram
    participant User
    participant Dock
    participant GSAP

    User->>Dock: Mouse move over dock
    Dock->>Dock: handleMouseMove()
    loop For each icon
        Dock->>Dock: Calculate distance from cursor
        Dock->>Dock: intensity = exp(-distance²/2000)
        Dock->>GSAP: Animate icon (scale, y)
    end
    GSAP-->>User: Icons scale up near cursor
    User->>Dock: Mouse leave
    Dock->>GSAP: resetIcons()
    GSAP-->>User: Icons return to normal
```

### State Management

```
┌─────────────────────────────────────┐
│        Zustand Window Store         │
├─────────────────────────────────────┤
│  windows: {                         │
│    terminal: { isOpen, zIndex, data }│
│    finder:   { isOpen, zIndex, data }│
│    ...                              │
│  }                                  │
│  nextZIndex: number                 │
├─────────────────────────────────────┤
│  openWindow(key, data?)             │
│  closeWindow(key)                   │
│  focusWindow(key)                   │
└─────────────────────────────────────┘
```

### Tech Stack

| Category | Technologies |
|----------|--------------|
| Framework | Next.js 16, React 19, TypeScript 5 |
| Styling | Tailwind CSS 4 |
| State | Zustand 5 (with Immer) |
| Animation | GSAP 3.13, @gsap/react |
| Icons | Lucide React |

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
