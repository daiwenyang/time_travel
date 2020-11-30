> 小数转二进制：用 2 乘十进制小数，可以得到积，将积的整数部分取出，再用 2 乘余下的小数部分，又得到一个积，再将积的整数部分取出，如此进行，直到积中的整数部分为零，或者整数部分为1，此时 0 或 1 为二进制的最后一位或者达到所要求的精度为止，然后把取出的整数部分按顺序排列起来，先取的整数作为二进制小数的高位有效位，后取的整数作为低位有效位
```
0.625 * 2 = 1.250  // 取整数 1
0.25  * 2 = 0.50   // 取整数 0
0.5   * 2 = 1	   // 取整数 1 并结束

<!-- 取整顺序，那么十进制小数 0.625 的二进制即为 0.101

如果该十进制值是一个大于 1 的小数，那么整数部分和小数部分分别取二进制再拼接即可

例如，将十进制小数 5.125 转二进制

我们先计算整数 5 的二进制 -->
5 % 2 	// 商  2 余 1
2 % 2 	// 商  1 余 0
1 % 2 	// 商  0 余 1

<!-- 5.125 的二进制为 101.001 -->
``` 
> 原码、反码、补码解析[说明](https://juejin.cn/post/6897949585558208525)

> js中的数字存储[说明](https://juejin.cn/post/6897949585558208525)

> js中位运算以及运用实例[说明](https://juejin.cn/post/6900710763657166855)