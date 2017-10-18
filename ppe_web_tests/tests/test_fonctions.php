<?php

    function dateShowYear($date){
        $tab_date=explode('-',$date);
        $year=intval($tab_date[0]);
        return $year;
    }
    
    echo dateShowYear('2015-03-31') ;
    
    
    
    echo '<br>';
    
    function nettoyer($string){
        if( (strlen($string))<30){
            $string=addslashes($string);
            $string=ltrim($string);
            return $string;
        }
        else{
            throw new Exception('Chaîne trop longue. Limitée à 30 caractères.');
        }  
    }
    
    $nettoyee=nettoyer(" Coucou test' coucou ' ... ");
    echo $nettoyee;

    