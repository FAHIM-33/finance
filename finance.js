function presentValue(){
    hideAll()
    document.getElementById('present-value').style.display = 'block';
}
function futureValue(){
    hideAll()
    document.getElementById('future-value').style.display = 'block';
    FV();
}

function FV(){
    
    let parent = document.querySelector('.container');
    parent.innerHTML = '';
    let pv = document.getElementById("pv").value;
    let n = document.getElementById("n").value;
    let i = document.getElementById("i").value;
    let m = document.getElementById("m").value;
    if(m == ''){
        m = 1;
    }
    let fv = pv*Math.pow((1+(i/(100*m))),n*m);

    let ans = document.createElement('p');
    ans.textContent = 'FV = '+fv;
    parent.appendChild(ans);
}

function A(){
    let parent = document.querySelector('.containerPV');
    parent.innerHTML = '';
    let pv = document.getElementById("pv-a").value;
    let n = document.getElementById("n-a").value;
    let i = document.getElementById("i-a").value;
    let sv = document.getElementById("sv-a").value;
    i*=1;
    pv*=1;
    sv*=1;
    n*=1;
let x = 1+i;
let powx = Math.pow(x,n);

    let A = i*(pv-(sv/powx))/(1-(1/powx));
    let ans = document.createElement('p');
    ans.innerText = 'A = '+A;
    parent.appendChild(ans)
}

function hideAll(){
    let all = document.querySelectorAll('section');
    for (let i =0;i <all.length;i++){
        document.querySelectorAll('section')[i].style.display = 'none';
    }
}
