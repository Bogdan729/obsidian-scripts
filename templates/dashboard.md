---
cssclasses:
  - two-column-list
  - two-column-grid-list
  - callouts-outlined
  - wide-page
aliases:
  - дашборд
banner: "![[colin-watts-g9aYfZb7_c8-unsplash.jpg]]"
banner_y: 0.5
---
- Modular CSS [layout](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/07-list-card/) - [пример](https://www.youtube.com/watch?v=5VxKPVeDH1I&ab_channel=PrakashJoshiPax)
- статья с примерам [настройки борда](https://tfthacker.com/article-obsidian-dashboardplusplus2022)
- [x] как кастомизировать снипппеты как на [фото](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/)? 🔼 [ссылка](https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets/blob/Collection/Snippets/Callout%20styling%20-%20Outlined%20callout.md)
- [x] добавить баннер
- [ ] категории
	- [x] книги
	- [x] цели
	- [x] MoC
	- [ ] календарь 🔽 
		- найти способ добавить Calendar на дашборд

```meta-bind 
INPUT[datePicker:dashDate] 
```

# MoC

> [!multi-column]
>
>> [!example]+ Контент
>> `$=dv.list(dv.pages("#🗺️").file.link)`
# Цели

> [!multi-column]
>
>> [!tip]+ Goal
>> ```dataview
>>TABLE WITHOUT ID
>>file.link as "!", priority as "Приоритет", status as "Статус"
>>FROM #goal
>> WHERE file.name != "цель-tmp"
>> ```

# Работа

- [[программрование]]
- [[Jira]]
- [[🐧Linux]]
- [[👨‍💻работа]]
 
# Библиотека
> [!multi-column]
>
>> [!note]+ Читаю
>> ```dataview
>> TABLE WITHOUT ID
>>  ("![|80](" + cover + ")") as Постер,
>>  row.file.link as Название,
>>  author as Автор
>> FROM "books"
>> WHERE status = "reading"
>> ```
>
>> [!question]+ Отложено
>> ```dataview
>> TABLE WITHOUT ID
>>  ("![|80](" + cover + ")") as Постер,
>>  row.file.link as Название,
>>  author as Автор
>> FROM "books"
>> WHERE status = "unread"
>> ```
>
>> [!success]+ Прочитано
>> ```dataview
>> TABLE WITHOUT ID
>>  ("![|80](" + cover + ")") as Постер,
>>  row.file.link as Название,
>>  author as Автор
>> FROM "books"
>> WHERE status = "read"
>> SORT finished DESC
>> LIMIT 5
>> ```
