const indexCtrl = {};

  indexCtrl.renderIndex = (req, res) => {
    res.render('index');
  };
  
  indexCtrl.renderAbout = (req, res) => {
    res.render('about');
  };
 
  indexCtrl.renderEmergencia = (req, res) => {
    res.render('emergencia');
  };

  indexCtrl.renderSabiasque = (req, res) => {
    res.render('sabiasque');
  };
  module.exports = indexCtrl;