const express = require("express");

function routes(User) {
  const userRouter = express.Router();

  userRouter.route("/users").get((req, res) => {
    User.find((err, users) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(users);
      }
    });
  });

  userRouter.route("/users").post((req, res) => {
    const user = new User(req.body);
    console.log(user);
    user.save();
    return res.status(201).json(user);
  });

  userRouter.route("/login").get((req, res) => {
    const passwordLookup = req.body.password;
    /* Find user with matching password otherwise return error */
    const { user, error } = User.find(error, { password: passwordLookup });
    if (error) {
      return res.send(error);
    } else {
      return res.json(user);
    }
  });

  userRouter.route("/delete/:_id").delete((req, res) => {
    User.remove({ _id: req.params._id }, (err, result) => {
      if (err) {
        return res.send(err);
      } else {
        return res.status(204).json(result);
      }
    });
  });
  return userRouter;
}

module.exports = routes;
