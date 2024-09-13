const gameText = document.getElementById("game-text");
const choicesContainer = document.querySelector(".choices");

// Função principal para lidar com as escolhas
function makeChoice(choice) {
    if (choice === 1) {
        gameText.innerHTML = "Você se aventura pelas ruas escuras. O cheiro de sangue enche o ar, e sons de passos rápidos ecoam nas pedras. De repente, um monstro grotesco aparece das sombras! Sua pele está pendurada em tiras e seus olhos estão vazios. O que você faz?";
        updateChoices(["Atacar com sua arma", "Correr para uma rua lateral", "Esconder-se nas sombras"]);
    } else if (choice === 2) {
        gameText.innerHTML = "Você segue em direção à luz. O brilho revela um massacre horrendo: corpos mutilados estão empilhados, e criaturas se banqueteiam na carne. Uma delas percebe sua presença. O que você faz?";
        updateChoices(["Enfrentar a criatura", "Tentar passar despercebido", "Voltar para as ruas escuras"]);
    } else if (choice === 3) {
        gameText.innerHTML = "Você observa a cidade. Ao longe, um lamento horrendo. Um homem cambaleante se aproxima, seus olhos vazios e a pele parcialmente rasgada. Ele balbucia algo enquanto o sangue escorre de sua boca. O que você faz?";
        updateChoices(["Atacá-lo antes que seja tarde", "Fugir para as sombras", "Ajudá-lo"]);
    } else if (choice === 4) {
        gameText.innerHTML = "Você ataca o monstro com toda a sua força. Seu corte abre uma ferida profunda, de onde jorra sangue negro. Ele se enfurece e avança com suas garras estendidas. O que você faz?";
        updateChoices(["Continuar atacando", "Tentar desviar para as sombras", "Correr para um prédio próximo"]);
    } else if (choice === 5) {
        gameText.innerHTML = "Você corre pelas ruas, mas ouve gritos de dor. Ao virar uma esquina, vê outro monstro se alimentando de um homem ainda vivo, rasgando sua carne em tiras. Você está cercado. O que você faz?";
        updateChoices(["Atacar os monstros", "Tentar escalar um prédio", "Fingir estar morto"]);
    } else if (choice === 6) {
        gameText.innerHTML = "Você se esconde nas sombras. O monstro fareja o ar, mas não consegue vê-lo. Ele se aproxima lentamente, seus olhos vazios buscando por você. O que você faz?";
        updateChoices(["Esperar ele passar", "Atacar furtivamente", "Correr para outro esconderijo"]);
    } else if (choice === 7) {
        gameText.innerHTML = "Você ajuda o homem, mas sua pele começa a se desfazer em suas mãos. Ele começa a rir de forma distorcida e agarra você, tentando morder sua garganta. O que você faz?";
        updateChoices(["Atacar o homem", "Tentar fugir", "Chamar por ajuda"]);
    } else if (choice === 8) {
        gameText.innerHTML = "O homem se transforma em uma criatura grotesca, suas mandíbulas se abrem e ele avança em sua direção com uma fome insaciável. O que você faz?";
        updateChoices(["Enfrentar a criatura", "Fugir para as sombras", "Tentar dialogar com ele"]);
    } else if (choice === 9) {
        gameText.innerHTML = "Você tenta atacar a criatura novamente, mas ela desvia e crava suas garras em seu ombro, arrancando um pedaço de carne. O que você faz?";
        updateChoices(["Continuar lutando", "Fugir para um prédio próximo", "Tentar negociar sua sobrevivência"]);
    } else if (choice === 10) {
        gameText.innerHTML = "Você tenta passar despercebido pelas criaturas, mas uma delas ouve seus passos e começa a persegui-lo. Seu coração bate forte enquanto você corre desesperadamente. O que você faz?";
        updateChoices(["Correr mais rápido", "Esconder-se em um beco", "Enfrentar a criatura"]);
    } else if (choice === 11) {
        gameText.innerHTML = "Você tenta ajudar o homem, mas ao tocá-lo, sua carne apodrecida se desfaz, revelando uma massa grotesca de músculos expostos e ossos quebrados. Ele grita e tenta agarrá-lo. O que você faz?";
        updateChoices(["Atacá-lo", "Fugir", "Tentar dialogar"]);
    } else if (choice === 12) {
        gameText.innerHTML = "Você foge para as sombras, mas o monstro percebe seu movimento e corre em sua direção. Ele grita, suas garras prontas para dilacerar. O que você faz?";
        updateChoices(["Enfrentar o monstro", "Correr mais rápido", "Procurar uma arma melhor"]);
    } else if (choice === 13) {
        gameText.innerHTML = "Você tenta se esconder, mas o monstro encontra você. Ele agarra seu braço e arranca com um golpe brutal. O sangue espirra enquanto a dor toma conta de seu corpo. O que você faz?";
        updateChoices(["Atacar com a outra mão", "Gritar por socorro", "Aceitar o destino"]);
    } else if (choice === 14) {
        gameText.innerHTML = "Você ataca o monstro, sua lâmina corta sua carne pútrida, mas ele não para. Seu corpo grotesco se contorce em fúria enquanto ele avança novamente. O que você faz?";
        updateChoices(["Continuar atacando", "Tentar se esconder", "Correr para um prédio próximo"]);
    } else if (choice === 15) {
        gameText.innerHTML = "Você tenta escapar, mas a rua está cheia de corpos e monstros devorando suas vítimas. O cheiro de sangue é insuportável. O que você faz?";
        updateChoices(["Lutar através da horda", "Esconder-se em um beco", "Escalar uma parede próxima"]);
    } else if (choice === 16) {
        gameText.innerHTML = "Você ataca a criatura com ferocidade, sua lâmina rasga sua carne até os ossos. A criatura urra de dor, mas não para. O que você faz?";
        updateChoices(["Continuar atacando", "Tentar fugir", "Procurar outra arma"]);
    } else if (choice === 17) {
        gameText.innerHTML = "Você se esconde em um beco, mas ouve passos se aproximando. Uma figura encapuzada emerge das sombras, com uma lâmina ensanguentada na mão. O que você faz?";
        updateChoices(["Atacar a figura", "Tentar falar com ela", "Fugir o mais rápido possível"]);
    } else if (choice === 18) {
        gameText.innerHTML = "Você tenta fugir, mas seu corpo está ferido e você tropeça. O monstro se aproxima, pronto para devorar sua carne. O que você faz?";
        updateChoices(["Tentar lutar de joelhos", "Implorar por misericórdia", "Gritar por ajuda"]);
    } else if (choice === 19) {
        gameText.innerHTML = "A figura encapuzada fala: 'Você não deveria estar aqui.' Em um movimento rápido, ela crava a lâmina em seu estômago. Sangue jorra de sua boca enquanto a dor toma conta. O que você faz?";
        updateChoices(["Lutar pela vida", "Aceitar seu destino", "Atacar com sua última força"]);
    } else if (choice === 20) {
        gameText.innerHTML = "Você ataca com sua última força. Sua lâmina crava no pescoço da figura, cortando artérias e lançando sangue por toda parte. Ela cai morta, mas o que você fará agora?";
        updateChoices(["Examinar o corpo", "Fugir rapidamente", "Procurar abrigo"]);
    } else if (choice === 21) {
        gameText.innerHTML = "Você examina o corpo da figura encapuzada e encontra uma chave estranha. Ao longe, ouve gritos e passos apressados. O que você faz?";
        updateChoices(["Investigar os gritos", "Fugir em direção oposta", "Procurar um esconderijo"]);
    } else if (choice === 22) {
        gameText.innerHTML = "Você segue os gritos e encontra uma casa de portas abertas. Lá dentro, uma mulher está sendo devorada por criaturas. O que você faz?";
        updateChoices(["Tentar salvá-la", "Fugir antes que seja tarde", "Atacar as criaturas"]);
    } else if (choice === 23) {
        gameText.innerHTML = "Você tenta salvar a mulher, mas as criaturas já arrancaram pedaços de sua carne. Quando você a toca, ela grita em agonia. O que você faz?";
        updateChoices(["Atacar as criaturas", "Fugir", "Tentar consolá-la"]);
    }  else if (choice === 24) {
        gameText.innerHTML = "Você ataca as criaturas ferozmente, sua lâmina atravessa a carne apodrecida delas, mas uma delas crava suas garras em você, causando uma dor excruciante. O que você faz?";
        updateChoices(["Lutar até o fim", "Fugir para salvar sua vida", "Tentar despistá-las"]);
    } else if (choice === 25) {
        gameText.innerHTML = "Você tenta fugir, mas as criaturas estão muito rápidas. Elas o alcançam, rasgando sua pele e arrastando-o para o chão. O que você faz?";
        updateChoices(["Lutar desesperadamente", "Implorar por misericórdia", "Aceitar sua morte"]);
    } else if (choice === 26) {
        gameText.innerHTML = "Você tenta lutar contra as criaturas, mas o cansaço e a dor o dominam. Seus golpes se tornam fracos, e a última coisa que você sente é o frio da morte tomando conta. Fim.";
        updateChoices(["Recomeçar", "Aceitar o destino"]);
    } else if (choice === 27) {
        gameText.innerHTML = "Você foge, correndo o mais rápido que pode. Seu corpo dói, mas você consegue escapar das garras das criaturas. Ao longe, uma torre misteriosa se destaca no horizonte. O que você faz?";
        updateChoices(["Ir em direção à torre", "Esconder-se nas ruínas próximas", "Buscar por suprimentos"]);
    } else if (choice === 28) {
        gameText.innerHTML = "Você segue até a torre. O ambiente ao redor parece distorcido, como se a própria realidade estivesse se partindo. Você sente uma presença maligna observando. O que você faz?";
        updateChoices(["Entrar na torre", "Fugir para longe", "Explorar o perímetro"]);
    } else if (choice === 29) {
        gameText.innerHTML = "Você explora a área ao redor da torre, mas logo percebe que está sendo seguido. Ao virar-se, vê uma sombra grotesca, uma criatura de tentáculos e olhos brilhantes. O que você faz?";
        updateChoices(["Atacar a criatura", "Tentar se esconder", "Correr para a torre"]);
    } else if (choice === 30) {
        gameText.innerHTML = "Você decide entrar na torre. Dentro, um salão vasto e sombrio se revela, com esculturas deformadas de criaturas antigas. Um som de sussurros preenche o ar. O que você faz?";
        updateChoices(["Explorar o salão", "Seguir os sussurros", "Sair da torre imediatamente"]);
    } else if (choice === 31) {
        gameText.innerHTML = "Você segue os sussurros até uma porta oculta. Atrás dela, um altar profano, coberto de sangue fresco, emite uma energia sinistra. No altar, um artefato brilha em um vermelho pulsante. O que você faz?";
        updateChoices(["Tocar o artefato", "Destruir o altar", "Fugir antes que seja tarde"]);
    } else if (choice === 32) {
        gameText.innerHTML = "Ao tocar o artefato, uma visão de horrores insondáveis invade sua mente. Criaturas de pesadelos, presas a uma realidade além da sua compreensão, começam a se manifestar ao seu redor. O que você faz?";
        updateChoices(["Lutar contra as visões", "Tentar destruir o artefato", "Aceitar sua insanidade"]);
    } else if (choice === 33) {
        gameText.innerHTML = "Você tenta destruir o altar, mas a energia dele é avassaladora. Um campo de força sinistro envolve você, drenando sua vitalidade. O que você faz?";
        updateChoices(["Resistir", "Fugir para salvar sua vida", "Usar o artefato para combater a energia"]);
    } else if (choice === 34) {
        gameText.innerHTML = "Você luta contra a energia do altar e, com um último esforço, o destrói. A torre começa a tremer violentamente. Você precisa escapar antes que ela desmorone. O que você faz?";
        updateChoices(["Correr para a saída", "Tentar encontrar mais segredos", "Ficar e aceitar o colapso"]);
    } else if (choice === 35) {
        gameText.innerHTML = "Você escapa da torre momentos antes dela desmoronar. As ruínas agora estão cobertas por uma névoa densa. Ao longe, a lua vermelha brilha sinistramente. O que você faz agora?";
        updateChoices(["Explorar a névoa", "Descansar e curar suas feridas", "Seguir em direção à lua"]);
    } else if (choice === 36) {
        gameText.innerHTML = "Você segue a névoa, que parece viva, envolvente e sufocante. Sussurros ecoam ao seu redor, e figuras etéreas surgem e desaparecem nas sombras. O que você faz?";
        updateChoices(["Investigar as figuras", "Fugir da névoa", "Buscar um ponto seguro"]);
    } else if (choice === 37) {
        gameText.innerHTML = "Você segue em direção à lua vermelha, mas quanto mais se aproxima, mais distorcida a realidade ao seu redor se torna. Criaturas grotescas aparecem, retorcidas e corrompidas pelo sangue. O que você faz?";
        updateChoices(["Lutar contra as criaturas", "Tentar atravessar sem ser visto", "Fugir para as sombras"]);
    } else if (choice === 38) {
        gameText.innerHTML = "Você decide descansar. O silêncio toma conta, e por um momento, a paz parece possível. Mas então, em seus sonhos, visões de criaturas antigas e deuses esquecidos tomam conta. O que você faz ao acordar?";
        updateChoices(["Ignorar os sonhos e seguir em frente", "Investigar os deuses antigos", "Fugir em desespero"]);
    } else if (choice === 39) {
        gameText.innerHTML = "Você decide investigar os deuses antigos. Em suas andanças, descobre um livro proibido, com textos escritos em uma língua que não deveria existir. As palavras parecem ganhar vida. O que você faz?";
        updateChoices(["Ler o livro", "Destruir o livro", "Guardar o livro para depois"]);
    } else if (choice === 40) {
        gameText.innerHTML = "Ao ler o livro, a sanidade começa a escapar de sua mente. Visões de horrores indescritíveis, seres com formas além da compreensão humana, invadem sua consciência. O que você faz?";
        updateChoices(["Fechar o livro rapidamente", "Continuar lendo", "Queimar o livro"]);
    } else if (choice === 41) {
        gameText.innerHTML = "Você fecha o livro rapidamente. A sensação de estar sendo observado aumenta, e a presença maligna ao seu redor se torna quase palpável. O que você faz agora?";
        updateChoices(["Procurar um abrigo seguro", "Investigar a presença maligna", "Fugir para longe"]);
    } else if (choice === 42) {
        gameText.innerHTML = "Você decide procurar um abrigo seguro. Encontrando um pequeno esconderijo, você se esconde, mas logo ouve sussurros e passos se aproximando. O que você faz?";
        updateChoices(["Ficar quieto e esperar", "Preparar uma emboscada", "Sair e enfrentar a ameaça"]);
    } else if (choice === 43) {
        gameText.innerHTML = "Você decide enfrentar a ameaça. Ao sair do esconderijo, vê uma figura encapuzada com um livro semelhante ao que você encontrou. Ela parece estar esperando por você. O que você faz?";
        updateChoices(["Atacar a figura", "Tentar conversar com ela", "Fugir de volta ao esconderijo"]);
    } else if (choice === 44) {
        gameText.innerHTML = "A figura encapuzada revela que o livro é uma chave para um poder oculto, mas também uma maldição. Ela oferece um pacto: poder em troca de sua sanidade. O que você faz?";
        updateChoices(["Aceitar o pacto", "Recusar e tentar destruir o livro", "Fugir do local"]);
    } else if (choice === 45) {
        gameText.innerHTML = "Você aceita o pacto. Uma onda de energia sinistra o envolve, e você sente seu corpo e mente sendo corrompidos. Sua visão se torna turva, e você é transportado para uma nova dimensão de pesadelos. O que você faz?";
        updateChoices(["Explorar a nova dimensão", "Tentar encontrar uma saída", "Aceitar seu destino"]);
    } else if (choice === 46) {
        gameText.innerHTML = "Você tenta encontrar uma saída na nova dimensão. As paisagens são distorcidas e as criaturas deformadas espreitam de todos os lados. O que você faz?";
        updateChoices(["Seguir um caminho iluminado", "Ficar e lutar contra as criaturas", "Procurar uma forma de voltar para o mundo real"]);
    } else if (choice === 47) {
        gameText.innerHTML = "Você decide seguir um caminho iluminado. À medida que avança, a luz se intensifica, revelando uma cidade antiga e majestosa, mas com sinais evidentes de deterioração. A cidade parece estar em um estado de ruínas e decadência. O que você faz?";
        updateChoices(["Explorar a cidade", "Procurar uma saída", "Investigar a fonte da luz"]);
    } else if (choice === 48) {
        gameText.innerHTML = "Você decide explorar a cidade. Em meio aos escombros, encontra uma câmara oculta com inscrições antigas. As inscrições parecem contar a história da cidade e sua queda. O que você faz?";
        updateChoices(["Ler as inscrições", "Explorar a câmara", "Sair da câmara e continuar explorando a cidade"]);
    } else if (choice === 49) {
        gameText.innerHTML = "Você lê as inscrições. Elas falam de um ritual que corrompeu a cidade e transformou seus habitantes em monstros. Há uma referência a um artefato que pode reverter o efeito. O que você faz?";
        updateChoices(["Procurar o artefato", "Investigar mais sobre o ritual", "Ignorar e continuar explorando a cidade"]);
    } else if (choice === 50) {
        gameText.innerHTML = "Você decide procurar o artefato mencionado nas inscrições. Seguindo as pistas, você chega a um templo subterrâneo. Dentro, vê um altar coberto de sangue e um artefato brilhante. O que você faz?";
        updateChoices(["Pegar o artefato", "Destruir o altar", "Examinar o templo mais a fundo"]);
    } else if (choice === 51) {
        gameText.innerHTML = "Você pega o artefato. Uma onda de energia percorre seu corpo, e você sente um poder crescente. Mas também percebe uma presença ameaçadora se aproximando. O que você faz?";
        updateChoices(["Preparar-se para enfrentar a ameaça", "Tentar fugir com o artefato", "Investigar a presença ameaçadora"]);
    } else if (choice === 52) {
        gameText.innerHTML = "Você decide enfrentar a ameaça. Uma sombra colossal se materializa diante de você, com olhos brilhantes e garras afiadas. A batalha é brutal. O que você faz?";
        updateChoices(["Atacar a sombra", "Usar o artefato contra ela", "Tentar encontrar um ponto fraco"]);
    } else if (choice === 53) {
        gameText.innerHTML = "Você usa o artefato contra a sombra. Uma explosão de luz a atinge, e ela se dissolve em uma nuvem de escuridão. A presença maligna parece ter sido banida. O que você faz agora?";
        updateChoices(["Explorar a câmara novamente", "Sair e procurar uma saída da cidade", "Descansar e recuperar suas forças"]);
    } else if (choice === 54) {
        gameText.innerHTML = "Você decide explorar a câmara novamente. Ao fundo, encontra um portal antigo que parece ser a saída da cidade. No entanto, ele está coberto de runas antigas. O que você faz?";
        updateChoices(["Tentar ativar o portal", "Investigar as runas", "Buscar outro caminho"]);
    } else if (choice === 55) {
        gameText.innerHTML = "Você investiga as runas e descobre que elas podem ser ativadas com o artefato. Ao tentar ativar o portal, ele brilha intensamente e começa a se abrir. O que você faz?";
        updateChoices(["Entrar no portal", "Explorar mais antes de entrar", "Esperar para ver o que acontece"]);
    } else if (choice === 56) {
        gameText.innerHTML = "Você decide entrar no portal. A passagem é turbulenta, e você é puxado por um vórtice de luz e escuridão. Quando você aterrissa, percebe que está de volta ao mundo real, mas a cidade ao seu redor ainda está cheia de caos e destruição. O que você faz agora?";
        updateChoices(["Buscar ajuda", "Explorar a cidade em busca de respostas", "Tentar escapar da cidade"]);
    } else if (choice === 57) {
        gameText.innerHTML = "Você decide buscar ajuda. Ao encontrar um grupo de sobreviventes, eles lhe dizem que você foi a única pessoa a voltar da cidade. Eles precisam de suas habilidades para enfrentar as ameaças que restam. O que você faz?";
        updateChoices(["Juntar-se aos sobreviventes", "Continuar sozinho", "Sair da cidade e procurar um novo lugar"]);
    } else if (choice === 58) {
        gameText.innerHTML = "Você decide juntar-se aos sobreviventes. Juntos, vocês formam um grupo resistente e começam a limpar as áreas afetadas, enfrentar criaturas e ajudar aqueles que ainda precisam. Sua jornada se torna uma luta contínua pela sobrevivência em um mundo corrompido. Fim.";
        updateChoices(["Recomeçar", "Aceitar o final"]);
    } else if (choice === 59) {
        gameText.innerHTML = "Você decide continuar sozinho. As ruas são perigosas, mas você consegue se manter em movimento, sobrevivendo dia após dia. Embora esteja sempre em alerta, você encontra momentos de paz em meio ao caos. Sua história continua a ser uma luta constante pela sobrevivência. Fim.";
        updateChoices(["Recomeçar", "Aceitar o final"]);
    } else if (choice === 60) {
        gameText.innerHTML = "Você decide sair da cidade e procurar um novo lugar. A jornada é longa e árdua, mas eventualmente você encontra uma comunidade mais segura e pacífica. A cidade corrompida atrás de você torna-se uma lembrança sombria, e você encontra um novo começo em um mundo mais tranquilo. Fim.";
        updateChoices(["Recomeçar", "Aceitar o final"]);
    }


// Função para atualizar as escolhas
function updateChoices(choices) {
    choicesContainer.innerHTML = "";
    choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => makeChoice(index + 1);
        choicesContainer.appendChild(button);
    });
}

// Início do jogo
gameText.innerHTML = "Você acorda em uma cidade desolada, envolta em névoa densa. O cheiro de sangue e podridão é forte no ar. O que você faz?";
updateChoices(["Explorar as ruas", "Seguir em direção à luz", "Buscar abrigo"]);

}