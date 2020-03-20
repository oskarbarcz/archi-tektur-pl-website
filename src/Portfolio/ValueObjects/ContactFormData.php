<?php declare(strict_types=1);

namespace App\Portfolio\ValueObjects;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Represents contact form data sent by frontend side in API
 */
class ContactFormData
{
    /**
     * @Assert\NotNull()
     * @Assert\NotBlank()
     * @Assert\Length(min="3", max="64")
     */
    private ?string $name = null;

    /**
     * @Assert\NotNull()
     * @Assert\NotBlank()
     * @Assert\Email()
     */
    private ?string $email = null;

    /**
     * @Assert\NotNull()
     * @Assert\NotBlank()
     * @Assert\Choice({"webpage", "application", "programming", "other"})
     */
    private ?string $reason = 'other';

    /**
     * @Assert\NotNull()
     * @Assert\Length(min="10", max="10000")
     */
    private ?string $content = null;

    /**
     * Create object from compounding variables
     *
     * @param string $name
     * @param string $email
     * @param string $reason
     * @param string $content
     * @return $this
     */
    public static function fromPartials(string $name, string $email, string $reason, string $content): self
    {
        $obj = new self();
        $obj->setName($name)
            ->setEmail($email)
            ->setReason($reason)
            ->setContent($content);

        return $obj;
    }

    /**
     * Create object from HTTP Request
     *
     * @param Request $request
     * @return ContactFormData
     */
    public static function fromRequest(Request $request): self
    {
        return self::fromPartials(
            $request->get('name'),
            $request->get('email'),
            $request->get('reason'),
            $request->get('content')
        );
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): ContactFormData
    {
        $this->name = $name;
        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): ContactFormData
    {
        $this->email = $email;
        return $this;
    }

    public function getReason(): ?string
    {
        return $this->reason;
    }

    public function setReason(string $reason): ContactFormData
    {
        $this->reason = $reason;
        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): ContactFormData
    {
        $this->content = $content;
        return $this;
    }
}
