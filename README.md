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
### 泛型
参数化类型(让集合中只能添加某一种类型的元素)
定义集合的时候可以添加泛型,添加的元素必须和泛型指定的类型相匹配.
<pre>

Set<Students> c1 = new HashSet<Students>();

</pre>


只要是集合,都可以加泛型.
集合加完泛型之后,for each也可以换成泛型指定的.

#Map集合
通过键值对的方式存储数据.
键不能重复， 根据键key可以找到值value

### 方法:



put(Object key,Object value)  //就是往map集合中存入键值对



remove(Object key)  //根据key,删除对应的键值对(包括键与值)



size()  //map集合的长度 就是 集合中键值对的个数



get(Object key)   //根据键获取值,如果集合中不存在这个键,那么获取 null

### 怎么遍历Map集合？
- Map集合不存在自己的遍历方式,Map集合要想遍历需要借助Set集合。
- get(Object key)可以通过键获取到值,如果咱们可以获取到所有的键,所有的值都可以通过get方法获取到。
- keySet() 可以将map集合中所有的key拿出来,组成一个新的Set集合,然后将该Set集合返回.


<pre>

Set set = map.keySet(); //set中存储了map集合中所有的key值
for(Object o : set){
    System.out.println("value: "+map.get(o));
}
</pre>


 
###[HashSet为什么不能添加重复元素？](https://www.processon.com/view/link/5b068e01e4b05f5d6b6adac5)


