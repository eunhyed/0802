$(document).ready(function () {
    $(function() {
        $('.switch input').click( function() {
          if( $(this).html() == '인증번호 받기' ) {
            $(this).html('확인');
          }
          else {
            $(this).html('인증번호 받기');
          }
        });
      });
});