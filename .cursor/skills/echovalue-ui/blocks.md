# echoValue UI blocks

Snippets for [SKILL.md](SKILL.md). Replace `../assets/` with the prefix for the page depth (`assets/` at the site root, `../../assets/` two levels down).

## Head assets

Page-specific tags (title, description, canonical, Open Graph, Twitter, JSON-LD) sit above this block. Keep the OG image and icon set as written.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" href="/favicon.ico">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:image" content="https://www.echovalue.dev/images/echovalue-og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:image" content="https://www.echovalue.dev/images/echovalue-og.png">
<link rel="stylesheet" href="../assets/css/dev-theme.css?v=11" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
	integrity="sha384-iw3OoTErCYJJB9mCa8LNS2hbsQ7M3C0EpIsO/H5+EGAkPGc6rk+V8i04oW/K5xq0" crossorigin="anonymous">
```

Author meta on every page: `<meta name="author" content="Emiliano Saurin">`.

Coming-soon pages add `<meta name="robots" content="noindex, follow">`.

## Navbar

Brand text and the in-page `<li>` links change per page. Everything else stays.

```html
<a href="#main" class="skip-link">Skip to content</a>

<nav class="navbar">
	<div class="container">
		<a href="/" class="navbar-brand">
			echoValue Webhook API
		</a>
		<button class="theme-toggle" aria-label="Toggle theme">
			<i class="fa-solid fa-moon"></i>
			<i class="fa-solid fa-sun"></i>
		</button>
		<button class="navbar-toggle" aria-label="Toggle navigation">
			<span></span>
			<span></span>
			<span></span>
		</button>
		<ul class="navbar-nav">
			<li><a href="#how-it-works">How It Works</a></li>
			<li><a href="#pricing">Pricing</a></li>
			<li><a href="#contact">Contact</a></li>
			<li><a href="https://docs.echovalue.dev/webhook/" target="_blank" rel="noopener noreferrer">API Reference</a></li>
			<li><a href="https://dash.echovalue.dev" class="navbar-cta" target="_blank" rel="noopener noreferrer">Dashboard</a></li>
		</ul>
	</div>
</nav>
```

Homepage brand is `echoValue`. Product brand is `echoValue {Product}`. Dashboard is always the last item and always `.navbar-cta`.

## Hero

```html
<section class="hero compact">
	<div class="container">
		<h1><span class="mono">webhook</span>-api email and cron triggers</h1>
		<p>
			Email or cron → webhook. Configure an endpoint once.<br />
			Receive structured <span class="text-mono">HTTP POST</span> events from echoValue.
		</p>
		<div class="hero-actions">
			<a href="https://docs.echovalue.dev/webhook/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">api reference →</a>
			<a href="https://dash.echovalue.dev" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">open dashboard ↗</a>
		</div>
	</div>
</section>
```

Homepage uses `section.hero` without `.compact`. A not-yet-shipped product puts `<span class="badge">Coming Soon</span>` in the `h1` and omits the action row until there is a docs URL.

## Section

```html
<section id="how-it-works" class="section no-border">
	<div class="container">
		<div class="section-header">
			<h2>how-it-works</h2>
			<p>Three steps and no server. One endpoint for every trigger source.</p>
		</div>
	</div>
</section>
```

The first section after the hero has `no-border`. Following sections use `section` only. Use `bg-light` on the contact band and on at most one supporting band.

## Code block

```html
<div class="code-block">
	<code><span class="code-comment"># Request a new token - it's free</span><br />
curl 'https://api.echovalue.dev/token' -d 'token=new'<br />
<br /><span class="code-output">% mytoken</span></code>
</div>
```

Comments are `.code-comment`, echoed output is `.code-output`, string literals are `.code-string`.

## Code tabs

Requires `code-tabs.js` after the theme script. `data-tab` matches `id="tab-…"`.

```html
<div class="code-tabs">
	<div class="code-tabs-header">
		<button class="code-tab active" type="button" data-tab="python">python</button>
		<button class="code-tab" type="button" data-tab="typescript">typescript</button>
	</div>
	<div class="code-block code-block--tabbed">
		<button class="copy-btn" type="button" data-copy-block aria-label="Copy active code block">
			<i class="fa-regular fa-copy"></i> <span data-copy-label>copy</span>
		</button>
		<div class="code-tab-content active" id="tab-python">
			<pre><code><span class="code-comment"># python</span></code></pre>
		</div>
		<div class="code-tab-content" id="tab-typescript">
			<pre><code><span class="code-comment">// typescript</span></code></pre>
		</div>
	</div>
