const user = document.querySelector(".fa-user").addEventListener('click', ()=>{

    
  window.location.href = 'UserLogin.php'
});
    //foranimation
    function home(){
        const con2=document.querySelector(".con2");
        const con3=document.querySelector(".con3");
        const con4=document.querySelector(".con4");
        const con1=document.querySelector(".con1");
        const h=document.getElementById('h');
        const t=document.getElementById('t');
        const n=document.getElementById('n');
        const d=document.getElementById('d');
        h.style.backgroundColor='grey';
        t.style.backgroundColor='black';
        n.style.backgroundColor='black';
        d.style.backgroundColor='black';
        con2.style.display='none';
        con3.style.display='none';
        con4.style.display='none';
        con1.style.display='block';
        
        
        };
        function trending(){
            const con1=document.querySelector(".con1");
            const con3=document.querySelector(".con3");
            const con4=document.querySelector(".con4");
            const con2=document.querySelector(".con2");
            const h=document.getElementById('h');
        const t=document.getElementById('t');
        const n=document.getElementById('n');
        const d=document.getElementById('d');
        h.style.backgroundColor='black';
        t.style.backgroundColor='grey';
        n.style.backgroundColor='black';
        d.style.backgroundColor='black';
            con1.style.display='none';
            con3.style.display='none';
            con4.style.display='none';
            con2.style.display='block';
            }
            function New(){
            const con1=document.querySelector(".con1");
            const con3=document.querySelector(".con3");
            const con4=document.querySelector(".con4");
            const con2=document.querySelector(".con2");
            const h=document.getElementById('h');
        const t=document.getElementById('t');
        const n=document.getElementById('n');
        const d=document.getElementById('d');
        h.style.backgroundColor='black';
        t.style.backgroundColor='black';
        n.style.backgroundColor='grey';
        d.style.backgroundColor='black';
            con1.style.display='none';
            con3.style.display='Block';
            con4.style.display='none';
            con2.style.display='none';
            }
            function discount(){
            const con1=document.querySelector(".con1");
            const con3=document.querySelector(".con3");
            const con4=document.querySelector(".con4");
            const con2=document.querySelector(".con2");
            const h=document.getElementById('h');
        const t=document.getElementById('t');
        const n=document.getElementById('n');
        const d=document.getElementById('d');
        h.style.backgroundColor='black';
        t.style.backgroundColor='black';
        n.style.backgroundColor='black';
        d.style.backgroundColor='grey';
            con1.style.display='none';
            con3.style.display='none';
            con4.style.display='block';
            con2.style.display='none';
            };

            const slides = document.querySelectorAll(".slides img");
            let slideIndex = 0;
            let intervalid=null;
            document.addEventListener("DOMContentLoaded",initializeSlider);

        function initializeSlider(){
            if(slides.length>0){
    slides[slideIndex].classList.add("displaySlide");
    intervalid =setInterval(nextSlide , 5000);
        }};
            
            function showSlide(index){
                if(index>=slides.length){
                    slideIndex=0
                }
                else if(index<0){
                    slideIndex=slides.length-1;
                }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

            };
            function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
            };
