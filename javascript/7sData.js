var caracteristiqueBase = [
    { nom: "Force", valeur: 2 },
    { nom: "Finesse", valeur: 2 },
    { nom: "Resolution", valeur: 2 },
    { nom: "Astuce", valeur: 2 },
    { nom: "Panache", valeur: 2 }
];

var Nation = [
    { "nom": "Avalon", "carac1": "Panache", "carac2": "Resolution" },
    { "nom": "Inismore", "carac1": "Panache", "carac2": "Astuce" },
    { "nom": "Marches des Highlands", "carac1": "Force", "carac2": " Finesse" },
    { "nom": "Castille", "carac1": "Finesse", "carac2": "Astuce" },
    { "nom": "Eisen", "carac1": "Force", "carac2": " Résolution" },
    { "nom": "Montaigne", "carac1": "Finesse", "carac2": "Panache" },
    { "nom": "Sarmatie", "carac1": "Force", "carac2": "Panache" },
    { "nom": "Ussura", "carac1": "Resolution", "carac2": "Astuce" },
    { "nom": "Vesten", "carac1": "Force", "carac2": "Astuce" },
    { "nom": "Vodacce", "carac1": "Finesse", "carac2": "Resolution" }
];
var Historique = [];
var Competence = [];
var Avantage = [
    { id: 'av1', name: 'bon buveur', cost: 1 },
    { id: 'av2', name: 'culture étrangère', cost: 1 },
    { id: 'av3', name: 'débrouillard', cost: 1 },
    { id: 'av4', name: 'estomac en fer forgé', cost: 1 },
    { id: 'av5', name: 'horloge vivante', cost: 1 },
    { id: 'av6', name: 'linguiste', cost: 1 },
    { id: 'av7', name: 'massif', cost: 1 },
    { id: 'av8', name: 'petit', cost: 1 },
    { id: 'av9', name: 'pied marin', cost: 1 },
    { id: 'av10', name: 'sens de l’orientation', cost: 1 },
    { id: 'av11', name: 'accointances interlopes', cost: 2 },
    { id: 'av12', name: 'attraction fatale', cost: 2 },
    { id: 'av13', name: 'bricoleur', cost: 2 },
    { id: 'av14', name: 'contacts', cost: 2 },
    { id: 'av15', name: 'dans les petits papiers', cost: 2 },
    { id: 'av16', name: 'doigts de fée', cost: 2 },
    { id: 'av17', name: 'entraide', cost: 2 },
    { id: 'av18', name: 'équilibre parfait', cost: 2 },
    { id: 'av19', name: 'famille étendue', cost: 2 },
    { id: 'av20', name: 'fascination', cost: 2 },
    { id: 'av21', name: 'fibre héroïque', cost: 2 },
    { id: 'av22', name: 'immunisé contre le poison', cost: 2 },
    { id: 'av23', name: 'marié à l’océan', cost: 2 },
    { id: 'av24', name: 'meneur d’hommes', cost: 2 },
    { id: 'av25', name: 'oeil de lynx', cost: 2 },
    { id: 'av26', name: 'on ne peut rien vous refuser', cost: 2 },
    { id: 'av27', name: 'passe-partout', cost: 2 },
    { id: 'av28', name: 'psst, par ici', cost: 2 },
    { id: 'av29', name: 'regard menaçant', cost: 2 },
    { id: 'av30', name: 'réputation', cost: 2 },
    { id: 'av31', name: 'roi de l’évasion', cost: 2 },
    { id: 'av32', name: 'sens des affaires', cost: 2 },
    { id: 'av33', name: 'sorcellerie', cost: 2 },
    { id: 'av34', name: 'sourire désarmant', cost: 2 },
    { id: 'av35', name: 'un contre dix', cost: 2 },
    { id: 'av36', name: 'volonté indomptable', cost: 2 },
    { id: 'av37', name: 'approche flexible', cost: 3 },
    { id: 'av38', name: 'bagarreur de bar', cost: 3 },
    { id: 'av39', name: 'camaraderie', cost: 3 },
    { id: 'av40', name: 'c’était un malentendu', cost: 3 },
    { id: 'av41', name: 'cogneur', cost: 3 },
    { id: 'av42', name: 'dans le mille', cost: 3 },
    { id: 'av43', name: 'escrimeur', cost: 3 },
    { id: 'av44', name: 'maître artisan', cost: 3 },
    { id: 'av45', name: 'mécène', cost: 3 },
    { id: 'av46', name: 'ni vu ni connu', cost: 3 },
    { id: 'av47', name: 'objet fétiche', cost: 3 },
    { id: 'av48', name: 'opportuniste', cost: 3 },
    { id: 'av49', name: 'ordonné', cost: 3 },
    { id: 'av50', name: 'réflexes éclair', cost: 3 },
    { id: 'av51', name: 'riche', cost: 3 },
    { id: 'av52', name: 'spécialiste des armes lourdes', cost: 3 },
    { id: 'av53', name: 'tireur d’élite', cost: 3 },
    { id: 'av54', name: 'titulaire', cost: 3 },
    { id: 'av55', name: 'vie agitée', cost: 3 },
    { id: 'av56', name: 'virtuose', cost: 3 },
    { id: 'av57', name: 'académicien militaire', cost: 4 },
    { id: 'av58', name: 'caractéristique légendaire', cost: 4 },
    { id: 'av59', name: 'compagnon fidèle', cost: 4 },
    { id: 'av60', name: 'dur à cuire', cost: 4 },
    { id: 'av61', name: 'encaisseur', cost: 4 },
    { id: 'av62', name: 'faiseur de miracles', cost: 4 },
    { id: 'av63', name: 'lyceum', cost: 4 },
    { id: 'av64', name: 'spécialiste', cost: 4 },
    { id: 'av65', name: 'universitaire', cost: 4 },
    { id: 'av66', name: 'seidr', cost: 4 },
    { id: 'av67', name: 'alchimiste', cost: 4 },
    { id: 'av68', name: 'académie de duellistes', cost: 5 },
    { id: 'av69', name: 'chance de tous les diables', cost: 5 },
    { id: 'av70', name: 'étincelle de génie', cost: 5 },
    { id: 'av71', name: 'force incroyable', cost: 5 },
    { id: 'av72', name: 'fureur vengeresse', cost: 5 },
    { id: 'av73', name: 'joie de vivre', cost: 5 },
    { id: 'av74', name: 'mon heure n’est pas venue', cost: 5 },
    { id: 'av75', name: 'nous ne sommes pas si différents…', cost: 5 },
    { id: 'av76', name: 'unis, nous sommes forts', cost: 5 }
];
var Arcane = [];
var Histoire = [];
var toucheFinale = {};



