<?php declare(strict_types=1);

namespace App\Portfolio\Services;

use App\Portfolio\ValueObjects\ContactFormData;
use Symfony\Component\Validator\Exception\ValidatorException;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ContactDataParser
{
    /**
     * @var ValidatorInterface
     */
    protected $validator;

    public function __construct(ValidatorInterface $validator)
    {
        $this->validator = $validator;
    }

    /**
     * @param ContactFormData $contactFormData
     * @return bool
     * @throws ValidatorException
     */
    public function validate(ContactFormData $contactFormData): bool
    {
        $this->validator->validate($contactFormData);
        return true;
    }
}