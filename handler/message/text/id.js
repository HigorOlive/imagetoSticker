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
Olá, $ {pushname}! 👋️
Aqui estão alguns dos recursos deste bot! ✨

Criador De Figurinhas:
1. *#sticker*
Para transformar a imagem em uma figurinha. 
Uso: enviar imagens com a legenda #sticker ou responder a imagens que foram enviadas com #sticker

2. *#sticker* _ <URL da imagem> _
*Para mudar a imagem do url para uma figurinha.*
*Como Usar: Enviar imagens com a legenda #sticker ou responder a imagens que foram enviadas com #sticker*

3. *#gifsticker* _ <Giphy URL> _ / * # stickergif * _ <Giphy URL> _
*Para transformar um GIF em uma figurinha (somente Giphy)*
*Uso: Enviar mensagens com esse formato: gifsticker https://media.giphy.com/media/JUvI2c1ddyzkwK4RlV/giphy.gif*

4. * #memesticker* _ <teks atas> _ | _ <teks bawah> _
*Para fazer um meme de figurinha com texto superior e inferior*
*Uso: Enviar imagem com legenda: #meme top me | ou você também pode responder a uma imagem existente.*

*Baixar Vídeos De Redes Sociais:*

1. *#tiktok* _ <tiktok url> _
*Para baixar vídeos do vídeo tiktok.*
*Uso: Enviar mensagens com esse formato: #tiktok https://www.tiktok.com/@itsandani/video/6869248690381425922*

2. *#fb* _ <post/video url> _
*Para baixar vídeos do Facebook.*
*Uso: Enviar mensagem com esse formato: #fb https://www.facebook.com/.....*

3. *#ig* _ <instagram post url> _
*Para baixar fotos e vídeos do Instagram.*
*Uso: Enviar mensagens com esse formato: #ig https://www.instagram.com/p/BPOd1vhDMIp/*

4. * # twt * _ <twitter post url> _
*Para baixar fotos e vídeos do Twitter.*
*Uso: Enviar mensagem com esse formato: #twt https://twitter.com/ntsana_/status/1306108656887324672*

Etc:

1. * #translate* _ <kode bahasa> _
*Para interpretar mensagens no idioma especificado.*
*Uso: Responder / citar / responder a mensagem que você deseja traduzir com #translate id _ <- id é o código do idioma. o código do idioma pode ser visto em https: //bit.ly/33FVldE*

2. *#resi* _ <kurir> _ _ <nomer resi> _
Para verificar o status de entrega da sua compra(apenas correios)
Uso: Enviar mensagem com esse formato: #resicorreios seucpf* 

3. *#meme* _ <teks atas> _ | _ <teks bawah> _
*Para criar um meme com texto superior e inferior*
*Uso: Enviar imagem com a legenda: #meme texto | ou você também pode responder a uma imagem existente.*


4. *#tnc*
*Exibe os termos e condições do bot.*



*Espero que você tenha um ótimo dia!* ✨`
}

exports.textAdmin = () => {
    return `
⚠ [* Grupo de administradores apenas *] ⚠
*Aqui estão alguns dos recursos de administração de grupo incluídos neste bot!*

1. *#kick* @numero
*Removendo membros do grupo (pode ser mais de 1).*

2. *#promote* @numero
*Promova membros para administradores do grupo.*

3. *#demote* @numero
*Rebaixar administradores de grupo.*

4. *#tagall*
*Menção de todos os membros do grupo.*
}

5. *#del*
Para excluir mensagens do robô (responder às mensagens de bot com #del)`
}

exports.textDonasi = () => {
    return `
Obrigado por usar meu robô ❤

}
