<?php
$env = parse_ini_file('.env');
$token = $env['TELEGRAM_TOKEN'];
$chat_id = $env['MANAGERS_CHAT_ID'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST['name']));
    $phone = strip_tags(trim($_POST['phone']));

    if (empty($name) || empty($phone)) {
        http_response_code(400);
        exit("Заполните поля");
    }

    $message = "🌐 <b>НОВАЯ ЗАЯВКА С САЙТА</b>\n";
    $message .= "━━━━━━━━━━━━━━━━━━\n";
    $message .= "👤 <b>Имя:</b> {$name}\n";
    $message .= "📞 <b>Тел:</b> <code>{$phone}</code>\n";
    $message .= "📦 <b>Тип:</b> Распродажа Optima\n";
    $message .= "⏰ <b>Время:</b> " . date("d.m.Y H:i");

    $url = "https://api.telegram.org/bot{$token}/sendMessage";
    $data = ['chat_id' => $chat_id, 'parse_mode' => 'html', 'text' => $message];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    $response = curl_exec($ch);
    curl_close($ch);

    if ($response) { echo json_encode(["status" => "success"]); }
    else { http_response_code(500); }
}
?>