</div>
```

## Pricing

```html
<section id="pricing" class="section">
	<div class="container">
		<div class="section-header">
			<h2>pricing</h2>
			<p>No subscriptions. Pay per use. Credits never expire.</p>
		</div>
		<div class="pricing-grid">
			<div class="pricing-card">
				<h3>Free</h3>
				<div class="price">$0</div>
				<ul>
					<li>✓ 100 operations</li>
					<li>✓ No credit card</li>
					<li>✓ No registration</li>
				</ul>
				<a href="https://dash.echovalue.dev" class="btn btn-secondary btn-block" target="_blank" rel="noopener noreferrer">start free</a>
			</div>
			<div class="pricing-card featured">
				<h3>Standard</h3>
				<div class="price">$4 <small>/ €3.70</small></div>
				<ul>
					<li>✓ 1 million operations</li>
					<li>✓ No subscription</li>
					<li>✓ No expiration</li>
				</ul>
				<a href="https://docs.echovalue.dev/token/recharge/" class="btn btn-primary btn-block" target="_blank" rel="noopener noreferrer">buy credits</a>
			</div>
		</div>
	</div>
</section>
```

Replace the numbers with that product's real tiers. Keep one `.featured` card.

## Contact

```html
<section id="contact" class="section bg-light">
	<div class="container">
		<div class="section-header">
			<h2>contact</h2>
			<p>Questions, feedback, or something not working? Get in touch.</p>
		</div>
		<div class="contact-info">
			<div class="contact-item">
				<h3>Email</h3>
				support at echovalue dot dev
			</div>
			<div class="contact-item">
				<h3>Social</h3>
				<div class="social-links">
					<a href="https://twitter.com/emln_" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
						<i class="fab fa-twitter"></i>
					</a>
					<a href="https://www.linkedin.com/in/emlns/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
						<i class="fab fa-linkedin"></i>
					</a>
					<a href="https://github.com/njoylab" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
						<i class="fab fa-github"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
```

## Footer

Same on every page. Root paths, so depth does not matter.

```html
<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<ul class="footer-links">
				<li><a href="/">Home</a></li>
				<li><a href="/db-api/">DB API</a></li>
				<li><a href="/webhook-api/">Webhook API</a></li>
				<li><a href="https://docs.echovalue.dev" target="_blank" rel="noopener noreferrer">Documentation</a></li>
				<li><a href="https://dash.echovalue.dev" target="_blank" rel="noopener noreferrer">Dashboard</a></li>
				<li><a href="/privacy">Privacy</a></li>
				<li><a href="https://github.com/njoylab" target="_blank" rel="noopener noreferrer">GitHub</a></li>
				<li><a href="/toc">Terms</a></li>
			</ul>
		</div>
		<div class="footer-bottom">
			<p>
				Built by <a href="https://www.njoylab.com" target="_blank" rel="noopener noreferrer">nJoyLab.com</a> ·
				IT12822520966 · <span class="text-mono">v2.0</span>
			</p>
		</div>
	</div>
</footer>
<script src="../assets/js/nav-toggle.js?v=1"></script>
<script src="../assets/js/theme-toggle.js?v=1"></script>
```

Add `code-tabs.js` or `copy-tool-def.js` after `theme-toggle.js` only when that page uses the matching markup. Use `defer` on those extra scripts.

## Legal page body

```html
<main id="main">
	<section class="section pt-nav">
		<div class="container">
			<div class="legal-content">
				<h1>Privacy Policy</h1>
				<p class="legal-date">Last updated …</p>
				<div class="legal-body">
					<h2>Section</h2>
					<p>…</p>
				</div>
			</div>
		</div>
	</section>
</main>
```

Legal pages still use the navbar frame, the footer, and both scripts. They do not use a hero or the contact section.
