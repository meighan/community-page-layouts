({
    doInit : function(component, event, helper) {

        window.onscroll = function() {

            var scrollContainer = component.find("scrollContainer").getElement();
            var scrollItem = component.find("scrollItem").getElement();
            // console.log(getScrollTop());
  
            if (getScrollTop() > scrollItem.offsetTop) {
                // console.log('==== HERE ====');
                $A.util.addClass(scrollContainer, 'fix-nav');
                setFixedItemWidth();
            } else {
                $A.util.removeClass(scrollContainer, 'fix-nav');
            }
        };

        window.onresize = function() {
            setFixedItemWidth();
        };

        // get width of navigation column minus column padding
        // set width as inline style on first widget in this column
        function setFixedItemWidth() {
            var scrollItem = component.find("scrollItem").getElement();
            var scrollItemWidth = scrollItem.offsetWidth - 24 + 'px';

            // console.log('scrollItem.firstChild', scrollItem.firstChild);

            if(scrollItem.firstChild) {
                var scrollItemChild = scrollItem.firstChild;
                scrollItemChild.style.width = scrollItemWidth;
            }
        }

        function getScrollTop(){
            if(typeof pageYOffset!= 'undefined'){
                return pageYOffset;
            }
            else{
                var b = document.body; //IE 'quirks'
                var d = document.documentElement; //IE with doctype
                d = (d.clientHeight)? d : b;
                return d.scrollTop;
            }
        }

    }
})