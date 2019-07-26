<?php declare(strict_types=1);

namespace App\Controller;

use App\ValueObjects\ContactFormData;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\View;
use JMS\Serializer\SerializerInterface;
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
     * @return View
     */
    public function catchFormSubmission(Request $request, SerializerInterface $serializer): View
    {
        $data = $request->request->all();
        $object = $serializer->deserialize(
            json_encode($data),
            ContactFormData::class,
            'json'
        );

        dd($object);
        return new View($data);
    }
}