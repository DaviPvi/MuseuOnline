// Array de objetos contendo informações sobre artistas e suas obras
let dados = [
    {
        nome: "Vincent van Gogh",
        obraMaisFamosa: "A Noite Estrelada",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Vincent_van_Gogh",
        descricao: "Pintor pós-impressionista holandês, conhecido por suas pinceladas vibrantes e uso expressivo da cor. Suas obras frequentemente retratam paisagens e naturezas mortas.",
        tags: "pós-impressionismo holandês paisagens natureza morta, cores vibrantes a noite estrelada",
        img: "img/Vincent_van_Gogh.jpg"
    },
    {
        nome: "Leonardo da Vinci",
        obraMaisFamosa: "Mona Lisa",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Leonardo_da_Vinci",
        descricao: "Artista renascentista italiano, conhecido por sua versatilidade em diversas áreas como pintura, escultura, arquitetura e engenharia. A Mona Lisa é uma de suas obras mais enigmáticas.",
        tags: "renascimento italiano mona lisa a última ceia homem vitruviano pintura escultura arquitetura polímata",
        img: "img/leonardo.jpeg"
    },
    {
        nome: "Pablo Picasso",
        obraMaisFamosa: "Guernica",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Pablo_Picasso",
        descricao: "Pintor espanhol, co-fundador do movimento cubista. Suas obras são caracterizadas por formas geométricas e múltiplas perspectivas.",
        tags: "cubismo espanhol guernica arte moderna abstração formas geométricas múltiplas perspectivas surrealismo período azul",
        img: "img/pablo.jpeg"
    },
    {
        nome: "Claude Monet",
        obraMaisFamosa: "Impressão, nascer do sol",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Claude_Monet",
        descricao: "Pintor francês e um dos fundadores do impressionismo, conhecido por suas pinturas de paisagens e pelo estudo da luz em diferentes horas do dia.",
        tags: "impressionismo francês paisagens estudo da luz jardinagem",
        img: "img/Claude_Monet.jpg"
    },
    {
        nome: "Frida Kahlo",
        obraMaisFamosa: "As Duas Fridas",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Frida_Kahlo",
        descricao: "Artista mexicana conhecida por suas obras autobiográficas que retratam a dor física e emocional, além de temas como identidade e cultura mexicana.",
        tags: "surrealismo mexicano autobiografia dor emocional cultura mexicana",
        img: "img/frida_kahlo.jpg"
    },
    {
        nome: "Salvador Dalí",
        obraMaisFamosa: "A Persistência da Memória",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Salvador_Dal%C3%AD",
        descricao: "Pintor surrealista espanhol conhecido por suas imagens oníricas e bizarras, frequentemente envolvendo derretimento e distorção de objetos.",
        tags: "surrealismo espanhol imagens oníricas distorção objetos derretimento",
        img: "img/salvador_dali.jpg"
    },
    {
        nome: "Gustav Klimt",
        obraMaisFamosa: "O Beijo",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Gustav_Klimt",
        descricao: "Pintor austríaco associado ao movimento simbolista e à Secessão de Viena. Suas obras são conhecidas por seus padrões ornamentais e uso de ouro.",
        tags: "simbolismo austríaco secessão de viena padrões ornamentais arte de ouro",
        img: "img/gustav_klimt.jpeg"
    },
    {
        nome: "Jackson Pollock",
        obraMaisFamosa: "Número 1A",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Jackson_Pollock",
        descricao: "Pintor americano e figura central do expressionismo abstrato, conhecido por suas técnicas de pintura por gotejamento e ação.",
        tags: "expressionismo abstrato americana técnica de gotejamento arte ação",
        img: "img/jackson_pollock.jpg"
    },
    {
        nome: "Andy Warhol",
        obraMaisFamosa: "Marilyn Diptych",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Andy_Warhol",
        descricao: "Artista americano e uma figura central do movimento pop art. Warhol é conhecido por suas obras que exploram a cultura de massa e a reprodução em massa.",
        tags: "pop art americana cultura de massa reprodução em massa",
        img: "img/andy_warhol.jpg"
    },
    {
        nome: "Georgia O'Keeffe",
        obraMaisFamosa: "Flores Azuis",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Georgia_O%27Keeffe",
        descricao: "Pintora americana conhecida por suas representações de flores grandes e paisagens do Novo México. O'Keeffe é uma das figuras mais proeminentes da arte moderna americana.",
        tags: "arte moderna americana flores grandes paisagens Novo México",
        img: "img/georgia_okeeffe.jpg"
    },
    {
        nome: "Edvard Munch",
        obraMaisFamosa: "O Grito",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Edvard_Munch",
        descricao: "Pintor norueguês e um dos precursores da expressão artística moderna. Sua obra 'O Grito' é um ícone da arte expressionista.",
        tags: "expressionismo norueguês ícone da arte moderna",
        img: "img/edvard_munch.jpg"
    },
    {
        nome: "Marc Chagall",
        obraMaisFamosa: "A Noite Estrelada sobre o Vitebsk",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Marc_Chagall",
        descricao: "Pintor russo-francês conhecido por suas obras surrealistas e simbolistas que frequentemente apresentam temas de sonho e fantasia.",
        tags: "surrealismo simbolismo russo-francês temas de sonho fantasia",
        img: "img/marc_chagall.jpg"
    },
    {
        nome: "J.M.W. Turner",
        obraMaisFamosa: "Chuva, Vapor e Velocidade",
        linkWikipedia: "https://pt.wikipedia.org/wiki/J._M._W._Turner",
        descricao: "Pintor britânico conhecido por suas paisagens dramáticas e inovadoras representações da luz e do clima.",
        tags: "romantismo britânico paisagens luz clima",
        img: "img/jmw_turner.jpg"
    },
    {
        nome: "Caravaggio",
        obraMaisFamosa: "A Vocação de São Mateus",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Caravaggio",
        descricao: "Pintor italiano do barroco, conhecido por seu uso dramático da luz e da sombra, e por sua representação realista de temas religiosos.",
        tags: "barroco italiano luz e sombra realismo religioso",
        img: "img/caravaggio.jpg"
    },
    {
        nome: "Paul Cézanne",
        obraMaisFamosa: "A Montanha Sainte-Victoire",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Paul_C%C3%A9zanne",
        descricao: "Pintor francês cujas obras de paisagens e natureza morta foram fundamentais no desenvolvimento do pós-impressionismo e influenciaram o cubismo.",
        tags: "pós-impressionismo francês paisagens natureza morta cubismo",
        img: "img/paul_cezanne.jpg"
    }
];
