<?php declare(strict_types=1);

namespace App\Portfolio\Controller;

use App\Portfolio\Services\MailerFacade;
use App\Portfolio\ValueObjects\ContactFormData;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Controls endpoints for mailing purposes
 */
class FormSubmitController extends AbstractController
{
    protected MailerFacade $mailer;
    protected ValidatorInterface $validator;

    public function __construct(MailerFacade $mailer, ValidatorInterface $validator)
    {
        $this->mailer = $mailer;
        $this->validator = $validator;
    }

    /**
     * @Route("/api/catch-form", name="api_mailer", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function catchFormSubmission(Request $request): JsonResponse
    {
        $contactData = ContactFormData::fromRequest($request);
        $errors = $this->validator->validate($contactData);

        // return errors on non-valid data
        if (count($errors) > 0) {
            return $this->json(['error' => true, 'errors' => $errors], Response::HTTP_BAD_REQUEST);
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

        return $this->json(['formData' => $contactData], Response::HTTP_OK);
    }
}
