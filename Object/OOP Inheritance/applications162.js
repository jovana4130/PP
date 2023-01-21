'use strict';

function Application(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
};

Application.prototype.isCCLicence = function (val) {
    if (val === "CCLicence") {
        return true;
    } else {
        return false;
    }
};
Application.prototype.like = function () {
    this.stars++;
};
Application.prototype.showStars = function () {
    console.log(this.stars);
};



function WebApp(name, url, tehnologies, licence, stars) {
    Application.call(this, name, licence, stars);
    this.url = url;
    this.tehnologies = tehnologies;
};

WebApp.prototype = Object.create(Application.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.reactBased = function () {
    if (this.tehnologies === "React") {
        return true;
    } else {
        return false;
    }
};

var airVisual = new WebApp('AirVisual','https://www.iqair.com/','React','CCLicence','4.8');

airVisual.getData(airVisual);
console.log(airVisual.reactBased());
airVisual.like();
airVisual.showStars();

function MobileApp(name, platforms, license, stars) {
    Application.call(this, name, license, stars);
    this.platforms = platforms;
};

MobileApp.prototype = Object.create(Application.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.forAndroid = function () {
    if (this.platforms.includes("Android")) {
        return true; 
    } else {
        return false;
    }
};

var airVisual = new MobileApp('Mobile application', ['Android'], 'CCLicence', '4.8');
console.log(airVisual);
airVisual.like();
airVisual.showStars();

airVisual.getData(airVisual);
console.log(airVisual.forAndroid());