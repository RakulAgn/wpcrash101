class Sample {
  constructor() {}

  twoSum(nums, target) {
    let hashMap = {};

    for (let index = 0; index < nums.length; index++) {
      const value = nums[index];
      const difference = target - value;

      if (difference in hashMap) {
        return [hashMap[difference], index];
      } else {
        hashMap[value] = index;
      }
    }

    return [];
  }
}

const dsaConcept = new Sample();
export default dsaConcept;
