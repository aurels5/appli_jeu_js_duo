<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Jeu Dames</title>
        <style>    
            canvas{
                padding:0;
                margin: auto;
                display: block;
                position:absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                border: solid 1px black;
                height: 600px;
                width: 600px;
            }
        </style>
        <meta http-equiv="Cache-Control" content="no-cache, must-revalidate" /> 
    </head>
    <body>
        <canvas id="dames" width="600" height="600">Votre navigateur n'est pas suffisamment récent pour lire canvas.</canvas>
        
        <script src="jquery.js"></script>
        
        <script src="script_plateau_jeu.js"></script>
        
        <script type="text/javascript">
            // Création du fond du canvas (marron #664421)
            ctx.fillStyle="#664421";
            ctx.fillRect(0,0,600,600); // carré plein (x1,y1,largeur,hauteur)
            // strokeRect = contour

            // Création du quadrillage (crème) par dessus le fond marron
            quadrillage();

            // Affichage des images
            affPions();
        </script>
    </body>
</html>