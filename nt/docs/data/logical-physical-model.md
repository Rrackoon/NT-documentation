---
title: Логическая и физическая модели
sidebar_position: 2
description: Таблицы, ключи и физические атрибуты хранения данных NutriTrack
---

# Логическая и физическая модели

## Логическая модель

### User

- `id`
- `username`
- `email`
- `fullName`
- `birthDate`
- `gender`
- `height`
- `activityLevel`

### Meal

- `id`
- `userId`
- `date`
- `mealType`
- `totalCalories`
- `totalProtein`
- `totalFat`
- `totalCarbs`
- `createdAt`

### MealItem

- `id`
- `mealId`
- `productId`
- `productName`
- `quantity`
- `calories`
- `protein`
- `fat`
- `carbs`

### Product

- `id`
- `name`
- `caloriesPer100g`
- `proteinPer100g`
- `fatPer100g`
- `carbsPer100g`
- `category`
- `isCustom`
- `userId`

### WeightRecord

- `id`
- `userId`
- `weight`
- `createdAt`

### DailyGoal

- `userId`
- `date`
- `targetCalories`
- `targetProtein`
- `targetFat`
- `targetCarbs`

## Физическая модель

Рекомендуемые типы:

- `uuid` для первичных ключей
- `numeric(8,2)` для значений БЖУ и веса
- `integer` для калорий
- `timestamp` для технических дат
- `date` для календарных записей и целей

## Индексация

- `user.email` - unique index
- `meal(user_id, date)` - для дневника питания
- `daily_goal(user_id, date)` - для целей
- `weight_record(user_id, created_at)` - для диапазонных запросов
- `product.name` - полнотекстовый индекс в Elasticsearch

## Технические замечания

- `Meal` и `MealItem` желательно партицировать по дате
- `DailyGoal` можно хранить с составным уникальным ограничением `(user_id, date)`
- `Product.user_id` заполняется только для пользовательских блюд
