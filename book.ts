class Book {
    private title: string;
    private author: string;
    private year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public getSummary(): string {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
}

class ElectronicBook extends Book {
    private format: string;

    constructor(title: string, author: string, year: number, format: string) {
        super(title, author, year);
        this.format = format;
    }

    public getFormat(): string {
        return this.format;
    }

    public getSummary(): string {
        return `${super.getSummary()} - Format: ${this.format}`;
    }
}


const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
console.log(book1.getSummary()); 

const ebook1 = new ElectronicBook("Clean Code", "Robert C. Martin", 2008, "PDF");
console.log(ebook1.getSummary());
