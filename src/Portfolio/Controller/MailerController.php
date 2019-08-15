<?php declare(strict_types=1);

namespace App\Portfolio\Controller;

use App\Portfolio\Services\MailerFacade;
use App\Portfolio\ValueObjects\ContactFormData;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\View;
use JMS\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Controls endpoints for mailing purposes
 *
 * @package App\Controller
 */
class MailerController extends AbstractFOSRestController
{
    /** @var MailerFacade */
    protected $mailer;

    /** @var SerializerInterface */
    protected $serializer;

    /** @var ValidatorInterface */
    protected $validator;

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
        $data = $request->request->all();

        // change raw form into ContactFormData
        $contactDataFromForm = $this->serializer->deserialize(
            json_encode($data),
            ContactFormData::class,
            'json'
        );

        $errors = $this->validator->validate($contactDataFromForm);

        // return error on non-valid data
        if (count($errors) > 0) {
            return View::create(['error' => true, 'errors' => $errors,], 400);
        }


        /*
            $this->>mailer->sendMessage(
            'TEST WIADOMOŚCI',
            'dev@archi-tektur.pl',
            ['kontkakt@archi-tektut.pl'],
            'treść wiadomości',
            'text/plain'
        );
        */

        return View::create('ok', 200);
    }
}
