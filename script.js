body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
}

.parallax-container {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 1px;
    perspective-origin: 0% 0%;
}

.parallax-layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.layer1 {
    background: url('https://opengameart.org/sites/default/files/styles/medium/public/1_37.png') center/cover;
    transform: translateZ(-1px) scale(2);
}

.layer2 {
    background: url('https://opengameart.org/sites/default/files/styles/medium/public/2_21.png') center/cover;
    transform: translateZ(-2px) scale(3);
}

.layer3 {
    background: url('https://opengameart.org/sites/default/files/styles/medium/public/3_16.png') center/cover;
    transform: translateZ(-3px) scale(4);
}

.content {
    position: relative;
    z-index: 2;
    padding: 20px;
    text-align: center;
    color: #fff;
}
