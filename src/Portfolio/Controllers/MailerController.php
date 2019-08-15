<?php declare(strict_types=1);

namespace App\Portfolio\Controllers;

use App\Portfolio\Services\MailerFacade;
use App\Portfolio\ValueObjects\ContactFormData;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\View;
use JMS\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * Controls endpoints for mailing purposes
 *
 * @package App\Controllers
 */
class MailerController extends AbstractFOSRestController
{
    /**
     * @Rest\View()
     * @Rest\Post("/api/catch-form", name="api_mailer")
     * @param Request             $request
     * @param SerializerInterface $serializer
     * @param MailerFacade        $mailer
     * @return View
     */
    public function catchFormSubmission(Request $request, SerializerInterface $serializer, MailerFacade $mailer): View
    {
        $data = $request->request->all();
        $object = $serializer->deserialize(
            json_encode($data),
            ContactFormData::class,
            'json'
        );

        $mailer->sendMessage(
            'TEST WIADOMOŚCI',
            'dev@archi-tektur.pl',
            ['kontkakt@archi-tektut.pl'],
            'treść wiadomości',
            'text/plain'
        );

        return new View($object);
    }
}
