const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();

  resultsDiv.innerHTML = ''; // previous results cleared

  if (data.items) {
    data.items.forEach(item => {
      const info = item.volumeInfo;
      const title = info.title || 'უცნობია';
      const authors = info.authors ? info.authors.join(', ') : 'უცნობია';
      const year = info.publishedDate ? info.publishedDate.slice(0, 4) : 'უცნობია';
      const description = info.description || 'აღწერა მიუწვდომელია';
      const pageCount = info.pageCount || 'უცნობია';
      const thumbnail = info.imageLinks?.thumbnail || '';

      const bookHTML = `
        <div class="book">
          ${thumbnail ? `<img src="${thumbnail}" alt="${title}">` : ''}
          <div>
            <h2>${title}</h2>
            <p><strong>ავტორი:</strong> ${authors}</p>
            <p><strong>გამოშვების წელი:</strong> ${year}</p>
            <p><strong>გვერდების რაოდენობა:</strong> ${pageCount}</p>
            <p><strong>აღწერა:</strong> ${description}</p>
          </div>
        </div>
      `;
      resultsDiv.insertAdjacentHTML('beforeend', bookHTML);
    });
  } else {
    resultsDiv.innerHTML = '<p>ვერ მოიძებნა შედეგი.</p>';
  }
});