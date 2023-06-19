var myMixins = {
	methods: {
		add_modale: function (datas) {
			var modale = document.createElement('div');

			modale.classList.add('my_modal');
			modale.id = this.generateId(8);			

			modale.innerHTML = `
				<div class="my_modal">
					<div class="main_modale">
						<div class="header_modale bg-primary">
							<p class="text-light m-0">Ajouter un article</p>

							<i
								class="fa-solid fa-xmark close_modale text-light"
							>
							</i>
						</div>
					</div>
				</div>
			`;

			document.querySelector('body').appendChild(modale);
			document.querySelector('#app').classList.add('my-blur');
		},
		close_modale: function (id) {
			console.log('ok');
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