var caracteristiqueBase = [
    { name: "Force", valeur: 2 },
    { name: "Finesse", valeur: 2 },
    { name: "Resolution", valeur: 2 },
    { name: "Astuce", valeur: 2 },
    { name: "Panache", valeur: 2 }
];
var Nation = [
    { id: "ava", name: "Avalon", carac1: "Panache", carac2: "Resolution" },
    { id: "ini", name: "Inismore", carac1: "Panache", carac2: "Astuce" },
    { id: "hig", name: "Marches des Highlands", carac1: "Force", carac2: " Finesse" },
    { id: "cas", name: "Castille", carac1: "Finesse", carac2: "Astuce" },
    { id: "eis", name: "Eisen", carac1: "Force", carac2: " Résolution" },
    { id: "mon", name: "Montaigne", carac1: "Finesse", carac2: "Panache" },
    { id: "sar", name: "Sarmatie", carac1: "Force", carac2: "Panache" },
    { id: "uss", name: "Ussura", carac1: "Resolution", carac2: "Astuce" },
    { id: "ves", name: "Vesten", carac1: "Force", carac2: "Astuce" },
    { id: "vod", name: "Vodacce", carac1: "Finesse", carac2: "Resolution" }
];
var Historique = [
    { id: 'hi1', name: 'Archeologue', av1: 'av47', av2: 'av25', av3: '', co1: 'Athletisme', co2: 'Erudition', co3: 'Persuasion', co4: 'Vigilance', co5: 'Vol' },
    { id: 'hi2', name: 'Aristocrate', av1: 'av51', av2: 'av34', av3: '', co1: 'Empathie', co2: 'Equitation', co3: 'Erudition', co4: 'Persuasion', co5: 'Tir' },
    { id: 'hi3', name: 'Artisan', av1: 'av13', av2: 'av44', av3: '', co1: 'Athletisme', co2: 'Erudition', co3: 'Persuasion', co4: 'Representation', co5: 'Vigilance' },
    { id: 'hi4', name: 'Artiste', av1: 'av20', av2: 'av45', av3: '', co1: 'Empathie', co2: 'Equitation', co3: 'Persuasion', co4: 'Representation', co5: 'Subornation' },
    { id: 'hi5', name: 'Artiste De Scène', av1: 'av26', av2: 'av56', av3: '', co1: 'Athletisme', co2: 'Empathie', co3: 'Representation', co4: 'Subornation', co5: 'Vol' },
    { id: 'hi6', name: 'Assassin', av1: 'av43', av2: 'av28', av3: '', co1: 'ArmesBlanches', co2: 'Athletisme', co3: 'Dissimulation', co4: 'Empathie', co5: 'Intimidation' },
    { id: 'hi7', name: 'Capitaine De Vaisseau', av1: 'av23', av2: 'av24', av3: 'av9', co1: 'ArtMilitaire', co2: 'Navigation', co3: 'Persuasion', co4: 'Tir', co5: 'Vigilance' },
    { id: 'hi8', name: 'Cavalier', av1: 'av52', av2: 'av36', av3: '', co1: 'ArmesBlanches', co2: 'ArtMilitaire', co3: 'Equitation', co4: 'Intimidation', co5: 'Vigilance' },
    { id: 'hi9', name: 'Chasseur', av1: 'av16', av2: 'av53', av3: '', co1: 'Dissimulation', co2: 'Equitation', co3: 'Intimidation', co4: 'Tir', co5: 'Vigilance' },
    { id: 'hi10', name: 'Commandant De Bord', av1: 'av13', av2: 'av16', av3: 'av9', co1: 'ArtMilitaire', co2: 'Bagarre', co3: 'Dissimulation', co4: 'Navigation', co5: 'Tir' },
    { id: 'hi11', name: 'Courtisan', av1: 'av40', av2: 'av15', av3: '', co1: 'ArmesBlanches', co2: 'Empathie', co3: 'Equitation', co4: 'Representation', co5: 'Subornation' },
    { id: 'hi12', name: 'Criminel', av1: 'av11', av2: 'av39', av3: '', co1: 'Athletisme', co2: 'Dissimulation', co3: 'Empathie', co4: 'Intimidation', co5: 'Vol' },
    { id: 'hi13', name: 'Domestique', av1: 'av17', av2: 'av55', av3: '', co1: 'Dissimulation', co2: 'Equitation', co3: 'Subornation', co4: 'Vigilance', co5: 'Vol' },
    { id: 'hi14', name: 'Duelliste', av1: 'av68', av2: '', av3: '', co1: 'ArmesBlanches', co2: 'Athletisme', co3: 'Empathie', co4: 'Intimidation', co5: 'Representation' },
    { id: 'hi15', name: 'Erudit', av1: 'av6', av2: 'av65', av3: '', co1: 'Empathie', co2: 'Erudition', co3: 'Persuasion', co4: 'Representation', co5: 'Vigilance' },
    { id: 'hi16', name: 'Espion', av1: 'av22', av2: 'av48', av3: '', co1: 'Dissimulation', co2: 'Empathie', co3: 'Subornation', co4: 'Vigilance', co5: 'Vol' },
    { id: 'hi17', name: 'Explorateur', av1: 'av27', av2: 'av50', av3: '', co1: 'Athletisme', co2: 'Empathie', co3: 'Equitation', co4: 'Navigation', co5: 'Persuasion' },
    { id: 'hi18', name: 'Fermier', av1: 'av58', av2: 'av3', av3: '', co1: 'Athletisme', co2: 'Empathie', co3: 'Equitation', co4: 'Persuasion', co5: 'Representation' },
    { id: 'hi19', name: 'Ingenieur', av1: 'av5', av2: 'av44', av3: 'av10', co1: 'ArtMilitaire', co2: 'Equitation', co3: 'Erudition', co4: 'Persuasion', co5: 'Tir' },
    { id: 'hi20', name: 'Jenny', av1: 'av37', av2: 'av12', av3: '', co1: 'Athletisme', co2: 'Empathie', co3: 'Representation', co4: 'Subornation', co5: 'Tir' },
    { id: 'hi21', name: 'Marchand', av1: 'av5', av2: 'av63', av3: '', co1: 'Empathie', co2: 'Equitation', co3: 'Intimidation', co4: 'Persuasion', co5: 'Subornation' },
    { id: 'hi22', name: 'Marin', av1: 'av38', av2: 'av25', av3: '', co1: 'ArmesBlanches', co2: 'Bagarre', co3: 'Navigation', co4: 'Subornation', co5: 'Vigilance' },
    { id: 'hi23', name: 'Medecin', av1: 'av62', av2: 'av5', av3: '', co1: 'Empathie', co2: 'Equitation', co3: 'Erudition', co4: 'Persuasion', co5: 'Vigilance' },
    { id: 'hi24', name: 'Mercenaire', av1: 'av60', av2: 'av4', av3: '', co1: 'ArmesBlanches', co2: 'Athletisme', co3: 'Bagarre', co4: 'Intimidation', co5: 'Vigilance' },
    { id: 'hi25', name: 'Officier De L’Armee', av1: 'av57', av2: 'av10', av3: '', co1: 'ArtMilitaire', co2: 'Athletisme', co3: 'Equitation', co4: 'Intimidation', co5: 'Tir' },
    { id: 'hi26', name: 'Officier De La Marine', av1: 'av18', av2: 'av9', av3: 'av32', co1: 'ArmesBlanches', co2: 'ArtMilitaire', co3: 'Intimidation', co4: 'Navigation', co5: 'Vigilance' },
    { id: 'hi27', name: 'Orphelin', av1: 'av46', av2: 'av35', av3: '', co1: 'Athletisme', co2: 'Bagarre', co3: 'Dissimulation', co4: 'Empathie', co5: 'Intimidation' },
    { id: 'hi28', name: 'Pirate', av1: 'av42', av2: 'av36', av3: '', co1: 'Intimidation', co2: 'Navigation', co3: 'Tir', co4: 'Vigilance', co5: 'Vol' },
    { id: 'hi29', name: 'Prêtre', av1: 'av26', av2: 'av49', av3: '', co1: 'Empathie', co2: 'Equitation', co3: 'Erudition', co4: 'Representation', co5: 'Subornation' },
    { id: 'hi30', name: 'Professeur', av1: 'av17', av2: 'av54', av3: '', co1: 'Empathie', co2: 'Erudition', co3: 'Persuasion', co4: 'Representation', co5: 'Subornation' },
    { id: 'hi31', name: 'Pugiliste', av1: 'av41', av2: 'av29', av3: '', co1: 'Athletisme', co2: 'Bagarre', co3: 'Empathie', co4: 'Persuasion', co5: 'Representation' },
    { id: 'hi32', name: 'Soldat', av1: 'av1', av2: 'av61', av3: '', co1: 'ArmesBlanches', co2: 'ArtMilitaire', co3: 'Intimidation', co4: 'Tir', co5: 'Vigilance' }
];
var Competence = [
    { name: "Armes blanches", id: "ArmesBlanches" },
    { name: "Art militaire", id: "ArtMilitaire" },
    { name: "Athlétisme", id: "Athletisme" },
    { name: "Bagarre", id: "Bagarre" },
    { name: "Dissimulation", id: "Dissimulation" },
    { name: "Empathie", id: "Empathie" },
    { name: "Équitation", id: "Equitation" },
    { name: "Érudition", id: "Erudition" },
    { name: "Intimidation", id: "Intimidation" },
    { name: "Navigation", id: "Navigation" },
    { name: "Persuasion", id: "Persuasion" },
    { name: "Représentation", id: "Representation" },
    { name: "Subornation", id: "Subornation" },
    { name: "Tir", id: "Tir" },
    { name: "Vigilance", id: "Vigilance" },
    { name: "Vol", id: "Vol" }
];
var Avantage = [
    { id: 'av1', name: 'bon buveur', cost: 1, realCost: 1 },
    { id: 'av2', name: 'culture étrangère', cost: 1, realCost: 1 },
    { id: 'av3', name: 'débrouillard', cost: 1, realCost: 1 },
    { id: 'av4', name: 'estomac en fer forgé', cost: 1, realCost: 1 },
    { id: 'av5', name: 'horloge vivante', cost: 1, realCost: 1 },
    { id: 'av6', name: 'linguiste', cost: 1, realCost: 1 },
    { id: 'av7', name: 'massif', cost: 1, realCost: 1 },
    { id: 'av8', name: 'petit', cost: 1, realCost: 1 },
    { id: 'av9', name: 'pied marin', cost: 1, realCost: 1 },
    { id: 'av10', name: 'sens de l’orientation', cost: 1, realCost: 1 },
    { id: 'av11', name: 'accointances interlopes', cost: 2, realCost: 2 },
    { id: 'av12', name: 'attraction fatale', cost: 2, realCost: 2 },
    { id: 'av13', name: 'bricoleur', cost: 2, realCost: 2 },
    { id: 'av14', name: 'contacts', cost: 2, realCost: 2 },
    { id: 'av15', name: 'dans les petits papiers', cost: 2, realCost: 2 },
    { id: 'av16', name: 'doigts de fée', cost: 2, realCost: 2 },
    { id: 'av17', name: 'entraide', cost: 2, realCost: 2 },
    { id: 'av18', name: 'équilibre parfait', cost: 2, realCost: 2 },
    { id: 'av19', name: 'famille étendue', cost: 2, realCost: 2 },
    { id: 'av20', name: 'fascination', cost: 2, realCost: 2 },
    { id: 'av21', name: 'fibre héroïque', cost: 2, realCost: 2 },
    { id: 'av22', name: 'immunisé contre le poison', cost: 2, realCost: 2 },
    { id: 'av23', name: 'marié à l’océan', cost: 2, realCost: 2 },
    { id: 'av24', name: 'meneur d’hommes', cost: 2, realCost: 2 },
    { id: 'av25', name: 'oeil de lynx', cost: 2, realCost: 2 },
    { id: 'av26', name: 'on ne peut rien vous refuser', cost: 2, realCost: 2 },
    { id: 'av27', name: 'passe-partout', cost: 2, realCost: 2 },
    { id: 'av28', name: 'psst, par ici', cost: 2, realCost: 2 },
    { id: 'av29', name: 'regard menaçant', cost: 2, realCost: 2 },
    { id: 'av30', name: 'réputation', cost: 2, realCost: 2 },
    { id: 'av31', name: 'roi de l’évasion', cost: 2, realCost: 2 },
    { id: 'av32', name: 'sens des affaires', cost: 2, realCost: 2 },
    { id: 'av33', name: 'sorcellerie', cost: 2, realCost: 2 },
    { id: 'av34', name: 'sourire désarmant', cost: 2, realCost: 2 },
    { id: 'av35', name: 'un contre dix', cost: 2, realCost: 2 },
    { id: 'av36', name: 'volonté indomptable', cost: 2, realCost: 2 },
    { id: 'av37', name: 'approche flexible', cost: 3, realCost: 3 },
    { id: 'av38', name: 'bagarreur de bar', cost: 3, realCost: 3 },
    { id: 'av39', name: 'camaraderie', cost: 3, realCost: 3 },
    { id: 'av40', name: 'c’était un malentendu', cost: 3, realCost: 3 },
    { id: 'av41', name: 'cogneur', cost: 3, realCost: 3 },
    { id: 'av42', name: 'dans le mille', cost: 3, realCost: 3 },
    { id: 'av43', name: 'escrimeur', cost: 3, realCost: 3 },
    { id: 'av44', name: 'maître artisan', cost: 3, realCost: 3 },
    { id: 'av45', name: 'mécène', cost: 3, realCost: 3 },
    { id: 'av46', name: 'ni vu ni connu', cost: 3, realCost: 3 },
    { id: 'av47', name: 'objet fétiche', cost: 3, realCost: 3 },
    { id: 'av48', name: 'opportuniste', cost: 3, realCost: 3 },
    { id: 'av49', name: 'ordonné', cost: 3, realCost: 3 },
    { id: 'av50', name: 'réflexes éclair', cost: 3, realCost: 3 },
    { id: 'av51', name: 'riche', cost: 3, realCost: 3 },
    { id: 'av52', name: 'spécialiste des armes lourdes', cost: 3, realCost: 3 },
    { id: 'av53', name: 'tireur d’élite', cost: 3, realCost: 3 },
    { id: 'av54', name: 'titulaire', cost: 3, realCost: 3 },
    { id: 'av55', name: 'vie agitée', cost: 3, realCost: 3 },
    { id: 'av56', name: 'virtuose', cost: 3, realCost: 3 },
    { id: 'av57', name: 'académicien militaire', cost: 4, realCost: 4 },
    { id: 'av58', name: 'caractéristique légendaire', cost: 4, realCost: 4 },
    { id: 'av59', name: 'compagnon fidèle', cost: 4, realCost: 4 },
    { id: 'av60', name: 'dur à cuire', cost: 4, realCost: 4 },
    { id: 'av61', name: 'encaisseur', cost: 4, realCost: 4 },
    { id: 'av62', name: 'faiseur de miracles', cost: 4, realCost: 4 },
    { id: 'av63', name: 'lyceum', cost: 4, realCost: 4 },
    { id: 'av64', name: 'spécialiste', cost: 4, realCost: 4 },
    { id: 'av65', name: 'universitaire', cost: 4, realCost: 4 },
    { id: 'av66', name: 'seidr', cost: 4, realCost: 4 },
    { id: 'av67', name: 'alchimiste', cost: 4, realCost: 4 },
    { id: 'av68', name: 'académie de duellistes', cost: 5, realCost: 5 },
    { id: 'av69', name: 'chance de tous les diables', cost: 5, realCost: 5 },
    { id: 'av70', name: 'étincelle de génie', cost: 5, realCost: 5 },
    { id: 'av71', name: 'force incroyable', cost: 5, realCost: 5 },
    { id: 'av72', name: 'fureur vengeresse', cost: 5, realCost: 5 },
    { id: 'av73', name: 'joie de vivre', cost: 5, realCost: 5 },
    { id: 'av74', name: 'mon heure n’est pas venue', cost: 5, realCost: 5 },
    { id: 'av75', name: 'nous ne sommes pas si différents…', cost: 5, realCost: 5 },
    { id: 'av76', name: 'unis, nous sommes forts', cost: 5, realCost: 5 }
];
var Arcane = [];
var Histoire = [];
var toucheFinale = {};

