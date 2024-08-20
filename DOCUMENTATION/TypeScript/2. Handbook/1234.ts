const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// или, эквивалентно
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// Предикат возможно придется использовать еще раз для более сложных примеров
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === 'sharkey') return false;
  return isFish(pet);
});
