const {createApp} = Vue
const app = createApp();

app.component('shop_list', {
	mixins: [myMixins],
	data() {
		return {
			shopList: {
				articles: [
					{
						name: 'Sachet de tomate',
						quantity: 1,
						prix_unit: 3
					},
					{
						name: 'Bonbon',
						quantity: 1,
						prix_unit: 5
					},
					{
						name: 'Baguette',
						quantity: 2,
						prix_unit: 0.50
					}
				],
				total_price: 0
			},
			test: {
				name: 'Un nom'
			}
		}
	},
	computed: {
		shop_list: function () {
			var retour = [];

			for (article in this.shopList.articles) {
				retour.push({
					name: this.shopList.articles[article].name,
					quantity: this.shopList.articles[article].quantity,
					prix_unit: this.shopList.articles[article].prix_unit
				});

				this.totalPrice(this.shopList.articles[article].quantity, this.shopList.articles[article].prix_unit);
			}

			return retour;
		},			
		
	},
	methods: {
		totalPrice: function (quantity, price) {
			this.shopList.total_price += quantity * price;
		},
		addShopItem: function () {
			this.shopList.articles;

			this.add_modale(`
				<form action="#" methods="post">
					<div class="form-group">
						<label for="article_name">Nom de l'article</label>
						<input id="article_name" type="text" class="form-control" v-model="test.name">
					</div>

					<div class="form-group mt-2">
						<label for="article_name">Quantité</label>
						<input id="article_name" type="number" min="1" class="form-control">
					</div>

					<div class="form-group mt-2">
						<label for="article_name">Prix (&euro;)</label>
						<input id="article_name" type="number" class="form-control">
					</div>

					<div class="text-center m-2">
						<button id="btn-submit" type="submit" class="btn btn-primary mt-2">Ajouter</button>
					</div>
				</form>
			`);
		}
	},
	template: `
		<div>
			<table class="table text-center">
				<thead>
					<tr>
						<td>#</td>
						<td>Article</td>
						<td>Quantité</td>
						<td>Prix (&euro;)</td>
					</tr>
				</thead>

				<tbody>
					<tr v-for="(article,k) in shop_list">
						<td>{{k+1}}</td>
						<td>{{article.name}}</td>
						<td>{{article.quantity}}</td>
						<td>{{article.prix_unit}}</td>
					</tr>

					<tr>
						<td class="bg-light text-end" colspan="3">TOTAL</td>
						<td class="bg-light">{{shopList.total_price}}</td>
					</tr>
				</tbody>
			</table>

			<div id="add_article" class="p-4">
				<button class="btn btn-primary btn-lg" v-on:click.stop.prevent="addShopItem">
					<i class="fa-solid fa-plus"></i>
				</button>
			</div>
		</div>
	`
});



app.mount('#app')