//your JS code here. If required.
let next = document.querySelector("#next")
let prev = document.querySelector("#prev")
let circles = document.querySelectorAll(".circle")
//console.log(circles)
let ind = 1
next.addEventListener("click", () => {
	circles[ind].classList.add("active")
	ind += 1
	prev.disabled = false
	if(ind === circles.length){
		next.disabled = true
	}
})
prev.addEventListener("click", () => {
	ind -= 1
	circles[ind].classList.remove("active")
	next.disabled = false
	if(ind === 1){
		prev.disabled = true
	}
})