const express = require('express');
const route = express.Router();
const adminController = require('../controllers/admin');
const isAuth = require('../auth/isAdmin');
route.get('/', isAuth.isAdmin, adminController.getMain);
/********************* slider */
route.post('/add-slide', isAuth.isAdmin, adminController.addSlider);
route.get('/remove-slide/:sId', isAuth.isAdmin, adminController.removeSlide);
/************************** about *********************************** */
route.post('/about', isAuth.isAdmin, adminController.about);
/********************************services *****************************/
route.post('/add-serv', isAuth.isAdmin, adminController.addServ);
route.get('/remove-serv/:id', isAuth.isAdmin, adminController.removeServ);
/****************************projects *********************************/
route.post('/add-project-categ', isAuth.isAdmin, adminController.addProjectCateg);
route.get('/remove-project-categ/:id', isAuth.isAdmin, adminController.removeProjectCateg);
route.post('/add-project', isAuth.isAdmin, adminController.addProject)
route.get('/remove-project/:id', isAuth.isAdmin, adminController.removeProject)
/****************************team *************************************/
route.post('/add-team', isAuth.isAdmin, adminController.addTeamMember);
route.get('/remove-team/:id', isAuth.isAdmin, adminController.removeTeamMember);
/**********************login ********************************************/
route.get('/login', adminController.getAdminLogin);
route.post('/login', adminController.postAdminLogin);
route.get('/signout', isAuth.isAdmin, adminController.adminLogOut);
module.exports = route;