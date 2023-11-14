console.log('script.js');

const toggle_bar = document.querySelector(".toggle-side-bar");
const sidebar = document.querySelector(".side-bar");

toggle_bar.addEventListener("click", ()=> {
    sidebar.classList.toggle("active");
    toggle_bar.classList.toggle("active");
});

const filter = document.querySelector(".filter-option");

// filters.forEach(filter => {
    filter.addEventListener("click", ()=> {
        filter.classList.toggle("active");
    });
// });

const profile_option = document.querySelector(".drop-down-list");
const profile = document.querySelector(".profile");

profile.addEventListener("click", ()=> {
    if(profile_option.classList.contains("active")){
        profile_option.classList.toggle("done");
    }else{
        profile_option.classList.toggle("active");
    }
    
});

const password_box = document.querySelectorAll(".password-box");

function showStar(div) {
    let isStared
    if (div.classList.contains("active")) {
        isStared = false;
    }else{
        isStared = true;
    }

    password_box.forEach(box => {
       if (isStared) {
            if (box.classList.contains("stared")) {
                box.style.display = "flex";
            }else{
                box.style.display = "none";
            }
       }else{
        box.style.display="flex";
       }
    });
}

function GeneratePassword() {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_+=<>?/{}[]|';

    let selectedChars = '';

    if (document.getElementById('uppercase').checked) {
        selectedChars += uppercaseChars;
    }

    if (document.getElementById('lowercase').checked) {
        selectedChars += lowercaseChars;
    }

    if (document.getElementById('number').checked) {
        selectedChars += numberChars;
    }

    if (document.getElementById('specialCharacter').checked) {
        selectedChars += specialChars;
    }

    const minLength = 8;
    const maxLength = 50;

    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * selectedChars.length);
        password += selectedChars.charAt(randomIndex);
    }

    document.getElementById('auto').value = password;
}

function CopyPassword() {
    const passwordField = document.getElementById('auto');
    passwordField.select();
    document.execCommand('copy');

    alert('Password copied to clipboard!');
}

const password_type_field = document.querySelector(".password_type-field");

function showManual(){
    password_type_field.style.display = "flex";
    document.querySelector(".manual").style.display = "flex";
    document.querySelector(".auto").style.display = "none";
}

function showAuto(){
    GeneratePassword()
    password_type_field.style.display = "flex";
    document.querySelector(".manual").style.display = "none";
    document.querySelector(".auto").style.display = "flex";
}


function showAddForm(){

    document.querySelector(".add-form").style.display = 'flex';
    document.querySelector(".display-container").style.display = 'none';

}

function showPasswords(){

    document.querySelector(".add-form").style.display = 'none';
    document.querySelector(".display-container").style.display = 'block';

}

const labels = document.querySelectorAll(".label");

labels.forEach(lbl => {
    lbl.addEventListener("click", ()=> {
        labels.forEach(remains => {
            remains.classList.remove("active");
        });
        lbl.classList.add("active");
    })
});

const app_names = document.querySelectorAll(".app-name");

document.getElementById("search").addEventListener("input", ()=> {
    let input = document.getElementById("search").value;
    app_names.forEach(app => {
        let name = app.innerHTML.toLowerCase();

        if (name.includes(input.toLowerCase())) {
            app.parentElement.parentElement.parentElement.parentElement.style.display = 'flex';
        }else{
            app.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
        }
    });
})