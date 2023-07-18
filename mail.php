<?php
    $system_site_config = \Drupal::config('system.site');
    $site_email = $system_site_config->get('mail');
    //$to = "pmo@dotsquares.com, verona@dotsquares.com, omkar@dotsquares.com, bankim@dotsquares.com, bahul@dotsquares.com, office@dotsquares.com";

    $to = "sunilkumar.sain@dotsquares.com, mohit.bansal@dotsquares.com";
    $subject = 'DotSquares Enquiry';
    $message = '<table style="width:640px; border:6px solid #f58220; margin:0 auto; ">
    <tbody>
        <tr>
            <td style="text-align:center; padding:25px 0 20px 0; "><img src="https://drupal.dotsquares.com/wp-content/uploads/2021/07/dotsquares-logo.jpg" /></td>
        </tr>
        <tr>
            <td style="text-align:center; padding:10px 0 10px 0; background:#fde6d2; color:#2d2d2d; font-size:18px; font-family:Arial, Helvetica, sans-serif; text-transform:uppercase; ">Drupal Dotsquares - Enquiry</td>
        </tr>
        <tr>
            <td>
            <table align="left" cellpadding="5" cellspacing="5" style="margin:0 5%;" width="90%">
                <tbody>
                    <tr>
                        <td colspan="2" style="text-align:left; padding:25px 0px 25px 0px; color:#2d2d2d; font-size:13px; font-weight:bold; font-family:Arial, Helvetica, sans-serif;" valign="top">
                        <p>Hello Support,</p>

                        <p><br />
                        [your-name] has submitted enquiry, please see below all the details :</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px;  font-family:Arial, Helvetica, sans-serif;" valign="top" width="278"><strong>Website Url</strong></td>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px;  font-family:Arial, Helvetica, sans-serif;" valign="top" width="245">: [_site_url]</td>
                    </tr>
                    <tr>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px;  font-family:Arial, Helvetica, sans-serif;" valign="top"><strong>Client Name</strong></td>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px; font-family:Arial, Helvetica, sans-serif;" valign="top">: [your-name]</td>
                    </tr>
                    <tr>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px;  font-family:Arial, Helvetica, sans-serif;" valign="top"><strong>Client Email</strong></td>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px;  font-family:Arial, Helvetica, sans-serif;" valign="top">: [email-address]</td>
                    </tr>
<tr>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px;  font-family:Arial, Helvetica, sans-serif;" valign="top"><strong>Client Phone</strong></td>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px;  font-family:Arial, Helvetica, sans-serif;" valign="top">: [phone]</td>
                    </tr>
                    <tr>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px; font-family:Arial, Helvetica, sans-serif;"><strong>Message</strong></td>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px; font-family:Arial, Helvetica, sans-serif;">: [your-message]</td>
                    </tr>
                    <tr>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px; font-family:Arial, Helvetica, sans-serif;"><strong>Date On</strong></td>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px; font-family:Arial, Helvetica, sans-serif;">: [_date] [_time]</td>
                    </tr>
<tr>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px; font-family:Arial, Helvetica, sans-serif;"><strong>Source URL</strong></td>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px; font-family:Arial, Helvetica, sans-serif;">: [page-url]</td>
                    </tr>
<tr>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px; font-family:Arial, Helvetica, sans-serif;"><strong>User IP Address</strong></td>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px; font-family:Arial, Helvetica, sans-serif;">: [ip-address]</td>
                    </tr>                    
                    <tr>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px; font-family:Arial, Helvetica, sans-serif;" valign="top">&nbsp;</td>
                        <td style="text-align:left; color:#2d2d2d; font-size:13px; font-family:Arial, Helvetica, sans-serif;">&nbsp;</td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td style="text-align:center; padding:10px 0 10px 0; background:#fde6d2; color:#2d2d2d; font-size:11px; font-family:Arial, Helvetica, sans-serif; text-transform:uppercase; ">&copy; 2002 - 2021 Dotsquares Ltd. All rights reserved.</td>
        </tr>
    </tbody>
</table>';
    $headers = 'From: admin@dotsqaures.com'       . "\r\n" .
                 'Reply-To: admin@example.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>


