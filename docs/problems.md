1.  弹出框三角形的实现

    用 before 和 after 写出两个三角形，一个叠在另外一个上面。

    网上有一种设置 border-width 为 20px（举个例子），width，height 为 0 的div ，把其他 border 的颜色设置为 transparent 即可实现三角形。

2.  Follow Button 样式不生效

    class 选择器的问题，在 Follow Button 最外层的 div 设置一个 class。增加多一层 class 选择即可让样式生效。

3.  图片悬停出现悬浮层

    ```html
     <div class="container">
        <img alt="item" src={src} />
        <div class="info">
          <h3>test content</h3>
        </div>
     </div>
    ```

    ```css
    .container {
      position: relative;
    }  
    .info {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        //-webkit-backface-visibility: hidden;
        //backface-visibility: hidden;
        background-image: linear-gradient(180deg,rgba(0,0,0,.2) 0,transparent 40%,transparent 60%,rgba(0,0,0,.3));
        opacity: 0;
        @include transition(all .15s ease-in-out);
      }

      .container:hover .info {
        opacity: 1;
      }
    ```

    ​

