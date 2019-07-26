<?php declare(strict_types=1);

namespace App\Controller;

use App\ValueObjects\ContactFormData;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\View;
use JMS\Serializer\SerializerInterface;
use Swift_Mailer;
use Swift_Message;
use Symfony\Component\HttpFoundation\Request;

/**
 * Controls endpoints for mailing purposes
 *
 * @package App\Controller
 */
class MailerController extends AbstractFOSRestController
{
    /**
     * @Rest\View()
     * @Rest\Post("/api/catch-form", name="api_mailer")
     * @param Request             $request
     * @param SerializerInterface $serializer
     * @param Swift_Mailer        $mailer
     * @return View
     */
    public function catchFormSubmission(Request $request, SerializerInterface $serializer, Swift_Mailer $mailer): View
    {
        $data = $request->request->all();
        $object = $serializer->deserialize(
            json_encode($data),
            ContactFormData::class,
            'json'
        );

        $message = (new Swift_Message('Hello Email'))
            ->setFrom('dev@archi-tektur.pl')
            ->setTo('kontakt@archi-tektur.pl')
            ->setBody(
                'TEST KURDE',
                'text/plain'
            );

        $mailer->send($message);

        // do sth

        return new View($data);
    }
}