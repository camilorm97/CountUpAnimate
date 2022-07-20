window.onload = () => {
    let cNumber = document.querySelectorAll(".count-up");
    let cont = 0;

    const myCount = (val, cont) => setInterval(() => {
        if (cont >= parseInt(val.getAttribute("data-target"))){
            clearInterval(this);
        }
        else{
            cont++;
            val.innerHTML = cont.toString();
        }
    }, 30);

    cNumber.forEach(e => {
        myCount(e, cont);
    });

}