var hero = {
    competencePts: 10,
    avantagePts: 5,
    avantagesUsedPts: 0,
    carac1: null,
    carac2: null,
    nation: null,
    nationCarac: null,
    hist1: null,
    hist2: null,
    hist1Avantages: [],
    hist1Competences: [],
    hist2Avantages: [],
    hist2Competences: [],
    histAvantagePts : 0,
    avantages: [],
    caracteristique: [
        { name: "Force", valeur: 0 },
        { name: "Finesse", valeur: 0 },
        { name: "Resolution", valeur: 0 },
        { name: "Astuce", valeur: 0 },
        { name: "Panache", valeur: 0 }
    ],
    competence: [
        { name: "ArmesBlanches", valeur: 0, total: 0 },
        { name: "ArtMilitaire", valeur: 0, total: 0 },
        { name: "Athletisme", valeur: 0, total: 0 },
        { name: "Bagarre", valeur: 0, total: 0 },
        { name: "Dissimulation", valeur: 0, total: 0 },
        { name: "Empathie", valeur: 0, total: 0 },
        { name: "Equitation", valeur: 0, total: 0 },
        { name: "Erudition", valeur: 0, total: 0 },
        { name: "Intimidation", valeur: 0, total: 0 },
        { name: "Navigation", valeur: 0, total: 0 },
        { name: "Persuasion", valeur: 0, total: 0 },
        { name: "Representation", valeur: 0, total: 0 },
        { name: "Subornation", valeur: 0, total: 0 },
        { name: "Tir", valeur: 0, total: 0 },
        { name: "Vigilance", valeur: 0, total: 0 },
        { name: "Vol", valeur: 0, total: 0 }
    ],
    vertu: null,
    travers:null,
    story: [
        {
            nom: null,
            objectif: null,
            recompense: null,
            etape: [
                {
                    desc: null
                }
            ]
        }
    ],
    joueur: null,
    nom: null,
    religion: null,
    concept: null,
    reputation: 0,
    richesse: 0,
    langues: []
};

