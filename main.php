<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practice </title>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
    
    <div class="flex-container">

        <div class="header">     
               <?php include 'logo.inc.php' ?>         
               <?php include 'menu.inc.php' ?>	   
        </div>       
     
        <div class="about_me">
         
        <div class="Hello"> <h1>  <?php  echo $p  ?> </h1></div>

            <div class="data">
                <div class="myImg">
                    <?php include 'logotip.inc.php' ?>                    
                </div>

                <div class="fullname">
                    <h1 class="myname"> Меня зовут 
                    <?php echo $name, ' ', $surname . '<br>'; 
                          echo 'город', ' ', $city; ?>                                      
                    </h1> 
           
                    <p> Мне
                    <?php  echo $age;   ?>          
                    года </p>
                    <p> В этом модуле мы научились: </p>
                    <?php include 'aboutme.inc.php' ?>
                </div>
            </div>

            <div class="knowledge">
                                   
                    <?php  include 'knowledge.inc.php'; ?>
                    <?php   echo $a, ' ', $b, ' ', $c; ?> <br>
                                       
                    <?php
                        $a = 10;
                        $b = 20;
                        $c = $a + $b;
                        echo $c;
                    ?>   <br>                
                     <?php
                        echo $d;
                    ?> 

            </div>

            <div class="article">
                <p class="text">
                WhatsApp +7906835671<br>
                e-mail: sergius-p@mail.ru <br>
                <a href="https://www.facebook.com/Sergei.Prohorov">www.facebook.com/Sergei.Prohorov</a>

                </p>
            </div>
        </div>
            <?php include 'footer.inc.php' ?>
            </div>
    </div>


</body>
</html>
