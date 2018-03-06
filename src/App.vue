<template>
  <div id="app">
<<<<<<< HEAD
    
=======
>>>>>>> c17c1a3486253909ffa237788624d4535278dcee
    <router-view/>
  </div>
</template>

<script>
import rem from '../static/js/rem.js';
export default {
  name: 'App'
}
</script>

<style>
<<<<<<< HEAD
/*重置css*/
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;} 
 header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;} 
 table{border-collapse:collapse;border-spacing:0;} 
 caption,th{text-align:left;font-weight:normal;} 
 html,body,fieldset,img,iframe,abbr{border:0;} 
 i,cite,em,var,address,dfn{font-style:normal;} 
 [hidefocus],summary{outline:0;} 
 li{list-style:none;} 
 h1,h2,h3,h4,h5,h6,small{font-size:100%;} 
 sup,sub{font-size:83%;} 
 pre,code,kbd,samp{font-family:inherit;} 
 q:before,q:after{content:none;} 
 textarea{overflow:auto;resize:none;} 
 label,summary{cursor:default;} 
 a,button{cursor:pointer;} 
 h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;} 
 del,ins,u,s,a,a:hover{text-decoration:none;} 
 body,textarea,input,button,select,keygen,legend{font:12px/1.14 arial,\5b8b\4f53;color:#333;outline:0;} 
 body{background:#fff;} 
 a,a:hover{color:#333;} 
 html,body{font-family: "微软雅黑"} 
=======
	/*
		HTML5 Reset :: style.css
		----------------------------------------------------------
		We have learned much from/been inspired by/taken code where offered from:

		Eric Meyer					:: http://meyerweb.com
		HTML5 Doctor				:: http://html5doctor.com
		and the HTML5 Boilerplate	:: http://html5boilerplate.com

	-------------------------------------------------------------------------------*/

	/* Let's default this puppy out
	-------------------------------------------------------------------------------*/

	html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font-family:"微软雅黑","arial";
		font-style: inherit;
		font-weight: normal;
		vertical-align: baseline;
		background: transparent;
	}
	input{
		-webkit-appearance:none;
		outline:none
	}
	main, article, aside, figure, footer, header, nav, section, details, summary {display: block;}

	/* Handle box-sizing while better addressing child elements:
		http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
	html {
		box-sizing: border-box;
		font-family:"PingFang-SC-Regular","PingFang","PingFang-SC","微软雅黑", "Microsoft Yahei";
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	/* consider resetting the default cursor: https://gist.github.com/murtaugh/5247154 */

	/* Responsive images and other embedded objects */
	/* if you don't have full control over `img` tags (if you have to overcome attributes), consider adding height: auto */
	img,object,embed {max-width: 100%;}

	/*
		Note: keeping IMG here will cause problems if you're using foreground images as sprites.
		In fact, it *will* cause problems with Google Maps' controls at small size.
		If this is the case for you, try uncommenting the following:

	#map img {
		max-width: none;
	}
	*/

	/* force a vertical scrollbar to prevent a jumpy page */
	html {overflow-y: scroll;}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	/* we use a lot of ULs that aren't bulleted.
		you'll have to restore the bullets within content,
		which is fine because they're probably customized anyway */
	ul {list-style: none;}

	blockquote, q {quotes: none;}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {content: ''; content: none;}

	a {margin: 0; padding: 0; font-size: 100%; vertical-align: baseline; background: transparent;}
	/* 让链接在 hover 状态下显示下划线 */
	a:link{
		text-decoration:none;
	}
	a:visited{
		text-decoration:none;
	}
	a:hover{
		text-decoration:none;
	}
	a:active{
		text-decoration:none;
	}
	/* 默认不显示下划线，保持页面简洁 */
	ins,a {
		text-decoration:none;
	}
	/* IE6,7焦点点状线去除 */
	a:focus,*:focus {
		outline:none;
	}
	del {text-decoration: line-through;}

	abbr[title], dfn[title] {border-bottom: 1px dotted #000; cursor: help;}

	/* tables still need cellspacing="0" in the markup */
	table {border-collapse: separate; border-spacing: 0;}
	th {font-weight: bold; vertical-align: bottom;}
	td {font-weight: normal; vertical-align: top;}

	hr {display: block; height: 1px; border: 0; border-top: 1px solid #ccc; margin: 1em 0; padding: 0;}

	input, select {vertical-align: middle;}

	pre {
		white-space: pre; /* CSS2 */
		white-space: pre-wrap; /* CSS 2.1 */
		white-space: pre-line; /* CSS 3 (and 2.1 as well, actually) */
		word-wrap: break-word; /* IE */
	}

	input[type="radio"] {vertical-align: text-bottom;}
	input[type="checkbox"] {vertical-align: bottom;}
	.ie7 input[type="checkbox"] {vertical-align: baseline;}
	.ie6 input {vertical-align: text-bottom;}

	select, input, textarea {font: 99% sans-serif;}

	table {font-size: inherit; font: 100%;}

	small {font-size: 85%;}

	strong {font-weight: bold;}

	td, td img {vertical-align: top;}

	/* Make sure sup and sub don't mess with your line-heights http://gist.github.com/413930 */
	sub, sup {font-size: 75%; line-height: 0; position: relative;}
	sup {top: -0.5em;}
	sub {bottom: -0.25em;}

	/* standardize any monospaced elements */
	pre, code, kbd, samp {font-family: monospace, sans-serif;}

	/* hand cursor on clickable elements */
	.clickable,
	label,
	input[type=button],
	input[type=submit],
	input[type=file],
	button {cursor: pointer;}

	/* Webkit browsers add a 2px margin outside the chrome of form elements */
	button, input, select, textarea {margin: 0;}

	/* make buttons play nice in IE */
	button,
	input[type=button] {width: auto; overflow: visible;}

	/* scale images in IE7 more attractively */
	.ie7 img {-ms-interpolation-mode: bicubic;}

	/* prevent BG image flicker upon hover
		(commented out as usage is rare, and the filter syntax messes with some pre-processors)
	.ie6 html {filter: expression(document.execCommand("BackgroundImageCache", false, true));}
	*/

	/* let's clear some floats */
	/* 清除浮动 */
	.clearfix:before,.clearfix:after {
		content:"";
		display:table;
	}
	.clearfix:after {
		clear:both;
		overflow:hidden;
	}
	.clearfix {
		zoom:1; /* for IE6 IE7 */
	}
	.clear{
		clear:both;
		display:block;
		overflow:hidden;
		height:0;
		line-height:0;
		font-size:0;
	}

>>>>>>> c17c1a3486253909ffa237788624d4535278dcee
</style>
