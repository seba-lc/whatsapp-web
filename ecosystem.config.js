module.exports = {
  apps: [
    {
      name: "business-whatsapp-api",
      script: "./src/app.js",
      watch: false, //sirve que para si por algun motivo el repositorio fue actualizado en el servidor, el restart de la aplicacion para que tome los cambios sea manual.
      max_memory_restart: '1000M', //cuando la app supere 1Gb de memoria, la app se reinicia. Pero lo que no se es si se limpia el script de alguna forma (?)
      exec_mode: "cluster", //esto sirve para ver si la aplicacion usa uno o mas nucleos del procesador. Por lo que entiendo la app se replica en cada nucleo
      //supongo para darle mas velocidad. El tema es que el dice que se le duplicaban los documentos de la db. Estudiar arq de microservicios (?)
      instances: 1, //mismo concepto del cluster. Son las veces que se va a instanciar la app en el procesador
      cron_restart: "59 23 * * *", //reinicio automatico todos los dias a las 23:59
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }
  ]
};
