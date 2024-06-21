import express from 'express';
import { Telegraf } from 'telegraf';

const app = express();
const bot = new Telegraf(process.env.TELEGRAM_API_KEY);

// Serve your React app URL when the bot receives the /start command
bot.start((ctx) => {
    ctx.reply('Welcome! Click the link below to open the app:-', {
        reply_markup: {
            keyboard: [[{ text: 'Web App', web_app: { url: 'https://my-telegram-bot-ruby.vercel.app' } }]]
        }
    });
    //ctx.reply('https://my-telegram-bot-ruby.vercel.app');
});

// Set the bot webhook
app.use(bot.webhookCallback('/secret-path'));
app.get('/api/test', (req, res) => {
    res.status(200).json({ data: Date.now() })
})
bot.telegram.setWebhook('https://09f4-2401-4900-883b-b408-e121-457e-d5e1-e573.ngrok-free.app/secret-path');

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
