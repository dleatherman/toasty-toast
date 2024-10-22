# [toasty-toast](https://dleatherman.github.io/toasty-toast/)

# Examples:

```html
<toasty-toaster vertical="[top,bottom,center]" horizontal="[left,right,center]">
	<toasty-toast hidden>
		<p>Message</p>
		<button name="close">Close</button>
	</toasty-toast>
	<!-- Disappears after 5 seconds -->
	<toasty-toast hidden timeout="5">
		<p>Message</p>
		<button name="close">Close</button>
	</toasty-toast>
</toasty-toaster>
```

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/toasty-toast): `npm install toasty-toast`
2. Download the source manually from GitHub into your project.
3. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="toasty-toast.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
	type="module"
	src="https://www.unpkg.com/toasty-toast@0.0.1/toasty-toast.js"
></script>
```
