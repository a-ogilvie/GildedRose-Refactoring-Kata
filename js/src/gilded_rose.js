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
          updateBrie(item);
          return;
        case 'Sulfuras, Hand of Ragnaros':
          updateSulfuras(item);
          return;
        case 'Backstage passes to a TAFKAL80ETC concert':
          updateBackstage(item);
          return;
        default:
          updateNormal(item);
          return;
      }
    });

    return this.items;
  }
}

function updateNormal(item) {
  item.sellIn--;
  if (item.quality === 0) return;

  item.quality--;
  if (item.sellIn < 0) {
    item.quality--;
  }
}

function updateBrie(item) {
  item.sellIn--;
  if (item.quality >= 50) return;

  item.quality++;
  if (item.sellIn < 0) {
    item.quality++;
  }
}

function updateSulfuras(item) {

}

function updateBackstage(item) {
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
