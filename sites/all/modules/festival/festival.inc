<?php 

function festival_sendemailinvitation() {

  $count_user = db_query("SELECT COUNT(*) FROM {field_data_field_list} WHERE field_list_value = 1")->fetchField();
  
  $count_paased = db_query("SELECT COUNT(*) FROM {field_data_field_list} WHERE field_list_value = '1_1'")->fetchField();
  
 
  
  $user_db = db_query("
    SELECT entity_id FROM {field_data_field_list}
    WHERE field_list_value = :list 
    LIMIT 0 , 30
  ", array(':list' => 1))->fetchAll();

  foreach ($user_db as $userid) {
    $userids[] = $userid->entity_id;
  }

  $users = user_load_multiple($userids);
  $form['#users'] = $users;

  $items = 0;
  $list = array();
  foreach ($users as $key => $user) {                 
    $list[$key] =   array($user->uid, $user->mail);   
    
    _send_email_statuspage($user->mail, _textemail_inv());
    db_query("UPDATE {field_data_field_list} SET field_list_value = :status WHERE entity_id = :id", array(':status' => '1_1', ':id' => $user->uid));
                      
  }
  

}

function _textemail_inv(){
 
  return '<div style="margin:0;padding:0;min-width:100%!important">
<img src="http://dev.worldfilmpresentation.com/sites/default/files/empty.gif" alt="" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important" class="CToWUd" height="1" width="1" border="0">
<table style="border:none;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF"><tbody><tr><td>
<table class="" style="width:100%;max-width:640px; border:none;margin: auto;" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
  <tbody><tr>
    <td class="" style="padding:0px;height:230px;max-width:640px;background-size:640px !important;background:#ffffff url(\'http://dev.worldfilmpresentation.com/sites/default/files/slide-image-31.jpg\') no-repeat center top;vertical-align:middle;height:230px;max-width:640px" bgcolor="#ffffff">
      <table class="" style="margin:0px auto;height:125px; border:none;"><tbody><tr>
        <td class="" style="border-radius:5px" align="center" height="120px">
          <center>
          <a href="http://worldfilmpresentation.com" title="Film Festivals Distribution " target="_blank">
          <img alt="Submit via World Film Presentation" src="http://dev.worldfilmpresentation.com/sites/default/files/logotext1.png" title="World Film Presentation" style="margin:0px auto" alt=""  border="0" width="420"></a>
          </center>
        </td>
      </tr></tbody></table>
    </td>
  </tr>
  <tr>
    <td style="padding:30px 30px 0px 30px">
      <table width="100%" style="border:none;" cellspacing="0" cellpadding="0" border="0">
        <tbody><tr>
          <td class="" style="color:#153643;text-align:center;padding:15px 0 15px 0;font-size:1.5em;line-height:28px">
          <a href="http://worldfilmpresentation.com" style="color:#327ccb;text-decoration:none" target="_blank">World Film Presentation</a> has invited you to submit your work to Festivals of the world!
          </td>
        </tr>
        <tr>
          <td style="padding:20px 0 40px 0;text-align:center;border-bottom:1px solid gainsboro">
            <table class="" style="background-color:transparent!important; border:none; margin:0px auto" cellspacing="0" cellpadding="0" border="0"><tbody><tr>
              <td><a href="http://worldfilmpresentation.com" style="background-color:#0faf97;color:#ffffff;display:inline-block;font-family:\'Helvetica Neue\',Helvetica,Arial,sans-serif;font-size:15px;font-weight:bold;line-height:40px;text-align:center;text-decoration:none;width:140px" target="_blank">Accept Invite</a>
            </td></tr></tbody></table>
          </td>
        </tr>
        </tbody></table>
    </td>
  </tr>
  <tr>
    <td style="padding:30px 30px 30px 30px">
      <table class="" style="width:100%; border:none;" cellspacing="0" cellpadding="0" border="0" align="left"><tbody><tr>
        <td>
          <table width="100%" cellspacing="0" style="border:none;" cellpadding="0" border="0"><tbody><tr>
            <td class="" style="color:#153643;text-align:center;font-size:16px;line-height:22px">
              <p style="text-align:left;color:#666666;font-size:16px;line-height:24px">Greetings! :)</p>      
              <p style="text-align:left;color:#666666;font-size:16px;line-height:24px">Your film could be screened world wide on the festivals submitted through World Film Presentation.</p>
              <p style="text-align:left;color:#666666;font-size:16px;line-height:24px">A lot festivals have a fee waiver. </p>
              <p style="text-align:left;color:#666666;font-size:16px;line-height:24px">We can’t wait to see what you’ve been working on, and we hope to see you on World Film Presentation!</p>
              <p style="text-align:left;color:#666666;font-size:16px;line-height:24px">Cheers, 
              <br>World Film Presentation Team</p>
            </td>
          </tr></tbody></table>
        </td>
      </tr></tbody></table>
    </td>
  </tr>
  <tr><td class="" style="padding:30px 30px 30px 30px" bgcolor="#F6F6F6">
    <table width="100%" cellspacing="0" style="border:none;" cellpadding="0" border="0">
      <tbody><tr><td><table width="100%" style="border:none;" cellspacing="0" cellpadding="0"><tbody><tr>
        <td width="400" valign="top" align="left">
          <p class="" style="font-family:sans-serif;font-size:11px;color:#a5a5a5;margin-top:0px;margin-bottom:0px">This invitation was sent by <a href="http://worldfilmpresentation.com" style="color:#a5a5a5;text-decoration:underline" target="_blank" >WorldFilmPresentation</a>. <br /><a href="http://worldfilmpresentation.com" style="color:#a5a5a5;text-decoration:underline" target="_blank">unsubscribe</a><br><br>© World Film Presentation | 45 Rockefeller Plaza, New York</p>
        </td>
        <td width="235" valign="center" align="right"><a href="http://worldfilmpresentation.com" title="Go to WorldFilmPresentation.com" target="_blank" ><img alt="Submit via World Film Presentation" src="http://dev.worldfilmpresentation.com/sites/default/files/logo_wfp.png" title="Submit via World Film Presentation" class="" width="205" border="0"></a></td>
      </tr></tbody></table>
    </td></tr></tbody></table>
  </td></tr>
</tbody></table>
</td></tr></tbody></table>
</div>';

}



