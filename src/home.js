import pic1 from "./assets/pic1.jpeg";

function generateHome(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
    
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("container");

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");

    const p = document.createElement("p");
    p.textContent = "We got the best shiz in town.";
    div1.appendChild(p);

    const img = document.createElement("img");
    img.src = pic1;
    div2.appendChild(img);

    homeContainer.appendChild(div1);
    homeContainer.appendChild(div2);

    content.appendChild(homeContainer);
}

export {generateHome};