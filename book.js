var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.getSummary = function () {
        return "".concat(this.title, " by ").concat(this.author, ", published in ").concat(this.year);
    };
    return Book;
}());
var ElectronicBook = /** @class */ (function (_super) {
    __extends(ElectronicBook, _super);
    function ElectronicBook(title, author, year, format) {
        var _this = _super.call(this, title, author, year) || this;
        _this.format = format;
        return _this;
    }
    ElectronicBook.prototype.getFormat = function () {
        return this.format;
    };
    ElectronicBook.prototype.getSummary = function () {
        return "".concat(_super.prototype.getSummary.call(this), " - Format: ").concat(this.format);
    };
    return ElectronicBook;
}(Book));
var book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
console.log(book1.getSummary());
var ebook1 = new ElectronicBook("Clean Code", "Robert C. Martin", 2008, "PDF");
console.log(ebook1.getSummary());
