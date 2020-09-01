~> "É o modo que você experiencia o mundo, é o modo como você experiencia sua vida, é o modo que você experiencia um serviço." - Don Norman

~> Inicialmente, você pode pensar que somente o pessoal de design é responsável pela UX. Mas desenvolvedores, gerentes, redatores, etc., são responsáveis sim pela experiência do usuário.

~> O termo Experiência do Usuário foi cunhado pela primeira vez por Don Norman, em meados de 1990. O próprio Norman comentou em uma entrevista:

"Eu inventei o termo, porque achava que interface do usuário e usabilidade eram muito restritos, eu queria cobrir todos os aspectos da experiência de uma pessoa com o sistema, incluindo design industrial, gráficos, a interface, a interação física e o manual. Desde então, o termo tem se espalhado amplamente..."

~> Gamestorming, da mesma forma que o brainstorming, também visa geração de ideias para resolver problemas. Uma das diferenças é o fato dele possuir regras definidas, como um determinado tempo para se fazer ou pensar em alguma coisa.

~> Mas a principal diferença é o fato do gamestorming possuir um objetivo claro e definido.

~> A organização com Kanban consiste na divisão das tarefas em três colunas: Fazer(To Do), Fazendo (In Progress) e Feito (Done). Esse método é bastante intuitivo e ficou muito famoso por ser utilizado em empresas de desenvolvimento de software, que usam conceitos de Métodos Ágeis. Basta escrever um tarefa no cartão e movê-lo de uma coluna para outra.