//



















            //forcartanimation
        
        
        document.querySelector(".fa-cart-shopping").addEventListener('click',()=>{
                document.getElementById('forNav').style.display="block"
                document.querySelector('.fa-cart-shopping').style.color='yellow'
        });
        document.querySelector("#close").addEventListener('click',()=>{
                document.getElementById('forNav').style.display="none"
                document.querySelector('.fa-cart-shopping').style.color='white'
        })
        
        
          //forcartanimation
        
                //forbaranimation
        /*        var bool=true;
                $('.fa-bars').click(()=>{
                    if(bool==true){
                        $('.fa-bars').css({
                            'color':'red'
                        })
                        bool=false;
                    }
                    else{
                        $('.fa-bars').css({
                            'color':'white'
                        })
                        bool=true;
                    }
                    $('#forNavbar').slideToggle()
                   
                })*/
                //forbaranimation
      
        
        //forImgslider
        
        
      /*  var imgslider=[
            {'img':'perfume-bottle-table-perfume-widely-used-ensure-pleasant-lasting-smell-is-mixture-substances-such-as-aromatic-essential-oils-alcohol-water-mls_695181-1768.avif',
             'dot':'<i class="fa-solid fa-chess-knight"></i>',
             'btnh2':'11$',
             'btncl2':'<button class="add2cart2" data-product-id="1" data-product-name="Rose Flower" data-product-price="10.00" data-product-image="perfume-bottle-table-perfume-widely-used-ensure-pleasant-lasting-smell-is-mixture-substances-such-as-aromatic-essential-oils-alcohol-water-mls_695181-1768.avif">ADD TO CART</button>'
            },
            {'img':'mockup-black-fragrance-perfume-bottle-mockup-dark-empty-background_795881-1148.jpg',
            'dot':'<i class="fa-solid fa-chess-knight"></i>',
            'btnh2':'12$',
            'btncl2':'<button class="add2cart2" data-product-id="2" data-product-name="SunFlower" data-product-price="12.00" data-product-image="mockup-black-fragrance-perfume-bottle-mockup-dark-empty-background_795881-1148.jpg">ADD TO CART</button>'
            },
            {'img':'best-fragrances-for-men.jpg',
            'dot':'<i class="fa-solid fa-chess-knight"></i>',
            'btnh2':'19$',
            'btncl2':'<button class="add2cart2" data-product-id="3" data-product-name="Non Flower" data-product-price="13.00" data-product-image="best-fragrances-for-men.jpg">ADD TO CART</button>'
            }
        ];
        
        var show="";
        for(var i in imgslider);
        for(var i=0;i<imgslider.length;i++){
            show+=`<img class="ForImgSlider" src='${imgslider[i]['img']}'>`;
        };document.getElementById('forslider').innerHTML=show;
        
        
        var showDot="";
        for(var k in imgslider);
        for(var k=0;k<imgslider.length;k++){
            showDot+=`${imgslider[k]['dot']}`
        };document.getElementById('longbutt').innerHTML=showDot;
        
        var showbtn2='';
        for(var q in imgslider);
        for(var q=0;q<imgslider.length;q++){
            showbtn2+=`<h3 class='onlyinh2'> PRICE : ${imgslider[q]['btnh2']}</h3>`
        };document.getElementById('forh2').innerHTML=showbtn2;
        
        var ShBtnCl1='';
        for(var v in imgslider);
        for(var v=0;v<imgslider.length;v++){
            ShBtnCl1+=`${imgslider[v]['btncl2']}`
        };document.getElementById('for2btn2').innerHTML=ShBtnCl1;
        
        
        
         $(document).ready(function(){
        var forimg=$('.ForImgSlider');
        var numImgslider=imgslider.length;
        forimg.hide();
        var index=0;
        forimg.eq(index).show();
                var fordot=$('.fa-chess-knight');
                var numdotslider=imgslider.length;
                var indexdot=0;
                fordot.eq(indexdot).css({'color':'burlywood'
                });
                       
                var forh2=$('.onlyinh2');
        var numh2=imgslider.length;
        var indexh2=0;
        forh2.hide();
        forh2.eq(indexh2).show();
        //
        var forBtnCl0_1=$('.purchase2');
        var numBtnCl0_1=imgslider.length;
        var indexCl0_1=0;
        forBtnCl0_1.hide();
        forBtnCl0_1.eq(indexCl0_1).show();
        //
        var forBtnCl0_2=$('.add2cart2');
        var numBtnCl0_2=imgslider.length;
        var indexCl0_2=0;
        forBtnCl0_2.hide();
        forBtnCl0_2.eq(indexCl0_2).show();
        //
        
        
           
           //
                  $('#nextbtn').click(()=>{
            forimg.eq(index).hide();
            index++;
            forimg.eq(index).show();
            if(index>numImgslider-1){
                index=0;
                forimg.eq(index).show();
            }
            fordot.eq(indexdot).css({
            'color':'white'
         });
         indexdot++;
         fordot.eq(indexdot).css({
            'color':'burlywood'
         });
         if(indexdot>numdotslider-1){
            indexdot=0;
            fordot.eq(indexdot).css({
            'color':'burlywood'
         });
        }
        forh2.eq(indexh2).hide();
        indexh2++;
        forh2.eq(indexh2).show();
        if(indexh2>numh2-1){
            indexh2=0;
            forh2.eq(indexh2).show();
        }
        //
        forBtnCl0_1.eq(indexCl0_1).hide();
        indexCl0_1++;
        forBtnCl0_1.eq(indexCl0_1).show();
        if(indexCl0_1>numBtnCl0_1-1){
            indexCl0_1=0;
            forBtnCl0_1.eq(indexCl0_1).show();
        }
        //
        forBtnCl0_2.eq(indexCl0_2).hide();
        indexCl0_2++;
        forBtnCl0_2.eq(indexCl0_2).show();
        if(indexCl0_2>numBtnCl0_2-1){
            indexCl0_2=0;
            forBtnCl0_2.eq(indexCl0_2).show();
        }
        
         });
          //
                         $("#prevbtn").click(()=>{
            forimg.eq(index).hide();
            index--;
            forimg.eq(index).show();
            if(index<0){
                index=numImgslider-1;
                forimg.eq(index).show();
            };
            fordot.eq(indexdot).css({
            'color':'white'
         });
         indexdot--;
         fordot.eq(indexdot).css({
            'color':'burlywood'
         });
         if(indexdot<0){
            indexdot=numdotslider-1;
            fordot.eq(indexdot).css({
            'color':'burlywood'
         });
         }
         //
         forh2.eq(indexh2).hide();
        indexh2--;
        forh2.eq(indexh2).show();
        if(indexh2<0){
            indexh2=numh2-1;
            forh2.eq(indexh2).show();
        }
        //
        forBtnCl0_1.eq(indexCl0_1).hide();
        indexCl0_1--;
        forBtnCl0_1.eq(indexCl0_1).show();
        if(indexCl0_1<0){
            indexCl0_1=numBtnCl0_1-1;
            forBtnCl0_1.eq(indexCl0_1).show();
        }
        //
        forBtnCl0_2.eq(indexCl0_2).hide();
        indexCl0_2--;
        forBtnCl0_2.eq(indexCl0_2).show();
        if(indexCl0_2<0){
            indexCl0_2=numBtnCl0_2-1;
            forBtnCl0_2.eq(indexCl0_2).show();
        }
        
         })
         })
        //forImgslider//*/
        //
        const addToCartButtons = document.querySelectorAll('.add2cart2');
        addToCartButtons.forEach(button =>{
          button.addEventListener('click',()=>{
                const productId=button.getAttribute('data-product-id');
                const productName=button.getAttribute('data-product-name');
                    const productPrice = parseFloat(button.getAttribute('data-product-price'));
                const productImage=button.getAttribute('data-product-image');
          
                addToCart(productId,productName,productPrice,productImage);
            })
        });
        
        
        function addToCart(id,name,price,image){
          
            var forAddToCart=document.getElementById('for-add-to-cart');
            var forAddToCarts = document.createElement('div');
            forAddToCarts.classList.add('for-add-to-cards');
            var img = document.createElement('img');
            img.src = image;
            img.alt = name;
          var text = document.createElement('div');
          text.classList.add('forText');
          text.innerHTML = `${name} PRICE: <span class="price">${price}</span>$`;
            var btnn=document.createElement('div');
        btnn.classList.add('forBtnNum');
            var numforbtn=document.createElement('div');
            numforbtn.classList.add('numforbtn');
            var prevNbtn=document.createElement('button');
            prevNbtn.classList.add('prevNbtn');
            prevNbtn.textContent=`<`;
            var numNbtn=document.createElement('div');
            numNbtn.classList.add('numNbtn');
            numNbtn.textContent=`1`;
            var nextNbtn=document.createElement('button');
            nextNbtn.classList.add('nextNbtn');
            nextNbtn.textContent=`>`;
            numforbtn.appendChild(prevNbtn);
            numforbtn.appendChild(numNbtn);
            numforbtn.appendChild(nextNbtn);
            btnn.appendChild(numforbtn);
        var x=document.createElement('h5');
        x.classList.add('forCancel');
        x.textContent=`Remove`;
            forAddToCarts.appendChild(img);
            forAddToCarts.appendChild(text);
            forAddToCarts.appendChild(btnn);
            forAddToCarts.appendChild(x);
        forAddToCart.append(forAddToCarts);
        nextNbtn.addEventListener('click', () => {
                let currentCount = parseInt(numNbtn.textContent);
                numNbtn.textContent = currentCount + 1;
                updateTotalPrice();
                updateTotalCost();
                updateShippingCost();
            });
            function updateNotification() {
                    var forAddToCart = document.getElementById('for-add-to-cart');
                    var forNotfication = document.querySelector('.forNotfication');
                    if (forAddToCart.children.length > 0) {
                        forNotfication.style.display = 'block';
                    } else {
                        forNotfication.style.display = 'none';
                    }
                }
                updateTotalPrice();
                updateTotalCost();
                updateShippingCost();
                updateNotification();
        
            
            prevNbtn.addEventListener('click', () => {
                let currentCount = parseInt(numNbtn.textContent);
                if (currentCount > 1) {  
                    numNbtn.textContent = currentCount - 1;
                
                }
                updateTotalPrice();
                updateTotalCost();
                updateShippingCost();
            });
        x.addEventListener('click', () => {
                forAddToCart.removeChild(forAddToCarts);
                updateNotification();
                updateTotalPrice();
                updateTotalCost();
                updateShippingCost();
           
        })
       
   
        
        }
        function updateTotalPrice() {
            const cartItems = document.querySelectorAll('.for-add-to-cards');
            let totalPrice = 0;
        
            cartItems.forEach(item => {
                const price = parseFloat(item.querySelector('.price').textContent); // Get item price
                const quantity = parseInt(item.querySelector('.numNbtn').textContent); // Get item quantity
                totalPrice += price * quantity; // Calculate total for this item
            });
        
            // Update total price display
            document.getElementById('total-prices').textContent = totalPrice.toFixed(2); // Display total price
        } 
        const shipCost = document.getElementById('shipCost');
        const stateSelect = document.getElementById('state');
        
        function updateShippingCost() {
            const selectedState = stateSelect.value;
        
            if (selectedState === "SR") {
                shipCost.textContent = 5;
            } 
            else if(selectedState === "nothing"){
                shipCost.textContent = ` ?`;
            }
            else {
                shipCost.textContent = 3;
            }
        }
        stateSelect.addEventListener('change', updateShippingCost);
        updateShippingCost();
