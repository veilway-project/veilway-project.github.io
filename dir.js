// The reader's layout direction, shared with the docs on this domain under the same key. The language's own direction stays in data-lang-dir for "Automatic".
(function () {
	var root = document.documentElement, key = "veilway-dir";
	root.dataset.langDir = root.dir;
	try {var saved = localStorage.getItem(key); if (saved === "ltr" || saved === "rtl") root.dir = saved;} catch (e) {}
	document.addEventListener("DOMContentLoaded", function () {
		var select = document.getElementById("dir-select");
		if (!select) return;
		try {select.value = localStorage.getItem(key) || "auto";} catch (e) {select.value = "auto";}
		select.addEventListener("change", function () {
			var value = select.value === "ltr" || select.value === "rtl" ? select.value : "";
			try {value ? localStorage.setItem(key, value) : localStorage.removeItem(key);} catch (e) {}
			root.dir = value || root.dataset.langDir;
		});
	});
})();
