export const darkenColor = (hexColor: string, percent: number) => {
  // Удаляем решетку из hexColor, если она есть
  hexColor = hexColor.replace("#", "");

  // Разбиваем hexColor на отдельные компоненты RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Рассчитываем процент затемнения для каждого канала
  const darkenPercent = 1 - percent / 100;

  // Затемняем каждый канал на указанный процент
  const darkenedR = Math.floor(r * darkenPercent);
  const darkenedG = Math.floor(g * darkenPercent);
  const darkenedB = Math.floor(b * darkenPercent);

  // Конвертируем значения каналов обратно в шестнадцатеричный формат
  const darkenedHexColor = `#${darkenedR.toString(16)}${darkenedG.toString(16)}${darkenedB.toString(16)}`;

  return darkenedHexColor;
};