var currentStep = 1;
var activeStep = 1;

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
        if (hero.carac1 == null || hero.carac2 == null) {
            $(".js-validate-step").show();
            return isValid = false;
        }
    }
    return isValid = true;
}

function calculateCaracRows() {
    $(".js-caracteristique .star-rating span").removeClass('checked');
    $(".js-caracteristique .star-rating span").removeClass('inactive-checked');
    for (var i = 0; i < hero.caracteristique.length; i++) {
        hero.caracteristique[i].valeur = caracteristiqueBase[i].valeur;
        if (hero.caracteristique[i].name == hero.carac1) hero.caracteristique[i].valeur++;
        if (hero.caracteristique[i].name == hero.carac2) hero.caracteristique[i].valeur++;
        generateStar($('#js-' + hero.caracteristique[i].name + '-row'), hero.caracteristique[i].valeur);
    }
    for (var i = 0; i < hero.caracteristique.length; i++) {
        if (hero.caracteristique[i].name == hero.nationCarac) {
            hero.caracteristique[i].valeur++;
            generateInactiveStar($('#js-' + hero.caracteristique[i].name + '-row'), 1);
        }
    }
}

function calculateCompRows() {
    $(".js-competence .star-rating span").removeClass('checked');
    $(".js-competence .star-rating span").removeClass('inactive-checked');
    for (var i = 0; i < hero.hist1Competences.length; i++) {
        generateInactiveStar($('#js-' + hero.hist1Competences[i] + '-row'), 1);
    }
    for (var i = 0; i < hero.hist2Competences.length; i++) { 
        generateInactiveStar($('#js-' + hero.hist2Competences[i] + '-row'), 1);
    }
    for (var i = 0; i < hero.competence.length; i++) {
        generateStar($('#js-' + hero.competence[i].name + '-row'), hero.competence[i].valeur);
    }
}

