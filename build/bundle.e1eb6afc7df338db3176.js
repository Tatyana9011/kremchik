(()=>{"use strict";function e(e){const t=document.querySelector(".cards");t.innerHTML="",e.forEach(((e,i)=>{!function(e){let t="";e.length>=38&&e.substring(0,38)}(e.discription);const r=document.createElement("div");r.classList.add("card"),r.innerHTML=`\n            <img class="card_img" src="${e.src}" alt="card-1" >\n            <div class="card_title">${e.title}</div>\n            <span class="card_price">${e.price[0]} грн</span>\n            <span class="card_details" data-id="${e.id}" >Детальніше</span>`,t.append(r)}))}let t=[{id:"1",src:"/img/1.jpg",price:[200],title:"ILLUSTRIOUS ГЕЛЬ ДЛЯ ВМИВАННЯ З АНА",navLink:"базовий догляд",discription:"Ретельно, але дбайливо очищує та миттєво освіжає шкіру.  Препарат насичений АНА та екстрактом цитрусових, які допомагають освітлити шкіру. <b>Инструкция:</b> Масажними рухами нанесіть на обличчя та шию, змийте теплою водою.    <b> СКЛАД:</b>      pH 3,5-4,5      • Гліколева кислота    • Цитрусовий екстракт        • Пантенол        • Екстракт гамамелісу",variation:[50]},{id:"2",src:"/img/2.jpg",price:[200],title:"Мягкий очищающий гель для лица Christina Bio Phyto 1 Mild Facial Cleanser",navLink:"базовий догляд",discription:"За його допомогою ви якісно та дбайливо видалите з личка будь-які забруднення й залишки косметики. Все, що встигло за день накопичитися в порах, зникне, а ваша свіжа та чиста шкіра буде готова до подальших етапів догляду. Гель має ніжну консистенцію, що тане, а також приємний аромат, тому користуватися ним одне задоволення! Підходить для будь-якого типу шкіри різного віку. </br>      <b> Спосіб застосування</b> </br>        вранці та ввечері акуратно наносити гель на вологе обличчя круговими рухами. Змити теплою водою. Під час використання гелю замість маски (від двох до трьох разів на тиждень): наносити гель товстим шаром на вологе обличчя. Залишити на десять хвилин, потім змити теплою водою.",variation:[50]},{id:"3",src:"/img/3.jpg",navLink:"базовий догляд",price:[200],title:"Гель для очищення Christina Forever Young Moisturizing Facial Wash",discription:"Christina Forever Young Moisturizing Facial Wash - це м'який гель для щоденного вмивання, який очистить вашу шкіру від залишків макіяжу й забруднень та успішно підготує її до нанесення крему. Продукт вирізняється натуральним складом, кожен компонент якого дбає про шкіру й наповнює її здоровим сяйвом. М'яку дію цього засобу забезпечують екстракти мильнянки та ромашки, олія оливи й екстракт гамамелісу. Forever Young Moisturizing Facial Wash освіжить і заспокоїть шкіру наприкінці важкого дня. </br>        <b>Спосіб застосування</b></br>        нанесіть невелику кількість гелю від компанії Christina на долоні, а потім розподіліть по шкірі обличчя й помасажуйте її. Змийте засіб за кілька хвилин.<br />      <b>  Склад:</b><br /> екстракти ромашки, гамамелісу, мильнянки, мильного дерева, смола, олія плодів оливи, гліколева кислота.",variation:[50]},{id:"4",src:"/img/4.jpg",navLink:"сироватки",price:[395],title:"Цукрове мило для обличчя <br/> Holy Land Acnox Sugar Soap",discription:"<b>Особливості Holy Land Acnox Sugar Soap: </b><br/>        - на основі сахарози та лимонного соку; <br/>         - ефективно очищає шкірний покрив від накопичених забруднень, надлишків себуму, токсинів та шлаків; <br/> - м'яко відлущує ороговілі частинки; <br/>         - звужує пори та покращує клітинне дихання; <br/>       - забезпечує себорегулювальну, бактерицидну та протизапальну дії; <br/>     - стимулює мікроциркуляцію крові епідермісу; <br/>     - перешкоджає розмноженню умовно-патогенної флори; <br/>      - тонізує та вітамінізує шкіру; <br/>         - бореться з чорними точками та прищами; <br/>     - має освітлювальну властивість; <br/>     - освіжає тон обличчя. <br/>         <b>Спосіб застосування</b> <br/>        Спіньте невелику кількість мила і нанесіть на вологу шкіру обличчя, а потім помасажуйте протягом 2-3 хвилин. Ретельно змийте залишки засобу. Застосовуйте продукт 1-2 рази на день: вранці та/або ввечері.",variation:[50]},{id:"5",src:"/img/5.jpg",price:[245,345,600,700],navLink:"крема",title:"Цукрове мило для обличчя         Holy Land Acnox Sugar Soap",discription:" WSIURGEFIY OWURHFU  sdrfhrxyjdyukmfyi,k zdefkga o;wurajbfo;er o;wurghe[fue WOPR0E 0[weihf[0uehrb",variation:[10,40,100,150]},{id:"6",src:"/img/6.jpg",price:[78,600],navLink:"маски",title:";OLNHLIWYDVEFJYR OEAUJBRGFIQ3B",discription:"sdrfhrxyjdyukmfyi,k zdefkga o;wurajbfo;er o;wurghe[fue WOPR0E 0[weihf[0uehrb  WSIURGEFIY OWURHFU  sdrfhrxyjdyukmfyi,k zdefkga o;wurajbfo;er o;wurghe[fue WOPR0E 0[weihf[0uehrb",variation:[20,100]},{id:"7",src:"/img/7.jpg",price:[90],navLink:"маски",title:"Маска Christina Illustrious",discription:"Бездоганний, рівномірний тон та мікрорельєф шкіри — завдяки освітлювальній масці для обличчя від Christina. <br/> <b>Переваги продукту </b><br/>          • Усуває ознаки втоми, млявість та тьмяність.<br/>         • Підходить для будь-якого типу шкіри.<br/>    • Відновлює гідроліпідний баланс. <br/>         • Не містить парабенів і силіконів.<br/>          • Має приємний цитрусовий аромат.<br/>        <b> Як діє? </b><br/>        Завдяки комплексу з морським синім мінералом маска щадно освітлює та відбілює шкіру, вирівнює її тон та мікрорельєф. Вона мінімізує пігментні плями, ластовиння, зморшки, надає протизапальну та протиоксидантну дії. Завдяки ресвератролу в складі маска зміцнює стінки капілярів, робить шкіру еластичною та пружною.<br/>     <b>  Б’юті-поради</b><br/>        Для освітлення шкіри, рівномірного тону та мікрорельєфу доповніть маску іншими засобами відновлювальної лінійки Illustrious цього самого бренду: міцелярною водою, гелем для вмивання, тонером, сироваткою, денним та нічним кремами, для шкіри навколо очей.",variation:[10]}];const i=document.querySelector("#modal-cart"),r=document.querySelector(".overlay"),n=function(e){i.classList.add("show"),document.addEventListener("keydown",s)},a=function(){i.classList.remove("show"),document.removeEventListener("keydown",s)},s=e=>{"Escape"===e.code&&a()};r.addEventListener("click",(e=>{const t=e.target;(t.classList.contains("modal-close")||t.classList.contains("overlay"))&&a()})),e(t),e(t),document.querySelector(".mob-menu-btn"),document.addEventListener("click",(i=>{const r=i.target;console.log("target: ",r);const a=document.querySelector(".fixed"),s=document.querySelector(".viber"),c=document.querySelector(".telegram"),o=document.querySelector(".instagramm"),d=document.querySelector(".header_nav_list");!r.matches(".header_nav_item")&&d.matches(".open")&&d.classList.remove("open"),r.closest(".mob-menu-btn")&&d.classList.toggle("open"),r.matches(".card_details")?function(e){e.matches(".card_details")&&(n(e),function(e){const i=document.querySelector(".modal"),r=e.dataset.id;i.innerHTML="";const n=t.find((e=>e.id===r)),a=document.createElement("div");let s=[];n.variation.forEach(((e,t)=>{const i=document.createElement("tr");return i.innerHTML=`<td class="value">${e} мл.</td>\n                        <td class="price">${n.price[t]} грн</td>`,s.push(i)})),a.classList.add("card"),a.innerHTML=`\n                <button class="modal-close">x</button>\n                <img class="modal_img" src="${n.src}" alt="card-1" >\n\n                <div class="card_variation">\n                    <div class="card_title">${n.title}</div>\n                    <div class="card_discription">${n.discription}</div>\n                    <table  class="table_variation">\n                        <tbody>\n                            <tr>\n                                <th class="label">\n                                    <p>Об'єм</p>\n                                </th>\n                                <th class="label">\n                                    <p>Цiна</p>\n                                </th>\n                            </tr>\n                        </tbody>\n                    </table>\n                      \n                </div> `,i.append(a),document.querySelector("tbody").append(...s)}(e))}(r):a.matches(".anima")?r.matches(".fixed")||r.matches("svg")||r.matches("path")?function(e){const t=document.querySelector(".fixed"),i=document.querySelector(".viber"),r=document.querySelector(".telegram"),n=document.querySelector(".instagramm");t.classList.toggle("anima"),i.classList.toggle("show"),r.classList.toggle("show"),n.classList.toggle("show")}():r.matches(".header_nav_item")&&function(i){const r=document.querySelectorAll(".header_nav_item");document.querySelector(".header_title"),r.forEach((e=>e.style.textDecoration="none")),i.style.textDecoration="underline";const n=t.filter((e=>e.navLink===i.textContent));n.length?e(n):document.querySelector(".cards").innerHTML='<title class="header_worn">Нажаль цього товару нема в наявностi.</title> '}(r):(a.classList.add("anima"),s.classList.remove("show"),c.classList.remove("show"),o.classList.remove("show"))}))})();