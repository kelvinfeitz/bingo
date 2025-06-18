// CARTELAS DE BINGO FESTA JUNINA - VERSÃO ATUALIZADA
// Extraídas do novo arquivo PDF fornecido

const todasCartelas = {
    1: ["maçã do amor", "casal MJ", "fogos de artifício", "chapéu de palha", "pau de sebo", "maria-chiquinha", "casal ET", "milho", "pé de moleca", "sanfona", "quentão", "casal MT", "30", "amendoim", "torta de frango", "correio elegante", "JJ", "zabumba", "casal AH", "curau", "rabo do burro", "fogueira", "cavalo", "barraca do beijo", "arroz doce"],
    
    2: ["casal MJ", "casal MT", "barraca do milho", "JJ", "fogos de artifício", "fogueira", "feijoada antonia", "pamonha", "curau", "cadeia", "maria-chiquinha", "bolo de cenoura", "30", "xadrez", "bigode postiço", "amendoim", "canjica", "quentão", "bingo", "paçoca", "casal RR", "casamento caipira", "milho", "zabumba", "arraiá"],
    
    3: ["estilingue", "bigode postiço", "milho", "casal AH", "maria-chiquinha", "pé de moleca", "mandioca", "chapéu de palha", "casal RR", "broa", "espantalho", "zabumba", "30", "bingo", "xadrez", "barraca do beijo", "casal GJ", "cavalo", "correio elegante", "bolo de cenoura", "chica véia", "bandeirinha", "camisa xadrez", "casal MJ", "curau"],
    
    4: ["casal ET", "xadrez", "maçã do amor", "casal MJ", "fogos de artifício", "bolo de milho", "quentão", "bentolovers", "trança", "quadrilha", "mandioca", "cavalo", "30", "lampião", "casal MT", "casamento caipira", "sanfona", "amendoim", "JJ", "pé de moleca", "maria-chiquinha", "pescaria", "zabumba", "saguadin", "pipoca"],
    
    5: ["quadrilha", "correio elegante", "fogueira", "cadeia", "cavalo", "barraca do beijo", "barraca do milho", "paçoca", "feijoada antonia", "casal MM", "arroz doce", "bandeirinha", "30", "casal AH", "remendo", "carne louca", "bolo de cenoura", "quentão", "bolo de milho", "chica véia", "pipoca", "casamento caipira", "canjica", "milho", "sanfona"],
    
    6: ["casal AH", "pau de sebo", "bigode postiço", "rabo do burro", "casal MJ", "barraca do beijo", "quentão", "casal GJ", "casamento caipira", "correio elegante", "maçã do amor", "pipoca", "30", "lampião", "amendoim", "casal RR", "bolo de cenoura", "remendo", "JJ", "bingo", "bentolovers", "pescaria", "torta de frango", "pamonha", "cavalo"],
    
    7: ["remendo", "cadeia", "pipoca", "barraca do milho", "pé de moleque", "quentão", "fogueira", "sanfona", "zabumba", "casal MT", "cavalo", "maria-chiquinha", "30", "JJ", "casal AH", "fogos de artifício", "curau", "estilingue", "bentolovers", "pé de moleca", "espantalho", "maçã do amor", "pamonha", "milho", "bigode postiço"],
    
    8: ["casal ET", "curau", "arroz doce", "xadrez", "pipoca", "fogos de artifício", "saguadin", "carne louca", "camisa xadrez", "zabumba", "casal RR", "milho", "30", "bolo de cenoura", "casal AH", "remendo", "cocada", "JJ", "paçoca", "trança", "chica véia", "casal GJ", "canjica", "casal MM", "cavalo"],
    
    9: ["espantalho", "pau de sebo", "casal MM", "pamonha", "milho", "pé de moleca", "pescaria", "bolo de milho", "rabo do burro", "canjica", "casal GJ", "lampião", "30", "quentão", "cocada", "maria-chiquinha", "quadrilha", "fogos de artifício", "broa", "karaokê", "casal AH", "pipoca", "milho cozido", "bandeirinha", "chica véia"],
    
    10: ["pamonha", "carne louca", "remendo", "zabumba", "bolo de milho", "casal ET", "bentolovers", "cadeia", "pipoca", "casal GJ", "amendoim", "maria-chiquinha", "30", "arraiá", "paçoca", "estilingue", "casal MJ", "pé de moleca", "milho cozido", "bingo", "karaokê", "casal RR", "lampião", "camisa xadrez", "espantalho"],
    
    11: ["trança", "remendo", "pipoca", "pescaria", "lampião", "bolo de milho", "canjica", "JJ", "bigode postiço", "cadeia", "cavalo", "casal RR", "30", "espantalho", "fogueira", "mandioca", "chica véia", "pé de moleca", "quadrilha", "milho cozido", "torta de frango", "barraca do milho", "bandeirinha", "casal MM", "casal MT"],
    
    12: ["casal CD", "barraca do beijo", "casal AH", "casal MT", "quentão", "chica véia", "fogos de artifício", "cadeia", "pamonha", "curau", "milho", "milho cozido", "30", "rabo do burro", "maria-chiquinha", "remendo", "torta de frango", "arraiá", "bolo de cenoura", "quadrilha", "casal MM", "trança", "casal RR", "pescaria", "barraca do milho"],
    
    13: ["camisa xadrez", "casal MM", "casamento caipira", "pé de moleca", "JJ", "bentolovers", "casal CD", "maçã do amor", "bolo de cenoura", "saguadin", "pamonha", "fogueira", "30", "casal MT", "trança", "feijoada antonia", "maria-chiquinha", "carne louca", "zabumba", "chica véia", "chapéu de palha", "barraca do milho", "paçoca", "casal MJ", "torta de frango"],
    
    14: ["bentolovers", "casal RR", "milho", "casal ET", "maria-chiquinha", "trança", "barraca do milho", "casamento caipira", "pé de moleque", "pescaria", "canjica", "JJ", "30", "sanfona", "pamonha", "arraiá", "maçã do amor", "camisa xadrez", "remendo", "karaokê", "saguadin", "casal GJ", "bolo de cenoura", "pé de moleca", "cavalo"],
    
    15: ["casal CD", "camisa xadrez", "milho cozido", "casal MJ", "remendo", "chica véia", "bandeirinha", "arraiá", "trança", "mandioca", "torta de frango", "zabumba", "30", "casal MT", "fogos de artifício", "estilingue", "karaokê", "bentolovers", "casal MM", "barraca do beijo", "cavalo", "lampião", "JJ", "bolo de milho", "sanfona"],
    
    16: ["casal AH", "fogos de artifício", "cocada", "chica véia", "arroz doce", "casal MJ", "pé de moleca", "milho cozido", "xadrez", "barraca do beijo", "canjica", "paçoca", "30", "pipoca", "casal MM", "pescaria", "cavalo", "bingo", "casal ET", "saguadin", "milho", "casal CD", "zabumba", "casal MT", "estilingue"],
    
    17: ["amendoim", "pipoca", "canjica", "bigode postiço", "trança", "milho", "feijoada antonia", "JJ", "chapéu de palha", "bolo de cenoura", "barraca do beijo", "torta de frango", "30", "rabo do burro", "espantalho", "barraca do milho", "bingo", "lampião", "correio elegante", "pescaria", "quadrilha", "camisa xadrez", "karaokê", "saguadin", "casal MT"],
    
    18: ["quentão", "camisa xadrez", "JJ", "mandioca", "torta de frango", "chapéu de palha", "cavalo", "pamonha", "sanfona", "broa", "arroz doce", "pescaria", "30", "bolo de cenoura", "correio elegante", "casal RR", "bandeirinha", "casal MM", "milho", "pau de sebo", "estilingue", "bolo de milho", "chica véia", "paçoca", "pé de moleque"],
    
    19: ["paçoca", "arraiá", "quadrilha", "xadrez", "lampião", "sanfona", "feijoada antonia", "correio elegante", "carne louca", "cavalo", "pescaria", "casal CD", "30", "chica véia", "casal MJ", "canjica", "barraca do beijo", "espantalho", "bolo de cenoura", "casal ET", "pau de sebo", "broa", "amendoim", "maçã do amor", "camisa xadrez"],
    
    20: ["JJ", "milho", "pé de moleca", "camisa xadrez", "barraca do beijo", "fogueira", "casal MM", "correio elegante", "feijoada antonia", "maria-chiquinha", "xadrez", "casal RR", "30", "quadrilha", "cadeia", "bolo de cenoura", "chapéu de palha", "bingo", "bolo de milho", "casal ET", "bigode postiço", "casamento caipira", "saguadin", "pamonha", "trança"],
    
    21: ["JJ", "remendo", "quadrilha", "barraca do milho", "pé de moleque", "casamento caipira", "curau", "fogos de artifício", "pipoca", "torta de frango", "cavalo", "fogueira", "30", "cadeia", "canjica", "bolo de milho", "mandioca", "zabumba", "bigode postiço", "maçã do amor", "pescaria", "espantalho", "lampião", "paçoca", "karaokê"],
    
    22: ["JJ", "casal MT", "bandeirinha", "correio elegante", "barraca do beijo", "feijoada antonia", "bingo", "pé de moleque", "xadrez", "milho cozido", "broa", "carne louca", "30", "espantalho", "estilingue", "paçoca", "bolo de milho", "curau", "casamento caipira", "mandioca", "pau de sebo", "fogos de artifício", "pescaria", "sanfona", "arroz doce"],
    
    23: ["zabumba", "maria-chiquinha", "chapéu de palha", "casal GJ", "trança", "broa", "milho cozido", "bolo de cenoura", "quadrilha", "bigode postiço", "amendoim", "mandioca", "30", "casal MT", "sanfona", "pé de moleque", "barraca do beijo", "cocada", "arraiá", "pescaria", "casal MM", "casal CD", "canjica", "casal ET", "bingo"],
    
    24: ["curau", "casal GJ", "amendoim", "bentolovers", "milho", "xadrez", "trança", "milho cozido", "chica véia", "pau de sebo", "maçã do amor", "bandeirinha", "30", "pé de moleque", "casal MT", "fogueira", "chapéu de palha", "casal CD", "sanfona", "bolo de milho", "zabumba", "espantalho", "casal MJ", "casal MM", "pamonha"],
    
    25: ["casamento caipira", "pescaria", "xadrez", "trança", "remendo", "milho cozido", "cavalo", "sanfona", "estilingue", "pipoca", "bigode postiço", "chica véia", "30", "curau", "casal GJ", "casal MT", "casal MJ", "saguadin", "pé de moleca", "casal MM", "pé de moleque", "espantalho", "milho", "torta de frango", "fogos de artifício"]
};

// Lista única de todos os itens para o sorteio
const todosItens = [
    "maçã do amor", "casal MJ", "fogos de artifício", "chapéu de palha", "pau de sebo", "maria-chiquinha", 
    "casal ET", "milho", "pé de moleca", "sanfona", "quentão", "casal MT", "30", "amendoim", 
    "torta de frango", "correio elegante", "JJ", "zabumba", "casal AH", "curau", "rabo do burro", 
    "fogueira", "cavalo", "barraca do beijo", "arroz doce", "barraca do milho", "feijoada antonia", 
    "pamonha", "cadeia", "bolo de cenoura", "xadrez", "bigode postiço", "canjica", "bingo", "paçoca", 
    "casal RR", "casamento caipira", "arraiá", "estilingue", "mandioca", "broa", "espantalho", 
    "bandeirinha", "camisa xadrez", "bolo de milho", "bentolovers", "trança", "quadrilha", "lampião", 
    "pescaria", "saguadin", "pipoca", "remendo", "carne louca", "chica véia", "casal MM", "casal GJ", 
    "saguadin", "carne louca", "cocada", "karaokê", "milho cozido", "pé de moleque", "casal CD"
];

// Exportar para uso em outros arquivos (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { todasCartelas, todosItens };
}