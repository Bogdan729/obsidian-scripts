---
tags:
  - weekly
---
# Заметки недели

```dataviewjs
let currentNote = dv.current().file.name;

let dateRegex = /(\d{1,2} \w{3} \d{4})/;
let match = currentNote.match(dateRegex);

if (match) {
    let currentDateString = match[0];
    let currentDate = new Date(currentDateString);

    let endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + 6);

    let dailyNotes = dv.pages('"periodic/daily"');
    
    let filteredNotes = [];

    function getDayOfWeek(date) {
        const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return daysOfWeek[date.getDay()];
    }

    dailyNotes.forEach(note => {
        let noteMatch = note.file.name.match(dateRegex);

        if (noteMatch) {
            let noteDateString = noteMatch[0];
            let noteDate = new Date(noteDateString);

            if (noteDate >= currentDate && noteDate <= endDate) {
                filteredNotes.push({ note: note, date: noteDate });
            }
        }
    });

    filteredNotes.sort((a, b) => a.date - b.date);

    filteredNotes.forEach(item => {
        let dayOfWeek = getDayOfWeek(item.date);
        dv.paragraph(`<span style="display: inline-block; width: 120px; color: #027aff">${dayOfWeek}</span> ${dv.fileLink(item.note.file.path)}`);
    });

} else {
    dv.paragraph("Не удалось извлечь дату из названия текущей заметки.");
}
```
# Цели

<%tp.file.move("/periodic/weekly/" + tp.date.now("DD MMM YYYY") + " weekly")%>
