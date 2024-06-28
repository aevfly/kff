<?php 
include('simple_html_dom.php');

$pathcover = '03t_fin_fest_01over.php'; 
$pathdead = '03t_fin_fest_01dead.php';
$url ="https://www.withoutabox.com/03film/03t_fin/".$pathcover."?festival_id=12322";      // 8232

$p_url = '/festival_id=(.*?)$/';
preg_match($p_url, $url, $res_url);
print_r($res_url[1]);

$html = file_get_html($url);      //&category_id=930810
 
$filename = 'test.txt';
$handle = fopen($filename, 'w+');
    //echo $html->find('div[id=page-content]',0);
    
    
    //echo $html->find('table.full-width', 0);
        //$fw = $html->find('table.full-width', 0);
        echo '---------------------<br />';
    //foreach($html->find('div[id=page-content] td.formA form select.form-control', 0) as $fw) {
     
    //} 
    //echo $html->find('div[id=page-content] td.formA form select.form-control', 0)->innertext;      
    $line = $html->find('div[id=page-content] td.formA form select.form-control', 0)->innertext;
    $line_clear = trim($line, " \t.");
        print ($line_clear); 
        echo '<br />---------------------<br />';
        
        
    $pattern = '/value="(.*?)<\//';
    preg_match_all($pattern,  $line_clear, $mopts);
    //print_r($mopts[1]);
    foreach($mopts[1] as $mopt){
      $arr_opts[] = explode('">', $mopt);
    }
    print_r($arr_opts);
    
 /*
  $pattern = '/\d+/';
  preg_match_all($pattern,  $line_clear, $m);
  print_r($m[0]);
  // 1378650">Feature Length</option>
  $pattern_name = '/">(.*?)<\//';
  preg_match_all($pattern_name,  $line_clear, $m_name);
  print_r($m_name[1]);
   */

    


/*

$url2 ="https://www.withoutabox.com/03film/03t_fin/".$pathdead."?festival_id=12322";
    foreach($m[0] as $itemcat){
      $url2 = $url2.'&category_id='.$itemcat;
      $html2 = file_get_html($url2);
      echo $url2;
      echo '<br />---------------------<br />';
      // $html2->find('div[id=page-content] table.fest-table', 0);
      foreach( $html2->find('div[id=page-content] table.fest-table table tr.formA') as $ratestitle){
        $res .= $ratestitle;
      }
    }
    $res_clear = trim($res, " \t.");
    $pattern = '/("header">.*?[0-9]<\/td>)/';
    $p_dline = '/"header">(.*?)<br>/';
    $p_fee = '/Fee(.*?)$/';
    $p_date = '/<b>(.*?)<\/b>/';
    
    preg_match_all($pattern, $res_clear, $m);
    foreach($m[0] as $dline){
      preg_match_all($p_dline, $dline, $arr_dline);
      print_r($arr_dline[1][0]);
      echo '<br />---------------------<br />';
      preg_match_all($p_fee, $dline, $arr_fee);      
      print_r($arr_fee[1][0]);
      echo '<br />---------------------<br />';
      preg_match_all($p_date, $dline, $arr_date);      
      print_r($arr_date[1][0]);
      echo '<br />---------------------<br />';
    }
 */   
     //echo $m[0][0];
    //print_r($m[0]);
      
    //$line_clear = trim($line, " \t.");
  
        /*
    foreach($html->find('div[id=page-content] td.formA form select.form-control option', 0) as $fw) {  
      //$line[] = explode("option", $fw->innertext);
      $line = explode("option", $fw->innertext);
      //echo count($line[1]); 
      if(count($line[1])>=1){
        //print_r($line);
        foreach($line as $value){
          //print $value."<br />"; 
        }
      }
      
      //print $line; 
      echo '---------------------<br />';
      
      //echo $line->plaintext;
    } */
        

    

   //var_dump($line2);
    echo '---------------------<br />';
    
    
//echo $fw;    
$str = <<<HTML
$fw
HTML;
$html3 = str_get_html($str);

//echo $html3->find('div.address-block a.mailto', 0)->innertext;


/*     $html2 = '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" dir="ltr">
<head>
<title>PHPRO.ORG</title>
</head>
<body>
<h2>Forecast for Saturday</h2>
'.$fw.'

</body>
</html>
';  
    $dom = new domDocument;

    $dom->loadHTML($html);

    $dom->preserveWhiteSpace = false;

    $tables = $dom->getElementsByTagName('table');

    //$rows = $tables->item(0)->getElementsByTagName('tr');
    
    print "<br />";
    print_r($tables);
*/
    /*** the table by its tag name ***/
    //$tables = $dom->getElementsByTagName('table');



?>