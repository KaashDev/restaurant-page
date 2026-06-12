function createMenuItem(name, price, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("h4");
    itemName.textContent = name;
    menuItem.appendChild(itemName);

    const itemPrice = document.createElement("h4");
    itemPrice.textContent = price;
    menuItem.appendChild(itemPrice);

    const itemDesc = document.createElement("p");
    itemDesc.innerHTML = description;
    menuItem.appendChild(itemDesc);

    return menuItem;
}

function createMenuSection(title, items) {
    const section = document.createElement("div");

    const sectionTitle = document.createElement("h3");
    sectionTitle.textContent = title;
    section.appendChild(sectionTitle);

    const separator = document.createElement("div");
    separator.classList.add("separator");
    section.appendChild(separator);

    items.forEach(item => {
        section.appendChild(createMenuItem(item.name, item.price, item.description));
    });

    return section;
}

function generateBody(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = "Explore our Menu";
    content.appendChild(title);

    const container = document.createElement("div");
    container.classList.add("container");

    const burgerDesc = "Two premium beef patties.<br>Two slices of melted cheese.<br>Our signature G14 sauce.<br>That's it, nowhere to hide.<br>We dare you to try this burger in its purest form.<br><br><em>810 Cals</em>";
    const burgerItem = { name: "Blaster Double Cheeseburger", price: "$12", description: burgerDesc };

    container.appendChild(createMenuSection("Featured",  [burgerItem, burgerItem, burgerItem]));
    container.appendChild(createMenuSection("Signature", [burgerItem, burgerItem, burgerItem]));
    container.appendChild(createMenuSection("OG Burgers",[burgerItem, burgerItem, burgerItem]));
    container.appendChild(createMenuSection("Vegan",     [burgerItem, burgerItem, burgerItem]));

    content.appendChild(container);
}

export {generateBody};