// ============================================================================
// ARCHIVO JS PRINCIPAL: PROTOTIPO LOGÍSTICO (EPE1)
// Modelo de interacción: Seleccionar -> Escuchar -> Procesar -> Representar
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // MODO OSCURO (Alternar tema y recordar preferencia en localStorage)
  // ==========================================================================
  const btnThemeToggle = document.getElementById('btn-theme-toggle');

  // Recuperar tema previo
  const temaGuardado = localStorage.getItem('theme');
  if (temaGuardado === 'dark') {
    document.body.classList.add('dark-theme');
    btnThemeToggle.textContent = '☀️ Modo Claro';
  }

  btnThemeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const esOscuro = document.body.classList.contains('dark-theme');
    
    btnThemeToggle.textContent = esOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    localStorage.setItem('theme', esOscuro ? 'dark' : 'light');
  });


  // ==========================================================================
  // INTERACCIÓN 01: Actualización de Estado (Evento Click y Fecha/Hora)
  // ==========================================================================
  const btnActualizarEstado = document.getElementById('btn-actualizar-estado');
  const msgActualizacion = document.getElementById('msg-actualizacion');

  btnActualizarEstado.addEventListener('click', () => {
    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString('es-CL');
    msgActualizacion.textContent = `Sincronizado con Central Logística a las ${horaFormateada}`;
  });


  // ==========================================================================
  // INTERACCIÓN 02: Cambio de Estado Visual (Booleano + Toggle de Clase)
  // ==========================================================================
  const btnToggleRuta = document.getElementById('btn-toggle-ruta');
  const indicadorRuta = document.getElementById('indicador-ruta');
  let rutaBloqueada = false;

  btnToggleRuta.addEventListener('click', () => {
    rutaBloqueada = !rutaBloqueada;

    if (rutaBloqueada) {
      indicadorRuta.textContent = 'Ruta 404 - BLOQUEADA (Tráfico)';
      indicadorRuta.classList.remove('badge-active');
      indicadorRuta.classList.add('badge-blocked');
    } else {
      indicadorRuta.textContent = 'Ruta 404 - Normal';
      indicadorRuta.classList.remove('badge-blocked');
      indicadorRuta.classList.add('badge-active');
    }
  });


  // ==========================================================================
  // INTERACCIÓN 03: Contador Operativo (Variables y Renderizado)
  // ==========================================================================
  const contadorValor = document.getElementById('contador-valor');
  const btnSumar = document.getElementById('btn-sumar');
  const btnRestar = document.getElementById('btn-restar');
  const btnReset = document.getElementById('btn-reset');

  let paquetesContador = 0;

  function renderContador() {
    contadorValor.textContent = paquetesContador;
  }

  btnSumar.addEventListener('click', () => { paquetesContador++; renderContador(); });
  btnRestar.addEventListener('click', () => { 
    if (paquetesContador > 0) paquetesContador--; 
    renderContador(); 
  });
  btnReset.addEventListener('click', () => { paquetesContador = 0; renderContador(); });


  // ==========================================================================
  // INTERACCIÓN 04: Mostrar y Ocultar Detalle (Toggle Visibilidad + Texto)
  // ==========================================================================
  const btnToggleDetalle = document.getElementById('btn-toggle-detalle');
  const panelDetalle = document.getElementById('panel-detalle');

  btnToggleDetalle.addEventListener('click', () => {
    const estaOculto = panelDetalle.classList.toggle('hidden');
    btnToggleDetalle.textContent = estaOculto ? 'Mostrar Detalles' : 'Ocultar Detalles';
  });


  // ==========================================================================
  // INTERACCIÓN 05: Vista Previa en Tiempo Real (Evento input + Contadores)
  // ==========================================================================
  const inputObservacion = document.getElementById('input-observacion');
  const previewTexto = document.getElementById('preview-texto');
  const charCount = document.getElementById('char-count');
  const btnLimpiarPreview = document.getElementById('btn-limpiar-preview');

  inputObservacion.addEventListener('input', () => {
    const texto = inputObservacion.value;
    previewTexto.textContent = texto.trim() === '' ? '(Sin observaciones)' : texto;
    charCount.textContent = `${texto.length} caracteres`;
  });

  btnLimpiarPreview.addEventListener('click', () => {
    inputObservacion.value = '';
    previewTexto.innerHTML = '<em>(Sin observaciones)</em>';
    charCount.textContent = '0 caracteres';
  });


  // ==========================================================================
  // INTERACCIÓN 06: Selección y Cálculo (Conversión explícita ParseFloat)
  // ==========================================================================
  const selectZona = document.getElementById('select-zona');
  const inputPeso = document.getElementById('input-peso');
  const btnCalcularCosto = document.getElementById('btn-calcular-costo');
  const resultadoCalculo = document.getElementById('resultado-calculo');

  btnCalcularCosto.addEventListener('click', () => {
    const tarifaBase = parseFloat(selectZona.value);
    const peso = parseFloat(inputPeso.value) || 0;
    const total = tarifaBase * peso;

    resultadoCalculo.textContent = `Total a Cobrar: $${total.toLocaleString('es-CL')}`;
  });


  // ==========================================================================
  // INTERACCIÓN 07: Rango y Progreso (Evento input + Estilos dinámicos)
  // ==========================================================================
  const rangeCarga = document.getElementById('range-carga');
  const textoPorcentaje = document.getElementById('texto-porcentaje');
  const barraProgreso = document.getElementById('barra-progreso');

  rangeCarga.addEventListener('input', () => {
    const valor = rangeCarga.value;
    textoPorcentaje.textContent = valor;
    barraProgreso.style.width = `${valor}%`;
  });


  // ==========================================================================
  // INTERACCIÓN 08: Creación y Eliminación Dinámica (createElement / remove)
  // ==========================================================================
  const inputNuevaTarea = document.getElementById('input-nueva-tarea');
  const btnAgregarTarea = document.getElementById('btn-agregar-tarea');
  const listaTareas = document.getElementById('lista-tareas');

  btnAgregarTarea.addEventListener('click', () => {
    const textoTarea = inputNuevaTarea.value.trim();
    if (textoTarea === '') return;

    const li = document.createElement('li');
    const spanText = document.createElement('span');
    spanText.textContent = textoTarea;

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'X';
    btnDelete.className = 'btn btn-small btn-danger';
    btnDelete.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(spanText);
    li.appendChild(btnDelete);
    listaTareas.appendChild(li);
    inputNuevaTarea.value = '';
  });


  // ==========================================================================
  // INTERACCIÓN 09: Filtrado de una Colección (Búsqueda en texto)
  // ==========================================================================
  const inputFiltro = document.getElementById('input-filtro');
  const listaGuias = document.querySelectorAll('.guia-item');

  inputFiltro.addEventListener('input', () => {
    const filtro = inputFiltro.value.toLowerCase();

    listaGuias.forEach(item => {
      const texto = item.textContent.toLowerCase();
      if (texto.includes(filtro)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });


  // ==========================================================================
  // INTERACCIÓN 10: Formulario y Validación (preventDefault + Validación)
  // ==========================================================================
  const formDespacho = document.getElementById('form-despacho');
  const clienteNombre = document.getElementById('cliente-nombre');
  const clienteDireccion = document.getElementById('cliente-direccion');
  const codigoPaquete = document.getElementById('codigo-paquete');
  const formMensaje = document.getElementById('form-mensaje');

  formDespacho.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = clienteNombre.value.trim();
    const direccion = clienteDireccion.value.trim();
    const codigo = codigoPaquete.value.trim();

    if (nombre === '' || direccion === '' || codigo.length < 5) {
      formMensaje.textContent = 'Error: Complete todos los campos. El código debe tener al menos 5 caracteres.';
      formMensaje.className = 'form-feedback feedback-error';
      return;
    }

    formMensaje.textContent = `¡Despacho #${codigo} registrado con éxito para ${nombre}!`;
    formMensaje.className = 'form-feedback feedback-success';
    formDespacho.reset();
  });

});/ /   A c t u a l i z a c i o n   d e   d o c u m e n t a c i o n   E P E 1  
 