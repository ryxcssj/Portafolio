// Datos de los proyectos (puedes reemplazarlos con los tuyos)
const proyectos = {
    proyecto1: {
        title: "Landing Page",
        description: "Diseño responsive para una startup de tecnología.",
        image: "https://via.placeholder.com/600x400"
    },
    proyecto2: {
        title: "App Móvil",
        description: "Aplicación desarrollada con React Native para gestión de tareas.",
        image: "https://via.placeholder.com/600x400"
    },
    proyecto3: {
        title: "E-commerce",
        description: "Tienda online con carrito de compras y pasarela de pago.",
        image: "https://via.placeholder.com/600x400"
    },
    proyecto4: {
        title: "Dashboard",
        description: "Visualización de datos con gráficos interactivos.",
        image: "https://via.placeholder.com/600x400"
    },
    proyecto5: {
        title: "Branding",
        description: "Identidad visual para una marca de café artesanal.",
        image: "https://via.placeholder.com/600x400"
    }
};

// Funciones para el modal
function openModal(proyectoId) {
    const modal = document.getElementById('modal');
    const proyecto = proyectos[proyectoId];

    document.getElementById('modal-title').textContent = proyecto.title;
    document.getElementById('modal-description').textContent = proyecto.description;
    document.getElementById('modal-image').src = proyecto.image;

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}