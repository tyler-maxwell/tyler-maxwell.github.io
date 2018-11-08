/**
* Teamplate javascript file
* 
* @author Sajidur Rahman <sajibsrs@gmail.com>
* @version 1.0.0
* 
*/

(function($){
    
    'use strict';

    window.rismercore = {

        initialize : function(){

            var self = this;

            $(document).ready(function(){
                self.implement();
                self.extend();
            });
            
        },

        implement: function(){

            this.add_carousel();
            this.add_mixitup();
            this.add_scrollit();
            
        },

        add_carousel: function(){

            // Initiate owl-carousel one
            var owl_one = $('.owl-carousel-one');
            
            // Initiate owl-carousel two
            var owl_two = $('.owl-carousel-two');

            var settings = {
                loop: true,
                items: 1,
                dots: false,
            };
                
            // Set owl-carousel options
            owl_one.owlCarousel(settings);

            // Set owl-carousel options
            owl_two.owlCarousel(settings);

            // Trigger when next arrow is clicked
            $('.owl-one-next').click(function() {
                owl_one.trigger('next.owl.carousel', [600]);
            });

            // Trigger when previoius arrow is clicked
            $('.owl-one-prev').click(function() {
                owl_one.trigger('prev.owl.carousel', [600]);
            });

            // Trigger when next arrow is clicked
            $('.owl-two-next').click(function() {
                owl_two.trigger('next.owl.carousel', [600]);
            });

            // Trigger when previoius arrow is clicked
            $('.owl-two-prev').click(function() {
                owl_two.trigger('prev.owl.carousel', [600]);
            });
        },

        add_mixitup: function(){

            mixitup('.mix-wrapper', {

                load: {
                  sort: 'order:asc' /* default:asc */
                },

                animation: {
                  effects: 'fade scale', /* fade scale */
                  duration: 700 /* 600 */
                },

                classNames: {
                  block: 'controls', /* mixitup */
                  elementFilter: 'control', /* control */
                },

                selectors: {
                  target: '.mix', /* .mix */
                  control: '.mix-controls'
                }

              });
        },

        add_scrollit: function(){

            // Scrollit
            $(function(){
                $.scrollIt({ topOffset: -150 });
            });
            
        },

        extend: function(){

            this.progressbar();
            this.sticky_nav();
        },

        progressbar: function(){

            // Set progressbar value based on their data attribute
            var bar = $('p.p-bar');
                            
            bar.each(function() {
                var bar_indicator = $(this).children('span');
                var value = bar_indicator.data('bar-value');
                
                if( value != undefined ) {
                    bar_indicator.css('width', value + '%');
                }
            });           
        },

        sticky_nav: function(){

            // Sticky Navigation
            var top_nav = $('.top-navigation');
            var top_nav_height = top_nav.outerHeight();
            var after_nav_section = $('.section-about');

            after_nav_section.css('margin-top', top_nav_height + 'px');

            $(window).resize(function() {
                var top_nav_new_height = top_nav.outerHeight();

                if(top_nav_height !== top_nav_new_height){
                    top_nav_height = top_nav_new_height;
                }

                after_nav_section.css('margin-top', top_nav_height + 'px');
            });
        }
    };
    
    window.rismercore.initialize();
        
})( window.jQuery );
