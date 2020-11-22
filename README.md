# Criador de Vídeos Automático

## Esse programa foi feito na intenção de automatizar a criação de vídeos e realizar o upload direto na sua conta do Youtube.
## Para o seu funcionamento, 6 classe diferentes foram criadas afim de cuidar de cada parte da criação do vídeo.
## Essas classes são chamadas de robos no projeto (image, input, state, text, video e youtube).

### Funcionamento

#### A primeira coisa que devemos fazer é iniciar o programa no node e escolher um tema

![Escolhendo um Tema](https://github.com/WilliamDCGomes/Criador-de-videos-automatico/blob/master/ReadmeFiles/EscolhendoTema.gif)

#### Logo após o robo de texto começará a procurar sobre o tema no wikipédia

![Procurando pelo Tema](https://github.com/WilliamDCGomes/Criador-de-videos-automatico/blob/master/ReadmeFiles/RoboDeTexto.gif)

#### Com o tema salvo em nosso projeto, submetemos as palavras chaves encontradas para buscar imagens do assunto e baixa-las no projeto
#### Caso o download de uma imagem falhe, é tentado baixar outra imagem no lugar

![Baixando Imagens](https://github.com/WilliamDCGomes/Criador-de-videos-automatico/blob/master/ReadmeFiles/RoboDeImagem.gif)

#### Com as imagen baixadas, utilizamos o robo de vídeo para converte-las e fazer com que as expressões encontradas no robo de texto se tornem imagens

![Convertendo Imagens](https://github.com/WilliamDCGomes/Criador-de-videos-automatico/blob/master/ReadmeFiles/RoboDeVideo.gif)

#### Com todas as imagens convertidas, começamos a renderizar o vídeo atrávez de código

![Renderizando Vídeo](https://github.com/WilliamDCGomes/Criador-de-videos-automatico/blob/master/ReadmeFiles/RedenrizandoVideo.gif)

#### Com o vídeo renderizado e pronto, é solicitado permissão para realizar upload na sua conta do YouTube
#### Para dar permissão, basta copiar e colar o URL que é dada no sistema em algum navegador que tenha a sua conta do YouTube logada

![Enviando para o YouTube](https://github.com/WilliamDCGomes/Criador-de-videos-automatico/blob/master/ReadmeFiles/EnviandoParaYoutube.gif)

#### Resultado Final do Vídeo

![Resultado Final](https://github.com/WilliamDCGomes/Criador-de-videos-automatico/blob/master/ReadmeFiles/Resultado.gif)
