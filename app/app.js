function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    MODEL.updateView(pageID)

}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

function initListener() {
    $("#submit").click(function (e) {
        console.log("hi");
    });
}

$(document).ready(function () {
    initURLListener();
    initListener();
});