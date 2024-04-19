ymaps.ready(init);

function init() { 
    var map = new ymaps.Map("map-test", {
        center: [54.812810, 29.706244],
        zoom: 13

        }, {
        restrictMapArea: [
            [54.962934, 29.234343],
            [54.661641, 30.184161]
        ],
    },
		
);
	
	map.controls.remove('geolocationControl');
	map.controls.remove('searchControl'); 
	map.controls.remove('trafficControl');
	map.controls.remove('typeSelector'); 
	map.controls.remove('fullscreenControl');
	map.controls.remove('zoomControl'); 
	map.controls.remove('rulerControl'); 
	
    var malaya_belaya_caplya = new ymaps.Placemark([54.814145, 29.716576], {
        hintContent: 'Малая белая цапля',
        balloonContent: `
		<img src='https://fareastru.birds.watch/taxons/108/fronpic1.jpg'
		width="350"
		height="300"/>
		<h1 class="rarebirds">Малая белая цапля</h1>
		<p>Внешне похожа на большую белую цаплю, но почти вдвое меньше ее. Отличается очень изящным телосложением и маленькой головкой с длинным и тонким клювом.</p>
		<audio src='audio/malaya_belaya_caplya.mp3' controls></audio>
		`
	}, 
	
	{
        iconLayout: 'default#image',
        iconImageHref: 'icons/rarebirds.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
    });
	
	var bolwaya_belaya_caplya = new ymaps.Placemark([54.814514, 29.716699], {
        hintContent: 'Больщая белая цапля',
        balloonContent: `
		<img src='https://fareastru.birds.watch/taxons/112/fronpic1.jpg'
		width="350"
		height="300"/>
		<h1 class="rarebirds">Больщая белая цапля</h1>
		<p>Крупная околоводная птица семейства цаплевых, распространённая в тёплых умеренных и тропических широтах как западного, так и восточного полушария.</p>
		<audio src='audio/bolwaya_belaya_caplya.mp3' controls></audio>
		`
    },
	
	{
        iconLayout: 'default#image',
        iconImageHref: 'icons/rarebirds.png',
		iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
    });
	
	var seriu_zhyravl = new ymaps.Placemark([54.820443, 29.733720,], {
        hintContent: 'Серый журавль',
        balloonContent: `
		<img src='https://erbirds.ru/taxons/129/fronpic3.jpg'
		width="350"
		height="300"/>
		<h1 class="redbirds">Серый журавль</h1>
		<p>Крупная птица, высота около 115 см, размах крыльев 180—200 см; вес самца до 6 кг, самки до 5 кг 900 г. Оперение большей части тела синевато-серое, что позволяет птице маскироваться от врагов среди лесистой местности. Спина и подхвостье несколько темнее, а крылья и брюхо более светлые. Клюв светлый от 20—30 см. Ноги чёрные. У молодых журавлей перья на голове и шее серые с рыжими окончаниями. Гнездится серый журавль в северной, западной и восточной Европе.</p>
		<audio src='audio/seriu_zhyravl.mp3' controls></audio>
		`
    },
	
	{
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
		iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
    });
	
		var seriu_zhyravl2 = new ymaps.Placemark([54.816607, 29.737256,], {
        hintContent: 'Серый журавль',
        balloonContent: `
		<img src='https://erbirds.ru/taxons/129/fronpic3.jpg'
		width="350"
		height="300"/>
		<h1 class="redbirds">Серый журавль</h1>
		<p>Крупная птица, высота около 115 см, размах крыльев 180—200 см; вес самца до 6 кг, самки до 5 кг 900 г. Оперение большей части тела синевато-серое, что позволяет птице маскироваться от врагов среди лесистой местности. Спина и подхвостье несколько темнее, а крылья и брюхо более светлые. Клюв светлый от 20—30 см. Ноги чёрные. У молодых журавлей перья на голове и шее серые с рыжими окончаниями. Гнездится серый журавль в северной, западной и восточной Европе.</p>
		<audio src='audio/seriu_zhyravl.mp3' controls></audio>
		`
    },
	
	{
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
		iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
    });
	
	
    var cheglok = new ymaps.Placemark([54.814654, 29.715693], {
        hintContent: 'Чеглок',
        balloonContent: `
		<img src='https://ptici.info/assets/components/phpthumbof/cache/cheglok.18176db1094c57fa245ab89941e7a0fb.jpg'
		width="350"
		height="300"/>
		<h1 class="redbirds">Чеглок</h1>
		<p>Небольшая хищная птица из семейства соколиных, обитающая на обширной территории Евразии. Длина тела 28—36 см, размах крыльев 69—84 см, масса 130—340г. Питается насекомыми и мелкими птицами, которых ловит на лету. Самки выглядят несколько крупнее самцов. Окрас оперения у обоих полов схожий. Верх аспидно-серый без рисунка, с более буроватым оттенком у самок. Обычно молчаливая птица, но в случае беспокойства издаёт типичный для соколов громкий, резкий и отрывистый крик «кьяк-кьяк-кьяк». Полёт быстрый и маневренный, частые взмахи крыльев чередуются со скольжением. В воздухе крылья образуют форму серпа.</p>
		<audio src='audio/cheglok.mp3' controls></audio>
		`
    },
	
	{
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
    });
	
	 var cheglok2 = new ymaps.Placemark([54.816607, 29.737256], {
        hintContent: 'Чеглок',
        balloonContent: `
		<img src='https://ptici.info/assets/components/phpthumbof/cache/cheglok.18176db1094c57fa245ab89941e7a0fb.jpg'
		width="350"
		height="300"/>
		<h1 class="redbirds">Чеглок</h1>
		<p>Небольшая хищная птица из семейства соколиных, обитающая на обширной территории Евразии. Длина тела 28—36 см, размах крыльев 69—84 см, масса 130—340г. Питается насекомыми и мелкими птицами, которых ловит на лету. Самки выглядят несколько крупнее самцов. Окрас оперения у обоих полов схожий. Верх аспидно-серый без рисунка, с более буроватым оттенком у самок. Обычно молчаливая птица, но в случае беспокойства издаёт типичный для соколов громкий, резкий и отрывистый крик «кьяк-кьяк-кьяк». Полёт быстрый и маневренный, частые взмахи крыльев чередуются со скольжением. В воздухе крылья образуют форму серпа.</p>
		<audio src='audio/cheglok.mp3' controls></audio>
		`
    },
	
	{
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
    });
	
	 var cheglok3 = new ymaps.Placemark([54.818615, 29.733590], {
        hintContent: 'Чеглок',
        balloonContent: `
		<img src='https://ptici.info/assets/components/phpthumbof/cache/cheglok.18176db1094c57fa245ab89941e7a0fb.jpg'
		width="350"
		height="300"/>
		<h1 class="redbirds">Чеглок</h1>
		<p>Небольшая хищная птица из семейства соколиных, обитающая на обширной территории Евразии. Длина тела 28—36 см, размах крыльев 69—84 см, масса 130—340г. Питается насекомыми и мелкими птицами, которых ловит на лету. Самки выглядят несколько крупнее самцов. Окрас оперения у обоих полов схожий. Верх аспидно-серый без рисунка, с более буроватым оттенком у самок. Обычно молчаливая птица, но в случае беспокойства издаёт типичный для соколов громкий, резкий и отрывистый крик «кьяк-кьяк-кьяк». Полёт быстрый и маневренный, частые взмахи крыльев чередуются со скольжением. В воздухе крылья образуют форму серпа.</p>
		<audio src='audio/cheglok.mp3' controls></audio>
		`
    },
	
	{
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
    });
	
	var cheglok4 = new ymaps.Placemark([54.816423, 29.729245], {
        hintContent: 'Чеглок',
        balloonContent: `
		<img src='https://ptici.info/assets/components/phpthumbof/cache/cheglok.18176db1094c57fa245ab89941e7a0fb.jpg'
		width="350"
		height="300"/>
		<h1 class="redbirds">Чеглок</h1>
		<p>Небольшая хищная птица из семейства соколиных, обитающая на обширной территории Евразии. Длина тела 28—36 см, размах крыльев 69—84 см, масса 130—340г. Питается насекомыми и мелкими птицами, которых ловит на лету. Самки выглядят несколько крупнее самцов. Окрас оперения у обоих полов схожий. Верх аспидно-серый без рисунка, с более буроватым оттенком у самок. Обычно молчаливая птица, но в случае беспокойства издаёт типичный для соколов громкий, резкий и отрывистый крик «кьяк-кьяк-кьяк». Полёт быстрый и маневренный, частые взмахи крыльев чередуются со скольжением. В воздухе крылья образуют форму серпа.</p>
		<audio src='audio/cheglok.mp3' controls></audio>
		`
    },
	
	{
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
    });
	
	var cheglok5 = new ymaps.Placemark([54.798367, 29.691592], {
        hintContent: 'Чеглок',
        balloonContent: `
		<img src='https://ptici.info/assets/components/phpthumbof/cache/cheglok.18176db1094c57fa245ab89941e7a0fb.jpg'
		width="350"
		height="300"/>
		<h1 class="redbirds">Чеглок</h1>
		<p>Небольшая хищная птица из семейства соколиных, обитающая на обширной территории Евразии. Длина тела 28—36 см, размах крыльев 69—84 см, масса 130—340г. Питается насекомыми и мелкими птицами, которых ловит на лету. Самки выглядят несколько крупнее самцов. Окрас оперения у обоих полов схожий. Верх аспидно-серый без рисунка, с более буроватым оттенком у самок. Обычно молчаливая птица, но в случае беспокойства издаёт типичный для соколов громкий, резкий и отрывистый крик «кьяк-кьяк-кьяк». Полёт быстрый и маневренный, частые взмахи крыльев чередуются со скольжением. В воздухе крылья образуют форму серпа.</p>
		<audio src='audio/cheglok.mp3' controls></audio>
		`
    },
	
	{
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
    });
	
	var cheglok6 = new ymaps.Placemark([54.799513, 29.690912], {
        hintContent: 'Чеглок',
        balloonContent: `
		<img src='https://ptici.info/assets/components/phpthumbof/cache/cheglok.18176db1094c57fa245ab89941e7a0fb.jpg'
		width="350"
		height="300"/>
		<h1 class="redbirds">Чеглок</h1>
		<p>Небольшая хищная птица из семейства соколиных, обитающая на обширной территории Евразии. Длина тела 28—36 см, размах крыльев 69—84 см, масса 130—340г. Питается насекомыми и мелкими птицами, которых ловит на лету. Самки выглядят несколько крупнее самцов. Окрас оперения у обоих полов схожий. Верх аспидно-серый без рисунка, с более буроватым оттенком у самок. Обычно молчаливая птица, но в случае беспокойства издаёт типичный для соколов громкий, резкий и отрывистый крик «кьяк-кьяк-кьяк». Полёт быстрый и маневренный, частые взмахи крыльев чередуются со скольжением. В воздухе крылья образуют форму серпа.</p>
		<audio src='audio/cheglok.mp3' controls></audio>
		`
    },
	
	{
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
    });
	
	var viurok = new ymaps.Placemark([54.797586, 29.693503], {
        hintContent: 'Вьюрок',
        balloonContent: `
		<img src='https://old.bigenc.ru/media/2016/10/27/1235165823/7472.jpg'
		width="350"
		height="300"/>
		<h1 class="rarebirds">Вьюрок</h1>
		<p>вид певчих птиц из семейства вьюрковых.</p>
		<audio src='audio/viurok.mp3' controls></audio>
		`
    },
	
	{
        iconLayout: 'default#image',
        iconImageHref: 'icons/rarebirds.png',
		iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
    });
	
	 var korostel = new ymaps.Placemark([54.805810, 29.697660], {
        hintContent: 'Коростель',
        balloonContent: `
		<img src='https://belarus.birds.watch/taxons/104/fronpic1.jpg'
		width="350"
		height="300"/>
		<h1 class="redbirds">Коростель</h1>
		<p>Небольшая птица семейства пастушковых. Гнездится во влажных высокотравных лугах, густо поросших кустарниковых болотах, засеянных пашнях и других открытых ландшафтах в умеренных широтах Евразии. Размерами сравним с дроздом или перепёлкой, телосложением несколько напоминает подросшего цыплёнка домашней курицы. Ведёт скрытный образ жизни, почти не показывается из зарослей высокой травы. Летает неохотно и только при крайней необходимости, однако во время миграции легко преодолевает тысячи километров, в том числе над морем и пустынями. Питается насекомыми, пауками, моллюсками, иногда мелкими лягушками и млекопитающими, а также семенами и зелёными частями различных трав и злаков, в том числе культурных растений.</p>
		<audio src='audio/korostel.mp3' controls></audio>
		`
     },
	
	 {
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
		iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
     }); 
  
     var korostel2 = new ymaps.Placemark([54.815234, 29.735608], {
        hintContent: 'Коростель',
        balloonContent: `
		<img src='https://belarus.birds.watch/taxons/104/fronpic1.jpg' 
		width="350"
		height="300"/>
		<h1 class="redbirds">Коростель</h1>
		<p>Небольшая птица семейства пастушковых. Гнездится во влажных высокотравных лугах, густо поросших кустарниковых болотах, засеянных пашнях и других открытых ландшафтах в умеренных широтах Евразии. Размерами сравним с дроздом или перепёлкой, телосложением несколько напоминает подросшего цыплёнка домашней курицы. Ведёт скрытный образ жизни, почти не показывается из зарослей высокой травы. Летает неохотно и только при крайней необходимости, однако во время миграции легко преодолевает тысячи километров, в том числе над морем и пустынями. Питается насекомыми, пауками, моллюсками, иногда мелкими лягушками и млекопитающими, а также семенами и зелёными частями различных трав и злаков, в том числе культурных растений.</p>
		<audio src='audio/korostel.mp3' controls></audio>
		`
     },
	
	 {
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
		iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
     }); 
  
     var cherniu_aist = new ymaps.Placemark([54.823373, 29.739153], {
        hintContent: 'Черный аист',
        balloonContent: `
		<img src='http://static.tildacdn.com/tild3362-3661-4536-b665-663461363236/07570000701.jpg' alt="Черный аист"
		width="350"
		height="300"/>
		<h1 class="redbirds">Черный аист</h1>
		<p>Обитает в лесной зоне Евразии, стараясь избегать людей. От белого аиста отличается большей стройностью телосложения, несколько меньшими размерами, преобладанием чёрных тонов в оперении, заметно более скошенным к вершине профилем клюва, не избегает летать над морем. Предпочитает селиться в глухих, старых лесах на равнинах и предгорьях возле водоёмов — лесных озёр, рек, болот. В полёте чёрный аист, как и другие аисты, часто парит, распластав крылья. Как и все аисты, чёрный летит, вытянув вперёд шею и откинув назад длинные тонкие ноги. Питается в основном рыбой, мелкими водными позвоночными и беспозвоночными животными, кормится на мелководьях, заливных лугах и поблизости от водоёмов. На зимовках, помимо перечисленного кормится мелкими грызунами, крупными насекомыми, реже змеями, ящерицами и моллюсками.</p>
		<audio src='audio/cherniu_aist.mp3' controls></audio>
		`
     },
	 {
        // Опции
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
		iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
  }); 
  
     var zeleniy_dyatel = new ymaps.Placemark([54.817576, 29.742257], {
        hintContent: 'Зеленый дятел',
        balloonContent: `
		<img src='https://erbirds.ru/taxons/275/fronpic2.jpg' alt="Зеленый дятел"
		width="350"
		height="300"/>
		<h1 class="redbirds">Зеленый дятел</h1>
		<p>Птица из семейства дятловых, распространённая в западной части Евразии, размером приблизительно с галку, селится в разнообразных лесистых ландшафтах с лиственными деревьями и открытыми пространствами поблизости. Питается преимущественно наземными муравьями, а также другими мелкими беспозвоночными — земляными червями, улитками, изредка ловит рептилий.Длина 33—36 см, размах крыльев 40—44 см, вес 150—250 г. Оперение верхней части туловища и крыльев оливково-зелёное, нижней более бледное — зеленовато-серое либо светло-зелёное с тёмными поперечными пестринами. По бокам головы и шеи перья также зелёные, более тёмные сзади и светлые спереди. В верхней части головы и на затылке имеется узкая шапочка ярко-красных перьев.</p>
		<audio src='audio/zeleniy_dyatel.mp3' controls></audio>
		`
     },
	 {
        // Опции
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
		iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
     }); 
       var zeleniy_dyatel2 = new ymaps.Placemark([54.800816, 29.688307], {
        hintContent: 'Зеленый дятел',
        balloonContent: `
		<img src='https://erbirds.ru/taxons/275/fronpic2.jpg' alt="Зеленый дятел"
		width="350"
		height="300"/>
		<h1 class="redbirds">Зеленый дятел</h1>
		<p>Птица из семейства дятловых, распространённая в западной части Евразии, размером приблизительно с галку, селится в разнообразных лесистых ландшафтах с лиственными деревьями и открытыми пространствами поблизости. Питается преимущественно наземными муравьями, а также другими мелкими беспозвоночными — земляными червями, улитками, изредка ловит рептилий.Длина 33—36 см, размах крыльев 40—44 см, вес 150—250 г. Оперение верхней части туловища и крыльев оливково-зелёное, нижней более бледное — зеленовато-серое либо светло-зелёное с тёмными поперечными пестринами. По бокам головы и шеи перья также зелёные, более тёмные сзади и светлые спереди. В верхней части головы и на затылке имеется узкая шапочка ярко-красных перьев.</p>
		<audio src='audio/zeleniy_dyatel.mp3' controls></audio>
		`
    },
	{
        // Опции
        iconLayout: 'default#image',
        iconImageHref: 'icons/redbook.png',
		iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
  }); 
	   var lebed_shipyn = new ymaps.Placemark([54.815756, 29.715015], {
        hintContent: 'Лебедь шипун',
        balloonContent: `
		<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LaFh9jtHPkLxPTO-PKSVn3h9lBf9YdLLx5wdAPUlJQ&s' alt="Лебедь шипун"
		width="350"
		height="300"/>
		<h1 class="rarebirds">Лебедь шипун</h1>
		<p>Птица из семейства утиных. У лебедей очень длинная шея, вытянутое туловище, тело и голова средней величины с оранжево-красным клювом, у основания которого есть характерный чёрный нарост. Шипуном назван из-за звука, издаваемого при раздражении.</p>
		<audio src='audio/lebed_shipyn.mp3' controls></audio>
		`
     },
	 {
        // Опции
        iconLayout: 'default#image',
        iconImageHref: 'icons/rarebirds.png',
		iconImageSize: [30, 30],
        iconImageOffset: [-15, -15]
  }); 
  
    map.geoObjects.add(malaya_belaya_caplya)
	.add(bolwaya_belaya_caplya)
	.add(seriu_zhyravl)
	.add(cheglok)
	.add(viurok)
	.add(korostel)
	.add(korostel2)
	.add(cherniu_aist)
	.add(zeleniy_dyatel)
    .add(zeleniy_dyatel2)
	.add(seriu_zhyravl2)
	.add(cheglok2)
	.add(cheglok3)
	.add(cheglok4)
	.add(cheglok5)
	.add(cheglok6)
	.add(lebed_shipyn)
}
