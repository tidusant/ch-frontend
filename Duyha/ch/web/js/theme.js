/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',    
    'bootstrap',
    'domReady!'
], function ($) {
    'use strict';
    //quickfix for fullscreen on mobile
    $('.slideshow-inner').css('height',window.innerHeight+'px');
    $('#hero-slider').css('height',window.innerHeight+'px');
    

});
