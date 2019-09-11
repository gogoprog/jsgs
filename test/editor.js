function run() {
    var code = document.getElementById("code").value;



    var screenElement = document.getElementById("screen");
    screenElement.innerHTML = "";

    {
        var screen = new libjsgs.Screen({
            size: 128
        });
        var ram = new libjsgs.Ram(0x8000);
        var controller = new libjsgs.KeyboardController();
        var os = new libjsgs.OS();

        var machine = new libjsgs.JSGS({
            autoUpdate: true,
            os: os,
            devices: {
                controller: controller,
                ram: ram,
                screens: [screen],
                code: code
            },
        });

        screen.mountCanvas(document.getElementById('screen'));
    }
}
