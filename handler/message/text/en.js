exports.textTnC = () => {
    return `
*O código-fonte / robô é um programa de código aberto (gratuito) escrito em Javascript, você pode usar, copiar, modificar, combinar, publicar, distribuir, sublicenciar e / ou vender cópias sem remover o autor principal do código-fonte / robô .
Ao usar este código-fonte / robô, você concorda com os seguintes Termos e Condições:
- Código fonte / robô não armazena seus dados em nossos servidores.
- O código-fonte / robô não é responsável pelos adesivos que você faz a partir deste robô e pelos vídeos, imagens e outros dados que você obtém do código-fonte / robô.
- O código-fonte / robô não pode ser usado para serviços que visam / contribuem para:*
     *• sexo / tráfico humano*
     *• jogos de azar*
     *• comportamento viciante prejudicial*
    *• crime*
     *• violência (a menos que necessário para proteger a segurança pública)*
     *• queima de floresta / desmatamento*
     *• discurso de ódio ou discriminação com base na idade, sexo, identidade de gênero, raça, sexualidade, religião, nacionalidade*

*Código Fonte Do Robô:* https://github.com/YogaSakti/imageToSticker
*Biblioteca NodeJS WhatsApp:* https://github.com/open-wa/wa-automate-nodejs

*Atenciosamente, Pedro Cardozo / Kakashi Modz.*`
}

exports.textMenu = (pushname) => {
    return `
*Olá, ${pushname || ''}! 👋️*
*Aqui estão alguns dos recursos deste robô!* ✨

*Criador De Figurinhas:*
1. *#sticker*
*Para converter uma imagem em uma figurinha, envie a imagem com a legenda #sticker ou responda à imagem que foi enviada com #sticker.*

2. *#stickers* _<Image Url>_
*Para mudar a imagem do url/link para uma figurinha.*

3. *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_
*Para transformar um GIF em uma figurinha (somente Giphy)*

*Baixar Vídeos De Redes Sociais:*
1. *#tiktok* _<post / video url>_
*O Robô ira baixar e enviar o vídeo do link/url. (TikTok)*

2. *#fb* _<post / video url>_
*O Robô ira baixar e enviar o vídeo do link/url (Facebook).*

3. *#ig* _<post / video url>_
*O Robô ira baixar e enviar o vídeo do link/url (Instagram).*

4. *#twt* _<post / video url>_
*O Robô ira baixar e enviar o vídeo do link/url (Twitter).*

Etc:
1. *#tnc*
*Exibe os termos e condições do robô.*

*Espero que você tenha um ótimo dia!* ✨`
}

exports.textAdmin = () => {
    return `
⚠ [* Grupo de administradores apenas *] ⚠
*Aqui estão alguns dos recursos de administração de grupo incluídos neste bot!*

1. *#kick* @user
*Removendo membros do grupo (pode ser mais de 1).*

2. *#promote* @user
*Promova membros para administradores do grupo.*

3. *#demote* @user
*Rebaixar administradores de grupo.*

3. *#tagall*
*Menção de todos os membros do grupo.*
}
