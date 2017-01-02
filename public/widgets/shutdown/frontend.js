"use strict";

Widget.register(function (widget) {
    var btn = $('<span class="glyphicon glyphicon-off"></span>');

    /**
     * On initialization
     */
    widget.onInit = function () {
        widget.content.append(btn);
        widget.content.on("click", function () {
            if (confirm(widget.t("sure"))) {
                widget.cmd("quit");
                note(widget.t("shutdown.now"), "success");
                $.each(Widget.widgets, function (widgetKey, widget) {
                    widget.remove();
                });
            }
        })
    };
});