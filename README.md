# NutriTrack Documentation

Техническая документация проекта **NutriTrack**, опубликованная на **GitHub Pages** и собранная на базе **Docusaurus**.

## О проекте

NutriTrack — это информационная система для ведения дневника питания, расчета КБЖУ, отслеживания массы тела и последующего перехода к персонализированной аналитике рациона.

Репозиторий содержит:

- бизнес-требования и границы MVP
- функциональные и нефункциональные требования
- описание архитектуры системы
- модели данных и стратегию хранения
- OpenAPI-спецификацию
- макеты экранов и артефакты проектирования

## Ссылки

- GitHub Repository: [Rrackoon/NT-documentation](https://github.com/Rrackoon/NT-documentation)
- Published Documentation: [Rrackoon.github.io/NT-documentation](https://Rrackoon.github.io/NT-documentation/)

## Технологии

- Docusaurus
- TypeScript
- Redocusaurus
- PlantUML
- Draw.io
- GitHub Actions
- GitHub Pages

## Локальный запуск

```bash
cd nt
npm ci
npm run start
```

Если порт `3000` уже занят:

```bash
npm run start -- --port 3001
```

## Сборка production-версии

```bash
cd nt
npm run build
```

## Структура репозитория

```text
.
├── .github/workflows/deploy.yml
├── nt/
│   ├── docs/
│   ├── openapi/
│   ├── static/
│   ├── src/
│   ├── docusaurus.config.ts
│   ├── sidebars.ts
│   └── package.json
└── README.md
```

## Автодеплой

Документация автоматически публикуется через **GitHub Actions** при пуше в ветку `main`.

Сборка:

- устанавливает зависимости
- собирает Docusaurus-сайт
- публикует готовый `build` в ветку `gh-pages`

## Автор

Проект документации подготовлен для учебного проекта **NutriTrack** by Rrackoon

