"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("@bot-whatsapp/bot");
const provider_baileys_1 = require("@bot-whatsapp/provider-baileys");
const flowServerUp = (0, bot_1.addKeyword)('Server ru up?').addAnswer('Yes sr I am.');
// const flowBienvenida = addKeyword(EVENTS.WELCOME)
//   .addAnswer('Hola! Con qué podemos ayudarte? En la brevedad uno de nuestros administradores se pondrá en contacto contigo :)');
// const flowCash = addKeyword(['1', 'efectivo']).addAnswer('Perfecto! Te mantendremos informado sobre el estado del pedido :)');
// const flowCard = addKeyword(['2', 'transferencia']).addAnswer(`Perfecto! Nuestro alias es: kuranda.mp \nTe pedimos el comprobante una vez realizado el pago, y te mantendremos informado sobre el estado del pedido :)`);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const provider = (0, bot_1.createProvider)(provider_baileys_1.BaileysProvider, {
        name: 'sessionBot_kurandaMarket'
    });
    provider.initHttpServer(3010);
    (_a = provider.http) === null || _a === void 0 ? void 0 : _a.server.post('/send-message', (0, provider_baileys_1.handleCtx)((bot, req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const phone = req.body.phone;
        const message = req.body.message;
        const mediaUrl = req.body.mediaUrl;
        yield bot.sendMessage(phone, message, {
            media: mediaUrl
        });
        res.end('esto es del server de polka');
    })));
    // await createBot({
    //   flow: createFlow([flowBienvenida, flowCash, flowCard]),
    //   database: new MemoryDB(),
    //   provider
    // })
});
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
