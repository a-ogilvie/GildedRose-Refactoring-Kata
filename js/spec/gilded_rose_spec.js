describe("Gilded Rose", () => {

  describe("Normal Items", () => {
    it("should create a normal item", () => {
      const gildedRose = new Shop([ new Item("normal", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("normal");
    });

    it('should lower the sellIn and quality values by one per day',() => {
      const gildedRose = new Shop([ new Item("normal", 3, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(2);
      expect(items[0].quality).toEqual(2);
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(1);
      expect(items[0].quality).toEqual(1);
    });

    it('should lower the sellIn and quality values by one per day',() => {
      const gildedRose = new Shop([ new Item("normal", 3, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(2);
      expect(items[0].quality).toEqual(2);
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(1);
      expect(items[0].quality).toEqual(1);
    });

    it('should lower the quality twice as fast once sellIn date has passed', () => {
      const gildedRose = new Shop([ new Item("normal", 1, 5) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(4);
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(2);
    });

    it('should never lower the quality below zero', () => {
      const gildedRose = new Shop([ new Item("normal", 10, 1) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(0);
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(8);
      expect(items[0].quality).toEqual(0);
    });
  });

  describe('brie', () => {
    it("should create a brie item", () => {
      const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Aged Brie");
    });

    it('should lower the sellIn and raise the quality values by one per day',() => {
      const gildedRose = new Shop([ new Item("Aged Brie", 3, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(2);
      expect(items[0].quality).toEqual(4);
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(1);
      expect(items[0].quality).toEqual(5);
    });

    it('should never have a quality greater than 50',() => {
      const gildedRose = new Shop([ new Item("Aged Brie", 10, 49) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    });

    it('should double the quality change after the sellIn date is reached',() => {
      const gildedRose = new Shop([ new Item("Aged Brie", 1, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(11);
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(13);
    });
  });

  describe('backstage passes', () => {
    it("should create a backstage pass item", () => {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    });

    it('should lower the sellIn and raise the quality values by one per day',() => {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 50, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(49);
      expect(items[0].quality).toEqual(4);
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(48);
      expect(items[0].quality).toEqual(5);
    });

    it('should raise the quality values by two per day if there are 10 days left',() => {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(10);
      expect(items[0].quality).toEqual(4);
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(6);
    });

    it('should raise the quality values by three per day if there are 5 days left',() => {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 6, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(5);
      expect(items[0].quality).toEqual(5);
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4);
      expect(items[0].quality).toEqual(8);
    });

    it('should drop quality to zero if there are no days left', () => {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(6);
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    });
  });

  describe('sulfuras', () => {
    it('should create a sulfuras item', () => {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
    });

    it('should never change sellIn or quality values', () => {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 3, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(3);
      expect(items[0].quality).toEqual(3);
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(3);
      expect(items[0].quality).toEqual(3);
    });
  });
});
