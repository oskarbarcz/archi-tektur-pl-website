<?php declare(strict_types=1);

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * PortfolioControllerTest
 *
 * @package App\Tests\Controllers
 */
class PortfolioControllerTest extends WebTestCase
{
    public function testPageResponseCode(): void
    {
        $client = static::createClient();
        $client->request('GET', '/');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }
}