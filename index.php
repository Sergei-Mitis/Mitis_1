<?php
$example_persons_array = [
    [
        'fullname' => 'Иванов Иван Иванович',
        'job' => 'tester',
    ],
    [
        'fullname' => 'Степанова Наталья Степановна',
        'job' => 'frontend-developer',
    ],
    [
        'fullname' => 'Пащенко Владимир Александрович',
        'job' => 'analyst',
    ],
    [
        'fullname' => 'Громов Александр Иванович',
        'job' => 'fullstack-developer',
    ],
    [
        'fullname' => 'Славин Семён Сергеевич',
        'job' => 'analyst',
    ],
    [
        'fullname' => 'Цой Владимир Антонович',
        'job' => 'frontend-developer',
    ],
    [
        'fullname' => 'Быстрая Юлия Сергеевна',
        'job' => 'PR-manager',
    ],
    [
        'fullname' => 'Шматко Антонина Сергеевна',
        'job' => 'HR-manager',
    ],
    [
        'fullname' => 'аль-Хорезми Мухаммад ибн-Муса',
        'job' => 'analyst',
    ],
    [
        'fullname' => 'Бардо Жаклин Фёдоровна',
        'job' => 'android-developer',
    ],
    [
        'fullname' => 'Шварцнегер Арнольд Густавович',
        'job' => 'babysitter',
    ],
];

$x = rand(1, 10);
$fullname = $example_persons_array[$x]['fullname'];

// 1.Аргумент три строки.

function Araay($fullname) {
    $a = explode(" ", $fullname);
    return $a;
}

$fio = Araay($fullname);
list($name, $surname, $patronomyc) = $fio;

function getFullnameFromParts($a, $b, $c) {
    return $a . ' ' . $b . ' ' . $c;
}

echo getFullnameFromParts($name, $surname, $patronomyc);
echo ('</br>');

// 2.Аргумент одна строка.

function getPartsFromFullname($fullname) {
    return array_combine(['surname', 'name', 'patronymic'], explode(' ', $fullname));
}

var_dump(getPartsFromFullname($fullname));
echo ('</br>');

// 3.Сокращение ФИО

function getShortName($fullname)
{   
    $name = getPartsFromFullname($fullname)['name'];
    $name[2] = '.';
    $ShortName = getPartsFromFullname($fullname)['surname']. " " . mb_substr($name, 0, 2);
    return $ShortName;
}

echo getShortName($fullname);
echo ('</br>');

// 4.Функция определения пола по ФИО

function getGenderFromName($fullname)
{   
    $Fullname = getPartsFromFullname($fullname);
    $Male = 0;
    $Female = 0;
    
    if ((mb_substr(getPartsFromFullname($fullname)['name'], -1, 1) == 'й') || (mb_substr(getPartsFromFullname($fullname)['name'], -1, 1) == 'н')
    || (mb_substr(getPartsFromFullname($fullname)['surname'], -1, 1) == 'в') || (mb_substr(getPartsFromFullname($fullname)['patronymic'], -2, 2) == 'ич')) $Male = 1;
    if ((mb_substr(getPartsFromFullname($fullname)['surname'], -2, 2) == 'ва') || (mb_substr(getPartsFromFullname($fullname)['patronymic'], -3, 3) == 'вна') 
    || (mb_substr(getPartsFromFullname($fullname)['name'], -1, 1) == 'а')) $Female = 1;
    $Cosmo = ($Male <=> $Female);
    if ($Cosmo > 0) {
        return "мужской пол";
    } elseif ($Cosmo < 0) {
        return "женский пол";
    } else {
        return "неопределенный пол";
    }
}

echo getGenderFromName($fullname);
echo ('</br>');

// 5.Определение возрастно-полового состава

function getGenderDescription($Gender)
{
    $count = count($Gender);
    $mans = 0;
    $womans = 0;
    

    foreach ($Gender as $key => $value) {
        if (getGenderFromName($value["fullname"]) == "мужской пол") {
            $mans = $mans + 1;
        } elseif (getGenderFromName($value["fullname"]) == "женский пол") {
            $womans = $womans + 1;
        }
    }
    $mans = round($mans/$count*100,1);
    $womans = round($womans/$count*100,1);
    $unknown = 100-$mans-$womans;
    echo "Гендерный состав аудитории: </br>";
    echo "--------------------------- </br>";
    echo "Мужской пол = $mans"."% </br>";
    echo "Женский пол = $womans"."% </br>";
    echo "Не удалось определить = $unknown"."% </br>";
}

echo getGenderDescription($example_persons_array);
echo ('</br>');

// 6.Идеальный подбор пары

function getPerfectPartner($surname, $name, $patronymic, $x)
{
    $surname1 = mb_convert_case($surname, MB_CASE_TITLE);
    $name2 = mb_convert_case($name2, MB_CASE_TITLE);
    $patronymic3 = mb_convert_case($patronymic, MB_CASE_TITLE);
	$allname = getFullnameFromParts($surname1, $name2, $patronymic3);
	$gender = getGenderFromName($allname);
	$a = 0;
	

    while ($a < 10) {
        $a++;
        
        if($getFullnameFromParts + $gender == 0)
        {
            $procent = $user;
            break;
        }
    }
    $procent = round(rand(5000,10000)/100,2);
}
   echo "♡ Идеально на $procent % ♡";


