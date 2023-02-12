let MensajeAd =
	"​🚨*Bienvenido al Canal más HOT!*🚨 \n \n" +
	"	🎁	- Gana dinero desde casa \n" +
	"	🤑	- Analista experto para ser rentable \n" +
	"	📈	- Canal gratuito de apuestas +100k \n" +
	"	🗺	- Canal VIP de Apuestas GRATIS \n \n" +
	"['Apuestas analizadas Gratis 🔥'](https://t.me/+tW2CFlZnHIljZmNh)"

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
					text: "Gana dinero desde casa",
					url: "https://t.me/+tW2CFlZnHIljZmNh",
				},
			],
			[
				{
					text: "Analista experto para ser rentable",
					url: "https://t.me/+tW2CFlZnHIljZmNh",
				},
			],
			[
				{
					text: "Canal gratuito de apuestas +100k",
					url: "https://t.me/+tW2CFlZnHIljZmNh",
				},
			],
			[
				{
					text: "Canal VIP de Apuestas GRATIS",
					url: "https://t.me/+tW2CFlZnHIljZmNh",
				},
			],
		],
	},
}

module.exports = { N_VIDEOS, MY_AD }