Parece estranho manter dois labels, ou rótulos, em um mesmo campo de preenchimento. O que poderia ser feito para deixarmos as diferenças dos campos bem definidas ao nosso usuário? Poderíamos incluir uma linha por meio da ferramenta Line (L), dividindo-os. Para garantirmos a consistência visual, a linha será da mesma cor do texto (#808080).

O atalho "Ctrl + Y" pode ser usado para esconder o painel de camadas, quando este não estiver sendo usado, e assim teremos melhor visualização do trabalho que estamos fazendo. Diminuiremos a opacidade da linha para 50%, para deixá-la mais sutil.

É recomendado que os elementos visuais passem o máximo de conforto e consistência visual possível, então precisamos prestar atenção nos espaçamentos internos entre eles, respeitando um padrão. Iremos agrupar todos eles, mas antes disso bloquearemos a camada inferior, do fundo, para não agruparmos ela também.

Desse modo, fica mais fácil usarmos o mouse e simplesmente o arrastarmos para selecionar todos os elementos de uma única vez. Assim, se você usar o atalho "Ctrl + G", o agrupamento é feito apenas nas camadas que não estão bloqueadas. Feito isso, renomearemos o grupo, de "Group 4" para "Campo de agencia e conta".

-----------------------------------

Faremos o botão selecionando a ferramenta Rectangle (R), mas não deixaremos o retângulo branco, pois isso dará a entender que trata-se de outro campo de preenchimento. Tiraremos a borda e preencheremos o retângulo com um cinza escuro (#212121), mantendo-o na base esquerda, justamente pensando no thumb zone, que seria a área de alcance do dedo em uma tela.

Pensando em usabilidade, todos os call to action ("chamadas para ação"), botões principais, precisam ser facilmente alcançáveis pelo polegar dos usuários.

Incluiremos o texto "Entrar", arrastando a caixa de texto (Text (T)) até que ela ocupe horizontalmente todo o retângulo que criamos. O texto ficará na cor branca (#FFFFFF). Centralizaremos o texto em relação ao retângulo selecionando os dois elementos e clicando no ícone correspondente à centralização vertical, com dois retângulos lado a lado e uma linha horizontal:

A Apple não recomenda que façamos botões com "larguras infinitas", isto é, que ocupem toda a largura da tela. Existe uma boa justificativa para isso: o botão pode ser confundido com uma barra de abas (tab bar), uma espécie de menu inferior.

Então, segurando a tecla "Alt", selecionaremos os dois elementos e diminuiremos a largura do botão de modo proporcional, nos dois sentidos. Subiremos o botão e, depois, agruparemos o texto e o retângulo, e nomearemos o grupo de "Botao".

Em se tratando do texto, do microcopy das nossas interfaces, recomendo o curso Microcopy: a influência do microcopy na experiência do usuário, da Alda Rocha.

"Entrar" pode acabar soando formal demais, lembrando que o público do Bytebank tem faixa etária média de 19 e 20 anos. "Acessar" pode passar mais formalidade ainda, então utilizaremos "Entrar na sua conta". Assim, transmitimos a ideia da ação que ocorrerá quando o usuário clicar no botão.

Algo que eu faço quando vou lidar com estes textos que impactarão na experiência do usuário, em botões ou chamadas, é abrir um bloco de notas ou editor de texto e fazer um brainstorm. Lidar com todas as opções e possibilidades de uma vez facilita muito na escolha da melhor alternativa.

Se queremos que a pessoa perceba que ela irá entrar realmente na conta dela, por exemplo, influenciando mais em seu emocional, poderemos substituir o texto por "Entrar na minha conta". Notem que há questões em UX que são muito subjetivas e sutis, e é difícil mensurar isso, embora não seja impossível.

Como nosso objetivo é fazer um protótipo de alta fidelidade, buscando rapidez e precisão, optaremos por este texto. E para trazer o usuário mais para perto ainda, poderíamos nomear a conta corrente com "byteconta", e trocar o texto para "Entrar na minha byteconta", porém, antes devemos informar o usuário disso.

O texto do botão parece não estar centralizado verticalmente, então vamos diminuir a altura da caixa de texto até que ela fique bem rente à base do texto, e então selecionar os dois elementos e clicar no ícone para centralização. Isso pode ser feito manualmente ou por meio da ferramenta, fica a seu critério.

Com "Ctrl + S" salvaremos o arquivo. Neste vídeo, vimos o float label, recurso bem interessante ao desenvolvermos interfaces, e botões, e sobre como devemos nos atentar para que os elementos visuais não sejam confundidos com outros.

-------------------------

Quando a pessoa clicar no botão "Entrar na minha conta", é esperado que surja alguma forma de autenticação, pedido de login ou impressão digital. Como estamos focados em prototipar para iPhone 7 ou 8, para economizarmos tempo ao validarmos o fluxo de pagamento via boleto bancário, podemos utilizar o recurso da solicitação da impressão digital do usuário.

Para isso, duplicaremos "Ag e Conta" com "Ctrl + D" e o renomearemos com "Senha". Criaremos um retângulo preenchido de preto para cobrir a tela integralmente, retiraremos a borda, desmarcando o checkbox de Border no painel de configurações. Também diminuiremos a opacidade (Opacity) para 57%.

Assim, quando o aplicativo pede a impressão digital ao usuário no iOS, aparecerá um pequeno pop up perguntando se o Touch ID poderá ser utilizado para login.

Em vez de simularmos isso, já que as chances de fazermos algo que não seja completamente fiel ao sistema operacional em uso são muito grandes, seria muito melhor se a própria Apple disponibilizasse algum guia com materiais que possam ser utilizados nesses casos.

O XD pode nos ajudar nisso, se clicarmos no menu hamburguer localizado do lado esquerdo da tela, e em "Get UI Kits > Apple iOS...". Há outras opções disponíveis inclusive, para Google e Microsoft Windows. Isso nos redirecionará à página de Human Interface Guidelines da Apple.

Reforçando que é importante termos familiaridade com o sistema operacional para o qual desenvolvemos o protótipo!

Nela, clicaremos no link "Download for Adobe XD", e baixaremos um arquivo com extensão .dmg, que no Mac é possível de ser aberto tranquilamente — no Windows, é necessário usarmos um descompactador de arquivos, como o 7-zip, que é open source e gratuito.

Extrairemos o arquivo baixado e acessaremos "iOS 11 Adobe XD > UI Elements + Design Templates + Guides". Para o iPhone 8, como é nosso caso, clicaremos em UIElements+DesignTemplates+Guides.xd. Para outros, pode-se abrir UIElements+DesignTemplates+Guides-iPhoneX.xd.

Será exibida uma mensagem na parte inferior do programa indicando que algumas fontes estão faltando ("6 fonts are missing. Show Missing Fonts"), porém elas estão disponíveis para download gratuito no site da Apple.

Ao selecionarmos uma das telas e utilizarmos o atalho "Ctrl + C", perceberemos que todos os seus elementos estão agrupados. Para acessar um elemento específico, clicaremos na pasta correspondente no painel lateral esquerdo, ou dar um duplo clique no elemento no painel principal.



Feito isso, basta copiarmos e colarmos à nossa tela, buscando centralizá-lo:



Vamos alterar "A Short Title is Best" para algo como "Fazer login para Bytebank". A mensagem localizada logo abaixo seria uma informação adicional, por enquanto desnecessária. Iremos ocultá-la clicando no ícone de olho no painel lateral esquerdo, ou usando o atalho "Ctrl + ;". "Default Button" será substituído por "Cancelar", dando ao usuário a opção de voltar.

No iOS, há um símbolo que representa o Touch ID, o leitor de digital. Este símbolo não consta nos materiais que acabamos de baixar, portanto usaremos uma imagem "printada" do nosso próprio celular, ou buscada na internet.

-----------------------------

Adobe XD

- alt - cresce ou diminui proporcionalmente

- alt + shift - duplica uma artboard. Manter shift apertado ele segue o grid e avança 10 pixels

- shift - Para selecionar mais de um objeto

- ctrl + y - tira a barra de ferramentas

- ctrl + l - bloqueia elemento

- selecione alguns elementos + ctrl G - para agrupar em pastas

- ctrl + b - Negrito

- ctrl + 3 - Zoom na área selecionada

- V - Selecionar (mouse)

- R - Retângulo (rectangle)

- E - Elipse (Ellipse)

- Y - Polígono (polygon)

- T - Texto (Text)

- L - Linha (Line)

- P - Caneta (Pencil)

- A - Prancheta (clipboard)

-----------------------

Print Screen Windows: ^Windows + Shift + s^

Recebemos uma notícia não muito boa: o Rafael Balbi, designer, nos escreveu dizendo que toda a identidade visual do Bytebank será alterado, isto é, as cores, os botões — que agora passarão a ter cantos arredondados —, tipografia, e tudo o mais. Isso pode ser comum em um contexto de startup, pois normalmente uma empresa consolidada no mercado dificilmente faz mudanças bruscas de identidade visual.

Imaginem que tivéssemos feito uma quantidade enorme de telas. Seria muito trabalhoso termos que aplicar estas alterações nas nossas telas. Um recurso muito interessante que existe no Adobe XD, e em outras ferramentas do tipo, como o Sketch, implica em criarmos uma matriz com vários clones. Assim, quando mexermos nesta matriz, todos os clones serão alterados também. São os Symbols do XD.

Para converter os elementos previamente criados em um símbolo a ser replicado em diversas telas, clicaremos no botão "Entrar na minha conta" e em "Make Symbol", sendo possível fazê-lo também por meio do atalho "Ctrl + K". Assim, o elemento passa a ter uma sutil borda verde. Para as outras telas, precisaremos copiar e colar este botão que acabamos de alterar, manualmente.

No primeiro botão que alteramos, mudaremos o valor da borda, de 0 para 70, e esta ação é replicada em todos os botões clones. É uma economia de tempo e tanto!

Atenção: caso precisemos de um mesmo componente, ou símbolo, em diversos tamanhos, por exemplo, teremos que alterá-los manualmente. Infelizmente isso ainda não foi facilitado pelo programa. No caso, teríamos que criar uma matriz para cada tamanho que desejarmos. E se alterarmos um clone, todos os outros, inclusive a matriz, serão alterados.

Na tela "Carregando", temos um texto diferente dos demais botões, então o deletaremos, colaremos o botão clone e mais adiante o editaremos. Entretanto, por tratar-se de um caso específico, uma vez que, se refizermos o retângulo cinza isto será clonado para todas as outras telas, e o texto ficará ilegível abaixo deste retângulo cinza, substituiremos "Entrando..." por um espaço, para que fique invisível. Se optássemos por deletá-lo, os textos de todos os botões também sumiriam.

Em seguida, copiaremos o texto do primeiro botão, colaremos na tela "Carregando" e o editaremos para "Entrando...". Vamos salvar o projeto.

O zoom pode ser dado pressionando-se "Ctrl + +" ou "Ctrl + -", como em qualquer ferramenta de edição de imagens. Outra opção é utilizarmos a tecla "Alt" junto com o scroll do mouse.

Ainda assim, há um pequeno perigo: e se os tons de verde, as cores, também tenham que sofrer alteração? Resolveremos isso em breve, nos próximos vídeos.

---------------------------

A fonte que utilizamos nas telas até o momento é a Bariol, exceto pelo pop up de solicitação da impressão digital, que segue o padrão do iOS e usa a SF Pro Text. No entanto, pode ser que o brand designer, no caso o Rafael Balbi, que desenvolveu a identidade visual do Bytebank, acabe alterando a fonte da marca. O que faríamos nesta situação?

Da mesma forma como nos botões, seria trabalhoso demais termos que alterar cada caixa de texto, manualmente. Será que existe algo similar ao símbolo, para fontes?

O ícone para "Assets" se localiza no canto inferior esquerdo na barra de ferramentas, representado por dois círculos vazados e ligados entre si, acessível também via atalho "Shift + Ctrl + Y". Ao ser clicado, será aberto um menu com os recursos referentes a cores ("Colors"), estilos de caractere ("Character Styles") e símbolos ("Symbols").

Transformaremos o conjunto de configurações textuais — a fonte Bariol, tamanho 20 e modo Regular, alinhamento centralizado — em um estilo de caractere. Caso você tenha alguma familiaridade com o InDesign, Photoshop ou Illustrator, já deve ter visto algo deste tipo.

Assim, clicaremos no símbolo de + ao lado de "Character Styles" no menu de recursos ("Assets") da aba "Design", ou usaremos o atalho "Shift + Ctrl + T":

Caso queiramos usar este estilo que acabamos de definir, basta clicarmos nele, mantendo a caixa de texto também selecionada:

Isto também ajuda a otimizar o nosso trabalho. Continuando, para o texto "Entrar na minha conta", teremos que criar outro estilo, pois não queremos que ele fique sublinhado. Faremos o mesmo com os textos dos campos de preenchimento, "Agência:" e "Conta:", para os quais aplicaremos outro estilo, e com os textos dos links de atalho: "Pagar conta", "Transferência" e "Recarregar". Vamos aplicar estes estilos em cada uma das telas.

Geralmente usamos o duplo clique para selecionar o elemento desejado. No entanto, a tecla "Ctrl" permite a seleção do elemento ignorando-se o grupo do qual faz parte.

Para o artboard de "Digital", usaremos "Ctrl + Y" para acessarmos os elementos, e desabilitaremos a visualização de "Bg Opacidade" e "Alerts - 1 Line Title". Deste modo, conseguimos aplicar os estilos nos textos dos campos de preenchimento. Feito isso, voltaremos a habilitar a visualização deles.

Faremos um teste usando "Ctrl + Shift + Y" para acessarmos o canal de assets, e então modificaremos o estilo de caractere para textos que são links. Para isso, vamos clicar no estilo correspondente com o lado direito do mouse, e em "Edit". Alteraremos a cor do texto para vermelho (#FF0000), e veremos que todos os links foram alterados. Voltaremos para como estava antes com um simples "Ctrl + Z".

Em casos de empresas que ainda não possuam uma identidade visual pronta para ser trabalhada, isso ajuda bastante a otimizarmos tempo. Ainda, imaginemos que tenhamos criado inúmeras telas, tornando difícil a identificação de um determinado elemento dentre elas.

Um recurso muito interessante e útil é clicarmos com o lado direito do mouse sobre um dos símbolos que criamos, no painel de "Assets", e em "Highlight on Canvas". Isso fará com que todos os símbolos, com estas mesmas configurações, sejam realçadas no painel principal, por meio de uma borda azulada:

-----------------

O cabeçalho da tela "Home" parece um pouco grande demais e, além disso, a palavra "Saldo" é título de quê, exatamente? Da informação que vem logo abaixo, "R$ 1237,00", e não da tela. Isto é, temos alguns problemas a resolver: não temos certeza da altura do cabeçalho, e o título não nos parece o mais adequado.

Normalmente, quando incluímos um título na parte superior de uma tela, especialmente em iOS, ele se refere à tela inteira, à localização da navegação atual. Sendo assim, trocaremos "Saldo" por "Início". Isto, porém, deixa a informação "R$ 1237,00" sem a indicação de que trata-se de um saldo. Incluiremos este texto ("saldo") próximo ao valor.

Pode soar óbvio, porém muitas vezes acabamos nos esquecendo destes princípios básicos de design. Este, por exemplo, tem relação com a proximidade. Usaremos o conta gotas para identificar um dos tons de verde da identidade visual do Bytebank (#369C38) e alterar a cor de "saldo". Além disso, alteraremos a sua espessura, de "Regular" para "Bold" — também é possível usarmos o atalho "Ctrl + B" mantendo a caixa de texto selecionada.

E então selecionaremos todos os elementos, os quais agruparemos ("Ctrl + G") e desceremos alguns pontos por meio da tecla de seta, junto com o "Shift". Isto adicionará maior respiro à tela. Vamos renomear o grupo de "Saldo disponível".

Em relação à altura do retângulo verde do cabeçalho, podemos seguir os padrões da Apple, e copiar e colar elementos de sua UI kit, que baixamos há pouco, ou simplesmente repetir as características do cabeçalho utilizadas por eles — no caso, altura de 64, e uma sombra (Shadow) com X 0, Y 0,5 e B 0, na cor preta e com 16% de opacidade.

Usualmente, no topo da tela do smartphone ficam informações essenciais para nós, se estamos com alguma conexão ativa, que horas são, o quanto de bateria ainda temos. Pensando em um contexto de prototipagem de alta fidelidade, seria legal incluí-las na nossa tela, para fins de ilustração.

Para isso, consultamos novamente as guidelines da Apple e pesquisaremos por algum tipo de "status bar", no campo de buscas do painel de "Assets". Encontrando-as, podemos selecionar uma delas e clicar com o botão direito do mouse, e em "Highlight on Canvas" para que ela seja localizada no painel principal.

Isso também ajuda a melhorar a fidelidade visual do aplicativo, do nosso protótipo. Caso estejamos desenvolvendo para Android, basta pesquisar por "android material design status bar".

O texto "saldo" está junto ao valor para que eles sejam identificados como sendo um único grupo. Para exemplificar, atualmente, no aplicativo da Alura, temos uma lista de cursos, em que cada curso é identificado por um conjunto formado por ícone, título, subtítulo e porcentagem:

Separar os elementos em um retângulo nem sempre é necessário, pois as próprias funções dos elementos servem como indicativo do grupo a que pertencem, dando uma dica ao usuário do porquê de estarem juntos como estão, reforçando a ideia de contextualização.

---------------

Antes de acrescentarmos os ícones para as informações que aparecem no extrato bancário, vamos diminuir o tamanho deles, selecionando-os e alterando de 20 para 18. Também precisaremos colocar mais peso no nome das informações, para melhorar a legibilidade delas, portanto deixaremos "CDB Bytebank" e "99 Táxi" em negrito.

Caso surjam outras informações nesse extrato, teríamos que copiar e colar as existentes manualmente, certo?

O Adobe XD possui uma ferramenta muito útil para estes casos, chamado Repeat Grid. Vamos selecionar cada conjunto de informações e agrupá-los usando "Ctrl + G". Feito isso, selecionaremos os dois grupos e clicaremos no botão Repeat Grid, localizado no painel de configurações à direita.

Assim, ambos os grupos se encontram contornados por um retângulo tracejado verde. Clicando e arrastando os bastonetes que se encontram na lateral direita e inferior, os grupos selecionados são replicados, e quaisquer mudanças que façamos em um, acontecerá em todos. A repetição pode ser feita tanto horizontalmente quanto verticalmente.

No entanto, antes disso, iremos incluir os ícones. Sendo assim, usaremos o "Ctrl + Z" para voltar alguns passos, desagruparemos os elementos, e selecionaremos apenas os títulos e as datas para os deslocarmos um pouco para a direita. O ícone de nota de dinheiro ficará ao lado de "CDB Bytebank" e "31 de janeiro". Da mesma forma, o ícone de ônibus ficará alinhado com "99 Táxi" e "27 de janeiro". Feito isso, selecionaremos ambos os ícones para os alinharmos pelo centro.

Selecionando o artboard e marcando o checkbox de Grid, habilitaremos a visualização dos limites de margens internas da tela, o que nos auxiliará a posicionarmos melhor os ícones, que selecionaremos e deixaremos encostados no limite. Além disso, alinharemos todos os elementos de um mesmo grupo, incluindo os ícones correspondentes, horizontalmente.

Agora, sim, selecionaremos todos os elementos e clicaremos em Repeat Grid. Em seguida, continuaremos trabalhando com a tela de extrato.
