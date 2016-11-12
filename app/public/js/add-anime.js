$(function() {
    $.getJSON('api', updateAnime);

    $('#anime-form').submit(function(e) 
    {
        e.preventDefault();
        $.post('api', {
            animeTitle: $('#animeTitle').val(),
            animeAuthor: $('#animeAuthor').val(),
            animeDateAired: $('#animeDateAired').val(),
            animeSummary: $('#animeSummary').val()
        }, updateAnime);
    });

    $('.animes').on('click', function(e) 
    {
        if (e.target.className == 'glyphicon glyphicon-remove') 
        {
            $.ajax({
              url: 'api/' + e.target.id,
              type: 'DELETE',
              success: updateAnime
            });
        }
    });

    function updateAnime(data)
    {
        var output = '';
        $.each(data, function(key, item) 
        {
            output += '<div class="anime">';
            output += '<div class="pull-right"><button class="anime-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
            output += '<h3>' + item.animeTitle + '</h3>';
            output += '<p>' + item.animeAuthor + ' | Date Aired: ' + item.animeDateAired + '</p>';
            output += '<p>' + item.animeSummary + '</p>';
            output += '</div>';
        });
        $('.animes').html(output);
    }
});
