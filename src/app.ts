import { createBot, createProvider, MemoryDB, createFlow, addKeyword } from '@bot-whatsapp/bot';
import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys';

const flowBienvenida = addKeyword('hola').addAnswer('Bienvenido a Marketar :)')

const main = async () => {

  const provider = createProvider(BaileysProvider);

  provider.initHttpServer(3002);

  provider.http?.server.post('/send-message', handleCtx(async (bot, req, res) => {
    const phone = req.body.phone;
    const message = req.body.message;
    const mediaUrl = req.body.mediaUrl;
    await bot.sendMessage(phone, message, {
      media: mediaUrl
    })
    res.end('esto es del server de polka')
  }));

  await createBot({
    flow: createFlow([flowBienvenida]),
    database: new MemoryDB(),
    provider
  })
}

main();
