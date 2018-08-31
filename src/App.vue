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
	--cloud-white: #ecf0f1;
	--black: #333333;
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

html {
	font-family: var(--font-family-sans-serif);
	line-height: 1.15;
}

article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

body {
	  margin: 0;
	  font-family: var(--font-family-sans-serif);
	  color: var(--black);
}

ul {
	list-style-type: none;
	padding: 0;
}

a {
	color: var(--blue);
}

</style>

