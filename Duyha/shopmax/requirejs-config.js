var config = {
    paths: {
        'bootstrap': 'js/bootstrap.min',
        'owl': 'js/owl.carousel.min',
        'popper': 'js/popper.min'
    },
    shim: {
        'popper': {
            'deps': ['jquery'],
            'exports': 'Popper'
        },
        'bootstrap': {
            deps: ['jquery','popper']
        },
        owl:{
            deps: ['jquery']
        }
    },
    deps: [
	    "js/theme"
	  ]
};
