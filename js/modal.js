// Modal window

(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		body: document.querySelector("body"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {

		refs.modal.classList.toggle("is-hidden");

		refs.body.classList.toggle("scroll-locked");
		// https://www.youtube.com/watch?v=Z5lYspOgtrY&t=477s
	}
})();


