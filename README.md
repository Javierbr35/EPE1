# Prototipo Web de Monitoreo Logístico

Este proyecto es un prototipo interactivo desarrollado para responder a las necesidades operativas de una empresa de logística de última milla. Permite realizar un seguimiento visual e interactivo de los despachos directamente desde el navegador web.

## 🚀 Tecnologías Utilizadas

- **HTML5:** Estructura semántica del documento.
- **CSS3:** Diseño responsivo (Grid/Flexbox) y componentes de UI.
- **JavaScript (ES6):** Manipulación dinámica del DOM sin librerías externas.
- **Git & GitHub:** Control de versiones y alojamiento.
- **GitHub Pages:** Despliegue continuo de la aplicación web.

## 📦 Funcionalidades e Interacciones Desarrolladas

1. **Actualización de Estado:** Sincronización con la hora local de la central.
2. **Cambio de Estado Visual:** Alterna estados de rutas mediante clases dinámicas.
3. **Contador Operativo:** Incremento y decremento de paquetes procesados.
4. **Mostrar/Ocultar Detalle:** Despliegue de información de vehículos.
5. **Vista Previa en Tiempo Real:** Reflejo y contador de caracteres de observaciones.
6. **Selección y Cálculo:** Cotización de tarifa por zona y peso.
7. **Rango y Progreso:** Control tipo range para medir porcentaje de carga.
8. **Creación y Eliminación Dinámica:** Gestión de lista de tareas operativas.
9. **Filtrado de Colección:** Búsqueda en tiempo real de guías de despacho.
10. **Formulario y Validación:** Registro de envíos previniendo recarga mediante `preventDefault()`.

## 🛠️ Guía de Pasos Git / GitHub

Para cumplir con el puntaje completo en el control de versiones (Ramas, PR y GitHub Pages):

1. **Inicializar y realizar commits iniciales:**
   ```bash
   git init
   git add .
   git commit -m "feat: Estructura inicial HTML y CSS"
   git commit -m "feat: Implementacion de interacciones JS 01 a 05"
   git commit -m "feat: Implementacion de interacciones JS 06 a 10"
