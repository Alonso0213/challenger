//book Authors
const db = require("../config");
class bookAuthor{
    fetchAuthor(req, res) {
        const query = `
            select authorName,authorSurname,bookID
            from bookauthor;
            `;
        db.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results,
          });
        });
      }
    
      fetchAuthor(req, res) {
        const query = `
            select authorName,authorSurname,bookID
            from bookauthor where id = ${req.params.id};`;
        db.query(query, [req.params.id], (err, result) => {
          if (err)
            throw errres.json({
              status: res.statusCode,
              result,
            });
        });
      }
      updateAuthor(req, res) {
        const query = `
                update bookauthor
                set?
                where id =?`;
        db.query(query, [req.body, req.params.id], (err) => {
          if (err) throw err;
          res.json({
            staus: res.statusCode,
            msg: "The Author has been updated😍",
          });
        });
      }
      deleteAuthor(req, res) {
        const query = `
                delete from bookauthor
                where id =${req.params.id};
                `;
        db.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The Author has been deleted😍😘",
          });
        });
      }
    
      registerAuthor(req, res) {
        const data = req.body
        // Query
        const query = `
                INSERT INTO bookauthor
                SET ?;
                `;
        db.query(query, [data], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "Author has been added.",
          });
        });
      }

}
module.exports= bookAuthor