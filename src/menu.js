function generateBody(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
    
    const p = document.createElement("p");
    p.textContent = "sdsfsdfsdf";
    content.appendChild(p);
}

export {generateBody};