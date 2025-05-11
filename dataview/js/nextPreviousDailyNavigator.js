// Отображение предыдущей и следующей заметки в текущей daily

const currentNote = dv.current().file.name;

if (currentNote != "bdn-daily") {
	const pn = dv.pages('"personal space/bogdan/daily"')
		.sort(n => n.file.ctime.toMillis(), "asc")
	
	const currentIndex = pn.findIndex(n => n.file.name === currentNote);
	
	if (pn.length > currentIndex + 1) {
		dv.paragraph(`${pn[currentIndex-1].file.link} || ${pn[currentIndex+1].file.link}`);
	} else {
		dv.paragraph(`${pn[currentIndex-1].file.link}`);
	}
	
} else {
    dv.paragraph("Заметка является шаблоном, навигация не доступна.");
}
