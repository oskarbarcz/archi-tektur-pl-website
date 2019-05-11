<?php declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * DefaultController
 *
 * @package Controller
 */
class DefaultController extends AbstractController
{
    /**
     * Prints main HTML portfolio page
     *
     * @Route("/", name="main")
     */
    public function index(): Response
    {
        return $this->render('portfolio.html.twig');
    }
}
