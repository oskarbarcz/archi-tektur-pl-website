<?php declare(strict_types=1);

namespace App\Portfolio\Controller;

use App\Portfolio\Services\MailerFacade;
use App\Portfolio\ValueObjects\ContactFormData;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\View;
use JMS\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Controls endpoints for mailing purposes
 *
 * @package App\Controller
 */
class FormSubmitController extends AbstractFOSRestController
{
    protected MailerFacade $mailer;
    protected SerializerInterface $serializer;
    protected ValidatorInterface $validator;

    public function __construct(MailerFacade $mailer, SerializerInterface $serializer, ValidatorInterface $validator)
    {
        $this->mailer = $mailer;
        $this->serializer = $serializer;
        $this->validator = $validator;
    }

    /**
     * @Rest\View()
     * @Rest\Post("/api/catch-form", name="api_mailer")
     * @param Request $request
     * @return View
     */
    public function catchFormSubmission(Request $request): View
    {
        // change raw form into ContactFormData
        /** @var ContactFormData $contactData */
        $contactData = $this->serializer->deserialize(
            (string)$request->getContent(),
            ContactFormData::class,
            'json'
        );

        $errors = $this->validator->validate($contactData);

        // return error on non-valid data
        if (count($errors) > 0) {
            return View::create(['error' => true, 'errors' => $errors], Response::HTTP_BAD_REQUEST);
        }

        // send e-mail
        $this->mailer->sendMessage(
            'TEST WIADOMOŚCI',
            'dev@archi-tektur.pl',
            [
                'alleluja669@gmail.com',
                $contactData->getEmail(),
            ],
            sprintf(
                'Wysłałeś do mnie wiadomość o treści: %s. Twoje dane podane w formularzu: %s, %s. Odpiszę jak najszybciej będę mógł.',
                $contactData->getContent(),
                $contactData->getName(),
                $contactData->getEmail()
            ),
            'text/plain'
        );

        return View::create(['formData' => $contactData], Response::HTTP_OK);
    }
}
