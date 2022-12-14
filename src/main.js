import '../scss/main.scss';

const sidebarToggle = document.querySelector('#sidebar-toggle');
let isUpTo1313px = document.body.offsetWidth >= 1313;
let timer = null;

window.onresize = function () {
	clearTimeout(timer);
	timer = setTimeout(function () {
		const width = window.innerWidth;

		if (width < 1313 && isUpTo1313px) {
			isUpTo1313px = !isUpTo1313px;
			sidebarToggle.checked = false;
		} else if (width >= 1313 && !isUpTo1313px) {
			isUpTo1313px = !isUpTo1313px;
		}
	}, 10);
};
