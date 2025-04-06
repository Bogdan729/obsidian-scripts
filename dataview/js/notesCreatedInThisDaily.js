// Отображает созданные заметки исходя из даты daily note

const dateString = dv.current().file.name; 
const dateNote = moment(dateString, "YYYY.MM.DD - DD MMM").toDate();

dv.list(dv.pages()
	.filter(n => !n.file.path.startsWith("personal space/bogdan/daily"))
	.filter(n => isSameDay(dateNote, n.file.cday.toJSDate()))
	.filter(n => n.file.name !== dv.current().file.name)
	.map(n => n.file.link)
)

function isSameDay(d1, d2) { 
	return d1.getFullYear() === d2.getFullYear() 
	&& d1.getMonth() === d2.getMonth() 
	&& d1.getDate() === d2.getDate(); 
}
