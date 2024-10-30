class ToastyToaster extends HTMLElement {
	constructor() {
		super();
		this.toasts = this.querySelectorAll("toasty-toast");

		this.button = this.querySelector('button[name="close-all"]');
		if (!this.button) return;
		this.button.addEventListener("click", this.closeToasts.bind(this));
	}

	closeToasts() {
		if (!this.toasts) return;
		Array.from(this.toasts).forEach((toast) => toast.closeToast());
		this.setAttribute("hidden", true);
	}
}

customElements.define("toasty-toaster", ToastyToaster);

class ToastyToast extends HTMLElement {
	constructor() {
		super();
		this.storageKey = this.id;

		this.addEventListener("animationend", this.handleTransition.bind(this));

		this.button = this.querySelector('button[name="close"]');
		if (!this.button) return;
		this.button.addEventListener("click", this.closeToast.bind(this));
	}

	connectedCallback() {
		if (!localStorage.getItem(this.storageKey) || this.storageKey == "static")
			this.showToast();
		if (this.getAttribute("timeout")) {
			setTimeout(() => {
				this.closeToast();
			}, parseInt(this.getAttribute("timeout")) * 1000);
		}
	}

	handleTransition() {}

	showToast() {
		this.removeAttribute("hidden");
	}

	closeToast() {
		this.hidden = true;
		localStorage.setItem(this.storageKey, "true");
		this.remove();
	}
}

customElements.define("toasty-toast", ToastyToast);
