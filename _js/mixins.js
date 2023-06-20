var myMixins = {
	methods: {
		add_modale: function (datas) {
			var modale = document.createElement('div');
			document.querySelector('body').appendChild(modale);
			document.querySelector('#app').classList.add('my-blur');

			modale.classList.add('my_modale');
			modale.id = this.generateId(8);

			// Construct modale
			var main_modale = document.createElement('div');
			var header_modale = document.createElement('div');
			var p_title = document.createElement('p');
			var i_close_modale = document.createElement('i');

			main_modale.classList.add('main_modale');
			header_modale.classList.add('header_modale', 'bg-primary');
			p_title.classList.add('text-light', 'm-0');
			p_title.innerText = 'Ajouter un article';
			i_close_modale.classList.add('fa-solid', 'fa-xmark', 'close_modale', 'text-light');

			main_modale.appendChild(header_modale);
			header_modale.appendChild(p_title);
			header_modale.appendChild(i_close_modale);
			modale.appendChild(main_modale);

			i_close_modale.addEventListener('click', () => {
				this.close_modale(modale.id);
			});

			console.log(datas);
		},
		close_modale(id) {
			document.getElementById(id).remove();
			document.querySelector('#app').classList.remove('my-blur');
		},
		generateId:function (num) {
			const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			
			let random = '';

			for (let i = 0; i < num; i++ ) {
				random += characters.charAt(Math.floor(Math.random() * characters.length));
			}

			return random;
		}
	}
};

