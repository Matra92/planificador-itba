# Selector de Materias ITBA

Aplicacion web estatica para planificar la cursada de Ingenieria Informatica del ITBA.

## Que hace

- Usa el plan obligatorio de Informatica ITBA embebido en `app.js`.
- No depende de `correlativas-itba-master` para ejecutarse.
- Toma las materias ya aprobadas.
- Usa un rango de creditos por cuatrimestre: minimo y maximo.
- Respeta correlativas y requisitos de creditos acumulados.
- Calcula una hoja de ruta completa hasta terminar la carrera lo antes posible.

## Uso

1. Abrir [index.html](./index.html) en el navegador.
2. Marcar las materias aprobadas.
3. Elegir el rango de creditos por cuatrimestre.
4. Revisar el plan optimo sugerido para todos los cuatrimestres restantes.

## Nota

La carpeta `correlativas-itba-master` ya no es necesaria para que la app funcione. Puedes borrarla y la aplicacion sigue operativa porque la data relevante quedo copiada dentro del proyecto.
