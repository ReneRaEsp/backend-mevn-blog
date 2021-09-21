import models from "../models/models";
import path from "path";

export default {
  list: async (req, res, next) => {
    try {
      const reg = await models.Articulo.find();
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error al intentar listar",
      });
      next(e);
    }
  },
  query: async (req, res, next) => {
    try {
      const reg = await models.Articulo.findOne({ _id: req.query._id });
      !reg
        ? reg.status(404).send({ message: "El registro no existe" })
        : res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error al consultar un articulo",
      });
      next(error);
    }
  },
  add: async (req, res, next) => {
    try {
      const reg = await models.Articulo.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e);
    }
  },

  upload: async (req, res, next) => {
    try {
      let sampleFile;
      let uploadPath;

      if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send("No files were uploaded.");
        return;
      }

      console.log("req.files >>>", req.files); // eslint-disable-line

      sampleFile = req.files.file;
      uploadPath = path.join(__dirname, '../uploads/' + sampleFile.name);

      console.log( 'path: ' + uploadPath);
      sampleFile.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }

        res.send("File uploaded to " + uploadPath);
      });
    } catch (e) {
      res.status(500).send({
        message: `Ocurrio un error al subir archivo ${req.file}`,
      });
      next(e);
    }
  },
};