function generateStar($row, carac) {
    var nextStar = $row.find(".star-rating").find('span').not('.checked, .inactive-checked').first();
    for (var i = 0; i < carac; i++) {
        nextStar.addClass('checked');
        nextStar = $row.find(".star-rating").find('span').not('.checked, .inactive-checked').first();
    }
}

function generateInactiveStar($row, carac) {
    var nextStar = $row.find(".star-rating").find('span').not('.checked, .inactive-checked').first();
    for (var i = 0; i < carac; i++) {
        nextStar.addClass('inactive-checked');
        nextStar = $row.find(".star-rating").find('span').not('.checked').first();
    }
}

function caracRadioChange(event) {
    hero.carac1 = $('input[name="carac1"]:checked').val();
    hero.carac2 = $('input[name="carac2"]:checked').val();
    calculateCaracRows();
}

function nationRadioChange(event) {
    var value = $('input[name="nationCarac"]:checked').val().split('-');
    hero.nation = value[0];
    propagateNationChange();
    hero.nationCarac = value[1];
    calculateCaracRows();
}

function historyToggle(event) {
    var $target = $(event.target);
    var id = $target.attr('name');
    var isChecked = $target.is(':checked');
    if (isChecked) {
        if ($target.hasClass('hi-col-1')) {
            hero.hist1 = id;
            var result = $.grep(Historique, function (e) { return e.id == id; })[0];
            hero.hist1Avantages.push(result.av1);
            if (result.av2 != '') hero.hist1Avantages.push(result.av2);
            if (result.av3 != '') hero.hist1Avantages.push(result.av3);
            hero.hist1Competences.push(result.co1);          
            hero.hist1Competences.push(result.co2);
            hero.hist1Competences.push(result.co3);
            hero.hist1Competences.push(result.co4);
            hero.hist1Competences.push(result.co5);
            $('.hi-col-1').attr("disabled", true);
            for (var i = 0; i < hero.hist1Competences.length; i++) {
                hero.competence.find(x => x.name === hero.hist1Competences[i]).total++;
            }
            for (var i = 0; i < hero.hist1Avantages.length; i++) {
                $('#avantages input[name=' + hero.hist1Avantages[i] + ']').attr("disabled", true);
                $('#avantages input[name=' + hero.hist1Avantages[i] + ']').prop('checked', true);
            }            
        }
        if ($target.hasClass('hi-col-2')) {
            hero.hist2 = id;
            var result = $.grep(Historique, function (e) { return e.id == id; })[0];
            hero.hist2Avantages.push(result.av1);
            if (result.av2 != '') hero.hist2Avantages.push(result.av2);
            if (result.av3 != '') hero.hist2Avantages.push(result.av3);
            hero.hist2Competences.push(result.co1);
            hero.hist2Competences.push(result.co2);
            hero.hist2Competences.push(result.co3);
            hero.hist2Competences.push(result.co4);
            hero.hist2Competences.push(result.co5);
            $('.hi-col-2').attr("disabled", true);
            for (var i = 0; i < hero.hist2Competences.length; i++) {
                hero.competence.find(x => x.name === hero.hist2Competences[i]).total++;
            }
            for (var i = 0; i < hero.hist2Avantages.length; i++) {
                $('#avantages input[name=' + hero.hist2Avantages[i] + ']').attr("disabled", true);
                $('#avantages input[name=' + hero.hist2Avantages[i] + ']').prop('checked', true);
            }  
        }
    }
    else {
        if ($target.hasClass('hi-col-1')) {
            hero.hist1 = null;
            for (var i = 0; i < hero.hist1Competences.length; i++) {
                hero.competence.find(x => x.name === hero.hist1Competences[i]).total--;
            }
            hero.hist1Avantages = [];
            hero.hist1Competences = [];
            $('.hi-col-1').removeAttr("disabled");            
        }
        if ($target.hasClass('hi-col-2')) {
            hero.hist2 = null;
            for (var i = 0; i < hero.hist2Competences.length; i++) {
                hero.competence.find(x => x.name === hero.hist2Competences[i]).total--;
            }
            hero.hist2Avantages = [];
            hero.hist2Competences = [];
            $('.hi-col-2').removeAttr("disabled");            
        }
    }
    if (hero.hist1 != null) $('input[name=' + hero.hist1 + ']').attr("disabled", true);
    if (hero.hist2 != null) $('input[name=' + hero.hist2 + ']').attr("disabled", true);
    $.each($('#historiques input:checked'), function (i, obj) {
        $(this).removeAttr("disabled");
    });
    hero.histAvantagePts = 0;
    for (var i = 0; i < hero.hist1Avantages.length; i++) {
        for (var j = 0; j < hero.hist2Avantages.length; j++) {            
            if (hero.hist1Avantages[i] == hero.hist2Avantages[j]){
                hero.histAvantagePts += Avantage.find(x => x.id === hero.hist1Avantages[i]).realCost;
            }
        }
    };
    calculateCompRows();
    
}

