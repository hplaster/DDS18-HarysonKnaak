
function andar() {
    
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img3 = document.getElementById('img3');

    for (let i = 0; i <= 2; i++) {
        setTimeout(() => {
            if (i == 0) {
                img2.classList.add('imgInvisivel');
                img3.classList.add('imgInvisivel');
            }
            if (i == 1) {
                img2.classList.add('imgInvisivel');
            }
            if (i == 2) {
                img3.classList.add('imgInvisivel');
            }
        }, 1000);
    }

}
