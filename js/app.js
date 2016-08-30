$(document).ready(function() {

    var $screen = $('#screen')
    var $equals = $('#equals')
    var $clear = $('#clear')
    var $buttons = $('.buttons')

    $clear.on('click', function() {
        $screen.text('');
    })

    $equals.on('click', function() {
        $screen.text(eval($screen.text()));
    })

    $buttons.on('click', 'span:not(#clear):not(#equals)', function() {
        var $innerButton = $(this).text()

        if ($innerButton === '÷') {
            $screen.text($screen.text() + '/');
        } else if ($innerButton === 'x') {
            $screen.text($screen.text() + '*');
        } else {
            $screen.text($screen.text() + $innerButton);
        }
    })
});
