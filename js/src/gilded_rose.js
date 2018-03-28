class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Normal extends Item {
  update() {
    this.sellIn--;
    if (this.quality === 0) return;
  
    this.quality--;
    if (this.sellIn < 0) {
      this.quality--;
    }
  }
}

class Brie extends Item {
  update() {
    this.sellIn--;
    if (this.quality >= 50) return;
  
    this.quality++;
    if (this.sellIn < 0) {
      this.quality++;
    }
  }
}

class Sulfuras extends Item {
  update() {
    // do nothing
  }
}

class Backstage extends Item {
  update() {
    this.sellIn--;
    if (this.quality >= 50) return;
    
    if (this.sellIn < 0) {
      this.quality = 0;
      return;
    }
  
    this.quality++;
    if (this.sellIn < 10) {
      this.quality++;
    }
    if (this.sellIn < 5) {
      this.quality++;
    }
  }
}

class Conjured extends Item {
  update() {
    this.sellIn--;
    if (this.quality === 0) return;
  
    this.quality -= 2;
    if (this.sellIn < 0) {
      this.quality -= 2;
    }
  }
}

class Shop {
  constructor(items=[]) {
    this.items = items;
    this.itemTypes = {
      'Aged Brie': Brie,
      'Sulfuras, Hand of Ragnaros': Sulfuras,
      'Backstage passes to a TAFKAL80ETC concert': Backstage,
      'Conjured': Conjured,
    }
    this.items = this.items.map(item => this.getItemType(item));
  }

  getItemType(item) {
    if (this.itemTypes[item.name]) return new this.itemTypes[item.name](item.name, item.sellIn, item.quality);
    else {
      return new Normal(item.name, item.sellIn, item.quality);
    }
  }
 
  updateQuality() {
    this.items.forEach(item => {
      item.update();
    });
    return this.items;
  }
}