---
title: Концептуальная модель
sidebar_position: 1
description: Доменные сущности NutriTrack и их связи
---

# Концептуальная модель

## Основные сущности

- `User`
- `Meal`
- `MealItem`
- `Product`
- `WeightRecord`
- `DailyGoal`

## Связи

- один пользователь владеет многими приемами пищи
- один прием пищи состоит из многих `MealItem`
- `MealItem` ссылается на `Product`, но хранит снапшот БЖУ и названия
- пользователь имеет множество записей веса
- пользователь имеет дневные цели по КБЖУ

## ER-диаграмма

```plantuml Domain Model
@startuml
entity USER
entity MEAL
entity MEAL_ITEM
entity PRODUCT
entity WEIGHT_RECORD
entity DAILY_GOAL

USER ||--o{ MEAL : creates
MEAL ||--o{ MEAL_ITEM : contains
MEAL_ITEM }o--|| PRODUCT : references
USER ||--o{ WEIGHT_RECORD : has
USER ||--o{ DAILY_GOAL : sets
USER ||--o{ PRODUCT : creates custom
@enduml
```

## Почему MealItem хранит снапшот

Если продукт в справочнике изменится, история пользователя не должна пересчитываться задним числом. Поэтому в `MealItem` фиксируются:

- `productName`
- `calories`
- `protein`
- `fat`
- `carbs`
- `quantity`
