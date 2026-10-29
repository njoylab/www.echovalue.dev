(function () {
	document.querySelectorAll('[data-copy-tool-def]').forEach(function (btn) {
		var code = btn.closest('.code-block').querySelector('code');
		var status = document.getElementById(btn.getAttribute('aria-describedby'));
		var icon = btn.querySelector('i');
		var label = btn.querySelector('[data-copy-label]');
		var originalIcon = icon.className;
		var timer;

		btn.addEventListener('click', async function () {
			clearTimeout(timer);
			btn.disabled = true;
			btn.classList.remove('is-copied');
			icon.className = originalIcon;
			label.textContent = 'copy';
			status.textContent = '';
			try {
				await navigator.clipboard.writeText(code.textContent);
				icon.className = 'fa-solid fa-check';
				label.textContent = 'copied!';
				btn.classList.add('is-copied');
				status.textContent = 'Tool definitions copied.';
				timer = setTimeout(function () {
					icon.className = originalIcon;
					label.textContent = 'copy';
					btn.classList.remove('is-copied');
				}, 2000);
			} catch (error) {
				status.textContent = 'Could not copy. Select the code and copy it manually.';
			} finally {
				btn.disabled = false;
			}
		});
	});
})();
