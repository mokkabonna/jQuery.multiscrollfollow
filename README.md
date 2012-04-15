#jQuery scrollfollow


A jQuery plugin that allows you to have multiple headers sticky on top of the page as you scroll. Inspired by gmail on android.


##Usage

	$('.myelements').scrollfollow([options])



The class active is applied to the element while it is active. To add a shadow apply the following css rule:

	.scrollfollow.active{
		box-shadow: 0px 1px 5px #000;
	}


##Options
	
- __marginTop__ Margin to apply to the top of the element when active
	- Default: 0
- __container__ A DOM element or jquery element that is the container for the scrolling elements 
	- Default: first element's parent. 
- __zIndexStart__ The elements will be given this z-index + i while active
	- Default: 1
- __speed__ The speed in milliseconds to animate the element repositioning if for instance marginTop = 20
	- Default: 100
- __fixedClass__ The class to give the element while being scrolled (css position fixed)
	- Default: fixed
- __absoluteClass__ The class to give the element if it has scrolled down so far that another element have taken over and it is now placed absolute on the page waiting for a possible scroll up to reactivate and be fixed again.
	- Default: absolute

- __activeClass__ This class is applied to both of the states above
	- Default: active  



##Demo

[Live demo](http://martinhansen.no/scrollfollow)



