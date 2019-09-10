<?php declare(strict_types=1);

namespace App\Portfolio\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * PortfolioController
 *
 * @package Controller
 */
class PortfolioController extends AbstractController
{
    private const GDPR_COOKIE_NAME = 'ACCEPT_GDPR';

    /**
     * Prints main HTML Portfolio page
     *
     * @Route({
     *     "pl": "/",
     *     "en": "/en"
     * }, name="portfolio_index")
     * @param Request $request
     * @return Response
     */
    public function portfolio(Request $request): Response
    {
        return $this->render('@Portfolio/portfolio.html.twig', [
            'isGdprCookie' => (bool)$request->cookies->get(self::GDPR_COOKIE_NAME),
        ]);
    }

    /**
     * @Route({
     *     "pl": "/blog",
     *     "en": "/blog"
     * }, name="blog")
     */
    public function blog(): Response
    {
        return $this->render('@Portfolio/blog-soon.html.twig');
    }

    /**
     * @Route({
     *     "pl": "/przetwarzanie-danych-osobowych",
     *     "en": "/gdpr"
     * }, name="portfolio_gdpr")
     */
    public function gdpr(): Response
    {
        return $this->render('@Portfolio/subpages/gdpr.html.twig');
    }
}
