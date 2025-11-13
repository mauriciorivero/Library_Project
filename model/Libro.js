class Libro{

    #isbn;
    #title;
    #author;
    #publicationYear;
    #totalNumPages;
    #isAvailable;

    /**
     * @param {string} title - the title name of the book
     * @param {string} isbn - the isbn unique code for the book (can be used as an id)
     * @param {string} author - the author name of the book
     * @param {integer} publicationYear - the year when the book was published
     * @param {integer} totalNumPages - the exact number of the total pages of the book
     * @param {boolean} isAvailable - the state of the book, if is loan or if is not
     * 
     */

    constructor(title, isbn, author, year, numPages, available){
        this.#title = title;
        this.#isbn = isbn;
        this.#author = author;
        this.#publicationYear = year;
        this.#totalNumPages = numPages;
        this.#isAvailable = available;
    }

    set title(title){
        this.#title = title;
    }

    set isbn (isbn){
        this.#isbn = isbn;
    }

    set author(author){
        this.#author = author;
    }

    set publicationYear(year){
        this.#publicationYear = year;
    }

    set totalNumPages(numPages){
        this.#totalNumPages = numPages;
    }

    set isAvailable(available){
        this.#isAvailable = available;
    }

    get title(){
        return this.#title;
    }

    get isbn(){
        return this.#isbn;
    }

    get author(){
        return this.#author;
    }

    get publicationYear(){
        return this.#publicationYear;
    }

    get totalNumPages(){
        return this.#totalNumPages;
    }

    get isAvailable(){
        return this.#isAvailable;
    }

    loan(){
        this.#isAvailable = false;
    }

    returnBook(){
        this.#isAvailable = true;
    }


}

module.exports = Libro;