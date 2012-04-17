jQuery Multi ScrollFollow
===================


A jQuery plugin that allows you to have multiple headers sticky on top of the page as you scroll. Inspired by gmail on android.


Usage
-----

	$('.myelements').scrollfollow([options])

The class active is applied to the element while it is active. To add a shadow apply the following css rule:

	.scrollfollow.active{
		box-shadow: 0px 1px 5px #000;
	}

Or to make the element stop 10px before the next header:

	.scrollfollow.active{
		margin-bottom:10px;
	}


Options
-------
	
- **marginTop** 
	Margin to apply to the top of the element when active
	
	- Default: 0

- **container** 
	A DOM element or jquery element that is the container for the scrolling elements 
	
	- Default: first element's parent

- **zIndexStart**
	The elements will be given this z-index + i while active
	
	- Default: 1

- **speed**
	The speed in milliseconds to animate the element repositioning if for instance marginTop = 20
	
	- Default: 100

- **fixedClass**
	The class to give the element while being scrolled (css position fixed)
	
	- Default: fixed

- **absoluteClass**
	The class to give the element if it has scrolled down so far that another element have taken over and it is now placed absolute on the page waiting for a possible scroll up to reactivate and be fixed again.
	
	- Default: absolute

- **activeClass** 
	This class is applied to both of the states above
	
	- Default: active  



Demo
----

[Live demo](http://martinhansen.no/jquery-scrollfollow)



