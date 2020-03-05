let click = [];
    $(document).ready(function() {
        $('.vote').on ('click', function(){
            $(this).addClass('active');
            var parent = $(this).parent().parent().parent().parent();
            var commentCountElement = parent.find('.commentscount');
            var ratingValueElement = parent.find('.ratingvalue');
            var votedValue = parseInt($(this).attr('data-score'));
            parent.addClass('voted');
            var commentCount = parseInt(commentCountElement.text());
            commentCountElement.text(commentCount + 1);
            var rating = parseFloat(ratingValueElement.text());
            rating = (commentCount * rating + votedValue)/(commentCount + 1);
            ratingValueElement.text(rating.toFixed(2));
            console.log('Пользователь поставил оценку - ' + votedValue);
            localStorage.setItem('click', JSON.stringify(click));
            if (localStorage.getItem('click')) click = JSON.parse(localStorage.getItem('click'));
    })
})