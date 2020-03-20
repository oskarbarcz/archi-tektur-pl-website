<?php declare(strict_types=1);

namespace App\Portfolio\Services;

use Swift_Mailer;
use Swift_Message as EmailMessage;

class MailerFacade
{
    private Swift_Mailer $mailer;

    public function __construct(Swift_Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    public function sendMessage(
        string $title,
        string $sender,
        array $to,
        string $content,
        string $contentType
    ): int {
        $message = new EmailMessage($title);

        $message = $message
            ->setFrom($sender)
            ->setTo($to)
            ->setBody($content, $contentType);

        return $this->send($message);
    }

    private function send(EmailMessage $message): int
    {
        return $this->mailer->send($message);
    }
}
