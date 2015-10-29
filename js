/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var project = document.querySelector("#project");
var chooseProject = document.querySelector("#chooseProject");
var stage = document.querySelector("#stage");
var chooseStage = document.querySelector("#chooseStage");

function showOne() {
    stage.classList.add("hideFieldset");
    project.classList.add("hideFieldset");

    chooseProject.addEventListener("click", function() {
    	showProject();
    });

    chooseStage.addEventListener("click", function() {
    	showStage();
    });
}

function showStage() {
    stage.classList.remove("hideFieldset");
    project.classList.add("hideFieldset");
}

function showProject() {
    project.classList.remove("hideFieldset");
    stage.classList.add("hideFieldset");
}

showOne();
