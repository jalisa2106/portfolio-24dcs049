# Practical 8 — Lazy Loading & Code Splitting Performance Report

## 1. Overview
In this practical, route-based code splitting was implemented across all routes using `React.lazy()` and `React.Suspense` with an accessible cyber-themed loading fallback UI. A data visualization page (`Analytics.jsx`) powered by `recharts` was introduced to create a realistically heavy route and measure the direct impact of bundle isolation.

---

## 2. Before vs. After Measurement

### Build Bundle Metrics Comparison

| Metric | Before (Eager Loading) | After (Lazy Loading with `React.lazy`) | Improvement / Delta |
|---|---|---|---|
| **Main JS File Size (Uncompressed)** | `598.45 kB` (`index-DwiPsTyF.js`) | `235.13 kB` (`index-DUVoLW_O.js`) | **-363.32 kB (-60.7%)** |
| **Main JS File Size (Gzipped)** | `180.09 kB` | `75.32 kB` | **-104.77 kB (-58.2%)** |
| **Total JS Chunks Generated** | `1` monolithic bundle | `5` isolated chunks | Code separated by route boundary |
| **Initial Route JS Transferred (`/`)** | `598.45 kB` (`180.09 kB` gzip) | `240.35 kB` (`77.18 kB` gzip) | **~57% reduction in initial payload** |
| **Analytics Chunk Size (`recharts`)** | Inlined into root bundle | `350.19 kB` (`101.74 kB` gzip) | Isolated, downloaded **only on demand** |
| **Home Chunk Size** | Inlined into root bundle | `5.22 kB` (`1.86 kB` gzip) | On-demand chunk |
| **Projects Chunk Size** | Inlined into root bundle | `4.56 kB` (`1.83 kB` gzip) | On-demand chunk |
| **Contact Chunk Size** | Inlined into root bundle | `3.68 kB` (`1.17 kB` gzip) | On-demand chunk |

---

## 3. Build Artifact Logs

### Before Lazy Loading (`npm run build`)
```text
dist/index.html                   0.46 kB │ gzip:   0.29 kB
dist/assets/index-WChOovsB.css    9.22 kB │ gzip:   2.44 kB
dist/assets/index-DwiPsTyF.js   598.45 kB │ gzip: 180.09 kB
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
```

### After Lazy Loading (`npm run build`)
```text
dist/index.html                      0.46 kB │ gzip:   0.30 kB
dist/assets/index-WChOovsB.css       9.22 kB │ gzip:   2.44 kB
dist/assets/Contact-DXALjm9R.js      3.68 kB │ gzip:   1.17 kB
dist/assets/Projects-DDfu4sVU.js     4.56 kB │ gzip:   1.83 kB
dist/assets/Home-TsRYHRRx.js         5.22 kB │ gzip:   1.86 kB
dist/assets/index-DUVoLW_O.js      235.13 kB │ gzip:  75.32 kB
dist/assets/Analytics-DJp13h_Q.js  350.19 kB │ gzip: 101.74 kB
```

---

## 4. Technical Analysis & Discussion

### 4.1 Initial Bundle vs. Chunk Splitting
- In the **eager loading** approach, Vite bundles every component, dependency, and third-party library (`recharts`, `react-router-dom`, `react`, etc.) into a single `index.js` file (~598 kB). A user visiting only the home page is forced to download, parse, and execute the entire charting library even if they never navigate to `/analytics`.
- In the **lazy loading** approach, Vite generates separate dynamic import chunks for each route. The initial bundle drops to **235.13 kB**, containing only the router runtime and global layouts (`NavBar`, `Footer`). When the user navigates to `/`, only the lightweight `Home` chunk (5.22 kB) is fetched. The heavy `Analytics` chunk (350.19 kB) is completely deferred until `/analytics` is visited.

### 4.2 Why Perceived Performance Improves
- **Reduced Time to Interactive (TTI) & First Contentful Paint (FCP):** The browser downloads over **60% less JavaScript** before rendering the initial view.
- **Lower Main Thread Parse/Compile Cost:** Modern browsers don't just download JS; they also parse and compile it. Lowering initial JS execution prevents main-thread blocking and frame drops on lower-end mobile devices.
- **Smooth Feedback via Suspense:** When a user clicks a chunk-deferred route under network latency, `<Suspense fallback={<div className="spinner-large" />}>` prevents the application from appearing frozen, providing seamless visual feedback.

### 4.3 When Lazy Loading Is NOT Worth It
- **Tiny Components / Monolithic Flows:** Splitting lightweight components (like a simple 20-line Contact form or static modal) can introduce an unnecessary HTTP roundtrip and brief loading flash for negligible payload savings.
- **Highly Critical Immediate UI:** Above-the-fold content or core app logic required immediately on start should not be lazily loaded to avoid delaying First Meaningful Paint.
- **In this portfolio project:** The true beneficiary of code splitting is the heavy third-party library `recharts` in `Analytics.jsx`. Isolating `recharts` saves ~350 kB from the critical rendering path.

---

## 5. Verification Checklist

- [x] Installed `recharts` charting library.
- [x] Created dynamic GitHub analytics view `src/components/Analytics.jsx` querying GitHub API.
- [x] Added `/analytics` navigation link to `src/components/NavBar.jsx`.
- [x] Implemented `React.lazy()` on `Home`, `Projects`, `Analytics`, and `Contact`.
- [x] Wrapped `<Routes>` in `<Suspense>` with dark Cyber-Blue spinner fallback UI.
- [x] Built and measured both eager (before) and lazy (after) bundles with Vite.
