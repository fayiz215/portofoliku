const projects = [
    {
        title: "Gold Zakat Calculator",
        image: "img/calc.jpg",
        description: "Application for calculating gold zakat complete with localStorage feature.",
        tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        link: "https://github.com/fayiz215/calc-zakat"
    },
    {
        title: "Traffic light",
        image: "img/lampu.jpg",
        description: "Traffic light simulation using JavaScript.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/fayiz215/traffic"
    },
    {
        title: "Portfolio Design Sketch",
        image: "img/code1.jpg",
        description: "Simple portfolio website for HTML, CSS and JAVASCRIPT practice.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://www.figma.com/design/9AfNEiz9CBYZ7loscoc0ZB/my-space-work?node-id=379-61&t=m7xvlL2H94Qko48n-1"
    },
      {
        title: "To-Do App",
        image: "img/todo.jpg",
        description: "Aplikasi daftar tugas dengan fitur tambah, hapus, dan simpan data.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "#"
    },
    {
        title: "Weather App",
        image: "img/weather.jpg",
        description: "Aplikasi untuk melihat cuaca realtime menggunakan API.",
        tags: ["HTML", "CSS", "JavaScript", "API"],
        link: "#"
    },
    {
        title: "Login Form UI",
        image: "img/login.jpg",
        description: "Desain halaman login modern dan minimalis.",
        tags: ["HTML", "CSS", "UI/UX"],
        link: "#"
    },
];

const gallery = document.getElementById("gallery");

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    const card = document.createElement("div");
    card.className = "project-card";

    const img = document.createElement("img");
    img.src = project.image;
    img.className = "image";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.className = "desc-p";
    desc.textContent = project.description;

    const tags = document.createElement("div");
    tags.className = "tag-content";
    tags.textContent = project.tags.join(", ");

    const linkBtn = document.createElement("a");
    linkBtn.href = project.link;
    linkBtn.textContent = "Lihat Project";
    linkBtn.target = "_blank"
    linkBtn.className = "btnpj";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tags);
    card.appendChild(linkBtn);

    gallery.appendChild(card);
}


