function toggleTheme() {
    document.body.classList.toggle("dark");
}

function showBranch(branch) {
    let content = document.getElementById("content");

    if(branch === 1) {
        content.innerHTML = `
        <h2>Branch 1 Details</h2>
        <p><b>Address:</b> Madhav Ganj Chauraha, Gwalior</p>
        <p><b>Timing:</b> 12:00 PM – 11:00 PM</p>
        <p><b>Contact:</b> +91 97531 30974</p>
        <h3>Popular Items</h3>
        <p>Aata Golgappe | Butter Paneer Cheela | Cheese Paneer Pizza</p>
        `;
    } else {
        content.innerHTML = `
        <h2>Branch 2 Details</h2>
        <p><b>Address:</b> Nai Sadak, Patankar Bazar, Gwalior</p>
        <p><b>Timing:</b> 2:00 PM – 10:30 PM</p>
        <p><b>Contact:</b> +91 99266 47484</p>
        <h3>Popular Items</h3>
        <p>Karela Chaat | Paneer Cheela | Golgappe</p>
        `;
    }
}
