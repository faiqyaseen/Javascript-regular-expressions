console.log("Project 4");

const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
let validUser = false;
let validEmail = false;
let validNumber = false;


username.addEventListener('blur', () => {
    console.log("name is blured");
    // validate username here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = username.value;
    // console.log(regex,str);
    if (regex.test(str)) {
        console.log('your username is valid');
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
        validUser = true;
    }
    else {
        console.log('your username is not valid');
        username.classList.remove('is-valid')
        username.classList.add('is-invalid');
        validUser = false;
    }
});

email.addEventListener('blur', () => {
    console.log("email is blured");
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regex,str);
    if (regex.test(str)) {
        console.log('your Email is valid');
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        validEmail = true;

    }
    else {
        console.log('your Email is not valid');
        email.classList.remove('is-valid')
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

number.addEventListener('blur', () => {
    console.log("number is blured");
    // validate number here
    let regex = /^[(0-9)]{11}$/;
    let str = number.value;
    // console.log(regex,str);
    if (regex.test(str)) {
        console.log('your Number is valid');
        number.classList.remove('is-invalid');
        number.classList.add('is-valid');
        validNumber = true;
    }
    else {
        console.log('your Number is not valid');
        number.classList.remove('is-valid')
        number.classList.add('is-invalid');
        validNumber = false;

    }
});

const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You clicked on submit');
    // submit your form here
    if (validUser && validEmail && validNumber) {
        console.log("phone, email, user are valid. submitting your form.");

        let alertfail = document.getElementById('alertfail');
        alertfail.innerHTML = "";
        alertfail.classList.remove('alert','alert-danger','alert-dismissible','fade','show');
        
        let alertsuc = document.getElementById('alertsuc');
        alertsuc.innerHTML = `<strong>Success!</strong> Your travel request has submitted Successfully.
        <button type="button" id="btnCloseSuc" class="btn-close"  ></button>`;
        alertsuc.classList.add('alert','alert-success','alert-dismissible','fade','show');
        setTimeout(()=>{
            alertsuc.classList.remove('alert','alert-success','alert-dismissible','fade','show');
            alertsuc.innerHTML = ""
        },5000);
        let btnCloseSuc = document.getElementById('btnCloseSuc');
        btnCloseSuc.addEventListener('click',()=>{
            alertsuc.classList.remove('alert','alert-success','alert-dismissible','fade','show');
            alertsuc.innerHTML = ""
        })
    }
    else {
        console.log("one of phone, email, user are not valid. Hence not submitting your form. please correct the errors and try again.");

        let alertsuc = document.getElementById('alertsuc');
        alertsuc.innerHTML = "";
        alertsuc.classList.remove('alert','alert-success','alert-dismissible','fade','show');
        let alertfail = document.getElementById('alertfail');
        alertfail.innerHTML = `<strong>Error!</strong> Your travel request has not been sent due to errors.
        <button type="button" id="btnCloseFail" class="btn-close" ></button>`;
        alertfail.classList.add('alert','alert-danger','alert-dismissible','fade','show');
       
            setTimeout(()=>{
                alertfail.classList.remove('alert','alert-danger','alert-dismissible','fade','show');
                alertfail.innerHTML="";
            },5000);
            let btnCloseFail = document.getElementById('btnCloseFail');
            btnCloseFail.addEventListener('click',()=>{
                alertfail.classList.remove('alert','alert-danger','alert-dismissible','fade','show');
                alertfail.innerHTML="";
            })

    }
})







