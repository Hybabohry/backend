'use strict';

const articles = require('../../models/article');



const getArticles = async (req,res,next) =>{

    const articlesList = await articles.find().then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });

}

const getArticlesParMunip = async (req,res,next) =>{

    const articlesList =await articles.find({munip:req.body.munip}).then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });

}

const addArticle = async (req,res,next) =>{
    let article = new articles(req.body);
    article = await article.save().then((result) => {
        return res.status(200).json(result);
        
    }).catch((err) => {
        console.log("Error adding new article :"+err)
        return res.status(500).json("Error adding new article");
    });

}

const updateArticle = async (req,res,next) => {
    const ev = await articles.findOneAndUpdate({_id:req.body.id},{$set:req.body},{new:true}).then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });
}

const deleteArticle = async ( req,res,next) => {
    const ev = await articles.findOneAndDelete({_id:req.body.id}).then((result) => {
        return res.status(200).json("Article Deleted");
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });

}

module.exports = {getArticles,addArticle,getArticlesParMunip,updateArticle,deleteArticle};
