let ball = document.querySelector('.ball img')
let cont = document.querySelector('.container')
let goll = document.querySelectorAll('.goll')

ball.ondragstart = (e) => {
    setTimeout(() => {
        ball.style.display = "none"
    }, 0);
}
ball.ondragend = (e) => {
    ball.style.display = "block"
}
cont.ondrop = (e) => {
    const {x, y} = e
    ball.style.left = x +"px"
    ball.style.top = y +"px"
}
cont.ondragenter = (e) => {
    e.preventDefault();
}
cont.ondragover = (e) => {
    e.preventDefault();
}

goll.ondragover = (e) => {
    e.preventDefault();
    alert('ГООЛЛЛ!')
}
goll.ondragenter = (e) => {
    e.preventDefault();
    alert('ГООЛЛЛ!')
}


git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/tshaxrina/football.git
git push -u origin main