function propagateNationChange() {
    resetNationChange();
    switch (hero.nation) {
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
        if (hero.competence[i].name == comp
            && hero.competence[i].valeur > 0) {
            hero.competence[i].valeur--;
            hero.competence[i].total--;
            hero.competencePts++;
        }
    }
    calculateCompRows();
}

function competencePlus(event) {
    var $target = $(event.target);

    var comp = $target.closest('tr').attr("id").split('-')[1];
    for (var i = 0; i < hero.competence.length; i++) {
        if (hero.competence[i].name == comp
            && hero.competence[i].total < 3
            && hero.competencePts > 0) {
            hero.competence[i].valeur++;
            hero.competence[i].total++;
            hero.competencePts--;
        }
    }
    calculateCompRows();
}

function calculateAdvantagePoints() {
    hero.avantagesUsedPts = 0;
    $.each($("#avantages input[type='checkbox']:checked").not(':disabled'), function (i, obj) {            
        hero.avantagesUsedPts += Avantage.find(x => x.id === $(this).attr('name')).cost;        
    });
    var leftPts = hero.avantagePts + hero.histAvantagePts - hero.avantagesUsedPts;
    $.each(Avantage, function (i, obj) {
        var name = obj.id;
        $('#avantages input[name=' + name + ']').removeAttr("disabled");
    });
    var result = $.grep(Avantage, function (e) { return e.cost > leftPts });
    $.each(result, function (i, obj) {
        var name = obj.id;
        $('#avantages input[name=' + name + ']').attr("disabled", true);
    });
    $.each(hero.avantages, function (i, obj) {
        $('#avantages input[name=' + obj + ']').removeAttr("disabled");
    });       
    for (var i = 0; i < hero.hist1Avantages.length; i++) {
        $('#avantages input[name=' + hero.hist1Avantages[i] + ']').attr("disabled", true);
        $('#avantages input[name=' + hero.hist1Avantages[i] + ']').prop('checked', true);
    }  
    for (var i = 0; i < hero.hist2Avantages.length; i++) {
        $('#avantages input[name=' + hero.hist2Avantages[i] + ']').attr("disabled", true);
        $('#avantages input[name=' + hero.hist2Avantages[i] + ']').prop('checked', true);
    } 
    $("#avantagesUsedPts").html(hero.avantagesUsedPts);
    $("#avantagesTotalPts").html(hero.avantagePts + hero.histAvantagePts);
}

