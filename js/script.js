$(document).ready(function (){
    let btnPresmetajRastojanie=document.querySelector("#btnPresmetajRastojanie")
    let btnNoviVrednosti = document.querySelector("#btnNoviVrednosti")
    
    let tocka1 = document.querySelectorAll("#tocka1 input[type='number']")
    let tocka2 = document.querySelectorAll("#tocka2 input[type=number]")
    
    let tockaKoordinati = document.querySelectorAll(".tockaKoordinati");
    
    //console.log(tockaKoordinati)
    
    for(let i=0;i<tockaKoordinati.length;++i){
        tockaKoordinati[i].style.display = "none"
    }
    
    /* console.log(btnPresmetajRastojanie)
    console.log(tocka1)
    console.log(tocka2); */
    
    btnPresmetajRastojanie.addEventListener("click", (e)=>{
        e.preventDefault()

        disabledTocki()
    
        let x1 = document.getElementById("x1").innerHTML = tocka1[0].value
        let y1 = document.getElementById("y1").innerHTML = tocka1[1].value
        let x2 = document.getElementById("x2").innerHTML = tocka2[0].value
        let y2 = document.getElementById("y2").innerHTML = tocka2[1].value
        
        if (x1 == null || x1 == "", y1 == null || y2 == "", x2 == null || x2 == "", y2== null || y2 == "") {
            $("#alert_dialog").dialog('open')
            unDisableTicki()
            return false;
        }
    
        for(let i=0;i<tockaKoordinati.length;i++){
            
            tockaKoordinati[i].style.display = "inline-block"
            
        }
        
        /* const resetiraj = document.createElement("button")
        resetiraj.innerHTML = "Izbrisi gi vrednostite"
        resetiraj.style.backgroundColor = 'crimson';
        resetiraj.style.color = '#fff'
        document.getElementById("tocka-container").appendChild(resetiraj); */
        
        document.getElementById("rastojanie").innerHTML = rastojanie()
    
    })
    
    $("#alert_dialog").dialog({
        autoOpen: false,
        modal:true,
    })

    function disabledTocki(){
        tocka1[0].disabled = true
        tocka1[1].disabled = true
        tocka2[0].disabled = true
        tocka2[1].disabled = true
    }
    function unDisableTicki(){
        tocka1[0].disabled = false
        tocka1[1].disabled = false
        tocka2[0].disabled = false
        tocka2[1].disabled = false
    }
    
    btnNoviVrednosti.addEventListener("click",(e)=>{
        e.preventDefault()
    
        for(let i=0;i<tockaKoordinati.length;++i){
            tockaKoordinati[i].style.display = "none"
        }
    
        
        tocka1[0].value = ''
        tocka1[1].value = ''
        tocka2[0].value = ''
        tocka2[1].value = ''
        unDisableTicki()
    })
    
    let rastojanie = () => {
        //Zemanje na vrednosti na input polinja za soodevetni tocki, odnosno vrednosti za x i y za tocka 1 i isto toa za tocka 2
    
        
    
        let tocka1_X  = tocka1[0] 
        let tocka1_Y  =  tocka1[1]
    
        let tocka2_X  = tocka2[0] 
        let tocka2_Y  =  tocka2[1]
        
        let tocka1Kord = `(${tocka1_X.value}, ${tocka1_Y.value})`
        console.log(tocka1Kord) 
        
        let tocka2Kord = `(${tocka2_X.value}, ${tocka2_Y.value})`
        console.log(tocka2Kord)
        
        let razlikaX2X1 = (tocka2_X.value - tocka1_X.value)
        let razlikaY2Y1 = (tocka2_Y.value - tocka1_Y.value)
        
        let r = Math.sqrt((Math.pow(razlikaX2X1,2)) + (Math.pow(razlikaY2Y1,2))) 
    
        return r.toFixed(3)
        
    }
})
