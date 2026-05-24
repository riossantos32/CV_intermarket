const projects = [
    {
        title: "Hotel luna",
        description: "Hotel Luna es un hospedaje de ambiente familiar y urbano ubicado en Juigalpa, Chontales. Diseñado especialmente para viajeros de negocios, comerciantes, visitadores médicos y turistas que buscan una estancia cómoda, segura y accesible..",
        image: `<img src="hotelluna.png" alt="Hotel Luna" class="project-image">`,
        link: "https://riossantos32.github.io/hotellunajuigalpa/",
        tags: ["HTML", "CSS", "JS"]
    },
    {
        title: "Task Manager",
        description: "Aplicación para gestionar tareas diarias con almacenamiento local (LocalStorage).",
        image: "📝",
        link: "#",
        tags: ["JS", "CSS"]
    },
    {
        title: "Weather Dashboard",
        description: "Dashboard que muestra el clima en tiempo real utilizando una API externa.",
        image: "☀️",
        link: "#",
        tags: ["API", "JS", "CSS"]
    }
];

const team = [
    {
        name: "Laura Carrasco Robleto ",
        role: "UI/UX Designer",
        avatar: "👨🎨",
        social: { github: "#", linkedin: "#" }
    },
    {
        name: "Santos Yosmar Rios Torrez",
        role: "Frontend Developer",
        avatar: "👩‍💻",
        social: { github: "#", linkedin: "#" }
    },
    {
        name: "Joseth Alexander Gatica",
        role: "Base de datos",
        avatar: "👩‍💻     ",
        social: { github: "#", linkedin: "#" }
    }
];

function createProjectCard(project) {
    return `
        <div class="project-card" onclick="window.location.href='${project.link}'">
            <div class="project-image">
                ${project.image}
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags" style="margin-bottom: 1rem;">
                    ${project.tags.map(tag => `<span style="background: #f1f5f9; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; margin-right: 0.5rem; color: #64748b;">${tag}</span>`).join('')}
                </div>
                <span class="project-link">Ver Proyecto <span>&rarr;</span></span>
            </div>
        </div>
    `;
}

function createTeamCard(member) {
    return `
        <div class="team-card">
            <div class="team-avatar">
                <div class="team-avatar-inner">${member.avatar}</div>
            </div>
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            <div class="team-social">
                <a href="${member.social.github}">GitHub</a>
                <a href="${member.social.linkedin}">LinkedIn</a>
            </div>
        </div>
    `;
}

function renderContent() {
    const projectsContainer = document.getElementById('projects-container');
    const teamContainer = document.getElementById('team-container');
    
    if (projectsContainer) {
        projectsContainer.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }
    
    if (teamContainer) {
        teamContainer.innerHTML = team.map(member => createTeamCard(member)).join('');
    }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    
    // Animación simple al hacer scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .team-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