var hero = {
    caracteristique: [
        { nom: "Force", valeur: 0 },
        { nom: "Finesse", valeur: 0 },
        { nom: "Resolution", valeur: 0 },
        { nom: "Astuce", valeur: 0 },
        { nom: "Panache", valeur: 0 }
    ],
    competence: [
        { nom: "ArmesBlanches", valeur: 0 },
        { nom: "ArtMilitaire", valeur: 0 },
        { nom: "Athletisme", valeur: 0 },
        { nom: "Bagarre", valeur: 0 },
        { nom: "Dissimulation", valeur: 0 },
        { nom: "Empathie", valeur: 0 },
        { nom: "Equitation", valeur: 0 },
        { nom: "Erudition", valeur: 0 },
        { nom: "Intimidation", valeur: 0 },
        { nom: "Navigation", valeur: 0 },
        { nom: "Persuasion", valeur: 0 },
        { nom: "Representation", valeur: 0 },
        { nom: "Subornation", valeur: 0 },
        { nom: "Tir", valeur: 0 },
        { nom: "Vigilance", valeur: 0 },
        { nom: "Vol", valeur: 0 },
    ]
};

var currentStep = 1;
var activeStep = 1;

var carac1 = null;
var carac2 = null;

var nation = null;
var nationCarac = null;

var competencePts = 10;
var avantagePts = 5;

var avantages = [];

function goToNextStep() {
    var step = activeStep;
    /*var isValid = false;
    validateData(step, isValid);
    if (!isValid) return;*/
    $("#etape" + activeStep).hide();
    $("#js-link-etape" + activeStep).removeClass("selected");
    $("#js-link-etape" + activeStep).click(function () { goToStep(step); });
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
    $("#js-link-etape" + activeStep).click(function () { goToStep(step) });
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
    propagateNationChange();
    nationCarac = value[1];
    calculateCaracRows();
}

