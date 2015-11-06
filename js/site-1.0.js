window.constants = {
    topPagesHolder : {
        id:"topMenuPages",
        $id: "#topMenuPages"
    },
    selectedPage : {
        class : "active",
        $class : ".active"
    }
};


window.userPages = [
     {
        name : "Ziarul Financiar",
        url : "http://www.zf.ro"
    },
    {
        name : "Realitatea",
        url : "http://www.realitatea.net"
    },
    {
        name : "Antena 3",
        url : "http://www.antena3.ro"
    },
    {
        name : "Digi 24",
        url : "http://www.digi24.ro"
    },
    {
        name : "Mediafax",
        url : "http://www.mediafax.ro"
    },
    {
        name : "Stiri Pro Tv",
        url : "http://www.stirileprotv.ro"
    },
    {
        name : "Libertatea",
        url : "http://www.libertatea.ro"
    }
];


$(document).ready(function(){
      loadTopPages();
      registerHandlers();
    $(constants.topPagesHolder.$id).find("a").first().trigger("click");
});

function loadTopPages(){
    var topPagesHolder = $(constants.topPagesHolder.$id);
    var index = 0;
        while(index < userPages.length)
        {
            topPagesHolder.append('<li><a href="javascript:void();" data-url="'+userPages[index].url+'">'+userPages[index].name+'</a></li>');
            index++;
        }
}

function registerHandlers()
{
    addTopMenuLinkHandler();
}

function addTopMenuLinkHandler(){
    var topPages = $(constants.topPagesHolder.$id).find("a");
    topPages.each(function(index, page){
        var $page = $(page);
        $page.on("click",function(){
            unselectTopPages();
            selectPage($page);
            return false;
        });
    });
}

function unselectTopPages(){
    $(constants.topPagesHolder.$id).find(constants.selectedPage.$class).each(function(index, el){
        $(el).removeClass(constants.selectedPage.class);
    });
}

function selectPage(page)
{
     page.parent().addClass(constants.selectedPage.class);
     $("#pageFrame").attr("src", page.attr("data-url"));
}
