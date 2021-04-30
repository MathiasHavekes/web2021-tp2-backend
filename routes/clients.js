const { ObjectID } = require("bson");
const express = require("express");
const router = express.Router();
const db = require("../db/db");

var clients = [
  {id: "1", nom: "Havekes", prenom: "Mathias", email: "123test@gmail.com", phone: "123"},
];

// class Client {
//   constructor({
//     ID_CLIENT,
//     NOM,
//     PRENOM,
//     EMAIL,
//     TELEPHONE,
//     NUMERO_CB,
//     MOT_DE_PASSE,
//   }) {
//     this.name = NOM;
//     this.surname = PRENOM;
//     this.email = EMAIL;
//     this.phone = TELEPHONE;
//     this.password = MOT_DE_PASSE;
//   }
// }

// var redirectSignUp = (req, res, next) => {
//   if (!req.session.userId) {
//     res.redirect("/signUp");
//   } else {
//     next();
//   }
// };

// router.get("/", redirectSignUp, (req, res, next) => {
//   pool.getConnection((err, connection) => {
//     if (err) throw err;

//     const userQuery = new Promise((resolve, reject) => {
//       connection.query(
//         "SELECT * FROM CLIENT WHERE ID_CLIENT= ?",
//         [req.session.userId],
//         (err, results, fields) => {
//           if (err) reject(err);
//           user = new Client(results[0]);
//           resolve(user);
//         }
//       );
//     });

//     userQuery
//       .then((user) => {
//         res.render("account", { user, userId: true });
//       })
//       .catch((err) => {
//         throw err;
//       });
//     connection.release();
//   });
// });

// router.post("/submit", redirectSignUp, (req, res, next) => {
//   const user = req.body;
//   pool.getConnection((err, connection) => {
//     if (err) throw err;
//     connection.query(
//       "UPDATE CLIENT SET ? WHERE ID_CLIENT= ?",
//       [
//         {
//           NOM: user.name,
//           PRENOM: user.surname,
//           EMAIL: user.email,
//           TELEPHONE: user.phone,
//           MOT_DE_PASSE: user.password,
//         },
//         req.session.userId,
//       ],
//       (err, results, fields) => {
//         if (err) throw err;
//       }
//     );
//     connection.release();
//   });
//   res.redirect("/user/account");
// });

router.get("/:email/:password", async (req, res, next) => {
  const conn = await db.connectToMongoDB();
  const client = await conn.collection('clients').findOne({name: req.params.email});

  res.json(client);
});



module.exports = router;