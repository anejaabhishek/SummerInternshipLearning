const courses = [
    {
        name : "React JS",
        price : "200",
    },
    {
        name : "HTML CSS",
        price : "100",
    },
    {
        name : "Angular",
        price : "800",
    },
    {
        name : "React Native",
        price : "250",
    },
    {
        name : "C++",
        price : "700",
    },
    {
        name : "Javascript",
        price : "50",
    }
];

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";

    courses.forEach( course => {
       
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("Rs " + course.price);
        span.appendChild(price);

        li.appendChild(span);

        ul.appendChild(li);

    });
}

// generateList();

// Another way of running the generateList function.

window.addEventListener("load", generateList);

const successButton = document.querySelector(".sort-btn.btn-success");

successButton.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price);
    generateList();
})

const primaryButton = document.querySelector(".sort-btn.btn-primary");

primaryButton.addEventListener("click", () => {
    courses.sort( (a, b) => b.price - a.price);
    generateList();
})