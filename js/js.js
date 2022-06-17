$(document).ready(function () {
    $(".lang-en").click(function () {
        $(".lang-en").toggleClass("active");
    });
    $(function() {
        $('.tabs nav a').on('click', function() {
            show_content($(this).index());
        });

        show_content(0);

        function show_content(index) {
            // Make the content visible
            $('.tabs .content.visible').removeClass('visible');
            $('.tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');

            // Set the tab to selected
            $('.tabs nav a.selected').removeClass('selected');
            $('.tabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
        }
    });
    $('.single-item').slick({
        dots: true
    });
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 412,
        gutter: 40,
    });

});