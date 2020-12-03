## 动态规划理解

> 动态规划(dynamic programming,DP)是一种将复杂问题分解成更小的子问题来解决的优化技术。

>动态规划解决问题时，要遵循三个重要步骤：
>> 1. 定义子问题；
>> 2. 实现要反复执行来解决子问题的部分（这一步要参考递归的步骤）；
>> 3. 识别并求解出基线条件。

> 动态规划解决的著名问题：
>> * 背包问题；
>> * 最长公共子序列；
>> * 矩阵链相乘；
>> * 硬币找零；
>> * 图的全源最短路径。

> 硬币找零示例：
```
export function minCoinChange(coins, amount) {
  const cache = [];

  const makeChange = (value) => {
    if (!value) {
      return [];
    }
    if (cache[value]) {
      return cache[value];
    }
    let min = [];
    let newMin;
    let newAmount;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = value - coin;
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }
      if (
        newAmount >= 0
        && (newMin.length < min.length - 1 || !min.length)
        && (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        // console.log('new Min ' + min + ' for ' + amount);
      }
    }
    return (cache[value] = min);
  };
  return makeChange(amount);
}
```

