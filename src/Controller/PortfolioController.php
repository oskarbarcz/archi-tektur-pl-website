<?php declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * PortfolioController
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
     */
    public function portfolio(): Response
    {
        return $this->render('portfolio.html.twig');
    }

    /**
     * @Route({
     *     "pl": "/blog",
     *     "en": "/blog"
     * }, name="portfolio_blog")
     */
    public function blog(): Response
    {
        return $this->render('blog-soon.html.twig');
    }

    /**
     * @Route({
     *     "pl": "/przetwarzanie-danych-osobowych",
     *     "en": "/gdpr"
     * }, name="portfolio_gdpr")
     */
    public function gdpr(): Response
    {
        return $this->render('subpages/gdpr.html.twig');
    }
}
