class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]) {
    this.items = items;
  }
 
  updateQuality() {
    this.items.forEach(item => {
      switch (item.name) {
        case 'Aged Brie':
          this.updateBrie(item);
          return;
        case 'Sulfuras, Hand of Ragnaros':
          return;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstage(item);
          return;
        default:
          this.updateNormal(item);
          return;
      }
    });

    return this.items;
  }

  updateNormal(item) {
    item.sellIn--;
    if (item.quality === 0) return;
  
    item.quality--;
    if (item.sellIn < 0) {
      item.quality--;
    }
  }

  updateBrie(item) {
    item.sellIn--;
    if (item.quality >= 50) return;
  
    item.quality++;
    if (item.sellIn < 0) {
      item.quality++;
    }
  }

  updateBackstage(item) {
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