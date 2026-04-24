const footerStatuses = [
  "Подключение...",
  "Поиск локального узла...",
  "Чтение ресурсов...",
  "Сборка навигационной сетки...",
  "Ожидание стабилизации..."
];

const tips = [
  "Не забудьте осмотреть окружение.<br />В зоне карантина можно найти<br />полезные ресурсы.",
  "Держите грави-перчатки готовыми.<br />Некоторые объекты реагируют<br />на дистанционный захват.",
  "Слушайте окружение.<br />Радиосигналы могут подсказать<br />безопасный маршрут.",
  "Не тратьте боеприпасы впустую.<br />В закрытых секторах ресурсов<br />может быть недостаточно.",
  "Проверяйте ящики и шкафы.<br />Полезные предметы часто скрыты<br />в затемнённых углах."
];

const footerStatus = document.getElementById("footerStatus");
const tipText = document.getElementById("tipText");

let footerIndex = 0;
let tipIndex = 0;

function swapText(el, html) {
  el.classList.add("is-changing");

  window.setTimeout(() => {
    el.innerHTML = html;
    el.classList.remove("is-changing");
  }, 260);
}

window.setInterval(() => {
  footerIndex = (footerIndex + 1) % footerStatuses.length;
  swapText(footerStatus, footerStatuses[footerIndex]);
}, 2400);

window.setInterval(() => {
  tipIndex = (tipIndex + 1) % tips.length;
  swapText(tipText, tips[tipIndex]);
}, 5200);
