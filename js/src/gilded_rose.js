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
    this.itemTypes = {
      'Aged Brie': Brie,
      'Sulfuras, Hand of Ragnaros': Sulfuras,
      'Backstage passes to a TAFKAL80ETC concert': Backstage,
      'Conjured': Conjured,
    }
  }

  getItemType(item) {
    if (this.itemTypes[item.name]) return new this.itemTypes[item.name]();
    else return new Normal();
  }
  
 
  updateQuality() {
    this.items.forEach(item => {
      this.getItemType(item).update(item);
    });
    return this.items;
  }

}