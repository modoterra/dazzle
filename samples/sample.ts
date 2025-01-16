// Dazzling syntax highlighting.

class Dazzle {
  private sequins: boolean;

  dazzle(sequins: boolean) {
    this.sequins = sequins;
  }

  public bedazzle(sequins = false) {
    return this.sequins || sequins ? "Dazzling!" : "Boring.";
  }
}

const dazzle = new Dazzle();
dazzle.bedazzle(true);
