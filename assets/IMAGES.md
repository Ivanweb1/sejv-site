# Картинки для сайта СЭЙВ

Структура папок (внутри `sejv-site/assets/`):

```
assets/
├── hero/      первый экран
├── cases/     обложки объектов (6 шт.)
├── blog/      обложки статей (3 шт.)
├── brand/     логотип, фавикон, OG-превью
└── hero-extinguisher.png   — текущий PNG с Tilda-версии
```

Общий стиль: тёмный фон `#191919`, фиолетовый акцент `#8353E7`, красный только у пожарного
оборудования. Форматы: PNG с прозрачностью для hero и лого, WebP/JPG для обложек.

---

## 1. Первый экран — `assets/hero/`

Сейчас стоит огнетушитель с Tilda-версии. Если нужен вариант «серьёзнее»:

**hero-panel.png** — 900×1000, прозрачный фон

> Professional fire alarm control panel and smoke detector floating in dark space,
> product photography, dramatic rim lighting, deep violet accent glow from the left,
> glossy red and white industrial equipment, transparent background, ultra sharp,
> studio render, 3/4 angle, no text, no logo

**hero-extinguisher-new.png** — 900×1000, прозрачный фон (замена текущему)

> Red fire extinguisher, modern industrial design, floating at a slight tilt,
> studio product shot, soft violet rim light on the left edge, high gloss finish,
> transparent background, photorealistic 3D render, no text on the label, no watermark

---

## 2. Обложки объектов — `assets/cases/` (6 шт., 1200×800)

**Важно:** это реальные объекты компании. ИИ-картинку нельзя подписывать
«ТРЦ МАКСИ, Архангельск» — это будет подделкой. Правильный путь: запросить
у клиента реальные фото. Промпты ниже — на случай, если клиент фото не даст и мы
согласуем нейтральные иллюстративные обложки **типа объекта**, без привязки к названию.

`maxi.webp` — торговый центр

> Interior of a modern shopping mall atrium, wide angle, glass railings and escalators,
> fire alarm detectors visible on the ceiling, cool blue-grey light, cinematic,
> photorealistic, no people, no signage

`sinop.webp` — бизнес-центр

> Modern business center lobby, dark marble and glass, evening light,
> ceiling-mounted smoke detectors, architectural photography, cinematic, no people, no text

`union-pipe.webp` — производственный цех

> Industrial pipe manufacturing workshop, steel machinery and overhead lighting,
> fire suppression piping along the ceiling, photorealistic, wide shot, no people, no text

`morskaya.webp` — бизнес-центр с водяным пожаротушением

> Large office building corridor with exposed sprinkler system piping,
> polished concrete floor, cold daylight, architectural photography, no people, no text

`dental.webp` — медицинский центр

> Modern dental training classroom, white and grey interior, equipment units in rows,
> soft clinical light, smoke detector on the ceiling, photorealistic, no people, no text

`petrovich.webp` — склад

> Large warehouse interior with high steel racking, sprinkler pipes under the roof,
> powder fire suppression modules, industrial lighting, photorealistic, no people, no text

---

## 3. Обложки статей — `assets/blog/` (3 шт., 1000×560)

Здесь ИИ-иллюстрации уместны — это не факты об объектах. Стиль: плоская
иллюстрация в фирменной палитре, а не фотография.

`mistakes.webp`

> Flat vector illustration, dark charcoal background #191919, violet #8353E7 accents,
> minimal isometric scene of a ceiling smoke detector wired incorrectly,
> warning triangle, clean geometric style, no text, generous negative space

`gas-vs-powder.webp`

> Flat vector illustration, dark charcoal background, violet accents,
> two server racks side by side, one with gas suppression cylinder, one with powder module,
> isometric, minimal geometric style, no text

`checklist.webp`

> Flat vector illustration, dark charcoal background, violet accents,
> minimal isometric clipboard with checkmarks next to a fire alarm panel,
> clean geometric style, no text

---

## 4. Бренд — `assets/brand/`

`logo.svg` — логотип СЭЙВ. **Генерировать не нужно** — запросить у клиента оригинал.
Сейчас в вёрстке текстовый логотип.

`favicon.png` — 512×512

> Minimal app icon, violet #8353E7 rounded square, white flame-and-shield glyph in the center,
> flat vector, no text, no gradients

`og-preview.jpg` — 1200×630, превью при отправке ссылки в мессенджеры

> Dark charcoal background #191919, red fire extinguisher on the right,
> large empty space on the left for a headline, violet glow accent, cinematic product shot,
> photorealistic, no text

---

## Что нужно запросить у клиента, а не генерировать

- Реальные фото шести объектов (или разрешение показывать их без фото).
- Логотип СЭЙВ в векторе.
- Фото инженеров/бригады — для блока «Свой инженерный штат» ИИ-люди недопустимы.
- Сканы лицензии МЧС, если решим показывать документы.
