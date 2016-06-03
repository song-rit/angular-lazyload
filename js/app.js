	var app = angular.module( "Demo", [] );

	app.service('userService', function(){

	    this.users = ['John', 'James', 'Jake'];

	});

	app.factory('ImageDataBase', function() {
     
    var factory = {

		    	imageData : [ 	
		 		
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/094/491/original/polygonal-texture-background-vector.jpg",
		 			title: "1",
		 			content: "1",
		 			size: "1x1"
		 		},
		 		{
		 			url: "http://www.intrawallpaper.com/static/images/abstract-mosaic-background.png",
		 			title: "2",
		 			content: "2",
		 			size: "2x2"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/084/251/original/christmas-bokeh-vector-background.jpg",
		 			title: "3",
		 			content: "3",
		 			size: "3x3"
		 		},
		 		{
		 			url: "http://www.intrawallpaper.com/static/images/White-Background-9B1.jpg",
		 			title: "4",
		 			content: "4",
		 			size: "4x4"
		 		},
		 		{
		 			url: "https://pixabay.com/static/uploads/photo/2016/02/04/20/48/background-1179915_960_720.png",
		 			title: "5",
		 			content: "5",
		 			size: "5x5"
		 		},
		 		{
		 			url: "https://pixabay.com/static/uploads/photo/2016/01/06/07/06/bokeh-1123696_960_720.jpg",
		 			title: "6",
		 			content: "6",
		 			size: "6x6"
		 		},
		 		{
		 			url: "http://data.1freewallpapers.com/thumb/blocks-rainbow-3d-graphics-background.jpg",
		 			title: "7",
		 			content: "7",
		 			size: "7x7"
		 		},
		 		{
		 			url: "http://www.planwallpaper.com/static/images/518071-background-hd_xO1TwRc.jpg",
		 			title: "8",
		 			content: "8",
		 			size: "8x8"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/095/260/original/vector-floral-green-colorful-background.jpg",
		 			title: "9",
		 			content: "9",
		 			size: "9x9"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/094/491/original/polygonal-texture-background-vector.jpg",
		 			title: "1",
		 			content: "1",
		 			size: "1x1"
		 		},
		 		{
		 			url: "http://www.intrawallpaper.com/static/images/abstract-mosaic-background.png",
		 			title: "2",
		 			content: "2",
		 			size: "2x2"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/084/251/original/christmas-bokeh-vector-background.jpg",
		 			title: "3",
		 			content: "3",
		 			size: "3x3"
		 		},
		 		{
		 			url: "http://www.intrawallpaper.com/static/images/White-Background-9B1.jpg",
		 			title: "4",
		 			content: "4",
		 			size: "4x4"
		 		},
		 		{
		 			url: "https://pixabay.com/static/uploads/photo/2016/02/04/20/48/background-1179915_960_720.png",
		 			title: "5",
		 			content: "5",
		 			size: "5x5"
		 		},
		 		{
		 			url: "https://pixabay.com/static/uploads/photo/2016/01/06/07/06/bokeh-1123696_960_720.jpg",
		 			title: "6",
		 			content: "6",
		 			size: "6x6"
		 		},
		 		{
		 			url: "http://data.1freewallpapers.com/thumb/blocks-rainbow-3d-graphics-background.jpg",
		 			title: "7",
		 			content: "7",
		 			size: "7x7"
		 		},
		 		{
		 			url: "http://www.planwallpaper.com/static/images/518071-background-hd_xO1TwRc.jpg",
		 			title: "8",
		 			content: "8",
		 			size: "8x8"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/095/260/original/vector-floral-green-colorful-background.jpg",
		 			title: "9",
		 			content: "9",
		 			size: "9x9"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/094/491/original/polygonal-texture-background-vector.jpg",
		 			title: "1",
		 			content: "1",
		 			size: "1x1"
		 		},
		 		{
		 			url: "http://www.intrawallpaper.com/static/images/abstract-mosaic-background.png",
		 			title: "2",
		 			content: "2",
		 			size: "2x2"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/084/251/original/christmas-bokeh-vector-background.jpg",
		 			title: "3",
		 			content: "3",
		 			size: "3x3"
		 		},
		 		{
		 			url: "http://www.intrawallpaper.com/static/images/White-Background-9B1.jpg",
		 			title: "4",
		 			content: "4",
		 			size: "4x4"
		 		},
		 		{
		 			url: "https://pixabay.com/static/uploads/photo/2016/02/04/20/48/background-1179915_960_720.png",
		 			title: "5",
		 			content: "5",
		 			size: "5x5"
		 		},
		 		{
		 			url: "https://pixabay.com/static/uploads/photo/2016/01/06/07/06/bokeh-1123696_960_720.jpg",
		 			title: "6",
		 			content: "6",
		 			size: "6x6"
		 		},
		 		{
		 			url: "http://data.1freewallpapers.com/thumb/blocks-rainbow-3d-graphics-background.jpg",
		 			title: "7",
		 			content: "7",
		 			size: "7x7"
		 		},
		 		{
		 			url: "http://www.planwallpaper.com/static/images/518071-background-hd_xO1TwRc.jpg",
		 			title: "8",
		 			content: "8",
		 			size: "8x8"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/095/260/original/vector-floral-green-colorful-background.jpg",
		 			title: "9",
		 			content: "9",
		 			size: "9x9"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/094/491/original/polygonal-texture-background-vector.jpg",
		 			title: "1",
		 			content: "1",
		 			size: "1x1"
		 		},
		 		{
		 			url: "http://www.intrawallpaper.com/static/images/abstract-mosaic-background.png",
		 			title: "2",
		 			content: "2",
		 			size: "2x2"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/084/251/original/christmas-bokeh-vector-background.jpg",
		 			title: "3",
		 			content: "3",
		 			size: "3x3"
		 		},
		 		{
		 			url: "http://www.intrawallpaper.com/static/images/White-Background-9B1.jpg",
		 			title: "4",
		 			content: "4",
		 			size: "4x4"
		 		},
		 		{
		 			url: "https://pixabay.com/static/uploads/photo/2016/02/04/20/48/background-1179915_960_720.png",
		 			title: "5",
		 			content: "5",
		 			size: "5x5"
		 		},
		 		{
		 			url: "https://pixabay.com/static/uploads/photo/2016/01/06/07/06/bokeh-1123696_960_720.jpg",
		 			title: "6",
		 			content: "6",
		 			size: "6x6"
		 		},
		 		{
		 			url: "http://data.1freewallpapers.com/thumb/blocks-rainbow-3d-graphics-background.jpg",
		 			title: "7",
		 			content: "7",
		 			size: "7x7"
		 		},
		 		{
		 			url: "http://www.planwallpaper.com/static/images/518071-background-hd_xO1TwRc.jpg",
		 			title: "8",
		 			content: "8",
		 			size: "8x8"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/095/260/original/vector-floral-green-colorful-background.jpg",
		 			title: "9",
		 			content: "9",
		 			size: "9x9"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/094/491/original/polygonal-texture-background-vector.jpg",
		 			title: "1",
		 			content: "1",
		 			size: "1x1"
		 		},
		 		{
		 			url: "http://www.intrawallpaper.com/static/images/abstract-mosaic-background.png",
		 			title: "2",
		 			content: "2",
		 			size: "2x2"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/084/251/original/christmas-bokeh-vector-background.jpg",
		 			title: "3",
		 			content: "3",
		 			size: "3x3"
		 		},
		 		{
		 			url: "http://www.intrawallpaper.com/static/images/White-Background-9B1.jpg",
		 			title: "4",
		 			content: "4",
		 			size: "4x4"
		 		},
		 		{
		 			url: "https://pixabay.com/static/uploads/photo/2016/02/04/20/48/background-1179915_960_720.png",
		 			title: "5",
		 			content: "5",
		 			size: "5x5"
		 		},
		 		{
		 			url: "https://pixabay.com/static/uploads/photo/2016/01/06/07/06/bokeh-1123696_960_720.jpg",
		 			title: "6",
		 			content: "6",
		 			size: "6x6"
		 		},
		 		{
		 			url: "http://data.1freewallpapers.com/thumb/blocks-rainbow-3d-graphics-background.jpg",
		 			title: "7",
		 			content: "7",
		 			size: "7x7"
		 		},
		 		{
		 			url: "http://www.planwallpaper.com/static/images/518071-background-hd_xO1TwRc.jpg",
		 			title: "8",
		 			content: "8",
		 			size: "8x8"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/095/260/original/vector-floral-green-colorful-background.jpg",
		 			title: "9",
		 			content: "9",
		 			size: "9x9"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/094/491/original/polygonal-texture-background-vector.jpg",
		 			title: "1",
		 			content: "1",
		 			size: "1x1"
		 		},
		 		{
		 			url: "http://www.intrawallpaper.com/static/images/abstract-mosaic-background.png",
		 			title: "2",
		 			content: "2",
		 			size: "2x2"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/084/251/original/christmas-bokeh-vector-background.jpg",
		 			title: "3",
		 			content: "3",
		 			size: "3x3"
		 		},
		 		{
		 			url: "http://www.intrawallpaper.com/static/images/White-Background-9B1.jpg",
		 			title: "4",
		 			content: "4",
		 			size: "4x4"
		 		},
		 		{
		 			url: "https://pixabay.com/static/uploads/photo/2016/02/04/20/48/background-1179915_960_720.png",
		 			title: "5",
		 			content: "5",
		 			size: "5x5"
		 		},
		 		{
		 			url: "https://pixabay.com/static/uploads/photo/2016/01/06/07/06/bokeh-1123696_960_720.jpg",
		 			title: "6",
		 			content: "6",
		 			size: "6x6"
		 		},
		 		{
		 			url: "http://data.1freewallpapers.com/thumb/blocks-rainbow-3d-graphics-background.jpg",
		 			title: "7",
		 			content: "7",
		 			size: "7x7"
		 		},
		 		{
		 			url: "http://www.planwallpaper.com/static/images/518071-background-hd_xO1TwRc.jpg",
		 			title: "8",
		 			content: "8",
		 			size: "8x8"
		 		},
		 		{
		 			url: "http://static.vecteezy.com/system/resources/previews/000/095/260/original/vector-floral-green-colorful-background.jpg",
		 			title: "9",
		 			content: "9",
		 			size: "9x9"
		 		} 	 	 	

		 	]	
    }; 
 
    factory.getImageData = function() {
    	
    	return this.imageData       
    }
 
 
    return factory;
});