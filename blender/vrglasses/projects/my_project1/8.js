"use strict"

// register the application module
b4w.register("my_project1_main", function(exports, require) {

// import modules used by the app
var m_app       = require("app");
var m_cfg       = require("config");
var m_data      = require("data");
var m_preloader = require("preloader");
var m_ver       = require("version");
var m_scs   = require("scenes");
var m_cont      = require("container");
var m_mouse     = require("mouse");

var m_anchors = require("anchors");

// detect application mode
var DEBUG = (m_ver.type() == "DEBUG");

// automatically detect assets path
var APP_ASSETS_PATH = m_cfg.get_assets_path("my_project1");

/**
 * export the method to initialize the app (called at the bottom of this file)
 */
exports.init = function() {
    m_app.init({
        canvas_container_id: "main_canvas_container",
        callback: init_cb,
        show_fps: false,
        console_verbose: DEBUG,
        autoresize: true
    });
}

/**
 * callback executed when the app is initialized 
 */
function init_cb(canvas_elem, success) {

    if (!success) {
        console.log("b4w init failure");
        return;
    }

    m_preloader.create_preloader();

    // ignore right-click on the canvas element
    canvas_elem.oncontextmenu = function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    load();
}

/**
 * load the scene data
 */
function load() {
    m_data.load(APP_ASSETS_PATH + "vrglass8.json", load_cb, preloader_cb);
}

/**
 * update the app's preloader
 */
function preloader_cb(percentage) {
    m_preloader.update_preloader(percentage);
}

/**
 * callback executed when the scene data is loaded
 */
function load_cb(data_id, success) {

    if (!success) {
        console.log("b4w load failure");
        return;
    }

    m_app.enable_camera_controls();

    // place your code here
// Anchor 1
    var anchor_text = document.createElement("span");
    anchor_text.id = "anchor";    
    anchor_text.className="anchor";
    anchor_text.innerHTML = "<div class='textblock'><h3>小宅Z4</h3>小宅Z4是小宅科技新推出的集立体视觉和听觉一体的沉浸式VR眼镜，产品完美适配4.7-6.2寸手机，放入普通智能大屏手机即可体验全景游戏、3D电影等功能。</div>";
    document.body.appendChild(anchor_text);


    var anchor= m_scs.get_object_by_name("anchor");

m_anchors.attach_move_cb(anchor, function(x, y, appearance, obj, elem) {
        var anchor_elem = document.getElementById("anchor");
        anchor_elem.style.width = "20%";
        anchor_elem.style.height = "20%";

        if (appearance == "visible")
            anchor_elem.style.visibility = "visible";
        else
            anchor_elem.style.visibility = "visible";

});

  
}


});

// import the app module and start the app by calling the init method
b4w.require("my_project1_main").init();
