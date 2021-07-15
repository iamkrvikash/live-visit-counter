const countValue = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/iamkrvikash/githubtest/?amount=1')
	.then(res => res.json())
	.then(res => {
		countValue.innerHTML = res.value;
	})
}

