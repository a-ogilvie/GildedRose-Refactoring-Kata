class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Normal {
  update(item) {
    item.sellIn--;
    if (item.quality === 0) return;
  
    item.quality--;
    if (item.sellIn < 0) {
      item.quality--;
    }
  }
}

class Brie {
  update(item) {
    item.sellIn--;
    if (item.quality >= 50) return;
  
    item.quality++;
    if (item.sellIn < 0) {
      item.quality++;
    }
  }
}

class Sulfuras {
  update(item) {
    // do nothing
  }
}

class Backstage {
  update(item) {
    item.sellIn--;
    if (item.quality >= 50) return;
    
    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }
  
    item.quality++;
    if (item.sellIn < 10) {
      item.quality++;
    }
    if (item.sellIn < 5) {
      item.quality++;
    }
  }
}

class Conjured {
  update(item) {
    item.sellIn--;
    if (item.quality === 0) return;
  
    item.quality -= 2;
    if (item.sellIn < 0) {
      item.quality -= 2;
    }
  }
}

class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  getItemType(item) {
    switch (item.name) {
      case 'Aged Brie':
        return new Brie();
      case 'Sulfuras, Hand of Ragnaros':
        return new Sulfuras();
      case 'Backstage passes to a TAFKAL80ETC concert':
        return new Backstage();
      case 'Conjured':
        return new Conjured();
      default:
        return new Normal();
    }
  }
 
  updateQuality() {
    this.items.forEach(item => {
      this.getItemType(item).update(item);
    });
    return this.items;
  }

}