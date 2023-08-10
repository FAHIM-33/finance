function FV(){
    let pv = document.getElementById("pv").value;
    let n = document.getElementById("n").value;
    let i = document.getElementById("i").value;
    let m = document.getElementById("m").value;

    let fv = pv*Math.pow((1+(i/100)),n);

    if(typeof m !== 'string'){
        console.log("With 'm' value:" );
        fv = pv*Math.pow((1+(i/(100*m))),n*m);
    }
    console.log("Future value(FV) is :" +" "+fv);
    
    let ans = document.createElement('p');
    ans.textContent = fv;

    let parent = document.querySelector('.container');
    parent.appendChild(ans);

}


function PV(){

}

