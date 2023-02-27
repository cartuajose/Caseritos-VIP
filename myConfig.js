let MensajeAd =
	"​🚨*Bienvenido al Canal más HOT!*🚨 \n \n" +
	"	🔥	- Soy Sofia la más caliente \n" +
	"	🔥	- OnlyFans y conversaciones privadas \n" +
	"	🔥	- Fotos prohibidas \n" +
	"	🔥	- Me masturbo para tí \n \n" +
	"['Entra en mi canal 🔥'](http://t.me/soysofiaonly)"

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
			text: "Soy Sofia la más caliente ❤",
			url: "http://t.me/soysofiaonly",
		},
		linksGroupAd: [
			[
				{
					text: "Soy Sofia la más caliente",
					url: "http://t.me/soysofiaonly",
				},
			],
			[
				{
					text: "OnlyFans y conversaciones privadas",
					url: "http://t.me/soysofiaonly",
				},
			],
			[
				{
					text: "Fotos prohibidas",
					url: "http://t.me/soysofiaonly",
				},
			],
			[
				{
					text: "Me masturbo para tí",
					url: "http://t.me/soysofiaonly",
				},
			],
		],
	},
}

module.exports = { N_VIDEOS, MY_AD }
