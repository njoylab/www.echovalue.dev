(function () {
	var TOOL_DEFS = [
		{
			"name": "save_state",
			"description": "Save a key-value pair to shared agent state",
			"parameters": {
				"group": { "type": "string", "description": "Namespace / bucket" },
				"key": { "type": "string", "description": "Identifier" },
				"value": { "type": "string", "description": "Data to store" },
				"ttl": { "type": "integer", "description": "Expiry in seconds" }
			}
		},
		{
			"name": "read_state",
			"description": "Read a value from shared agent state",
			"parameters": {
				"group": { "type": "string", "description": "Namespace / bucket" },
				"key": { "type": "string", "description": "Identifier" }
			}
		}
	];

	var buttons = document.querySelectorAll('[data-copy-tool-def]');
	if (!buttons.length) return;

	var json = JSON.stringify(TOOL_DEFS, null, 2);

	buttons.forEach(function (btn) {
		btn.addEventListener('click', function () {
			navigator.clipboard.writeText(json).then(function () {
				var icon = btn.querySelector('i');
				var label = btn.querySelector('[data-copy-label]');
				var origIconClass = icon ? icon.className : '';
				var origLabel = label ? label.textContent : '';
				if (icon) icon.className = 'fa-solid fa-check';
				if (label) label.textContent = 'copied!';
				btn.classList.add('is-copied');
				setTimeout(function () {
					if (icon) icon.className = origIconClass;
					if (label) label.textContent = origLabel;
					btn.classList.remove('is-copied');
				}, 2000);
			});
		});
	});
})();
