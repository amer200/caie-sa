const About = require('../models/about');
const Project = require('../models/project');
const Serv = require('../models/serv');
const Team = require('../models/team');
const Slide = require('../models/slider');
exports.getMain = async (req, res) => {
    const about = await About.findOne();
    const projects = await Project.find();
    const servs = await Serv.find();
    const team = await Team.find();
    const slides = await Slide.find();
    console.log(team)
    res.render(`main/index`, {
        about: about,
        projects: projects,
        servs: servs,
        team: team,
        slide: slides
    })
}
exports.getProjects = async (req, res) => {
    const projects = await Project.find();
    res.render(`main/project`, {
        projects: projects
    })
}
exports.getProjectById = async (req, res) => {
    const id = req.params.id;
    const project = await Project.findById(id);

    res.render(`main/singel-item`, {
        p: project
    })
}
exports.getAbout = async (req, res) => {
    const about = await About.findOne();

    res.render(`main/about`, {
        about: about
    })
}
exports.getServices = async (req, res) => {
    const servs = await Serv.find();

    res.render(`main/service`, {
        servs: servs
    })
}
exports.getContact = async (req, res) => {

    res.render(`main/contact`)
}