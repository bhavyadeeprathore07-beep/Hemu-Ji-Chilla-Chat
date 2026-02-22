function showBranch(branch) {
    let content = document.getElementById("content");

    if(branch === 1) {
        content.innerHTML = `
        <h2>Branch 1</h2>
        <p><b>Address:</b> Madhav Ganj Chauraha, Gwalior</p>
        <p><b>Timing:</b> 12:00 PM to 11:00 PM</p>
        <h3>Menu Highlights</h3>
        <ul>
            <li>Aata Golgappe</li>
            <li>Butter Paneer Cheela</li>
            <li>Cheese Paneer Pizza</li>
            <li>Veg Cheese Maggi</li>
            <li>Paneer Karela Chaat</li>
        </ul>
        <p><b>Contact:</b> +91 99999 99999</p>
        `;
    } else {
        content.innerHTML = `
        <h2>Branch 2</h2>
        <p><b>Address:</b> Nai Sadak, Patankar Bazar, Gwalior</p>
        <p><b>Timing:</b> 2:00 PM to 10:30 PM</p>
        <h3>Menu Highlights</h3>
        <ul>
            <li>Aata Golgappe</li>
            <li>Butter Paneer Cheela</li>
            <li>Karela Chaat</li>
            <li>Paneer Karela Chaat</li>
        </ul>
        <p><b>Contact:</b> +91 88888 88888</p>
        `;
    }
}

function showLogin() {
    document.getElementById("loginBox").style.display = "block";
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234") {
        document.getElementById("loginMessage").innerHTML = "Login Successful!";
    } else {
        document.getElementById("loginMessage").innerHTML = "Wrong Credentials!";
    }
}