// }

//TotalCost ()=>{

    const totalCost = document.getElementById('totalCost');

function updateTotalCost() {
    const totalprices = document.getElementById('total-prices');
    const tpVal = parseFloat(totalprices.textContent) || 0;
    const shVal = parseFloat(shipCost.textContent) || 0;
    const calculate = tpVal + shVal;

    totalCost.textContent = ` ${calculate}`; // Display the total cost
}
updateTotalCost(); 
document.getElementById('for-add-to-cart').addEventListener('change', updateTotalCost);
stateSelect.addEventListener('change', updateTotalCost);
        
     
          
        function sendToServer(id, name, price, image) {
            fetch('/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: id,
                    productName: name,
                    productPrice: price,
                    productImage: image,
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
        
        
        ;
        //
       /* const addToCartButtons1 = document.querySelectorAll('.add2cart1');
        addToCartButtons1.forEach(button =>{
          button.addEventListener('click',()=>{
                const productId=button.getAttribute('data-product-id');
                const productName=button.getAttribute('data-product-name');
                const productPrice=button.getAttribute('data-product-price');
                const productImage=button.getAttribute('data-product-image');
          
                addToCart(productId,productName,productPrice,productImage);
            })
        });
        
        
        function addToCart(id,name,price,image){
          
            var forAddToCart=document.getElementById('for-add-to-cart');
            var forAddToCarts = document.createElement('div');
            forAddToCarts.classList.add('for-add-to-cards');
            var img = document.createElement('img');
            img.src = image;
            img.alt = name;
          var text = document.createElement('div');
          text.classList.add('forText');
          text.innerHTML = `${name} PRICE: <span class="price">$${price}</span>`;
            var btnn=document.createElement('div');
        btnn.classList.add('forBtnNum');
            var numforbtn=document.createElement('div');
            numforbtn.classList.add('numforbtn');
            var prevNbtn=document.createElement('button');
            prevNbtn.classList.add('prevNbtn');
            prevNbtn.textContent=`<`;
            var numNbtn=document.createElement('div');
            numNbtn.classList.add('numNbtn');
            numNbtn.textContent=`1`;
            var nextNbtn=document.createElement('button');
            nextNbtn.classList.add('nextNbtn');
            nextNbtn.textContent=`>`;
            numforbtn.appendChild(prevNbtn);
            numforbtn.appendChild(numNbtn);
            numforbtn.appendChild(nextNbtn);
            btnn.appendChild(numforbtn);
        var x=document.createElement('h5');
        x.classList.add('forCancel');
        x.textContent=` Remove `;
            forAddToCarts.appendChild(img);
            forAddToCarts.appendChild(text);
            forAddToCarts.appendChild(btnn);
            forAddToCarts.appendChild(x);
        forAddToCart.append(forAddToCarts);
        nextNbtn.addEventListener('click', () => {
                let currentCount = parseInt(numNbtn.textContent);
                numNbtn.textContent = currentCount + 1;
            });
            function updateNotification() {
                    var forAddToCart = document.getElementById('for-add-to-cart');
                    var forNotfication = document.querySelector('.forNotfication');
                    if (forAddToCart.children.length > 0) {
                        forNotfication.style.display = 'block';
                    } else {
                        forNotfication.style.display = 'none';
                    }
                }
        
        
            updateNotification();
        
            
            prevNbtn.addEventListener('click', () => {
                let currentCount = parseInt(numNbtn.textContent);
                if (currentCount > 1) {  
                    numNbtn.textContent = currentCount - 1;
                }
            });
        x.addEventListener('click', () => {
                forAddToCart.removeChild(forAddToCarts);
                updateNotification();
           
        })
        
        
        
        }
        function sendToServer(id, name, price, image) {
            fetch('/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: id,
                    productName: name,
                    productPrice: price,
                    productImage: image,
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
                
        
        
        ;
        const addToCartButtons0 = document.querySelectorAll('.add2cart0');
        addToCartButtons0.forEach(button =>{
          button.addEventListener('click',()=>{
                const productId=button.getAttribute('data-product-id');
                const productName=button.getAttribute('data-product-name');
                const productPrice = parseFloat(button.getAttribute('data-product-price'));
                const productImage=button.getAttribute('data-product-image');
          
                addToCart(productId,productName,productPrice,productImage);
            })
        });
        
        
        function addToCart(id,name,price,image){
          
            var forAddToCart=document.getElementById('for-add-to-cart');
            var forAddToCarts = document.createElement('div');
            forAddToCarts.classList.add('for-add-to-cards');
            var img = document.createElement('img');
            img.src = image;
            img.alt = name;
          var text = document.createElement('div');
          text.classList.add('forText');
          text.innerHTML = `${name} PRICE: <span class="price">${price}</span>$`;
            var btnn=document.createElement('div');
        btnn.classList.add('forBtnNum');
            var numforbtn=document.createElement('div');
            numforbtn.classList.add('numforbtn');
            var prevNbtn=document.createElement('button');
            prevNbtn.classList.add('prevNbtn');
            prevNbtn.textContent=`<`;
            var numNbtn=document.createElement('div');
            numNbtn.classList.add('numNbtn');
            numNbtn.textContent=`1`;
            var nextNbtn=document.createElement('button');
            nextNbtn.classList.add('nextNbtn');
            nextNbtn.textContent=`>`;
            numforbtn.appendChild(prevNbtn);
            numforbtn.appendChild(numNbtn);
            numforbtn.appendChild(nextNbtn);
            btnn.appendChild(numforbtn);
        var x=document.createElement('h5');
        x.classList.add('forCancel');
        x.textContent=`Remove`;
            forAddToCarts.appendChild(img);
            forAddToCarts.appendChild(text);
            forAddToCarts.appendChild(btnn);
            forAddToCarts.appendChild(x);
        forAddToCart.append(forAddToCarts);
        nextNbtn.addEventListener('click', () => {
                let currentCount = parseInt(numNbtn.textContent);
                numNbtn.textContent = currentCount + 1;
                updateTotalPrice();
            });
            function updateNotification() {
                    var forAddToCart = document.getElementById('for-add-to-cart');
                    var forNotfication = document.querySelector('.forNotfication');
                    if (forAddToCart.children.length > 0) {
                        forNotfication.style.display = 'block';
                    } else {
                        forNotfication.style.display = 'none';
                    }
                }
        
        
            updateNotification();
            updateTotalPrice();
            
            prevNbtn.addEventListener('click', () => {
                let currentCount = parseInt(numNbtn.textContent);
                if (currentCount > 1) {  
                    numNbtn.textContent = currentCount - 1;
                }
                updateTotalPrice();
            });
        x.addEventListener('click', () => {
                forAddToCart.removeChild(forAddToCarts);
                updateNotification();
        
                updateTotalPrice();
           
        })

        
        }
        function updateTotalPrice() {
            const cartItems = document.querySelectorAll('.for-add-to-cards');
            let totalPrice = 0;
        
            cartItems.forEach(item => {
                const price = parseFloat(item.querySelector('.price').textContent); // Get item price
                const quantity = parseInt(item.querySelector('.numNbtn').textContent); // Get item quantity
                totalPrice += price * quantity; // Calculate total for this item
            });
        
            // Update total price display
            document.getElementById('total-prices').textContent = totalPrice.toFixed(2); // Display total price
        }
                
                
        function sendToServer(id, name, price, image) {
            fetch('/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: id,
                    productName: name,
                    productPrice: price,
                    productImage: image,
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
        
        ;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        //forImgslider3
        /*var imgslider3=[
            {'img':'images (1).jpg',
              'dot3':'<i class="fa-solid fa-chess-bishop"></i>',
              'btnh3':'8$',
              'btncl':'<button class="purchase3">PURCHASE</button><button class="add2cart3" data-product-id="4" data-product-name="sexy Flower" data-product-price="45.67" data-product-image="images (1).jpgg">ADD TO CART</button>'
            },
            {'img':'images (2).jpg',
             'dot3':'<i class="fa-solid fa-chess-bishop"></i>',
             'btnh3':'12$',
             'btncl':'<button class="purchase3">PURCHASE</button><button class="add2cart3" data-product-id="5" data-product-name="moonFlower" data-product-price="25.80" data-product-image="images (2).jpg">ADD TO CART</button>'
            },
        
            {'img':'images.jpg',
             'dot3':'<i class="fa-solid fa-chess-bishop"></i>',
             'btnh3':'10$',
             'btncl':'<button class="purchase3">PURCHASE</button><button class="add2cart3" data-product-id="6" data-product-name="goodFlower" data-product-price="19.78" data-product-image="images.jpg">ADD TO CART</button>'
            }
        ];
        var show="";
        for(var i in imgslider3);
        for(var i=0;i<imgslider3.length;i++){
        show+=`<img class="ForImgSlider3" src='${imgslider3[i]['img']}'>`
        };document.getElementById('forslider3').innerHTML=show;
        
        var showDot3="";
        for(var d in imgslider3);
        for(var d=0;d<imgslider3.length;d++){
        showDot3+=`${imgslider3[d]['dot3']}`
        };document.getElementById('longbutt3').innerHTML=showDot3;
        
        var showh3='';
        for(var h in imgslider3);
        for(var h=0;h<imgslider3.length;h++){
            showh3+=`<h3 class='onlyinh3'> PRICE : ${imgslider3[h]['btnh3']}</h3>`
        };document.getElementById('forh3').innerHTML=showh3;
        
        var ShBtnCl='';
        for(var c in imgslider3);
        for(var c=0;c<imgslider3.length;c++){
            ShBtnCl+=`${imgslider3[c]['btncl']}`
        };document.getElementById('for2btn3').innerHTML=ShBtnCl;
        
        $(document).ready(function(){
        var forimg3=$('.ForImgSlider3');
        var numImgSlider3=imgslider3.length;
        var index3=0;
        forimg3.hide();
        forimg3.eq(index3).show();
        //
        var fordot3=$('.fa-chess-bishop');
        var numdotslider3=imgslider3.length;
        var indexdot3=0;
        fordot3.eq(indexdot3).css({'color':'burlywood'});
        //
        var forh3=$('.onlyinh3');
        var numh3=imgslider3.length;
        var indexh3=0;
        forh3.hide();
        forh3.eq(indexh3).show();
        //
        var forBtnCl1=$('.purchase3');
        var numBtnCl1=imgslider3.length;
        var indexCl1=0;
        forBtnCl1.hide();
        forBtnCl1.eq(indexCl1).show();
        //
        var forBtnCl2=$('.add2cart3');
        var numBtnCl2=imgslider3.length;
        var indexCl2=0;
        forBtnCl2.hide();
        forBtnCl2.eq(indexCl2).show();
        //
        $('#nextbtn3').click(function(){
        forimg3.eq(index3).hide();
        index3++;
        forimg3.eq(index3).show();
        if(index3>numImgSlider3-1){
            index3=0;
            forimg3.eq(index3).show();
            };
        //
        fordot3.eq(indexdot3).css({
         'color':'white'
        });
        indexdot3++;
        fordot3.eq(indexdot3).css({
         'color':'burlywood'
        });
        if(indexdot3>numImgSlider3-1){
            indexdot3=0;
            fordot3.eq(indexdot3).css({
            'color':'burlywood'
        });
        }
        // 
        forh3.eq(indexh3).hide();
        indexh3++;
        forh3.eq(indexh3).show();
        if(indexh3>numh3-1){
            indexh3=0;
            forh3.eq(indexh3).show();
        }
        //
        forBtnCl1.eq(indexCl1).hide();
        indexCl1++;
        forBtnCl1.eq(indexCl1).show();
        if(indexCl1>numBtnCl1-1){
            indexCl1=0;
            forBtnCl1.eq(indexCl1).show();
        }
        //
        forBtnCl2.eq(indexCl2).hide();
        indexCl2++;
        forBtnCl2.eq(indexCl2).show();
        if(indexCl2>numBtnCl2-1){
            indexCl2=0;
            forBtnCl2.eq(indexCl2).show();
        }
        
        
        
        });
        //
        //
        $('#prevbtn3').click(function(){
        forimg3.eq(index3).hide();
        index3--;
        forimg3.eq(index3).show();
        if(index3<0){
          index3=numImgSlider3-1;
          forimg3.eq(index3).show();
          };
          //
        fordot3.eq(indexdot3).css({
          'color':'white'
          });
        indexdot3--;
        fordot3.eq(indexdot3).css({
          'color':'burlywood'
          });
        if(indexdot3<0){
          indexdot3=numdotslider3-1;
          fordot3.eq(indexdot3).css({
          'color':'burlywood'
        });
        };
        //
        forh3.eq(indexh3).hide();
        indexh3--;
        forh3.eq(indexh3).show();
        if(indexh3<0){
            indexh3=numh3-1;
            forh3.eq(indexh3).show();
        };
        //
        forBtnCl1.eq(indexCl1).hide();
        indexCl1--;
        forBtnCl1.eq(indexCl1).show();
        if(indexCl1<0){
            indexCl1=numBtnCl1-1;
            forBtnCl1.eq(indexCl1).show()
        };
        //
        forBtnCl2.eq(indexCl2).hide();
        indexCl2--;
        forBtnCl2.eq(indexCl2).show();
        if(indexCl2<0){
            indexCl2=numBtnCl2-1;
            forBtnCl2.eq(indexCl2).show()
        };
        
        //clickprev
            })
        //clickprev
        //rd
        })
        //rd
        */
        
        //forImgslider3
        /*  const clickButtons3=document.querySelectorAll('.add2cart3');
        clickButtons3.forEach(button =>{
            button.addEventListener('click',()=>{
                const productId3=button.getAttribute('data-product-id');
                const productName3=button.getAttribute('data-product-name');
                const productPrice3 = parseFloat(button.getAttribute('data-product-price'));
                const productImage3=button.getAttribute('data-product-image');
         addToCart3(productId3,productName3,productPrice3,productImage3);
            })
        });
        function addToCart3(id3,name3,price3,image3){
            var forAddToCart3=document.getElementById('for-add-to-cart');
            var forAddToCarts3 = document.createElement('div');
            forAddToCarts3.classList.add('for-add-to-cards3');
            var img3 = document.createElement('img');
            img3.src = image3;
            img3.alt = name3;
            var text3 = document.createElement('div');
            text3.classList.add('forText');
            text3.innerHTML = `${name3} PRICE: <span class="price3">${price3}</span>$`;
            var btnn3=document.createElement('div');
        btnn3.classList.add('forBtnNum3');
            var numforbtn3=document.createElement('div');
            numforbtn3.classList.add('numforbtn3');
            var prevNbtn3=document.createElement('button');
            prevNbtn3.classList.add('prevNbtn3');
            prevNbtn3.textContent=`<`;
            var numNbtn3=document.createElement('div');
            numNbtn3.classList.add('numNbtn3');
            numNbtn3.textContent=`1`;
            
            var nextNbtn3=document.createElement('button');
            nextNbtn3.classList.add('nextNbtn3');
            nextNbtn3.textContent=`>`;
            numforbtn3.appendChild(prevNbtn3);
            numforbtn3.appendChild(numNbtn3);
            numforbtn3.appendChild(nextNbtn3);
            btnn3.appendChild(numforbtn3);
        var x3=document.createElement('h5');
        x3.classList.add('forCancel3');
        x3.textContent=`Remove`;
            forAddToCarts3.appendChild(img3);
            forAddToCarts3.appendChild(text3);
            forAddToCarts3.appendChild(btnn3);
            forAddToCarts3.appendChild(x3);
            forAddToCart3.append(forAddToCarts3);
            nextNbtn3.addEventListener('click', () => {
                let currentCount = parseInt(numNbtn3.textContent);
                numNbtn3.textContent = currentCount + 1;
                updateTotalPrice();
            });
            function updateNotification() {
                    var  forAddToCart3 = document.getElementById('for-add-to-cart');
                    var forNotfication = document.querySelector('.forNotfication');
                    if (forAddToCart3.children.length > 0) {
                        forNotfication.style.display = 'block';
                    } else {
                        forNotfication.style.display = 'none';
                    }
                }
        
                updateTotalPrice();
            updateNotification();
            prevNbtn3.addEventListener('click', () => {
                let currentCount = parseInt(numNbtn3.textContent);
                if (currentCount > 1) {  
                    numNbtn3.textContent = currentCount - 1;
                }
                updateTotalPrice();
            });
            x3.addEventListener('click', () => {
                forAddToCart3.removeChild(forAddToCarts3);
                updateNotification();
                updateTotalPrice();
        })     
        
        function updateTotalPrice() {
            const cartItems = document.querySelectorAll('.for-add-to-cards3');
            let totalPrice = 0;
        
            cartItems.forEach(item => {
                const price = parseFloat(item.querySelector('.price3').textContent); // Get item price
                const quantity = parseInt(item.querySelector('.numNbtn3').textContent); // Get item quantity
                totalPrice += price * quantity; // Calculate total for this item
            });
        
            // Update total price display
            document.getElementById('total-prices').textContent = totalPrice.toFixed(2); // Display total price
        }    
        
        }
        function sendToServer(id3,name3,price3,image3){
                
            fetch('/add-to-cart',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId3: id3,
                    productName3: name3,
                    productPrice3: price3,
                    productImage3: image3,
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
        */
        
        
//ShipCost ()=>{
       



    // }