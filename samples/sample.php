<?php

// Dazzling syntax highlighting.

class Dazzle {
  private $sequins;

  function __constructor(bool $sequins) {
    $this->sequins = $sequins;
  }

  public function bedazzle($sequins = false) {
    return $this->sequins || $sequins ? 'Dazzling!' : 'Boring.';
  }
}

$dazzle = new Dazzle();
$dazzle->bedazzle(true);
