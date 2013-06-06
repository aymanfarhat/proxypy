$('#urlForm').submit(function() {
    var form = $(this);

    var page_url = form.find(".urlBox").val();
    var page_headers = form.find("input[type='checkbox']").is(':checked');
    
    var request = $.ajax({
        type: form.prop('method'),
        url: window.location.protocol+'//'+window.location.host+"/crossdomain",
        data: {url:page_url, headers: page_headers},

        beforeSend: function() {
            form.find('.urlBox').prop("disabled",true); 
            form.find('.btn').addClass("disabled");
            form.find('.btn i').addClass("icon-spin");
        }
    });

    request.done(function(reply){
        $('.reply-text').text(JSON.stringify(reply,null,4)); 
        form.find('.urlBox').prop("disabled",false); 
        form.find('.btn').removeClass("disabled");
        form.find('.btn i').removeClass("icon-spin");
    });

    return false; 
}); 
