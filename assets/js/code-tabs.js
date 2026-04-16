(function () {
	// Tab switching
	document.querySelectorAll('.code-tab').forEach(function (tab) {
		tab.addEventListener('click', function () {
			var target = this.dataset.tab;
			var scope = this.closest('.code-tabs') || document;
			scope.querySelectorAll('.code-tab').forEach(function (t) { t.classList.remove('active'); });
			this.classList.add('active');
			scope.querySelectorAll('.code-tab-content').forEach(function (c) { c.classList.remove('active'); });
			var pane = scope.querySelector('#tab-' + target) || document.getElementById('tab-' + target);
			if (pane) pane.classList.add('active');
		});
	});

	// Copy active code block
	document.querySelectorAll('[data-copy-block]').forEach(function (btn) {
		btn.addEventListener('click', function () {
			var block = btn.closest('.code-block');
			if (!block) return;
			var activeContent = block.querySelector('.code-tab-content.active');
			var code = activeContent
				? activeContent.querySelector('code')
				: block.querySelector('code');
			if (!code) return;
			var text = code.innerText || code.textContent;
			navigator.clipboard.writeText(text).then(function () {
				var icon = btn.querySelector('i');
				var label = btn.querySelector('[data-copy-label]');
				var origIcon = icon ? icon.className : '';
				var origLabel = label ? label.textContent : '';
				if (icon) icon.className = 'fa-solid fa-check';
				if (label) label.textContent = 'copied!';
				btn.classList.add('is-copied');
				setTimeout(function () {
					if (icon) icon.className = origIcon;
					if (label) label.textContent = origLabel;
					btn.classList.remove('is-copied');
				}, 2000);
			});
		});
	});
})();
