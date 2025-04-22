class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.read = false;
    }
  }

  const allBooks = [
    new Book(1, "ვეფხისტყაოსანი", "შოთა რუსთაველი"),
    new Book(2, "დათა თუთაშხია", "ჭაბუა ამირეჯიბი"),
    new Book(3, "მთვარის მოტაცება", "რაინერ მარია რილკე"),
    new Book(4, "სამი მუშკეტერი", "ალექსანდრე დიუმა")
  ];

  const getLibrary = () => JSON.parse(localStorage.getItem("library")) || [];
  const setLibrary = (lib) => localStorage.setItem("library", JSON.stringify(lib));

  const isInLibrary = (id) => getLibrary().some(book => book.id === id);

  function toggleRead(id) {
    const library = getLibrary();
    const index = library.findIndex(book => book.id === id);
    if (index !== -1) {
      library[index].read = !library[index].read;
      setLibrary(library);
      renderLibrary();
    }
  }

  function addToLibrary(id) {
    const library = getLibrary();
    const book = allBooks.find(b => b.id === id);
    if (book && !isInLibrary(id)) {
      library.push(book);
      setLibrary(library);
    }
  }

  function removeFromLibrary(id) {
    const library = getLibrary().filter(book => book.id !== id);
    setLibrary(library);
    renderLibrary();
  }

  function renderBooks() {
    const app = document.getElementById("app");
    app.innerHTML = '<div class="grid">' +
      allBooks.map(book => `
        <div class="book">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <button onclick="addToLibrary(${book.id})">დამატება ბიბლიოთეკაში</button>
        </div>
      `).join("") +
      '</div>';
  }

  function renderLibrary() {
    const app = document.getElementById("app");
    const library = getLibrary();
    app.innerHTML = library.length === 0 ? '<p>ბიბლიოთეკა ცარიელია</p>' :
      '<div class="grid">' +
      library.map(book => `
        <div class="book ${book.read ? 'read' : 'unread'}">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <button onclick="toggleRead(${book.id})">
            მონიშვნა როგორც ${book.read ? 'წაუკითხავი' : 'წაკითხული'}
          </button>
          <button onclick="removeFromLibrary(${book.id})">წაშლა</button>
        </div>
      `).join("") +
      '</div>';
  }

  function route() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "books";
    if (page === "library") {
      renderLibrary();
    } else {
      renderBooks();
    }
  }

  window.addEventListener("load", route);