import {deviceCheck} from "../../common/device-check/device-check";

if (deviceCheck() === 'touch') {
    let diagramLabel = document.getElementsByClassName('diagram__label');
    diagramLabel = Array.from(diagramLabel);

    diagramLabel.forEach(function (item) {
        item.addEventListener('change', function () {
            let childs =  this.children;
            for (let i=0, l = childs.length; i < l; i++) {
                const client = this.getBoundingClientRect();

                if (childs[i].classList.contains('diagram__popup')) {
                    childs[i].style.left = `${-client.left}px`;
                }

                if (childs[i].classList.contains('diagram__triangle')) {
                    if (client.left < 0 && Math.abs(client.left) > 0.5 * this.offsetWidth ) {
                        childs[i].style.left = '100%';
                        childs[i].style.transform = 'translateX(-200%)';
                    } else if (client.right < 0 && Math.abs(client.right) > 0.5 * this.offsetWidth ) {
                        childs[i].style.left = '0';
                        childs[i].style.transform = 'translateX(200%)';
                    } else {
                        childs[i].style.left = '50%';
                        childs[i].style.transform = 'translateX(-50%)';
                    }
                }
            }
        })
    });
}
