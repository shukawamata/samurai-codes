function showAlert() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    alert("username: " + username + "\npassword: " + password);
}

let charNum = (str) => {
    document.getElementById('inputlength').innerHTML = str.length + "文字";

}
function dis_btn() {
    const text_num = document.getElementById("textbox").value; 
    const state_btn = document.getElementById("inquiry");
    if (text_num.length > 20) {
        state_btn.setAttribute("disabled", true);
    } else {
        state_btn.removeAttribute("disabled");
    }
 }

function able_btn() {
    const username_num = document.getElementById("username").value;
    const password_num = document.getElementById("password").value;
    const state_btn = document.getElementById("login_submit");
    if (username_num.length > 0 && password_num.length > 0 ) {
       // このtrueって何？
       state_btn.removeAttribute("disabled");
    } else {
        state_btn.setAttribute("disabled", true);
    }
    console.log(username_num.length);
    console.log(password_num.length);
}

function showcontents() {
    const contents = document.getElementById("textbox").value;
    if ( contents.length < 10 ) {
        alert("10文字以上入力してください");   
    } else {
        document.getElementById("inquiry_contents").innerHTML = contents;
    }
    console.log(contents);
}