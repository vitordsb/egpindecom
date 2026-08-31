<?php
// Contact endpoint using PHPMailer + SMTP for shared hosting.
// Ajuste as credenciais e o destinatário abaixo.

$toEmail = 'sac@grupoegp.com.br';
$smtpHost = 'mail.grupoegp.com.br';
$smtpPort = 465;
$smtpUser = 'sac@grupoegp.com.br';
$smtpPass = 'mhprVDe9JGPBLBZ'; // Preencha com a senha da conta de e-mail
$smtpSecure = 'ssl'; // 'ssl' (porta 465) ou 'tls' (porta 587)

$allowedOrigins = ['https://grupoegp.com.br', 'https://www.grupoegp.com.br']; // Altere para seu domínio se quiser restringir.
$logFile = __DIR__ . '/contact.log';

$log = function (string $message) use ($logFile) {
    $line = '[' . date('c') . '] ' . $message . PHP_EOL;
    error_log($line, 3, $logFile);
};

function normalize_subject(string $value): string
{
    $v = strtolower(trim($value));
    $v = str_replace(['-', '_'], ' ', $v);
    $v = preg_replace('/\s+/', ' ', $v);
    return $v;
}

require_once __DIR__ . '/phpmailer/PHPMailer.php';
require_once __DIR__ . '/phpmailer/SMTP.php';
require_once __DIR__ . '/phpmailer/Exception.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowOriginHeader = in_array('*', $allowedOrigins, true) || in_array($origin, $allowedOrigins, true)
  ? ($origin ?: '*')
  : '';

$log('Request start: method=' . ($_SERVER['REQUEST_METHOD'] ?? 'unknown') . ' origin=' . ($origin ?: 'none'));

if ($allowOriginHeader) {
    header("Access-Control-Allow-Origin: {$allowOriginHeader}");
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido.']);
    $log('Blocked non-POST request.');
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input) || empty($input)) {
    $input = $_POST; // fallback para x-www-form-urlencoded
}
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$subject = trim($input['subject'] ?? '');
$message = trim($input['message'] ?? '');

$log('Payload: name=' . $name . ' email=' . $email . ' subject=' . $subject . ' message_len=' . strlen($message));

if (!$name || !$email || !$subject || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Campos obrigatórios ausentes.']);
    $log('Validation failed: missing fields.');
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'E-mail inválido.']);
    $log('Validation failed: invalid email.');
    exit;
}

if ($smtpPass === 'SUA_SENHA_AQUI' || $smtpPass === '') {
    http_response_code(500);
    echo json_encode(['error' => 'Configure a senha SMTP no contact.php.']);
    $log('SMTP password not configured.');
    exit;
}

$subjectKey = normalize_subject($subject);
$destinations = [
    'suporte' => 'claudio@grupoegp.com.br',
    'quero ser um fornecedor' => 'compras@grupoegp.com.br',
    'fornecedor' => 'compras@grupoegp.com.br',
    'comercio exterior' => 'joane@grupoegp.com.br',
    'comercio-exterior' => 'joane@grupoegp.com.br', // segurança extra
    'comercio nacional' => 'nathanna@grupoegp.com.br',
    'comercio-nacional' => 'nathanna@grupoegp.com.br', // segurança extra
];
$friendlyLabels = [
    'suporte' => 'Suporte',
    'quero ser um fornecedor' => 'Quero ser um fornecedor',
    'fornecedor' => 'Quero ser um fornecedor',
    'comercio exterior' => 'Comércio exterior',
    'comercio-exterior' => 'Comércio exterior',
    'comercio nacional' => 'Comércio nacional',
    'comercio-nacional' => 'Comércio nacional',
];

$recipient = $destinations[$subjectKey] ?? $toEmail;
$friendlySubject = $friendlyLabels[$subjectKey] ?? $friendlyLabels[normalize_subject($subject)] ?? $subject;
$mailSubject = 'Contato: ' . $friendlySubject;
$log('Routing: subjectRaw=' . $subject . ' subjectKey=' . $subjectKey . ' recipient=' . $recipient);

$escapedMessage = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));
$mailBodyHtml = '<html><body style="font-family: Arial, sans-serif; background:#f7f7f7; padding:16px;">';
$mailBodyHtml .= '<div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">';
$mailBodyHtml .= '<div style="background:#0d6efd;color:#ffffff;padding:16px 20px;font-size:18px;font-weight:bold;">Novo contato do site</div>';
$mailBodyHtml .= '<div style="padding:20px;">';
$mailBodyHtml .= '<p style="margin:0 0 12px 0;"><strong>Nome:</strong> ' . htmlspecialchars($name, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') . '</p>';
$mailBodyHtml .= '<p style="margin:0 0 12px 0;"><strong>E-mail:</strong> ' . htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') . '</p>';
$mailBodyHtml .= '<p style="margin:0 0 12px 0;"><strong>Assunto:</strong> ' . htmlspecialchars($subject, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') . '</p>';
$mailBodyHtml .= '<div style="margin-top:16px;padding:14px 16px;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:6px;">';
$mailBodyHtml .= '<strong>Mensagem:</strong><br>' . $escapedMessage;
$mailBodyHtml .= '</div>';
$mailBodyHtml .= '</div>';
$mailBodyHtml .= '<div style="background:#0d6efd;color:#ffffff;padding:10px 20px;font-size:12px;">Enviado via formulário do site</div>';
$mailBodyHtml .= '</div>';
$mailBodyHtml .= '</body></html>';

$mailBodyText = "Nome: {$name}\n";
$mailBodyText .= "E-mail: {$email}\n";
$mailBodyText .= "Assunto: {$subject}\n\n";
$mailBodyText .= $message;

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->Port = $smtpPort;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = $smtpSecure; // 'ssl' or 'tls'
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    $mail->SMTPDebug = 2; // 0 to disable debug
    $mail->Debugoutput = function ($str, $level) use ($log) {
        $log('SMTP debug[' . $level . ']: ' . $str);
    };

    $mail->setFrom($smtpUser, 'Contato Site');
    $mail->addAddress($recipient);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = $mailSubject;
    $mail->Body = $mailBodyHtml;
    $mail->AltBody = $mailBodyText;

    $log('Calling PHPMailer SMTP: host=' . $smtpHost . ' port=' . $smtpPort . ' secure=' . $smtpSecure);
    $mail->send();
    $log('Mail sent successfully via SMTP.');
    echo json_encode(['ok' => true]);
} catch (Exception $e) {
    $errorInfo = isset($mail) ? $mail->ErrorInfo : '';
    $log('Mail failed via SMTP. error=' . $errorInfo . ' exception=' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Falha ao enviar o e-mail via SMTP.']);
}
