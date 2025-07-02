const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware para permitir requisições de diferentes origens (CORS)
app.use(cors());
// Middleware para parsear dados de formulário URL-encoded
app.use(bodyParser.urlencoded({ extended: false }));
// Middleware para parsear dados JSON (não estritamente necessário para este formulário, mas bom ter)
app.use(bodyParser.json());

// Rota para lidar com o envio de e-mails
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Configurar o transporter de e-mail (SUBSTITUA COM SUAS CREDENCIAIS REAIS)
    // ATENÇÃO: Para Gmail, você pode precisar gerar uma "senha de aplicativo"
    // em suas configurações de segurança da conta Google, em vez de usar sua senha normal.
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Geralmente 'smtp.gmail.com' para Gmail
        port: 587, // Porta padrão para TLS
        secure: false, // Use 'true' para porta 465 (SSL), 'false' para outras portas (TLS)
        auth: {
            user: 'glorran0810@gmail.com', // SUBSTITUA PELO SEU E-MAIL
            pass: 'wvlofjxdzilqaete' // SUBSTITUA PELA SUA SENHA DE APLICATIVO OU SENHA NORMAL
        }
    });

    let mailOptions = {
        from: `"${name}" <${email}>`, // Remetente (nome do formulário e e-mail)
        to: 'glorran0810@gmail.com', // SUBSTITUA PELO E-MAIL DO DESTINATÁRIO (para onde você quer receber as mensagens)
        subject: subject, // Assunto do e-mail
        text: `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\nMensagem: ${message}`, // Conteúdo em texto puro
        html: `<p><b>Nome:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Assunto:</b> ${subject}</p><p><b>Mensagem:</b> ${message}</p>` // Conteúdo em HTML
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ message: 'Erro ao enviar e-mail.' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}` );
});
