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
      //if (item.name === 'normal') return;
        // reduce quality for normal items
        if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
              item.quality = item.quality - 1;
            }
          }
        }
        
        // increase quality for special items
        else {
          // the quality cannot be more than 50
          if (item.quality < 50) {
            item.quality = item.quality + 1;
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert')
            // logic to increase quality of backstage pass depending on time remaining
            {
              if (item.sellIn < 11) {
                if (item.quality < 50) {
                  item.quality = item.quality + 1;
                }
              }
              if (item.sellIn < 6) {
                if (item.quality < 50) {
                  item.quality = item.quality + 1;
                }
              }
            }
          }
        }
        
        // decrease sell by date for all items except sulfuras
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          item.sellIn = item.sellIn - 1;
        }
       
        if (item.sellIn < 0) {
          if (item.name != 'Aged Brie') {
            if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
              // decrease quality of regular items
              if (item.quality > 0) {
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                  item.quality = item.quality - 1;
                }
              }
            } 
             // backstage passes 
            else {
              item.quality = item.quality - item.quality;
            }
          } else {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
    });

    return this.items;
  }
}
