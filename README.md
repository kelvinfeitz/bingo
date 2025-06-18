# Bingo Festa Junina 🎪

Um jogo de bingo completo com tema de festa junina, baseado nas cartelas fornecidas no PDF atualizado.

## Arquivos incluídos

- `host.html` - **PAINEL DO APRESENTADOR** (para você sortear)
- `jogador.html` - **CARTELAS DOS JOGADORES** (para os participantes)
- `index.html` - Versão individual (para jogar sozinho)
- `cartelas.js` - Dados das 25 cartelas extraídas do PDF
- `INSTRUCOES.md` - Guia de uso rápido
- `README.md` - Este arquivo de documentação

## Como usar - Sistema Multiplayer

### 🎯 **PARA O APRESENTADOR (VOCÊ):**
1. Abra o arquivo `host.html` no seu computador
2. Compartilhe o link que aparece na tela com os jogadores
3. Clique em "Sortear Próximo Item" para sortear
4. Os itens sorteados são automaticamente sincronizados com as cartelas dos jogadores

### 👥 **PARA OS JOGADORES:**
1. Acessam o link que você compartilhou (`jogador.html`)
2. Digitam o nome deles
3. Escolhem uma cartela (1 a 25)
4. Aguardam você fazer os sorteios
5. Os itens são marcados automaticamente na cartela deles
6. Quando completarem, clicam em "BINGO!"

## Características do jogo

### Visual
- Tema de festa junina com cores vibrantes
- Animações suaves e efeitos visuais
- Bandeirinhas decorativas no topo
- Design responsivo para mobile e desktop

### Funcionalidades
- **25 cartelas únicas** extraídas do PDF original
- **25 itens temáticos** por cartela
- **Sincronização automática** em tempo real
- Sistema de sorteio centralizado
- Marcação automática dos itens sorteados
- Verificação automática de vitória
- Histórico de itens chamados
- Controles de pausa/continuar
- Barras de progresso individuais

### Itens do jogo
Os itens temáticos incluem:
- maçã do amor
- casal MJ, casal ET, casal MT, casal AH, casal RR, casal MM, casal GJ, casal CD
- fogos de artifício
- chapéu de palha
- pau de sebo
- maria-chiquinha
- milho / milho cozido
- pé de moleca / pé de moleque
- sanfona
- quentão
- 30
- amendoim
- torta de frango
- correio elegante
- JJ
- zabumba
- curau
- rabo do burro
- fogueira
- cavalo
- barraca do beijo / barraca do milho
- arroz doce
- feijoada antonia
- pamonha
- cadeia
- bolo de cenoura / bolo de milho
- xadrez / camisa xadrez
- bigode postiço
- canjica
- bingo
- paçoca
- casamento caipira
- arraiá
- estilingue
- mandioca
- broa
- espantalho
- bandeirinha
- bentolovers
- trança
- quadrilha
- lampião
- pescaria
- saguadin
- pipoca
- remendo
- carne louca
- chica véia
- cocada
- karaokê

## Tecnologias utilizadas

- HTML5
- CSS3 (com animações e gradientes)
- JavaScript (ES6+)
- localStorage para sincronização
- Design responsivo

## Compatibilidade

O jogo funciona em todos os navegadores modernos:
- Chrome
- Firefox
- Safari
- Edge

## Como personalizar

Para adicionar mais cartelas ou modificar os itens:
1. Edite o arquivo `cartelas.js`
2. Adicione novos objetos no formato: `numeroCartela: [array com 25 itens]`
3. Atualize os loops nos arquivos HTML se necessário

## Sincronização

O sistema usa localStorage para sincronizar automaticamente:
- Host sorteia → salva no localStorage
- Jogadores verificam localStorage a cada segundo
- Itens são marcados automaticamente nas cartelas
- Status do jogo é atualizado em tempo real

## Licença

Este projeto foi criado para uso educacional e recreativo.

---

Divirta-se no arraiá! 🌽🎉