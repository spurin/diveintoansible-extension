var isLocked = false;
var lasttab;
function bindTabLinks()
{
    $('.tablink').click(function (event) {
        addTab($(this));
        event.preventDefault();
    });

    $('#tabs').on('click', 'a.tab', function (event) {
        if (isLocked == false) {
            var contentname = $(this).attr("id") + "_content";

            $(".tabdata").hide();

            $("#tabs li").removeClass("current");

            $("#" + contentname).show();
            $(this).parent().addClass("current");
        }
        event.preventDefault();
    });

    $('#tabs').on('click', 'a.remove', function (event) {
        isLocked = false;
        
        var tabid = $(this).parent().find(".tab").attr("id");
        
        var contentname = tabid + "_content";
        $("#" + contentname).remove();
        $(this).parent().remove();

        if ($("#tabs li.current").length == 0 && $("#tabs li").length > 0) {

            var lasttab = $('#' + $(this).attr('data-origin')).parent();
                if(lasttab == null || lasttab == undefined)
                $("#tabs li:last");
            lasttab.addClass("current");
            
            $(lasttab).find("a.tab").click();
            var lasttabid = $(lasttab).find("a.tab").attr("id");
            $("#" + lasttabid + "_content").show();
        }
        event.preventDefault();
    });
}
function addTab(link) {
    var originTab = $('#tabs .current a').attr('id');
    if ($("#" + $(link).attr("rel")).length != 0) {
        $("#" + $(link).attr("rel")).click();
        return;
    }
    var tabtitle = $(link).attr("data-title");
    if (tabtitle == undefined || tabtitle == null || tabtitle.trim().length == 0)
        tabtitle = $(link).html();

        var lockothers = $(link).attr("data-lockothers");
        if(lockothers == "true")
            isLocked = true;
    
    $("#tabs li").removeClass("current");
    $(".tabdata").hide();
    
    $("#tabs").append("<li class='current'><a class='tab' id='" +
        $(link).attr("rel") + "' href='#'>" + tabtitle +
        "</a><a href='#' class='remove' data-origin='" + originTab + "'><i class='fa fa-window-close'></i></a></li>");

    $("#content").append('<div id="' + $(link).attr("rel") + '_content" class="tabdata"><iframe onload="window.parent.scrollTo(0,0)" name="' + $(link).attr("rel")+'" class="tabiframe"></iframe></div>');//"<p id='" + $(link).attr("rel") + "_content'>" + $(link).attr("title") + "</p>");

    $('iframe[name="' + $(link).attr("rel") + '"]').attr('src', $(link).attr('href'));
    return false;
}

function addTabLink(href, rel, title, lock)
{
    document.getElementById('tablinkcontainer').innerHTML = "";
    document.getElementById('tablinkcontainer').innerHTML = '<a href="' + href + '" rel="' + rel + '" target="' + rel + '" data-openin="tab" data-title="' + title + '" data-islocked="' + lock + '">' + title + '</a>';
    bindTabLinks();

    $('a[rel="' + rel + '"]').click();
    return false;
}

function closeTab(callback, reloadparent) {
    $('.current a.remove').click()
    if (reloadparent == true)
        location.reload(true);
    if (typeof startupBindings === "function")
        startupBindings();
}