function advantageToggle(event) {
    var $target = $(event.target);
    var id = $target.attr('name');
    var isChecked = $target.is(':checked');
    if (isChecked) {        
        hero.avantages.push(id);       
    }
    else {   
        var index = hero.avantages.indexOf(id);
        if (index > -1) {
            hero.avantages.splice(index, 1);
        }
    }
    calculateAdvantagePoints();
}

function vertuRadioChange(event) {
    hero.vertu =  $('input[name="vertu"]:checked').val();
}

function traversRadioChange(event) {
    hero.travers =  $('input[name="travers"]:checked').val();
}

function txtInputChange(event) {
    hero.story[0].nom = $('#story-title').val();
    hero.story[0].objectif = $('#story-objective').val();
    hero.story[0].recompense = $('#story-reward').val();
    hero.story[0].etape[0].desc = $('#story-step-1').val();
    hero.joueur = $('#player-name').val();
    hero.nom = $('#character-name').val();
    hero.concept = $('#character-concept').val();
    hero.religion = $('#character-religion').val();
    hero.reputation = $('#character-reputation').val();
    hero.richesse = $('#character-richesse').val();
}

function openCharSheet(event) {
    $('header, #herobuilder, footer').hide();

    //Profil
    $('#blc-joueur').html(hero.joueur);
    $('#blc-personnage').html(hero.nom);
    $('#blc-concept').html(hero.concept);
    $('#blc-nation').html(Nation.find(x => x.id === hero.nation).name);
    $('#blc-religion').html(hero.religion);
    $('#blc-reputation').html(hero.reputation);
    $('#blc-richesse').html(hero.richesse);

    //Arcanes
    $('#blc-vertu').html(hero.vertu);//TODO use name instead of Id
    $('#blc-travers').html(hero.travers);//TODO use name instead of Id

    //Histoires
    $('#blc-story-nom').html(hero.story[0].nom);
    $('#blc-story-objectif').html(hero.story[0].objectif);
    $('#blc-story-recompense').html(hero.story[0].recompense);
    $('#blc-story-step').html(hero.story[0].etape[0].desc);

    //Caracteristiques
    for (var i = 0; i < hero.caracteristique.length; i++) {        
        generateStar($('#blc-' + hero.caracteristique[i].name), hero.caracteristique[i].valeur);        
    }

    //Compétences
    for (var i = 0; i < hero.competence.length; i++) {        
        generateStar($('#blc-' + hero.competence[i].name + '-row'), hero.competence[i].valeur);        
    }
    for (var i = 0; i < hero.hist1Competences.length; i++) {
        generateStar($('#blc-' + hero.hist1Competences[i] + '-row'), 1);
    }
    for (var i = 0; i < hero.hist2Competences.length; i++) { 
        generateStar($('#blc-' + hero.hist2Competences[i] + '-row'), 1);
    }

    $('#charsheet').show();
}

$(document).ready(function () { 
    //return openCharSheet();   
    setTimeout(function () {
        $('.js-btn-next').click(function () { goToNextStep(); });
        $('.js-btn-previous').click(function () { goToStep(activeStep - 1); });
        calculateCaracRows();
        $('.js-carac-radio').change(function (event) { caracRadioChange(event); });
        $('input[name="nationCarac"]').change(function (event) { nationRadioChange(event); });
        $('#historiques input').click(function (event) { historyToggle(event); })
        $('.js-competence .js-btn-minus').click(function (event) { competenceMinus(event); });
        $('.js-competence .js-btn-plus').click(function (event) { competencePlus(event); });
        $('#avantages input').click(function (event) { advantageToggle(event); });
        $('input[name="vertu"]').change(function (event) { vertuRadioChange(event); });
        $('input[name="travers"]').change(function (event) { traversRadioChange(event); });
        $(".js-txt-input").change(function (event) { txtInputChange(event); });
        $('#finalize').click(function (event) { openCharSheet(event); })
    }, 1000);
});

