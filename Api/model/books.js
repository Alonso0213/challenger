//books
const db = require("../config");
class books{

    fetchBooks(req, res) {
        const query = `
            select bookID,bookTitle,category,bookURL
            from books;
            `;
        db.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results,
          });
        });
      }
    
      fetchBook(req, res) {
        const query = `
            select bookID,bookTitle,category,bookURL
            from books where bookID = ${req.params.id};`;
        db.query(query, [req.params.id], (err, result) => {
          if (err)
            throw errres.json({
              status: res.statusCode,
              result,
            });
        });
      }
      updateBook(req, res) {
        const query = `
                update books
                set?
                where bookID =?`;
        db.query(query, [req.body, req.params.id], (err) => {
          if (err) throw err;
          res.json({
            staus: res.statusCode,
            msg: "The book has been updated😍",
          });
        });
      }
      deleteBook(req, res) {
        const query = `
                delete from books
                where bookID =${req.params.id};
                `;
        db.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The book has been updated😍😘",
          });
        });
      }
    
      registerBook(req, res) {
        const data = req.body
        // Query
        const query = `
                INSERT INTO books
                SET ?;
                `;
        db.query(query, [data], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "Book has been added.",
          });
        });
      }
}
module.exports= books

