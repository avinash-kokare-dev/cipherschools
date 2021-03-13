function handleChange() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if(username === '' || password === ''){
        alert("Please Enter all the values !");
        window.location.href = "index.html";
        return
    }
    localStorage.setItem('username',username);
    localStorage.setItem('password',password); 
    window.location.href = "Home.html";
};

function myData(){
    console.log('This is my data form login page');
    const data = localStorage.getItem('username');
    console.log(data);
    document.getElementById('name').innerText = data;
}

