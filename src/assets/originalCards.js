import ironman from './ironman.gif';
import thor from './thor.gif';
import captain from './captain.gif';
import hulk from './hulk.gif';
import widow from './widow.gif';
import hawk from './hawk.gif';
import vision from './vision.gif';
import thanos from './thanos.gif';
import panther from './panther.gif';

const muitoRaro = 'muito raro';

const originalCards = [
  {
    cardName: 'Thor',
    cardDescription: `Thor é o "Deus do Trovão", um membro da
    raça conhecida como asgardianos, um grupo
    de seres humanóides da dimensão do bolso de
    Asgard, o Reino Eterno.`,
    cardAttr1: 65,
    cardAttr2: 54,
    cardAttr3: 42,
    cardImage: thor,
    cardRare: muitoRaro,
    cardTrunfo: false,
  },

  {
    cardName: 'Homem de Ferro',
    cardDescription: `Anthony Edward "Tony" Stark foi um 
    industrialista, membro fundador dos Vingadores 
    e antigo CEO das Indústrias Stark.`,
    cardAttr1: 52,
    cardAttr2: 59,
    cardAttr3: 74,
    cardImage: ironman,
    cardRare: 'raro',
    cardTrunfo: false,
  },

  {
    cardName: 'Pantera Negra',
    cardDescription: `T'Challa é o rei de Wakanda e primeiro 
    filho de T'Chaka. Como monarca wakandano, 
    ele tornou-se o detentor do manto 
    de Pantera Negra.`,
    cardAttr1: 46,
    cardAttr2: 71,
    cardAttr3: 57,
    cardImage: panther,
    cardRare: 'raro',
    cardTrunfo: false,
  },

  {
    cardName: 'Capitão América',
    cardDescription: `Capitão Steven Grant "Steve" Rogers é 
    um veterano da Segunda Guerra Mundial, membro 
    fundador dos Vingadores e o primeiro 
    super-herói conhecido da Terra.`,
    cardAttr1: 49,
    cardAttr2: 63,
    cardAttr3: 51,
    cardImage: captain,
    cardRare: 'raro',
    cardTrunfo: false,
  },

  {
    cardName: 'Thanos',
    cardDescription: `Thanos, conhecido como "Senhor da Guerra" 
    é um genocida de Titã, cujo objetivo é 
    trazer estabilidade ao universo, dizimando 
    metade da população no universo.`,
    cardAttr1: 85,
    cardAttr2: 45,
    cardAttr3: 65,
    cardImage: thanos,
    cardRare: muitoRaro,
    cardTrunfo: true,
  },

  {
    cardName: 'Viúva Negra',
    cardDescription: `Natasha Romanoff, mais conhecida como 
    Viúva Negra, foi uma das mais talentosas espiãs 
    e assassinas de todo o mundo e um membro fundador 
    dos Vingadores.`,
    cardAttr1: 45,
    cardAttr2: 68,
    cardAttr3: 57,
    cardImage: widow,
    cardRare: 'normal',
    cardTrunfo: false,
  },

  {
    cardName: 'Gavião Arqueiro',
    cardDescription: `Clinton Francis "Clint" Barton, mais 
    conhecido como Gavião Arqueiro, é o 
    maior atirador vivo do planeta e um 
    ex-agente especial da S.H.I.E.L.D.`,
    cardAttr1: 47,
    cardAttr2: 62,
    cardAttr3: 54,
    cardImage: hawk,
    cardRare: 'normal',
    cardTrunfo: false,
  },

  {
    cardName: 'Visão',
    cardDescription: `Visão foi um androide nascido do resultado 
    de um corpo sintético de Vibranium criado 
    por Ultron e Helen Cho, ativado pela 
    Joia da Mente.`,
    cardAttr1: 67,
    cardAttr2: 65,
    cardAttr3: 89,
    cardImage: vision,
    cardRare: muitoRaro,
    cardTrunfo: false,
  },

  {
    cardName: 'Hulk',
    cardDescription: `Robert Bruce Banner, renomado cientista 
    que após uma experiência com raios gama 
    mal sucedida, quando irritado se transforma 
    num monstro conhecido como Hulk.`,
    cardAttr1: 73,
    cardAttr2: 41,
    cardAttr3: 36,
    cardImage: hulk,
    cardRare: 'raro',
    cardTrunfo: false,
  },
];

export default originalCards;
