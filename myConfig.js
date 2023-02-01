let MensajeAd =
	"​🚨*Bienvenido al Canal más HOT!*🚨 \n \n" +
	"	🎁	- Consolador masculino \n" +
	"	🤑	- Curso Apuestas 0% Riesgo \n" +
	"	📈	- Síguenos en Instragram \n" +
	"	🗺	- Canal VIP de Apuestas GRATIS \n \n" +
	"['Apuestas analizadas Gratis 🔥'](https://t.me/+jFkhI83IjgwwY2Q5)"

/*let MensajeAd3 =
	"​🚨*Promociona lo que desees!*🚨 \n \n"*/

let imagenAd =
	"https://vilmanunez.com/wp-content/uploads/2018/10/poner-anuncios-publicitarios-gratis.png"

const N_VIDEOS = 10 //MAX 10

const MY_AD = {
	isActive: true,
	type: 3, // //defaultAd => 1 //captionAd => 2 //linksGroupAd => 3
	data: {
		ctn: MensajeAd,
		image: imagenAd,
		link: {
			text: "Canal vip ❤",
			url: "https://google.com",
		},
		linksGroupAd: [
			[
				{
					text: "Consolador masculino",
					url: "https://amzn.to/3HIEjk8",
				},
			],
			[
				{
					text: "Curso Apuestas 0% Riesgo",
					url: "https://ganarenapuestas.com/",
				},
			],
			[
				{
					text: "Síguenos en Instragram",
					url: "https://www.instagram.com/bellas.princesass/",
				},
			],
			[
				{
					text: "Canal VIP de Apuestas GRATIS",
					url: "https://t.me/+jFkhI83IjgwwY2Q5",
				},
			],
		],
	},
}

module.exports = { N_VIDEOS, MY_AD }
