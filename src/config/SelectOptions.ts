export const colorCode = [
  { codeID: 'RED', codeName: '紅' },
  { codeID: 'BLACK', codeName: '黑' },
  { codeID: 'WHITE', codeName: '白' },
];

export const packageUnit = [
  { codeID: 'PIECE', codeName: '件' },
  { codeID: 'SET', codeName: '組' },
  { codeID: 'BAG', codeName: '袋' },
  { codeID: 'TOP', codeName: '頂' },
  { codeID: 'BOX', codeName: '盒' },
  { codeID: 'PACK', codeName: '包' },
];

export const productType = [
  {
    codeID: 'TOPS',
    codeName: '上衣',
    detail: ['胸围', '肩宽', '袖长', '衣长'],
  },
  {
    codeID: 'PANTS',
    codeName: '長褲',
    detail: ['腰围', '臀围', '裤长', '裤脚口宽度'],
  },
  { codeID: 'SKIRT', codeName: '裙子', detail: ['腰围', '臀围', '裙长'] },
];

export const size = [
  { codeID: 'S_L', codeName: 'S-L', detail: ['S', 'M', 'L'] },
  { codeID: 'S_XXL', codeName: 'S-XXL', detail: ['XS', 'M', 'L', 'XL', 'XXL'] },
  {
    codeID: '90CM_150CM',
    codeName: '90cm - 150cm',
    detail: ['90cm', '100cm', '110cm', '120cm', '130cm', '140cm'],
  },
  { codeID: '120CM_160CM', codeName: '120cm - 160cm', detail: [] },
  { codeID: '110CM_160CM', codeName: '110cm - 160cm', detail: [] },
  {
    codeID: '66CM_90CM',
    codeName: '66cm - 90cm',
    detail: ['66cm', '73cm', '80cm', '90cm'],
  },
];
