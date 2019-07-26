<?php declare(strict_types=1);

namespace App\ValueObjects;

use JMS\Serializer\Annotation as Serializer;

/**
 * Represents form data
 *
 * @package App\ValueObjects
 */
class ContactFormData
{
    /**
     * @Serializer\Type("string")
     * @var string
     */
    private $name;

    /**
     * @Serializer\Type("string")
     * @var string
     */
    private $email;

    /**
     * @Serializer\Type("string")
     * @var string
     */
    private $reason;

    /**
     * @Serializer\Type("string")
     * @var string
     */
    private $content;

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return ContactFormData
     */
    public function setName(string $name): ContactFormData
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     * @return ContactFormData
     */
    public function setEmail(string $email): ContactFormData
    {
        $this->email = $email;
        return $this;
    }

    /**
     * @return string
     */
    public function getReason(): string
    {
        return $this->reason;
    }

    /**
     * @param string $reason
     * @return ContactFormData
     */
    public function setReason(string $reason): ContactFormData
    {
        $this->reason = $reason;
        return $this;
    }

    /**
     * @return string
     */
    public function getContent(): string
    {
        return $this->content;
    }

    /**
     * @param string $content
     * @return ContactFormData
     */
    public function setContent(string $content): ContactFormData
    {
        $this->content = $content;
        return $this;
    }
}
