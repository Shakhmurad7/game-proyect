let block= document.querySelector('.block')
    setInterval( function(){
        let date = new Date()
        let minut = date.getMinutes()
        let secunt = date.getSeconds()
        if(secunt < 10){
            secunt = `0` + secunt
        }
        let saat = date.getHours()
        let hamsi = `${saat}:`+`${minut}:`+ `${secunt}`
         block.textContent = hamsi
    }
       
);


