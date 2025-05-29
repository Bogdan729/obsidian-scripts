const pages = dv.pages('"3. Resourses"').where(p => p.страница && p["всего страниц"]);
const container = this.container;

// === UI: Фильтр по категориям ===
const filterWrapper = document.createElement("div");
filterWrapper.style.display = "flex";
filterWrapper.style.gap = "1rem";
filterWrapper.style.marginBottom = "1rem";

// Категории (tags)
const select = document.createElement("select");
const allOption = document.createElement("option");
allOption.textContent = "Все категории";
allOption.value = "";
select.appendChild(allOption);

const allTags = new Set();
for (let p of pages) {
  const tags = Array.isArray(p.tags) ? p.tags : [p.tags];
  tags.forEach(t => t && allTags.add(t));
}
for (let tag of Array.from(allTags).sort()) {
  const opt = document.createElement("option");
  opt.textContent = tag;
  opt.value = tag;
  select.appendChild(opt);
}
filterWrapper.appendChild(select);

// === UI: Поле поиска ===
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "🔍 Поиск книги...";
searchInput.style.flex = "1";
filterWrapper.appendChild(searchInput);

// === Рендер таблицы ===
container.appendChild(filterWrapper);

function renderTable(selectedTag = "", searchTerm = "") {
  const oldTable = container.querySelector("table");
  if (oldTable) oldTable.remove();

  const table = document.createElement("table");
  table.className = "dataview table-view-table";

  const header = table.insertRow();
  ["📕 Обложка", "📘 Книга", "✍️ Автор", "📚 Категория", "📖 Прочитано", "📈 Прогресс-бар"].forEach(title => {
    const th = document.createElement("th");
    th.textContent = title;
    header.appendChild(th);
  });

  for (let p of pages) {
    const tagMatch = !selectedTag || (Array.isArray(p.tags) ? p.tags.includes(selectedTag) : p.tags === selectedTag);
    const searchMatch = !searchTerm || p.file.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (!(tagMatch && searchMatch)) continue;

    const current = Number(p.страница);
    const total = Number(p["всего страниц"]);
    const percent = Math.round((current / total) * 100);
    const color = percent === 100 ? 'green' : 'orange';

    const row = table.insertRow();

    const cellCover = row.insertCell();
    cellCover.innerHTML = p.cover ? `<img src="${p.cover}" width="100" style="border-radius: 8px;">` : "—";

    const cellTitle = row.insertCell();
    const link = document.createElement("a");
    link.href = p.file.path;
    link.textContent = p.file.name;
    link.className = "internal-link";
    cellTitle.appendChild(link);

    const cellAuthor = row.insertCell();
    cellAuthor.textContent = p.Автор || "–";

    const cellTags = row.insertCell();
    cellTags.textContent = Array.isArray(p.tags) ? p.tags.join(", ") : (p.tags || "–");

    const cellProgressText = row.insertCell();
    cellProgressText.textContent = `${current} / ${total}`;

    const cellBar = row.insertCell();
    const progressBarContainer = document.createElement("div");
    progressBarContainer.style.background = "#eee";
    progressBarContainer.style.borderRadius = "6px";
    progressBarContainer.style.height = "16px";
    progressBarContainer.style.width = "100%";
    const progressBar = document.createElement("div");
    progressBar.style.background = color;
    progressBar.style.height = "100%";
    progressBar.style.borderRadius = "6px";
    progressBar.style.width = `${percent}%`;
    progressBarContainer.appendChild(progressBar);
    const percentText = document.createElement("div");
    percentText.style.fontSize = "12px";
    percentText.style.textAlign = "right";
    percentText.textContent = `${percent}%`;
    cellBar.appendChild(progressBarContainer);
    cellBar.appendChild(percentText);
  }

  container.appendChild(table);
}

// === Слушатели ===
select.onchange = () => renderTable(select.value, searchInput.value);
searchInput.oninput = () => renderTable(select.value, searchInput.value);

// Инициализация
renderTable();