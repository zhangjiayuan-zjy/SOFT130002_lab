<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)
//1.2
//echo "This page was generated: " . date("M dS, Y");

//1.4
//echo "This page was generated: " . date("M dS, Y") . "<hr/>";

//1.5
//echo "This page was generated: " . date("M dS, Y") "<hr/>";

//1.7
//$d = date("M dS, Y");
// echo "This page was generated: " . $d . "<hr/>";

//1.8
// $date = date("M dS, Y");
// echo "This page was generated: " . $date . "<hr/>";

//1.9
//$date = date("l, F jS, Y H:i:s");
//echo $date ;

//1.10
//$remaining = 365 -date("z");
//echo "There are ". $remaining . " days left in the year";

//1.11
if (date("L")){
    $remaining = 366 -date("z");
    echo "There are ". $remaining . " days left in the year";
}
else{
    $remaining = 365 -date("z");
    echo "There are ". $remaining . " days left in the year";
}
echo "<br>"; //notice we must echo tags in php.

?>
</body>
</html>