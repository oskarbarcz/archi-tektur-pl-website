<?php declare(strict_types=1);

namespace App\Portfolio\Services;

use Swift_Mailer as MailerService;
use Swift_Message as EmailMessage;

class MailerFacade
{
    /** @var MailerService */
    private $mailer;

    public function __construct(MailerService $mailer)
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
