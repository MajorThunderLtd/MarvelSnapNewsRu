fetch('news.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('newsList');
    const viewer = document.getElementById('viewer');

    data.forEach(article => {
      const a = document.createElement('a');
      a.textContent = article.title;
      a.href = "#";
      a.className = "link";
      a.onclick = () => {
        viewer.src = article.url;
        return false;
      };
      list.appendChild(a);
    });

    // Загрузим первую статью по умолчанию
    if (data.length > 0) {
      viewer.src = data[0].url;
    }
  });
