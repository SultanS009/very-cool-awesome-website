Const panels = document.querySelectorAll(‘.panel’)

panels.forEach( panel => {
	panel.addEventListner(‘click’, ()=>{
	removeActiveClasses()
	panel.classlist.add(‘active’)
	})
})


Function removeActiveClasses(){
	panels.forEach(panel => {
panel.classlist.remove(‘active’)
})

//console.log(“hello”)
//console.log(“show me panels”)
}
