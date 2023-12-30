let passsword = document.getElementById('password');
let message = document.getElementById('message');
let strength = document.getElementById('strength');


passsword.addEventListener('input',()=>{
    if(passsword.value.length>0){
        message.style.display = 'block';
    }else{
        message.style.display = 'none';
    }
    if(passsword.value.length<4){
        strength.innerHTML = 'Weak';
        passsword.style.borderColor = '#ff5925';
        message.style.color = '#ff5925';
    }else if(passsword.value.length>=4 && passsword.value.length<8){
        strength.innerHTML = 'Medium';
        passsword.style.borderColor = 'yellow';
        message.style.color = 'yellow';
    }else if(passsword.value.length>8){
        strength.innerHTML = 'Strong';
        passsword.style.borderColor = '#26d730';
        message.style.color = '#26d730';
    }
})