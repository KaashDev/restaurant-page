function generateContact(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const container = document.createElement("div");
    container.classList.add("container");

    // Contact details column
    const detailsDiv = document.createElement("div");

    const heading = document.createElement("h2");
    heading.textContent = "Contact Details";
    detailsDiv.appendChild(heading);

    const phoneLabel = document.createElement("h3");
    phoneLabel.textContent = "Phone: ";
    detailsDiv.appendChild(phoneLabel);

    const phoneText = document.createElement("p");
    phoneText.textContent = "+1 343 235 2452";
    detailsDiv.appendChild(phoneText);

    const emailLabel = document.createElement("h3");
    emailLabel.textContent = "Email: ";
    detailsDiv.appendChild(emailLabel);

    const emailText = document.createElement("p");
    emailText.textContent = "contact@honestburger.com";
    detailsDiv.appendChild(emailText);

    container.appendChild(detailsDiv);

    // Map column
    const mapDiv = document.createElement("div");

    const iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d737684.4698462278!2d-80.14585300220958!3d43.760818620782885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d14b83b3a303%3A0xcb625f0e18133c59!2sHonest%20Restaurant%20Scarborough!5e0!3m2!1sen!2sca!4v1781308073337!5m2!1sen!2sca";
    iframe.width = "400";
    iframe.height = "300";
    iframe.style.border = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    mapDiv.appendChild(iframe);

    container.appendChild(mapDiv);

    content.appendChild(container);
}

export { generateContact };