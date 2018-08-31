<template>
  	<div class="home">
    	<Index></Index>
  	</div>
</template>

<script>
// @ is an alias to /src
import Index from '@/views/Index.vue';

export default {
  	name: 'app',
  	components: {
    	Index,
  	},
};
</script>

<style>

:root {
	--blue: #2980b9;
	--light-blue: #89a0d9;
	--white: #ffffff;
	--cloud-white: #ecf0f1;
	--black: #333333;
	--light-gray: #d1d8e0;
	--gray: #a5b1c2;
	--breakpoint-xs: 0;
	--breakpoint-sm: 576px;
 	--breakpoint-md: 768px;
  	--breakpoint-lg: 992px;
	--breakpoint-xl: 1200px;
	--font-family-sans-serif: Avenir, Roboto, Helvetica, sans-serif;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

input, select, textarea{
    color: var(--black);
}

article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {
  	display: block;
}

body {
	font-family: var(--font-family-sans-serif);
	line-height: 1.15;
	color: var(--black);
	margin: 0;
}

[tabindex="-1"]:focus {
  	outline: 0 !important;
}

hr {
  	box-sizing: content-box;
  	height: 0;
  	overflow: visible;
}

h1, h2, h3, h4, h5, h6 {
  	margin-top: 0;
  	margin-bottom: 0;
}

p {
  	margin-top: 0;
  	margin-bottom: 0;
}

ul {
  	margin-top: 0;
  	margin-bottom: 0;
}

a {
  	color: var(--blue);
  	text-decoration: none;
}

img {
  	vertical-align: middle;
  	border-style: none;
}

svg:not(:root) {
  	overflow: hidden;
}

label {
  	display: inline-block;
  	margin-bottom: .5rem;
}

button {
  	border-radius: 0;
}

button:focus {
  	outline: 1px dotted;
  	outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
  	margin: 0;
  	font-family: inherit;
  	font-size: inherit;
  	line-height: inherit;
}

button,
input {
  	overflow: visible;
}

button,
select {
  	text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
  	-webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  	padding: 0;
  	border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
  	box-sizing: border-box;
  	padding: 0;
}


input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  	-webkit-appearance: listbox;
}

textarea {
  	overflow: auto;
  	resize: vertical;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  	height: auto;
}

[type="search"] {
  	-webkit-appearance: none;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  	-webkit-appearance: none;
}

::-webkit-file-upload-button {
  	font: inherit;
  	-webkit-appearance: button;
}

template {
  	display: none;
}

[hidden] {
  	display: none !important;
}
</style>

