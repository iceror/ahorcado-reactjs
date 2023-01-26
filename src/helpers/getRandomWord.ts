let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'AVESTRUZ',
    'SENCILLO',
    'PATATUS',
    'FESTIVIDADES',
    'CIRCULAR',
    'VETERINARIO',
    'SECUAZ',
    'PERIFERIA'
];

export function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];

}