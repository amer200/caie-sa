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

    const parts = projects.reduce(function (result, value, index, array) {
        if (index % 2 === 0)
            result.push(array.slice(index, index + 2));
        return result;
    }, []);
    res.render(`main/project`, {
        projects: parts
    })
}
exports.getProjectById = async (req, res) => {
    const id = req.params.id;
    const project = await Project.findById(id);

    res.render(`main/single_project`, {
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