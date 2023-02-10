window.onload = () => {
    Main.init();
    Workspace.init();
}

class Main {
    static init() {
    }
}

class Workspace {
    static canvas = document.getElementById("canvas");
    // static context = Workspace.canvas.getContext("2d");

    static image = undefined;

    static init() {
        Workspace.canvas.width = 800;
        Workspace.canvas.height = 800;

        Workspace.image = new Image();
        Workspace.image.src = "img/building_kokuzeikyoku.png";

        Workspace.image.onload = () => {
            // Workspace.context.drawImage(Workspace.image, 0, 0, Workspace.image.width, Workspace.image.height);

            const fisheye = new Fisheye(Workspace.canvas);
            fisheye.setDistortion(-.1, -.1, -.1);
            fisheye.clear();
            fisheye.draw(Workspace.image);
            console.log(Workspace.canvas.toDataURL());
        }
    }
}
