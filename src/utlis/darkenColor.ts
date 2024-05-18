export const darkenColor = (hexColor: string) => {
  // Удаляем решетку из hexColor, если она есть
  hexColor = hexColor.replace("#", "");

  // Разбиваем hexColor на отдельные компоненты RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Уменьшаем каждый канал на 10%
  const darkenedR = Math.floor(r * 0.9);
  const darkenedG = Math.floor(g * 0.9);
  const darkenedB = Math.floor(b * 0.9);

  // Конвертируем значения каналов обратно в шестнадцатеричный формат
  const darkenedHexColor = `#${darkenedR.toString(16)}${darkenedG.toString(16)}${darkenedB.toString(16)}`;
  console.log(darkenedHexColor, "darkenedHexColor");
  return darkenedHexColor;
};
