<?php

return [
    Symfony\Bundle\FrameworkBundle\FrameworkBundle::class                => ['all' => true],
    Symfony\WebpackEncoreBundle\WebpackEncoreBundle::class               => ['all' => true],
    Symfony\Bundle\TwigBundle\TwigBundle::class                          => ['all' => true],
    Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle::class => ['all' => true],
    Symfony\Bundle\WebProfilerBundle\WebProfilerBundle::class            => ['dev' => true, 'test' => true],
    Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle::class            => ['all' => true],
    FOS\RestBundle\FOSRestBundle::class                                  => ['all' => true],
    JMS\SerializerBundle\JMSSerializerBundle::class                      => ['all' => true],
];
