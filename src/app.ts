import { createBot, createProvider, MemoryDB, createFlow, addKeyword } from '@bot-whatsapp/bot';
import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys';

const main = async () => {

  const provider = createProvider(BaileysProvider, {
    name: 'sessionBot_kurandaBusiness'
  });

  provider.initHttpServer(3015);

  provider.http?.server.post('/send-message', handleCtx(async (bot, req, res) => {
    const phone = req.body.phone;
    const message = req.body.message;
    const mediaUrl = req.body.mediaUrl;
    await bot.sendMessage(phone, message, {
      media: mediaUrl
    })
    res.end('esto es del server de polka')
  }));

}

main();

//https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzltMjZsM3o4d2Y3Y2h6d2g1cGt2Ymxkcm10aHl1dWl2YnJoMWR5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dYZuqJLDVsWMLWyIxJ/giphy.mp4
//tiene que tener la terminacion mp4 dont know why

/*
PM2

se inicializa un proyecto estando en la carpeta y con el codigo:
node src/index.js |||  pm2 start src/index.js

para cerrar todas las aplicaciones que esten corriendo:
pm2 delete all

para correr la app desde el archivo de configuracion del ecosistema:
pm2 start ecosystem.config.js

pm2 logs; nos dice las aplicaciones que estan corriendo y en que puerto lo hacen

pm2 plus:
https://app.pm2.io/bucket/66329d5938642d83f413a2b8/backend/overview/servers

*/


