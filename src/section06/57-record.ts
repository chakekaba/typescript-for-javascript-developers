export {};

/* record型 ２つの型引数を受け取る*/
// Record<K, T>

type Prefecture = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19InfectionInfo = {
    kanjiName: string;
    confirmedCases: number;
};

const covid19Japan: Record<Prefecture, Covid19InfectionInfo> = {
    Tokyo: {kanjiName: '東京', confirmedCases: 1960},
    Chiba: {kanjiName: '千葉', confirmedCases: 249},
    Tottori: {kanjiName: '鳥取', confirmedCases: 2},
    Shiga: {kanjiName: '滋賀', confirmedCases: 24}
};