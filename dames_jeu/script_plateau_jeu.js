var can = document.getElementById("dames");
var ctx = can.getContext("2d");


//dessine les contours
function drawBorder(xPos, yPos, width, height, thickness = 1){
    ctx.fillStyle='#000';
    ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
}




//quadrillage
function quadrillage(){
    ctx.fillStyle="#fff1e2"; //beige
    x1=0; y1=0; x2=60; y2=60;
    // Lignes impaires
    for(x=1;x<=5;x++){
        x1=0; // On revient à 0 sur x à chaque fois
        for(y=1;y<=5;y++){
            drawBorder(x1,y1,x2,y2);
            ctx.fillStyle="#fff1e2";//beige impaires
            ctx.fillRect(x1,y1,x2,y2);

            x1=x1+120; // Décalage de 2 cases sur x à chaque fois
        }
        y1=y1+120; // Décalage de 2 cases sur y à chaque fin de ligne
    }   
    // Lignes paires
    x1=60; y1=60; // Décalage d'un carreau sur x et y
    for(x=1;x<=5;x++){
        x1=60; // décalage d'un carreau à chaque fois
        for(y=1;y<=5;y++){
            drawBorder(x1,y1,x2,y2);
            ctx.fillStyle="#fff1e2"; //beige paires
            ctx.fillRect(x1,y1,x2,y2);
            x1=x1+120; 
        }
        y1=y1+120;
    }   
}






//affiche les pions
function affPions(){
    
    // Création des images
    pion_n=new Image();
    pion_n.src="pion_noir.png";

    pion_b=new Image();
    pion_b.src="pion_blanc.png";
    
    
    //une ligne fait 60
    //coordonnées de base (case 0,1)
    x1=60; y1=0; 
    
    //taille image
    x2=50; y2=50;
    
    ctx.drawImage(pion_n,60,0,50,50);
    
    
    // Pions blancs ligne impaire 
    /* ma ligne à moi test
    for(x=1;x<=2;x++){ //pour x=1 et x=2
        x1=60;
        for(y=1;y<=5;y++){
            ctx.drawImage(pion_b,x1,y1,x2,y2);// (image,x1,y1,largeur,hauteur)
            x1=x1+120; // Décalage de 2 cases sur x à chaque fois
        }
        y1=y1+120;
    }*/

    /*
    // Pions blancs ligne impaire
    x1=63; y1=3; x2=53; y2=53;
    for(x=1;x<=2;x++){
        x1=63;
        for(y=1;y<=5;y++){
            ctx.drawImage(pion_b,x1,y1,x2,y2);// (image,x1,y1,largeur,hauteur)
            x1=x1+120; // Décalage de 2 cases sur x à chaque fois
        }
        y1=y1+120;
    }
    // Pions blancs ligne paire
    x1=63; y1=63;
    for(x=1;x<=2;x++){
        x1=3; // décalage d'un carreau à chaque fois
        for(y=1;y<=5;y++){
            ctx.drawImage(pion_b,x1,y1,x2,y2);
            x1=x1+120; 
        }
        y1=y1+120;
    }   

    // Pions noirs ligne impaire
    x1=63; y1=363; x2=53; y2=53;
    for(x=1;x<=2;x++){
        x1=63;
        for(y=1;y<=5;y++){
            ctx.drawImage(pion_n,x1,y1,x2,y2);
            x1=x1+120; // Décalage de 2 cases sur x à chaque fois
        }
        y1=y1+120;
    }
    // Pions noirs ligne paire
    x1=3; y1=423;
    for(x=1;x<=2;x++){
        x1=3; 
        for(y=1;y<=5;y++){
            ctx.drawImage(pion_n,x1,y1,x2,y2);
            x1=x1+120; 
        }
        y1=y1+120;
    }  */ 
    
    
} //fin affPions