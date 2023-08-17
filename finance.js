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

    let A = i*(pv-(sv/Math.pow((1+i),n)))/1-(1/Math.pow((1+i),n));
    console.log(A);
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
