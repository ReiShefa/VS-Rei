// index.js
const hSections = document.querySelectorAll('.horizontal-section');
hSections.forEach((hSection) => {
	const scrollAmount = hSection.clientWidth;
	hSection.addEventListener('wheel', function (e) {
		e.preventDefault();
		if (e.deltaY > 0) hSection.scrollLeft += scrollAmount;
		else hSection.scrollLeft -= scrollAmount;
	});
});