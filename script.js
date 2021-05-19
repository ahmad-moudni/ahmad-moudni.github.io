const whoami = ["Ahmad Moudni", "a Programmer", "a Data Scientist", "an AI Engineer", "an Amateur Web developer"];
let index = 0;
let word = 0;
const target = document.querySelector("#typing");
const type = () => {
	var current = whoami[word];

	if (index++ < current.length) {
		target.innerText += current[index - 1];
		setTimeout(type, 111);
	} else {
		setTimeout(backspace, 1111);
	}
};
const backspace = () => {
	if (index > 0) {
		target.innerText = target.innerText.substr(0, index - 1);
		index--;
		setTimeout(backspace, 111);
	} else {
		if (word++ == whoami.length - 1) word = 0;

		setTimeout(type, 1111);
	}
};
type();

window.onmousewheel = () => {
	if (window.scrollY > 200) {
		document.querySelector("#scroll").classList.add("fadeOut");
		document.querySelector("#scroll").classList.remove("fadeIn");
	} else {
		document.querySelector("#scroll").classList.add("fadeIn");
		document.querySelector("#scroll").classList.remove("fadeOut");
	}
};
