/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'owl',
    'bootstrap',
    'domReady!'
], function ($) {
    'use strict';

    var slider = function() {
        $('.nonloop-block-3').owlCarousel({
            center: false,
            items: 1,
            loop: false,
                stagePadding: 15,
            margin: 20,
            nav: true,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
            responsive:{
                600:{
                    margin: 20,
                  items: 2
                },
                1000:{
                    margin: 20,
                  items: 3
                },
                1200:{
                    margin: 20,
                  items: 3
                }
            }
        });

    };
    slider();

});