function propagateNationChange() {
    resetNationChange();
    switch (nation) {
        case "ava":
            modifyAdvantageCost("av32", 1);
            modifyAdvantageCost("av69", 3);
            break;
        case "ini":
            modifyAdvantageCost("av32", 1);
            modifyAdvantageCost("av69", 3);
            break;
        case "hig":
            modifyAdvantageCost("av32", 1);
            modifyAdvantageCost("av69", 3);
            break;
        case "cas":
            modifyAdvantageCost("av49", 2);
            modifyAdvantageCost("av70", 3);
            break;
        case "eis":
            modifyAdvantageCost("av29", 1);
            modifyAdvantageCost("av74", 3);
            break;
        case "mon":
            modifyAdvantageCost("av39", 2);
            modifyAdvantageCost("av73", 3);
            break;
        case "sar":
            modifyAdvantageCost("av24", 1);
            modifyAdvantageCost("av76", 3);
            break;
        case "uss":
            modifyAdvantageCost("av19", 1);
            modifyAdvantageCost("av71", 3);
            break;
        case "ves":
            modifyAdvantageCost("av44", 2);
            modifyAdvantageCost("av72", 3);
            break;
        case "vod":
            modifyAdvantageCost("av22", 1);
            modifyAdvantageCost("av75", 3);
            break;
    }
}

function resetNationChange() {
    modifyAdvantageCost("av19", 2);
    modifyAdvantageCost("av22", 2);
    modifyAdvantageCost("av24", 2);
    modifyAdvantageCost("av29", 2);
    modifyAdvantageCost("av32", 2);
    modifyAdvantageCost("av39", 3);
    modifyAdvantageCost("av44", 3);
    modifyAdvantageCost("av49", 3);
    modifyAdvantageCost("av69", 5);
    modifyAdvantageCost("av70", 5);
    modifyAdvantageCost("av71", 5);
    modifyAdvantageCost("av72", 5);
    modifyAdvantageCost("av73", 5);
    modifyAdvantageCost("av74", 5);
    modifyAdvantageCost("av75", 5);
    modifyAdvantageCost("av76", 5);
}

function modifyAdvantageCost(id, cost) {
    $.each(Avantage, function (i, obj) {
        if (id == obj.id) {
            obj.cost = cost;
        }
    });
}

function competenceMinus(event) {
    var $target = $(event.target);
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
    var $target = $(event.target);

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

function advantageToggle(event) {
    var $target = $(event.target);
    var id = $target.attr('name');
    var isChecked = $target.is(':checked');
    var value = Avantage.find(x => x.id === id).cost;
    if (isChecked) {
        avantagePts -= value;
        avantages.push(id);
        var result = $.grep(Avantage, function (e) { return e.cost > avantagePts });
        $.each(result, function (i, obj) {
            var name = obj.id;
            $('input[name=' + name + ']').attr("disabled", true);
        });
    }
    else {
        avantagePts += value;
        var result = $.grep(Avantage, function (e) { return e.cost <= avantagePts; });
        $.each(result, function (i, obj) {
            var name = obj.id;
            $('input[name=' + name + ']').removeAttr("disabled");
        });
        var index = avantages.indexOf(id);
        if (index > -1) {
            avantages.splice(index, 1);
        }
    }
    $.each(avantages, function (i, obj) {
        $('input[name=' + obj + ']').removeAttr("disabled");
    });
}

$(document).ready(function () {
    setTimeout(function () {
        $('.js-btn-next').click(function () { goToNextStep(); });
        $('.js-btn-previous').click(function () { goToStep(activeStep - 1); });

        calculateCaracRows();
        $('.js-carac-radio').change(function (event) { caracRadioChange(event); });
        $('input[name="nationCarac"]').change(function (event) { nationRadioChange(event); });
        $('.js-competence .js-btn-minus').click(function (event) { competenceMinus(event); });
        $('.js-competence .js-btn-plus').click(function (event) { competencePlus(event); });
        $('#avantages input').click(function (event) { advantageToggle(event); })

    }, 500);
});

