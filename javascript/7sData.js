var caracteristiqueBase = [
    {nom: "Force", valeur: 2},
    {nom: "Finesse", valeur: 2},
    {nom: "Resolution", valeur: 2},
    {nom: "Astuce", valeur: 2},
    {nom: "Panache", valeur: 2}
];

var Nation = [
    {"nom": "Avalon", "carac1": "Panache", "carac2" : "Resolution"},
    {"nom": "Inismore", "carac1": "Panache", "carac2" : "Astuce"},
    {"nom": "Marches des Highlands", "carac1": "Force", "carac2" : " Finesse"},
    {"nom": "Castille", "carac1": "Finesse", "carac2" : "Astuce"},
    {"nom": "Eisen", "carac1": "Force", "carac2" : " Résolution"},
    {"nom": "Montaigne", "carac1": "Finesse", "carac2" : "Panache"},
    {"nom": "Sarmatie", "carac1": "Force", "carac2" : "Panache"},
    {"nom": "Ussura", "carac1": "Resolution", "carac2" : "Astuce"},
    {"nom": "Vesten", "carac1": "Force", "carac2" : "Astuce"},
    {"nom": "Vodacce", "carac1": "Finesse", "carac2" : "Resolution"}
];
var Historique = [];
var Competence = [];
var Avantage = [];
var Arcane = [];
var Histoire = [];
var toucheFinale = {};
    


var hero = {
    caracteristique : [
        {nom: "Force", valeur: 0},
        {nom: "Finesse", valeur: 0},
        {nom: "Resolution", valeur: 0},
        {nom: "Astuce", valeur: 0},
        {nom: "Panache", valeur: 0}
    ],
    competence: [
        {nom: "ArmesBlanches", valeur: 0},
        {nom: "ArtMilitaire", valeur: 0},
        {nom: "Athletisme", valeur: 0},
        {nom: "Bagarre", valeur: 0},
        {nom: "Dissimulation", valeur: 0},
        {nom: "Empathie", valeur: 0},
        {nom: "Equitation", valeur: 0},
        {nom: "Erudition", valeur: 0},
        {nom: "Intimidation", valeur: 0},
        {nom: "Navigation", valeur: 0},
        {nom: "Persuasion", valeur: 0},
        {nom: "Representation", valeur: 0},
        {nom: "Subornation", valeur: 0},
        {nom: "Tir", valeur: 0},
        {nom: "Vigilance", valeur: 0},
        {nom: "Vol", valeur: 0},
    ]
};

var currentStep = 1;
var activeStep = 1;

var carac1 = null;
var carac2 = null;  

var nation = null;
var nationCarac = null;

var competencePts = 10;
var avantagePts = 10;

function goToNextStep() {    
    var step = activeStep;
    /*var isValid = false;
    validateData(step, isValid);
    if (!isValid) return;*/
    $("#etape" + activeStep).hide();
    $("#js-link-etape" + activeStep).removeClass("selected");
    $("#js-link-etape" + activeStep).click(function(){ goToStep(step); });
    if (currentStep == activeStep) 
        currentStep++;
    activeStep++;
    $("#etape" + activeStep).show();
    $("#js-link-etape" + activeStep).removeClass("inactive").addClass("selected");
    $("#js-link-etape" + activeStep).unbind();
}

function goToStep(stepToGo) {
    var step = activeStep; 
    /*if (currentStep != activeStep) {
        var isValid = false;
        validateData(step, isValid);
        if (!isValid) return;
    }*/ 
    
    $("#etape" + activeStep).hide();
    $("#js-link-etape" + activeStep).removeClass("selected");
    $("#js-link-etape" + activeStep).click(function(){ goToStep(step)} );    
    activeStep = stepToGo;
    $("#etape" + activeStep).show();
    $("#js-link-etape" + activeStep).removeClass("inactive").addClass("selected");
    $("#js-link-etape" + activeStep).unbind();
}

function validateData(step, isValid) {
    $(".js-validate-step").hide();
    if (step == 1) {
        if (carac1 == null || carac2 == null) {
            $(".js-validate-step").show();
            return isValid = false;
        }
    }
    return isValid = true;
}

function calculateCaracRows() {
    $(".js-caracteristique .star-rating span").removeClass('checked');
    for (var i = 0; i < hero.caracteristique.length; i++) {
        hero.caracteristique[i].valeur = caracteristiqueBase[i].valeur;   
               
        if (hero.caracteristique[i].nom == carac1) hero.caracteristique[i].valeur++;            
        
        if (hero.caracteristique[i].nom == carac2) hero.caracteristique[i].valeur++; 
        
        if (hero.caracteristique[i].nom == nationCarac) hero.caracteristique[i].valeur++; 

        generateStar($('#js-' + hero.caracteristique[i].nom + '-row'), hero.caracteristique[i].valeur);
    }
}

function calculateCompRows() {
    $(".js-competence .star-rating span").removeClass('checked');
    for (var i = 0; i < hero.competence.length; i++) {
                generateStar($('#js-' + hero.competence[i].nom + '-row'), hero.competence[i].valeur);
    }
}

function generateStar($row, carac) {   
    
    var nextStar = $row.find(".star-rating span").first();
    for (var i = 0; i < carac; i++) {  
            nextStar.addClass('checked');
            nextStar = $row.find(".star-rating").find('span').not('.checked').first();
    }
} 

function caracRadioChange(event) {
    carac1 = $('input[name="carac1"]:checked').val();
    carac2 = $('input[name="carac2"]:checked').val();
    calculateCaracRows();
}

function nationRadioChange(event) {    
    var value = $('input[name="nationCarac"]:checked').val().split('-');    
    nation = value[0];
    nationCarac = value[1];
    calculateCaracRows();
}

function competenceMinus(event) {    
    var $target = $( event.target );    
    var comp = $target.closest('tr').attr("id").split('-')[1];
    for (var i = 0; i < hero.competence.length; i++) {
        if (hero.competence[i].nom == comp
        && hero.competence[i].valeur > 0) {
            hero.competence[i].valeur--;
            competencePts++;
        }
    }
    calculateCompRows();
}

function competencePlus(event) {    
    var $target = $( event.target ); 

    var comp = $target.closest('tr').attr("id").split('-')[1];
    for (var i = 0; i < hero.competence.length; i++) {
        if (hero.competence[i].nom == comp
            && hero.competence[i].valeur < 3
            && competencePts > 0) {
                hero.competence[i].valeur++;
                competencePts--;
        }
    }
    calculateCompRows();
}

$(document).ready(function() {
    setTimeout(function() { 
        $('.js-btn-next').click(function(){ goToNextStep(); });
        $('.js-btn-previous').click(function(){ goToStep(activeStep - 1); });

        calculateCaracRows();
        $('.js-carac-radio').change(function(event) { caracRadioChange(event); });
        $('input[name="nationCarac"]').change(function(event) { nationRadioChange(event); });
        $('.js-competence .js-btn-minus').click(function(event) { competenceMinus(event); });
        $('.js-competence .js-btn-plus').click(function(event) { competencePlus(event); });


     }, 500);    
});

