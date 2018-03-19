var allCourses=[
	["Développement de sites Web transactionnels","Opération d'un serveur Web","Introduction à la programmation Web côté client",
	"Programmation Web orientée objet côté serveur et base de données","Base de données"],
	["Développement d’Applications mobiles","Traitement d’éléments multimédias",
	"Applications mobiles sous Android","Applications mobiles sous iOS","Mobilité et Web"],
	["Réseautique et sécurité Informatique","Sécurité des systèmes d'exploitation Linux",
	"Sécurité physique des systèmes informatiques","Administration des Serveurs de base de données",""],
	["Development web","HTML5","CSS3","JavaScript",""],
	["Bureautique", "Word", "Excel", "Access", "PowerPoint"],
	["A Venir", "Windows", "Linux", "Téléphonie IP", ""]
];
function selectFormation(){
	var numberOfFormation=document.getElementById("formation").value;
	var parentElement=document.getElementById("inscriptionRightColoumn");
	var allLabels=parentElement.getElementsByClassName("labelForCheckBox");
	var allCheckBoxes=parentElement.getElementsByClassName("checkboxes");
	var allBr=parentElement.getElementsByClassName("brForCourses");
	var quantity=allLabels.length;
	var elementBefore=document.getElementById("labelAfterCheckBoxes");
	for (var i=quantity-1; i>=0; i--){
		parentElement.removeChild(allLabels[i]);
		parentElement.removeChild(allCheckBoxes[i]);
		parentElement.removeChild(allBr[i]);
		
	}
	var i=1;
	while ((typeof allCourses[numberOfFormation-1][i]!=="undefined")&&(allCourses[numberOfFormation-1][i]!=="")){
		var checkbox = document.createElement('input'); 
		checkbox.type= 'checkbox';
		checkbox.name = "courses";
		checkbox.id = "fc"+numberOfFormation+i;
		checkbox.className="checkboxes";
		checkbox.value=""+numberOfFormation+i;
		checkbox.checked = true;
		var label=document.createElement("label");
		label.setAttribute("for", "fc"+numberOfFormation+i);
		label.className="labelForCheckBox";
		label.innerHTML=allCourses[numberOfFormation-1][i];
		var br = document.createElement("br");
		br.className="brForCourses";
		parentElement.insertBefore(checkbox, elementBefore);
		parentElement.insertBefore(label, elementBefore);
		parentElement.insertBefore(br, elementBefore);
		i++;
	}	
	
}