function open_modale(contentType) {
	var modale = document.createElement('div');
	document.querySelector('body').appendChild(modale);
	document.querySelector('#app').classList.add('my-blur');

	modale.classList.add('my_modale');
	modale.id = this.generateId(8);

	// Construct modale
	var main_modale = document.createElement('div');
	var header_modale = document.createElement('div');
	var body_modale = document.createElement('div');
	var p_title = document.createElement('p');
	var i_close_modale = document.createElement('i');
	var content = null;

	main_modale.classList.add('main_modale');
	header_modale.classList.add('header_modale', 'bg-primary');
	body_modale.classList.add('body_modale');
	p_title.classList.add('text-light', 'm-0');
	p_title.innerText = 'Ajouter un article';
	i_close_modale.classList.add('fa-solid', 'fa-xmark', 'close_modale', 'text-light');

	main_modale.appendChild(header_modale);
	main_modale.appendChild(body_modale);
	header_modale.appendChild(p_title);
	header_modale.appendChild(i_close_modale);
	modale.appendChild(main_modale);

	switch(contentType) {
		case 'form-add-shop-list':
			content = getFormAddToShopList(modale.id);
			break;
	}

	body_modale.appendChild(content);

	i_close_modale.addEventListener('click', () => {
		close_modale(modale.id);
	});
}

function getFormAddToShopList(id) {
	var shop_form = document.createElement('form');

	// Divs
	var div_name = document.createElement('div');
	var div_quantity = document.createElement('div');
	var div_price = document.createElement('div');
	var div_submit = document.createElement('div');

	// Labels
	var label_name = document.createElement('label');
	var label_quantity = document.createElement('label');
	var label_price = document.createElement('label');

	// Inputs
	var input_name = document.createElement('input');
	var input_quantity = document.createElement('input');
	var input_price = document.createElement('input');

	var button_submit = document.createElement('button');


	div_name.appendChild(label_name);
	div_name.appendChild(input_name);

	div_quantity.appendChild(label_quantity);
	div_quantity.appendChild(input_quantity);

	div_price.appendChild(label_price);
	div_price.appendChild(input_price);

	div_submit.appendChild(button_submit);

	shop_form.appendChild(div_name);
	shop_form.appendChild(div_quantity);
	shop_form.appendChild(div_price);
	shop_form.appendChild(div_submit);


	shop_form.setAttribute('action', '#');
	shop_form.setAttribute('methods', 'post');

	div_name.classList.add('form-group');
	div_quantity.classList.add('form-group', 'mt-2');
	div_price.classList.add('form-group', 'mt-2');
	div_submit.classList.add('text-center', 'mt-2');


	label_name.setAttribute('for', 'article_name');
	label_name.innerText = 'Nom de l\'article';

	label_quantity.setAttribute('for', 'article_quantity');
	label_quantity.innerText = 'Quantité';

	label_price.setAttribute('for', 'article_price');
	label_price.innerText = 'Prix (&euro;)';

	input_name.setAttribute('id', 'article_name');
	input_name.setAttribute('type', 'text');
	input_name.classList.add('form-control');

	input_quantity.setAttribute('id', 'article_quantity');
	input_quantity.setAttribute('type', 'number');
	input_quantity.setAttribute('min', '1');
	input_quantity.classList.add('form-control');

	input_price.setAttribute('id', 'article_price');
	input_price.setAttribute('type', 'number');
	input_price.classList.add('form-control');

	button_submit.setAttribute('type', 'submit');
	button_submit.classList.add('btn', 'btn-primary', 'mt-2');
	button_submit.innerText = 'Ajouter';

	button_submit.addEventListener('click', (e) => {
		e.preventDefault();

		add_item_to_shop(id);

		if (verifyEntries()) {
			close_modale(id);
			location.reload();
		}
	});

	return shop_form;
}


function close_modale(id) {
	document.getElementById(id).remove();
	document.querySelector('#app').classList.remove('my-blur');
}


/**
*	Ajoute un item dans le panier
*/
function add_item_to_shop(id) {
	var articles = [];

	if (localStorage.length > 0) {
		articles.push(getShopStorage());
	}

	shopList = {
		name: document.getElementById('article_name').value,
		quantity: document.getElementById('article_quantity').value,
		price: document.getElementById('article_price').value
	};


	if (verifyEntries(shopList)) {
		articles.push(JSON.stringify(shopList));
		setShopStorage(articles);
	}
}

/*
	Vérifie si une entrée est bien saisie
*/
function verifyEntries() {
	var shopList = {
		name: document.getElementById('article_name').value,
		quantity: document.getElementById('article_quantity').value,
		price: document.getElementById('article_price').value
	};	
	var isOk = false;

	for (item in shopList) {
		if (shopList[item] != '') {
			isOk = true;
		} else {
			return false;
		}
	}

	return isOk;
}

function getShopStorage() {
	return localStorage.getItem('shopList');
}

function setShopStorage(datas) {
	localStorage.setItem('shopList', datas);
}

function generateId (num) {
	const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	
	let random = '';

	for (let i = 0; i < num; i++ ) {
		random += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return random;
}




