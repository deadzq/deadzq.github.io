### 欢迎你来到我的博客~  [工具网站](https://deadzq.github.io/tools.html)

- 昨天将慕课大学的java进阶的题做了一下，很有收获！明天用HashMap容器重做一下。
- 今天将Set,Map接口及其实现类掌握一下。
- 集合类型Collection


iterator迭代器
Iterator it = list.iterator();//此时it就是集合或数组list的迭代器对象.

Set接口:
方法:
add(Object o) //往集合中添加元素
remove(Object o) //移除集合中指定元素
clear() //清空集合
size()  //获取集合中元素的个数(长度)
Set集合没有通过下标获取元素的方法.所以Set集合不能通过for循环遍历,但可以通过for each循环遍历.
List集合和Set集合的区别?
List集合元素有序,可以重复. 有序是指元素存入的顺序和元素输出的顺序一致.
Set集合 元素无序,不能重复.
<pre>
    Iterator it = list.iterator();
    while(it.hasNext()){
        System.out.println(it.next());
    }
</pre>



####泛型
参数化类型(让集合中只能添加某一种类型的元素)
定义集合的时候可以添加泛型,添加的元素必须和泛型指定的类型相匹配.
```
Set<Students> c1 = new HashSet<Students>();
```
只要是集合,都可以加泛型.
集合加完泛型之后,for each也可以换成泛型指定的.



