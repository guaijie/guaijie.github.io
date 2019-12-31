if (tidioChatApi) {
    tidioChatApi.on("ready", ready);
} else {
    document.addEventListener("tidioChat-ready", ready);
}

function ready() {
    tidioChatApi.display(false);
    tidioChatApi.close();
    setCloseStyle();

    tidioChatApi.on("open", () => {
        console.log("open");
    });
    tidioChatApi.on("close", () => {
        console.log("close");
    });
}

function setCloseStyle() {
    // var size = $("#tidio-chat-iframe")
    // $("#tidio-chat-iframe").css("height", $("#tidio-chat-iframe").css("width"));
    // console.log($("#tidio-chat-iframe").css("width"));
}
