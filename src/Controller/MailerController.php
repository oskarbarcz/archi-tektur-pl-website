<?php declare(strict_types=1);

namespace App\Controller;

use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\View;
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
     * @param Request $request
     * @return View
     */
    public function catchFormSubmission(Request $request): View
    {
        $data = $request->request->all();
        return new View($data);
    }
}