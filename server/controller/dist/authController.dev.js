"use strict";

var User = require("./../model/User");

var jwt = require("jsonwebtoken");

exports.getAllUser = function _callee(req, res) {
  var allUsers;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.find());

        case 3:
          allUsers = _context.sent;
          res.status(200).json({
            status: "success",
            length: allUsers.length,
            users: allUsers
          });
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            status: "failed",
            message: "Something went wronge"
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.loginUser = function _callee2(req, res) {
  var currUser, token;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: req.body.email
          }));

        case 3:
          currUser = _context2.sent;

          if (!(!currUser || currUser.password !== req.body.password)) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            status: "failed",
            message: "User details incorrect"
          }));

        case 6:
          token = jwt.sign({
            _id: currUser._id
          }, process.env.JWT_SECRET);
          res.status(200).json({
            status: "success",
            message: "Login Successful",
            user: currUser,
            token: token
          });
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            status: "failed",
            message: "Something went wronge"
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.createUser = function _callee3(req, res) {
  var newUser;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(User.create(req.body));

        case 3:
          newUser = _context3.sent;
          res.status(201).json({
            status: "success",
            message: "New user created"
          });
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            status: "failed",
            message: "Something went wronge"
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};