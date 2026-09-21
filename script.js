// Бургер
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('is-open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
}

// Маска телефона
const phone = document.getElementById('phone');
if (phone) {
    phone.addEventListener('input', (e) => {
        const v = e.target.value;
        if (v.startsWith('@') || v.startsWith('t.me')) return;
        let digits = v.replace(/\D/g, '');
        if (!digits.length) { e.target.value = ''; return; }
        if (digits[0] === '8' || digits[0] === '7') digits = digits.slice(1);
        digits = digits.slice(0, 10);
        let out = '+7';
        if (digits.length > 0) out += ' (' + digits.slice(0, 3);
        if (digits.length >= 3) out += ') ' + digits.slice(3, 6);
        if (digits.length >= 6) out += '-' + digits.slice(6, 8);
        if (digits.length >= 8) out += '-' + digits.slice(8, 10);
        e.target.value = out;
    });
}

// Форма (пока без отправки — заглушка успеха)
const form = document.getElementById('leadForm');
const formCard = document.getElementById('formCard');
const formSuccess = document.getElementById('formSuccess');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formCard.classList.add('is-submitted');
        formSuccess.classList.add('is-active');
        setTimeout(() => formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    });
}

// Калькулятор стоимости пожарной сигнализации.
// Логика и цены перенесены 1:1 из файла, который прислал клиент.
(function () {
    const prices = {
        project: 33000,
        pnr: 11000,
        cableLinePerMeter: 580,
        cableMetersPerPoint: 14,
        wired: { name: 'Проводная система', central: 45700, light: 2340, sound: 2740, manual: 2550, smoke: 2550 },
        radio: { name: 'Беспроводная система', central: 13800, light: 6105, sound: 7220, manual: 5560, smoke: 4005 }
    };

    const areaCoeffEl = document.getElementById('areaCoeff');
    const finishEl = document.getElementById('finish');
    const roomsEl = document.getElementById('rooms');
    const exitsEl = document.getElementById('exits');
    const systemNameEl = document.getElementById('systemName');
    const calcRowsEl = document.getElementById('calcRows');
    const totalPriceEl = document.getElementById('totalPrice');
    if (!areaCoeffEl) return;

    const formatPrice = (value) =>
        value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });

    const getNumberValue = (el) => {
        const v = parseInt(el.value, 10);
        return isNaN(v) || v < 0 ? 0 : v;
    };

    function calculate() {
        const systemType = finishEl.value;
        const system = prices[systemType];
        const areaCoeff = getNumberValue(areaCoeffEl);
        const rooms = getNumberValue(roomsEl);
        const exits = getNumberValue(exitsEl);

        const projectAndPnrTotal = (prices.project + prices.pnr) * areaCoeff;
        const centralTotal = system.central;

        let roomUnitPrice, exitUnitPrice;
        if (systemType === 'wired') {
            const cableCost = prices.cableLinePerMeter * prices.cableMetersPerPoint;
            roomUnitPrice = cableCost + system.sound + system.smoke;
            exitUnitPrice = cableCost + system.light + system.manual;
        } else {
            roomUnitPrice = system.sound + system.smoke;
            exitUnitPrice = system.light + system.manual;
        }

        const roomsTotal = roomUnitPrice * rooms;
        const exitsTotal = exitUnitPrice * exits;
        const total = projectAndPnrTotal + centralTotal + roomsTotal + exitsTotal;

        systemNameEl.textContent = system.name;

        const rows = [
            { name: `Проект + ПНР × ${areaCoeff}`, value: projectAndPnrTotal },
            { name: 'Центральное оборудование', value: centralTotal },
            { name: `Помещения: ${rooms} × ${formatPrice(roomUnitPrice)}`, value: roomsTotal },
            { name: `Эвакуационные выходы: ${exits} × ${formatPrice(exitUnitPrice)}`, value: exitsTotal }
        ];

        calcRowsEl.innerHTML = rows.map(r => `<tr><td>${r.name}</td><td>${formatPrice(r.value)}</td></tr>`).join('');
        totalPriceEl.textContent = formatPrice(total);
    }

    areaCoeffEl.addEventListener('change', calculate);
    finishEl.addEventListener('change', calculate);
    roomsEl.addEventListener('input', calculate);
    exitsEl.addEventListener('input', calculate);
    calculate();
})();
