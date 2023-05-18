$(document).ready(function() {
    $('.checkbox').change(function() {
        let checkedCount = $('.checkbox:check').length;
        if (checkedCount >= 3) {
                $('.checkbox').prop('disabled', true);
            }
        else   
            {    $('.checkbox').prop('disabled', false);
        }
    });
});