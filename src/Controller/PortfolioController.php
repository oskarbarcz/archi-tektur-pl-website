<?php declare(strict_types=1);

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

/**
 * PortfolioController
 *
 * @package Controller
 */
class PortfolioController extends AbstractController
{
    /**
     * Prints main HTML Portfolio page
     *
     * @Route({
     *     "pl": "/",
     *     "en": "/en"
     * }, name="portfolio_index")
     * @Template()
     */
    public function portfolio(): Response
    {
        return $this->render('portfolio.html.twig');
    }

    /**
     * @Route({
     *     "pl": "/blog",
     *     "en": "/blog"
     * }, name="blog")
     */
    public function furtherBlogLink(): NotFoundHttpException
    {
        $this->createNotFoundException();
    }
}
