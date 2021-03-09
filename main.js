document.addEventListener("DOMContentLoaded", function (e) {

	const filter_dropdowns = document.querySelectorAll("select.filter");
	filter_dropdowns.forEach(function (filter_dropdown) {
		filter_dropdown.addEventListener("change", function (e) {
			filter_parks();
		});
	});
});

function filter_parks() {

	const region_class = document.querySelector("#region").value;
	const features_class = document.querySelector("#features").value;
	const visitation_class = document.querySelector("#visitation").value;

	const active_items = document.querySelectorAll(".item.active");

	active_items.forEach(function (item) {
		item.classList.remove("active");
	});

	const filtered_items = document.querySelectorAll(`.item.${region_class}.${features_class}.${visitation_class}`);

	filtered_items.forEach(function (item) {
		item.classList.add("active");
	});
}