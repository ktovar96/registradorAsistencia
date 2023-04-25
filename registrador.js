// Función para validar el nombre completo del estudiante
function validarNombre(nombre) {
    const regexNombre = /^[A-Za-záéíóúñ]+(\s[A-Za-záéíóúñ]+)+$/;
    const nombreSinEspacios = nombre.trim();
    return regexNombre.test(nombreSinEspacios);
  }
  
  
  
  // Función para validar el número de cuenta del estudiante
  function validarNumeroCuenta(numero) {
    const regexNumero = /^[0-9]{8}$/;
    const numeroSinEspacios = numero.trim();
    return regexNumero.test(numeroSinEspacios);
  }
  
  // Función para validar el grado y grupo del estudiante
  function validarGradoGrupo(gradoGrupo) {
    const regexGradoGrupo = /^[1-8][A-K]$/;
    const gradoGrupoSinEspacios = gradoGrupo.trim();
    return regexGradoGrupo.test(gradoGrupoSinEspacios);
  }
  
  // Función para obtener la cantidad de asistencia del estudiante
  function obtenerAsistencia(gradoGrupo) {
    if (gradoGrupo === '7G') {
      return 0;
    } else {
      const grupoABC = ['A', 'B', 'C'];
      const grado4oMayor = ['4', '5', '6', '7', '8'];
      let asistencia = 1;
      if (grupoABC.includes(gradoGrupo[1]) && grado4oMayor.includes(gradoGrupo[0])) {
        asistencia += 4;
      } else if(grupoABC.includes(gradoGrupo[1])){
        asistencia += 1;
      } else if(grado4oMayor.includes(gradoGrupo[0])){
        asistencia += 2;
      }
      return asistencia;
    }
  }
  
  // Función para registrar la asistencia del estudiante
  function registrarAsistencia() {
    const nombreCompleto = document.getElementById('nombre').value.trim();
    const numeroCuenta = document.getElementById('cuenta').value.trim();
    const gradoGrupo = document.getElementById('grado_grupo').value.trim();
  
    if (!validarNombre(nombreCompleto)) {
      alert('El nombre completo ingresado no es válido.');
      return;
    }
  
    if (!validarNumeroCuenta(numeroCuenta)) {
      alert('El número de cuenta ingresado no es válido.');
      return;
    }
  
    if (!validarGradoGrupo(gradoGrupo)) {
      alert('El grado y grupo ingresado no es válido.');
      return;
    }
  
    const asistencia = obtenerAsistencia(gradoGrupo);
  
    alert(`La asistencia del estudiante ${nombreCompleto} (${numeroCuenta}) es de ${asistencia}`);
  }
  