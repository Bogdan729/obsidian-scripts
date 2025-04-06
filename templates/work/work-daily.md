- [ ] 
---
- 📅
	- ⬅️
	- ⏺
	- 🎯
	- 📜
	- ❓
---
# ⏱️ Timesheet

| Time | Summary | Issue                                       |
| ---- | ------- | ------------------------------------------- |
|      |         |                                             |

# Заметки сегодня

```dataviewjs
const dateString = dv.current().file.name; 
const dateNote = moment(dateString, "DD MMM YYYY").toDate();

dv.list(dv.pages()
  .filter(n => !n.file.path.startsWith("periodic/daily"))
  .filter(n => isSameDay(dateNote, n.file.cday.toJSDate()))
  .filter(n => n.file.name !== dv.current().file.name)
  .map(n => n.file.link)
)

function isSameDay(d1, d2) { 
  return d1.getFullYear() === d2.getFullYear() 
  && d1.getMonth() === d2.getMonth() 
  && d1.getDate() === d2.getDate(); 
}
```

# Быстрые ссылки

- [[❓вопросы]]
